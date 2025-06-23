# Playwright-perusteet

Tämä on minikurssi Playwright-työkalun opiskelua varten. 

# Suositeltu oppimispolku
- [x] Tee opiskelua varten koneellesi testikansio, esimerkiksi "pw_perusteet".
- [x] Asenna ensimmäiseksi seuraavat työkalut tässä järjestyksessä:
  - [Node](https://nodejs.org/en/download/current) ja sen mukana [npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)
  - [Playwright](https://playwright.dev/docs/intro), asenna luomaasi testikansioon
  - [Visual Studio Code](https://code.visualstudio.com/) ja sen [Playwright Test for VSCode -plugin](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).
- [x] Aja komentoriviltä [esimerkkitestit](https://playwright.dev/docs/intro#running-the-example-test), jotka tulivat Playwrightin asennuksen mukana.
- [x] Katso [videotutoriaali ui-modesta](https://www.youtube.com/watch?v=d0u6XhXknzU&t=367s) ja opettele ajamaan esimerkkitestit [Visual Studio Coden Playwright-pluginin avulla](https://playwright.dev/docs/getting-started-vscode) ilman selainikkunaa (headless) ja selaimessa (headed).
- [x] Tutustu [Codegeniin ja testien generointiin](https://playwright.dev/docs/codegen-intro).
- [x] Tutustu [peruskonfiguraatioon](https://playwright.dev/docs/test-configuration).
- [x] Tutustu Playwright.config -oletusasetustiedoston [use-vaihtoehtoihin](https://playwright.dev/docs/test-use-options).
- [x] Tutustu testien [hierarkiaan](https://learn.microsoft.com/en-us/training/modules/build-with-playwright/5-understand-test-specification) ja [Arrange-Act-Assert -malliin](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/).
- [x] Tutustu [fixtuureihin](https://playwright.dev/docs/test-fixtures), [lokaattoreihin](https://playwright.dev/docs/locators) ja [assertioihin](https://playwright.dev/docs/test-assertions).
- [x] Tutustu [parhaisiin testikäytäntöihin](https://playwright.dev/docs/best-practices).
- [x] Tutustu [autentikointiin](https://playwright.dev/docs/auth).
- [x] Hyödynnä autentikointia ja tee harjoituksen vuoksi sisäänkirjautuminen-testi [Heia Heia -sovellukselle](https://www.heiaheia.com/fi/).

# Hyödylliset linkit

- [Playwrightin virallinen dokumentaatio sekä asennusohjeet](https://playwright.dev/docs/intro), joita noudattamalla saat asennettua Playwrightin koneellesi.
- [Playwrightin komentorivikomentoja](https://playwright.dev/docs/test-cli), joiden avulla voit ajaa testejä eri tavoin.
- [Microsoftin Playwright-tutoriaali](https://learn.microsoft.com/en-us/training/modules/build-with-playwright/), jonka avulla opit käyttämään Playwrightia esimerkkiverkkosovelluksen testaamiseen. Opit suorittamaan testejä, tarkastelemaan testiraportteja ja ymmärtämään Playwright-projektin rakenteen. Opit myös käyttämään Visual Studio -editoria testien kirjoittamiseen ja suorittamiseen sekä testien virheenkorjaukseen.
- Helsingin yliopiston Full Stack Open -kurssin [Playwright-osio e2e testauksesta](https://fullstackopen.com/osa5/end_to_end_testaus_playwright).
- [Arrange-Act-Assert -malli](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/), jota hyödyntämällä saat testeistä luettavia.
- [Playwright YouTube-kanava](https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg), sisältää mm. hyviä videotutoriaaleja.
- [dotenv](https://github.com/motdotla/dotenv)-kirjasto, jolla voi ladata ympäristömuuttujia .env-tiedostosta testien käyttöön.

# Esimerkkitestit

Tämän repositorion tests-kansiossa smoke.spec.ts-tiedostossa on kaksi esimerkkitestiä, jotka testaavat HeiaHeiaa. 

Testit alustetaan auth.spec.ts-tiedostossa olevan setupin avulla, joka lataa env-tiedostosta rekisteröityneen HeiaHeia-käyttäjän sähköpostin ja salasanan, kirjautuu niillä sisään HeiaHeiaan, ja tallentaa sisäänkirjautumisen myöhempää käyttöä varten user.json-tiedostoon. Saat ajettua testit noudattamalla alla olevia askeleita.

- Asenna Git ja ota kopio tästä repositoriosta. Asenna sitten Node, ja sen jälkeen Playwright ja dotenv:
```
npm init playwright@latest
npm install dotenv --save
```

- Luo [HeiaHeia](https://www.heiaheia.com/fi/)-tunnukset. Lisää tunnukset koneellesi .env -tiedostoon projektiin juureen test_email ja test_password -muuttujiin:
```
TEST_EMAIL=<sinun email>
TEST_PASSWORD=<sinun salasana>
```

- Aja esimerkkitestit:

```
npx playwright test
```