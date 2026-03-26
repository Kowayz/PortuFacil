const CACHE_TTL = 30 * 24 * 3600 * 1000; // 30 jours

// Strips Portuguese article so "a cabeça" → "cabeça"
function stripArticle(raw) {
  return raw.replace(/^(o|a|os|as|um|uma)\s+/i, '').trim();
}

// Cleans wikitext markup from a string
function cleanWiki(str) {
  return str
    .replace(/\[\[(?:[^\]|]+\|)?([^\]]+)\]\]/g, '$1') // [[word|display]] → display
    .replace(/\{\{(?!pron)[^}]+\}\}/g, '')              // {{tags}} → ''
    .replace(/'{2,3}/g, '')                             // ''italic'' / '''bold'''
    .replace(/<[^>]+>/g, '')                            // HTML tags
    .replace(/\s+/g, ' ')
    .trim();
}

function parseWikitext(wikitext, rawWord) {
  // Extract the Portuguese section only
  const ptMatch = wikitext.match(
    /== \{\{langue\|pt\}\} ==([\s\S]*?)(?=\n== \{\{langue\||$)/
  );
  const section = ptMatch ? ptMatch[1] : '';

  if (!section) return null;

  // IPA — {{pron|ˈka.zɑ|pt}} (Lisbonne)
  const ipaEntries = [];
  for (const m of section.matchAll(/\{\{pron\|([^|{}]+)\|pt\}\}\s*(?:\(([^)]+)\))?/g)) {
    ipaEntries.push({ ipa: m[1].trim(), region: m[2]?.trim() || null });
  }

  // Part of speech — first {{S|nom|pt}}, {{S|verbe|pt}}, etc.
  const posMap = {
    nom: 'nom', verbe: 'verbe', adjectif: 'adjectif', adverbe: 'adverbe',
    pronom: 'pronom', préposition: 'préposition', interjection: 'interjection',
  };
  const posRaw = section.match(/\{\{S\|([^|{}]+)\|pt/)?.[1] ?? '';
  const pos = posMap[posRaw] || posRaw || null;

  // Definitions — lines starting with # but not #* or #:
  const definitions = [];
  for (const m of section.matchAll(/^# (?![*:]|\{\{)(.+)$/gm)) {
    const cleaned = cleanWiki(m[1]);
    if (cleaned) definitions.push(cleaned);
  }

  // Examples — {{exemple|texte pt|lang=pt|sens=traduction fr|...}}
  const examples = [];
  for (const m of section.matchAll(/\{\{exemple\|([^|{}]+)\|lang=pt\|sens=([^|{}]+)/g)) {
    examples.push({ pt: m[1].trim(), fr: m[2].trim() });
    if (examples.length >= 3) break;
  }

  // Etymology — line after {{S|étymologie|pt}} header
  const etymMatch = section.match(/\{\{S\|étymologie\|pt[^}]*\}\}[\s\S]*?\n:(.+)/);
  const etymology = etymMatch ? cleanWiki(etymMatch[1]) : null;

  const word = stripArticle(rawWord);
  return { word, ipa: ipaEntries, pos, definitions, examples, etymology };
}

export async function lookupWord(rawWord) {
  const word = stripArticle(rawWord);
  if (!word) return null;

  const cacheKey = `portufacil_dict_${word.toLowerCase()}`;

  // Check cache
  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const { data, ts } = JSON.parse(cached);
      if (Date.now() - ts < CACHE_TTL) return data;
    }
  } catch { /* ignore */ }

  // Fetch from fr.wiktionary
  const url = `https://fr.wiktionary.org/w/api.php?action=parse&page=${encodeURIComponent(word)}&prop=wikitext&format=json&origin=*`;
  const res = await fetch(url);
  if (!res.ok) return null;

  const json = await res.json();
  const wikitext = json?.parse?.wikitext?.['*'];
  if (!wikitext) return null;

  const data = parseWikitext(wikitext, rawWord);

  // Save to cache
  try {
    localStorage.setItem(cacheKey, JSON.stringify({ data, ts: Date.now() }));
  } catch { /* quota full */ }

  return data;
}
