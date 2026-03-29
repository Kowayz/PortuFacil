const fs = require('fs');
const https = require('https');

async function translateText(text) {
  return new Promise((resolve, reject) => {
    https.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=pt&tl=fr&dt=t&q=${encodeURIComponent(text)}`, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data)[0][0][0]);
        } catch(e) { resolve(null); }
      });
    }).on('error', e => resolve(null));
  });
}

async function run() {
  const file = 'src/data/lessons.js';
  let content = fs.readFileSync(file, 'utf8');
  
  // Find all "example": "something"
  const regex = /"example":\s*"([^"]+)"/g;
  let matches = [...content.matchAll(regex)];
  let uniqueMatches = [];
  let seen = new Set();
  for (let m of matches) {
      if (!seen.has(m[1])) {
          seen.add(m[1]);
          uniqueMatches.push(m);
      }
  }

  console.log(`Found ${matches.length} matches, ${uniqueMatches.length} unique.`);
  let count = 0;
  
  for (let m of uniqueMatches) {
    let cleanText = m[1].replace(/ \(PT-PT\)$| \(PT\)$| \(BR\)$/, '');
    cleanText = cleanText.split(' / ')[0]; // Take only the first part if it's PT / BR
    let fr = await translateText(cleanText);
    
    if (fr) {
       let escapedFr = fr.replace(/"/g, '\\"');
       // We replace ALL instances of this exact "example" string
       let searchStr = `"example": "${m[1]}"`;
       if (content.includes(searchStr)) {
           // check if we already have exampleFr right after
           const idx = content.indexOf(searchStr);
           const nextText = content.substr(idx, 100);
           if (!nextText.includes('"exampleFr"')) {
               let replacement = `"example": "${m[1]}",\n            "exampleFr": "${escapedFr}"`;
               content = content.replaceAll(searchStr, replacement);
               count++;
               if (count % 20 === 0) console.log(`Translated ${count}...`);
           }
       }
    }
    await new Promise(r => setTimeout(r, 50));
  }
  
  fs.writeFileSync(file, content);
  console.log(`Successfully added ${count} translations to lessons.js!`);
}
run();
