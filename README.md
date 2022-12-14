# monomongts

Dette er et forsøk på å få samlet alle javascript-prosjektene våre i ett monorepo. Foreløpig er det kun et polyrepo (de ulike prosjektene har ingenting felles)

## Hvordan ble de fire prosjektene samlet?

1. Initiere `monorepo`

```bash
# Initiere monorepo
mkdir monomongts
cd monomongts
git init .
git commit --allow-empty -m "Init (empty) commit"
cd ..
```

2. Gjøre `qmongjs` klar for å legges inn i monorepo

```bash
git clone git@github.com:mong/qmongjs
cd qmongjs
# Lager egen branch, for å kunne legge inn oppdateringer senere
# De neste stegene er allerede dyttet opp til de fire repositories
git checkout -b monorepo
mkdir -p apps/qmongjs
# Flytter (git mv) alt i repo opp til apps/qmongjs-mappen, slik at alt
# alt innhold fra de ulike repositories legges i ulike mapper
git ls-tree -z --name-only HEAD | xargs -0 -I {} git mv {} apps/qmongjs
git add . && git commit -m "prep for monorepo"
git push -u origin monorepo
cd ..
```

3. Legge inn `qmongjs` til `monorepo`

```bash
cd monomongts
git remote add --fetch --no-tags qmongjs ../qmongjs
git merge qmongjs/monorepo
```

4. Gjenta steg 2 og 3 for de andre tre repositories (`mong-api`, `mongts` og `hamongts`).

### Oppdatere monorepo med endringer i original-repos

Endringer som gjøres i de ulike repositories, før `monomongts` er i produksjon, kan enkelt legges inn på følgende måte

```bash
cd ../qmongjs
git checkout monorepo
git fetch origin main
git merge main # forhåpentligvis ingen vanskelige konflikter
cd ../monomongts
git fetch qmongjs
git merge qmongjs/monorepo # forhåpentligvis ingen vanskelige konflikter
```

Hvis det er opprettet nye filer vil disse dukke opp som konflikter, men enkelt å fikse med `git add . && git commit` (`git` vil foreslå å legge disse i riktig mappe under `apps/qmongjs`).
