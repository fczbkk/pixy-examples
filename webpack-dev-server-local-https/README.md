# Webpack dev server na https

- Spusť `npm run build`. Vygeneruje to zdrojáky projektu do adresára `/build`.
- Potom spusť `npm run dev`. To naštartuje Webpack dev server na [https://localhost:8080/
].
- Ak potrebuješ vygenerovať certifikáty, spusť `npm run generate-certificate`.

Pozor:

- Sú to self-signed certifikáty. Browsery ich pravdepodobne aj tak budú považovať za nebezpečné.
- Chrome v MacOS X Catalina neumožní prejsť užívateľovi na URL s chýbajúcimi alebo nebezpečnými certifikátmi. Ak také URL chceš otvoriť, môžeš Chrome spustiť s parametrom `--ignore-certificate-errors`. Napríklad takto:

```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --ignore-certificate-errors &> /dev/null &
```
