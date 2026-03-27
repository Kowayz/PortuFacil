# Spec 06 — Expansion de la conjugaison (20 verbes essentiels)

## Priorité : HAUTE

## Contexte

`src/data/conjugation.js` contient des tables de conjugaison pour les terminaisons régulières
(-ar, -er, -ir) et quelques irréguliers, mais la page de conjugaison permet de rechercher des
verbes spécifiques. Il faut ajouter 20 verbes concrets et fréquents dans un tableau `verbs`
exporté, utilisé par `src/pages/conjugation.js` pour la recherche.

## Travail à faire

### 1. Vérifier la structure actuelle de `src/pages/conjugation.js`

Lire le fichier pour comprendre comment `searchVerb()` fonctionne et quel format
de données il attend.

### 2. Ajouter un tableau `verbs` dans `src/data/conjugation.js`

Structure de chaque verbe :
```js
{
  infinitive: 'falar',
  translation: 'parler',
  type: 'regular-ar',   // 'regular-ar' | 'regular-er' | 'regular-ir' | 'irregular'
  presente: { eu, tu, 'ele/ela', nós, vós, 'eles/elas' },
  preteritoPerfeito: { eu, tu, 'ele/ela', nós, vós, 'eles/elas' },
  preteritoImperfeito: { eu, tu, 'ele/ela', nós, vós, 'eles/elas' },
  futuro: { eu, tu, 'ele/ela', nós, vós, 'eles/elas' },
}
```

### 3. Les 20 verbes à ajouter (avec formes correctes)

**Verbes réguliers -AR :**
1. **falar** (parler) — eu falo/falei/falava/falarei, tu falas/falaste/falavas/falarás...
2. **trabalhar** (travailler) — eu trabalho/trabalhei/trabalhava/trabalharei...
3. **morar** (habiter) — eu moro/morei/morava/morarei...
4. **gostar** (aimer/apprécier) — eu gosto/gostei/gostava/gostarei...
5. **estudar** (étudier) — eu estudo/estudei/estudava/estudarei...
6. **comprar** (acheter) — eu compro/comprei/comprava/comprarei...
7. **precisar** (avoir besoin) — eu preciso/precisei/precisava/precisarei...

**Verbes réguliers -ER :**
8. **comer** (manger) — eu como/comi/comia/comerei...
9. **beber** (boire) — eu bebo/bebi/bebia/beberei...
10. **vender** (vendre) — eu vendo/vendi/vendia/venderei...

**Verbes réguliers -IR :**
11. **abrir** (ouvrir) — eu abro/abri/abria/abrirei...
12. **partir** (partir) — eu parto/parti/partia/partirei...
13. **assistir** (regarder/assister) — eu assisto/assisti/assistia/assistirei...

**Verbes irréguliers essentiels :**
14. **ser** (être, permanent) — eu sou/fui/era/serei, tu és/foste/eras/serás, ele é/foi/era/será, nós somos/fomos/éramos/seremos, vós sois/fostes/éreis/sereis, eles são/foram/eram/serão
15. **estar** (être, temporaire) — eu estou/estive/estava/estarei, tu estás/estiveste/estavas/estarás, ele está/esteve/estava/estará, nós estamos/estivemos/estávamos/estaremos, vós estais/estivestes/estáveis/estareis, eles estão/estiveram/estavam/estarão
16. **ter** (avoir) — eu tenho/tive/tinha/terei, tu tens/tiveste/tinhas/terás, ele tem/teve/tinha/terá, nós temos/tivemos/tínhamos/teremos, vós tendes/tivestes/tínheis/tereis, eles têm/tiveram/tinham/terão
17. **ir** (aller) — eu vou/fui/ia/irei, tu vais/foste/ias/irás, ele vai/foi/ia/irá, nós vamos/fomos/íamos/iremos, vós ides/fostes/íeis/ireis, eles vão/foram/iam/irão
18. **fazer** (faire) — eu faço/fiz/fazia/farei, tu fazes/fizeste/fazias/farás, ele faz/fez/fazia/fará, nós fazemos/fizemos/fazíamos/faremos, vós fazeis/fizestes/fazíeis/fareis, eles fazem/fizeram/faziam/farão
19. **poder** (pouvoir) — eu posso/pude/podia/poderei, tu podes/pudeste/podias/poderás, ele pode/pôde/podia/poderá, nós podemos/pudemos/podíamos/poderemos, vós podeis/pudestes/podíeis/podereis, eles podem/puderam/podiam/poderão
20. **querer** (vouloir) — eu quero/quis/queria/quererei, tu queres/quiseste/querias/quererás, ele quer/quis/queria/quererá, nós queremos/quisemos/queríamos/quereremos, vós quereis/quisestes/queríeis/querereis, eles querem/quiseram/queriam/quererão

### 4. Mettre à jour `src/pages/conjugation.js` — `searchVerb()`

Si `searchVerb()` ne cherche pas encore dans le tableau `verbs`, l'adapter pour :
1. Chercher dans `DATA.conjugation.verbs` (ou l'équivalent exporté)
2. Afficher les 4 temps du verbe trouvé dans la page
3. Si aucun verbe exact trouvé, afficher les tables de régularité correspondantes (-ar/-er/-ir)

### 5. S'assurer que `src/data/index.js` exporte bien `conjugation.verbs`

Vérifier que `DATA.conjugation` inclut le nouveau tableau `verbs`.

## Acceptance Criteria

- [ ] `src/data/conjugation.js` contient un tableau `verbs` avec 20 entrées
- [ ] Chaque verbe a `infinitive`, `translation`, `type`, et les 4 temps (presente, preteritoPerfeito, preteritoImperfeito, futuro)
- [ ] Rechercher "ser" dans la page conjugaison affiche les conjugaisons correctes
- [ ] Rechercher "falar" affiche les conjugaisons correctes
- [ ] `npm run build` passe sans erreur

**Output quand terminé :** `<promise>DONE</promise>`
