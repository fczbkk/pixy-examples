# Webpack standalone library

Po spustení `npm run build` Webpack do adresára `./build` vygeneruje projekt ako JS knižnicu. Použije na to UMD pattern, takže túto knižnicu bude možné naimportovať:

```javascript
import someLibrary from './build/index.js'
someLibrary()
```

...alebo použiť ako globálnu premennú:

```javascript
window.someLibrary.default()
```

Ak chceš vyrobiť novú verziu knižnice, použij príkaz `npm version [versionname]`. Napríklad:

```
npm version patch
// 1.0.0 -> 1.0.1

npm version minor
// 1.0.0 -> 1.1.0

npm version major
// 1.0.0 -> 2.0.0
```
