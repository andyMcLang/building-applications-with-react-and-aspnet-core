# CLAUDE.md

Tämä tiedosto tarjoaa ohjeistusta Claude Code:lle (claude.ai/code) työskennellessä tämän repositorion koodin kanssa.

## Projektin yleiskatsaus

Tämä repositorio sisältää täyden elokuvien hallintasovelluksen, joka on rakennettu Udemy-kurssia varten. Se esittelee React TypeScript -frontendin ja ASP.NET Core Web API -backendin integraation PostgreSQL-tietokannan kanssa.

## Projektien rakenne

Repositorio sisältää kolme pääprojektia:

1. **MoviesAPI** - ASP.NET Core 6 Web API -backend Entity Framework Coren ja PostgreSQL:n kanssa
2. **react-movies** - React TypeScript -frontend-sovellus
3. **CombinedProject** - ASP.NET Core 7 -projekti integroidulla React SPA:lla (käyttäen SpaProxy:a)

## Kehityskomennot

### ASP.NET Core Backend (MoviesAPI)
- **Palauta paketit**: `dotnet restore`
- **Käynnistä API**: `dotnet run` (käynnistyy osoitteessa https://localhost:7115)
- **Käännä**: `dotnet build`
- **Tietokantamigraatiot**: `dotnet ef database update`
- **Luo migraatio**: `dotnet ef migrations add [MigraationNimi]`

### React Frontend (react-movies)
- **Asenna riippuvuudet**: `npm install`
- **Käynnistä kehitys**: `npm start` (käynnistyy osoitteessa http://localhost:3000)
- **Käännä tuotantoon**: `npm run build`
- **Suorita testit**: `npm test`

### Yhdistetty projekti (CombinedProject)
- **Käynnistä full-stack-sovellus**: `dotnet run` (käynnistää Reactin automaattisesti SpaProxyn kautta)
- **React-komennot**: Saatavilla `ClientApp/`-alihakemistossa:
  - `npm start` ClientApp/:ssä
  - `npm run build` ClientApp/:ssä
  - `npm test` ClientApp/:ssä
  - `npm run lint` ClientApp/:ssä

## Arkkitehtuurin yleiskatsaus

### Backend-arkkitehtuuri (MoviesAPI)
- **Entity Framework Core** PostgreSQL:n ja NetTopologySuiten kanssa spatiaalista dataa varten
- **Identity Framework** autentikointiin JWT Bearer -tokeneilla
- **AutoMapper** DTO/Entity-mappingia varten (konfiguroitu `Helpers/AutoMapperProfiles.cs`:ssä)
- **Mukautetut suodattimet**: `MyExceptionFilter` ja `ParseBadRequest` virheidenkäsittelyä varten
- **Tiedostojen tallennus**: `InAppStorageService` näyttelijöiden kuvien lataamiseen hakemistoon `wwwroot/actors/`

### Tärkeimmät backend-entiteetit
- `Movie` - Pääelokuva-entiteetti, jolla on relaatiot genreihin, näyttelijöihin ja teattereihin
- `Actor` - Näyttelijätiedot kuvan lataustuella
- `Genre` - Elokuvakategoriat
- `MovieTheater` - Teattereiden sijainnit spatiaalisilla koordinaateilla
- `Rating` - Käyttäjien elokuvien arvostelut
- Liitostaulut: `MoviesGenres`, `MoviesActors`, `MovieTheatersMovies`

### Frontend-arkkitehtuuri (react-movies)
- **React 18** TypeScriptin ja Create React Appin kanssa
- **React Router DOM 7** navigointiin keskitetyllä reittikonfiguraatiolla
- **Formik + Yup** lomakkeiden käsittelyyn ja validointiin
- **Bootstrap 5** UI-komponenteille
- **Leaflet** karttafunktionaliteettiin teatterien hallinnassa
- **Authentication Context** käyttäjien claimien ja admin-pääsyn hallintaan

### API-integraatio
- Perus-API URL: `https://localhost:7115/api` (konfiguroitu `.env.development`:ssä)
- Päätepisteet keskitetty `src/endpoints.ts`:ssä
- JWT-pohjainen autentikointi roolipohjaisella pääsynvalvonnalla
- Sivutustuki `totalAmountOfRecords`-headerilla

### Tietokannan konfiguraatio
- PostgreSQL spatiaalisten laajennusten kanssa (NetTopologySuite)
- Yhteysmerkkijonon muoto: `Host=localhost;Port=5432;Database=MoviesAPI;Username=postgres;Password=[SALASANA]`
- Entity Framework -migraatiot hakemistossa `MoviesAPI/Migrations/`

## Tärkeimmät riippuvuudet

### Backend (MoviesAPI)
- ASP.NET Core 6
- Entity Framework Core 6 PostgreSQL-providerin kanssa
- Microsoft.AspNetCore.Identity.EntityFrameworkCore
- Microsoft.AspNetCore.Authentication.JwtBearer
- AutoMapper.Extensions.Microsoft.DependencyInjection
- NetTopologySuite spatiaaliselle datalle

### Frontend (react-movies)
- React 18.2 TypeScript 4.9:n kanssa
- React Router DOM 7.1
- Formik 2.2 + Yup 0.32 lomakkeille
- Axios 0.21 HTTP-pyynnöille
- Bootstrap 5.0 tyylittelylle
- Leaflet + react-leaflet kartoille
- SweetAlert2 ilmoituksille

### Yhdistetty projekti (CombinedProject)
- ASP.NET Core 7 SpaProxyn kanssa
- React-integraatio ClientApp-kansion kautta
- Automaattinen npm install ja build julkaisun aikana

## Kehitystyönkulku

1. **Backend ensin**: Käynnistä MoviesAPI komennolla `dotnet run`, varmista että tietokanta on migroitu
2. **Frontend**: Käynnistä react-movies komennolla `npm start`, konfiguroi API URL ympäristöön
3. **Täysi integraatio**: Käytä CombinedProject:ia täydelliseen SPA-kokemukseen

## Autentikointi ja valtuutus
- JWT-token-pohjainen autentikointi rooleilla (admin/käyttäjä)
- Claims-pohjainen valtuutus React-kontekstissa
- Vain admin-reitit suojattu roolintarkistuksilla
- Rekisteröinti- ja kirjautumispäätepisteet `AccountsController`:ssä
- **TÄRKEÄÄ**: `BuildToken`-metodi (AccountsController:ssä) hakee käyttäjän claimit tietokannasta ja sisällyttää ne JWT-tokeniin
- Admin-claimien lisäys: Käytä `makeAdmin`/`removeAdmin` päätepisteitä tai lisää manuaalisesti AspNetUserClaims-tauluun
- Admin-sivu: `/users` näyttää käyttäjälistan ja mahdollistaa admin-oikeuksien hallinnan

## Tiedostojen latauksen käsittely
- Näyttelijöiden kuvat tallennetaan hakemistoon `MoviesAPI/wwwroot/actors/`
- Frontend käyttää FormDataa multipart/form-data:n kanssa
- Mukautettu `ImageField`-komponentti Reactissa tiedostojen valintaa varten

## Testaus ja validointi
- Backend: Mukautetut validointisuodattimet ja virheidenkäsittely
- Frontend: Yup-validointi mukautetuilla säännöillä (esim. `firstLetterUppercase`)
- Create React App -testausasetukset Jestin kanssa

## Tunnetut korjaukset ja parannukset
- **JWT Token Claims**: Korjattu `BuildToken`-metodi sisällyttämään käyttäjän claimit (kuten admin-rooli) JWT-tokeniin
- **IndexEntity null-tarkistus**: Korjattu `undefined` entities -ongelma lisäämällä null-tarkistus ennen renderöintiä
- **Error handling**: Lisätty virheidenkäsittely API-kutsuihin IndexEntity-komponentissa

## Yleiset kehitystehtävät
- Lisää uusi entiteetti: Luo entiteettiluokka, lisää DbContextiin, luo migraatio, lisää controller ja DTO:t
- Lisää uusi React-komponentti: Seuraa olemassa olevia malleja ominaisuuskansioissa (actors/, genres/, movies/, jne.)
- Päivitä tietokanta: Luo migraatio komennolla `dotnet ef migrations add`, sitten `dotnet ef database update`
- Julkaise: Käännä React komennolla `npm run build`, julkaise ASP.NET Core -projekti