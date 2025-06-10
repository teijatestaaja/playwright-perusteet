# Playwright-perusteet

Tämä on minikurssi Playwright-työkalun opiskelua varten. 

# Suositeltu oppimispolku
- [x] Tee opiskelua varten koneellesi testikansio, esimerkiksi "pw_perusteet".
- [x] Asenna ensimmäiseksi seuraavat työkalut tässä järjestyksessä:
  - [Node](https://nodejs.org/en/download/current) ja sen mukana [npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)
  - [Playwright](https://playwright.dev/docs/intro), asenna luomaasi testikansioon.
  - [Visual Studio Code](https://code.visualstudio.com/) ja sen [Playwright Test for VSCode -plugin](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- [x] Aja komentoriviltä [esimerkkitestit](https://playwright.dev/docs/intro#running-the-example-test), jotka tulivat Playwrightin asennuksen mukana.
- [x] Katso [videotutoriaali ui-modesta](https://www.youtube.com/watch?v=d0u6XhXknzU&t=367s) ja opettele ajamaan esimerkkitestit [Visual Studio Coden Playwright-pluginin avulla](https://playwright.dev/docs/getting-started-vscode) ilman selainikkunaa (headless) ja selaimessa (headed).
- [x] Tutustu [Codegeniin ja testien generointiin](https://playwright.dev/docs/codegen-intro)
- [ ] Tutustu [peruskonfiguraatioon](https://playwright.dev/docs/test-configuration).
- [ ] Tutustu Playwright.config -oletusasetustiedoston [use-vaihtoehtoihin](https://playwright.dev/docs/test-use-options).
- [ ] Tutustu testien [hierarkiaan](https://learn.microsoft.com/en-us/training/modules/build-with-playwright/5-understand-test-specification) ja [Arrange-Act-Assert -malliin](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/).
- [ ] Tutustu [fixtuureihin](https://playwright.dev/docs/test-fixtures), [lokaattoreihin](https://playwright.dev/docs/locators) ja [assertioihin](https://playwright.dev/docs/test-assertions).
- [ ] Tutustu [parhaisiin testikäyntäntöihin](https://playwright.dev/docs/best-practices)
- [ ] Tee harjoituksen vuoksi pari testiä [Todo App](todomvc.com/examples/react/dist/) -sovellukselle.

# Hyödyllisiä komentoja

| Komento | Mitä tekee |
|:--------|:-----------|
| npx playwright test | aja kaikki testit |
| npx playwright test --project chromium --headed | aja testit Chromium-selaimessa |
| npx playwright show-report | avaa testiraportin selaimeen |
| npx playwright test --ui | aja testit graafisen ui:n kautta |
| npx playwright test --headed | aja testit selainikkunassa |
| npx playwright test minun_testit.spec.ts | aja yksittäinen testikokoelma (tiedosto) |
| npx playwright test -g "minun testikeissi" | aja yksittäinen testi |
| npx playwright test --grep @smoke | aja vain smoke-tagitetyt testit |
| npx playwright test --last-failed | aja kaikki edellisessä ajossa epäonnistuneet testit |
| npx playwright test --debug | debuggaa testit Playwright Inspectorissa |
| npx playwright test minun_testit.spec.ts --debug | debuggaa yksittäinen testikokoelma |
| npx playwright test minun_testit.spec.ts:10 --debug | debuggaa yksittäinen testi joka alkaa riviltä 10 |
| npx playwright --version | tarkasta onko Playwright asennettu ja jos on, näyttää sen version |

Katso muita [komentoja Playwrightin sivuilta](https://playwright.dev/docs/test-cli).

# Hyödylliset linkit
- [Playwrightin virallinen dokumentaatio sekä asennusohjeet](https://playwright.dev/docs/intro), joita noudattamalla saat asennettua Playwrightin koneellesi.
- [Microsoftin Playwright-tutoriaali](https://learn.microsoft.com/en-us/training/modules/build-with-playwright/), jonka avulla opit käyttämään Playwrightia esimerkkiverkkosovelluksen testaamiseen. Opit suorittamaan testejä, tarkastelemaan testiraportteja ja ymmärtämään Playwright-projektin rakenteen. Opit myös käyttämään Visual Studio -editoria testien kirjoittamiseen ja suorittamiseen sekä testien virheenkorjaukseen.
- Helsingin yliopiston Full Stack Open -kurssin [Playwright-osio e2e testauksesta](https://fullstackopen.com/osa5/end_to_end_testaus_playwright)
- [Arrange-Act-Assert -malli](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/)
- [Playwright YouTube-kanava](https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg)
