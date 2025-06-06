# Playwright-perusteet

Tämä on minikurssi Playwright-työkalun opiskelua varten. 

# Tarvittavat työkalut

Asenna seuraavat työkalut tässä järjestyksessä:
- [Node](https://nodejs.org/en/download/current) ja sen mukana [npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)
- [Playwright](https://playwright.dev/docs/intro)
- [Visual Studio Code](https://code.visualstudio.com/) ja sen [Playwright Test for VSCode -plugin](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

# Suositeltu oppimispolku
1. Asenna työkalut.
2. Aja komentoriviltä [esimerkkitestit](https://playwright.dev/docs/intro#running-the-example-test), jotka tulivat Playwrightin asennuksen mukana.
3. Tutustu [peruskonfiguraatioon](https://playwright.dev/docs/test-configuration).
4. Tutustu Playwright.config -oletusasetustiedoston [use-vaihtoehtoihin](https://playwright.dev/docs/test-use-options).
5. Tutustu testien [hierarkiaan](https://learn.microsoft.com/en-us/training/modules/build-with-playwright/5-understand-test-specification) ja [Arrange-Act-Assert -malliin](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/).
6. Tutustu [fixtuureihin](https://playwright.dev/docs/test-fixtures), [lokaattoreihin](https://playwright.dev/docs/locators) ja [assertioihin](https://playwright.dev/docs/test-assertions).
7. Opettele ajamaan ja debuggaamaan testejä [Visual Studio Coden Playwright-pluginin avulla](https://playwright.dev/docs/getting-started-vscode) selaimessa sekä ilman selainikkunaa.

# Hyödyllisiä komentoja

| Komento | Mitä tekee |
|:--------|:-----------|
| npx playwright test | aja kaikki testit |
| npx playwright test --project chromium | aja testit Chromium-selaimessa |
| npx playwright show-report | avaa testiraportin selaimeen |
| npx playwright test --ui | aja testit graafisen ui:n kautta |
| npx playwright test --headed | aja testit selainikkunassa |
| npx playwright test minun_testit.spec.ts | aja yksittäinen testikokoelma (tiedosto) |
| npx playwright test -g "minun testikeissi" | aja yksittäinen testi |
| npx playwright test --last-failed | aja kaikki edellisessä ajossa epäonnistuneet testit |
| npx playwright test --debug | debuggaa testit Playwright Inspectorissa |
| npx playwright test minun_testit.spec.ts --debug | debuggaa yksittäinen testikokoelma |
| npx playwright test minun_testit.spec.ts:10 --debug | debuggaa yksittäinen testi joka alkaa riviltä 10 |

# Hyödylliset linkit
- [Playwrightin virallinen dokumentaatio sekä asennusohjeet](https://playwright.dev/docs/intro), joita noudattamalla saat asennettua Playwrightin koneellesi.
- [Microsoftin Playwright-tutoriaali](https://learn.microsoft.com/en-us/training/modules/build-with-playwright/), jonka avulla opit käyttämään Playwrightia esimerkkiverkkosovelluksen testaamiseen. Opit suorittamaan testejä, tarkastelemaan testiraportteja ja ymmärtämään Playwright-projektin rakenteen. Opit myös käyttämään Visual Studio -editoria testien kirjoittamiseen ja suorittamiseen sekä testien virheenkorjaukseen.
- Helsingin yliopiston Full Stack Open -kurssin [Playwright-osio e2e testauksesta](https://fullstackopen.com/osa5/end_to_end_testaus_playwright)
- [Arrange-Act-Assert -malli](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/)
- [Playwright YouTube-kanava](https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg)
