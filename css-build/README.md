# CSS

- Ak spustíš `npm run styles-vendor`, NPM vezme všetky `.css` súbory z adresára `./css/vendor`, spojí ich a uloží do `./build/vendor.css`.
- Ak spustíš `npm run styles-custom`, NPM vezme všetky `.scss` súbory z adresára `./css/custom`, transpiluje ich, následne ich spojí a uloží do `./build/style.css`.
- Na tieto úlohy je Webpack nepotrebný a nevhodný.
