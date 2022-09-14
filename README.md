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
# Flytter alt i repo over til apps/qmongjs-mappen, slik at alt legges der
# det skal ved merge. Det finnes en penere måte, men fant den ikke i farten
ls -a1 | grep -v ^apps | xargs -I{} git mv {} apps/qmongjs
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
