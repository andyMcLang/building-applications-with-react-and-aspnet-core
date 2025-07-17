# React‑Movies & MoviesAPI with ASP.NET Core 6 & PostgreSQL 📽️🎬

This repository contains two complementary projects:

- **React‑Movies**: A React/TypeScript single-page frontend for managing movies, genres, and actors.
- **MoviesAPI**: An ASP.NET Core Web API backend with Entity Framework Core, PostgreSQL, AutoMapper, and file uploads for actor pictures.

---

## 🛠️ Prerequisites

- **.NET 6 SDK**  
- **Node.js** (v14+) & **npm**  
- **PostgreSQL** Server (configured with database named `MoviesAPI`)
- VS Code or Visual Studio 2022

---

## 🚀 Backend Setup (MoviesAPI)

1. **Clone & configure**:
   ```bash
   cd MoviesAPI
   dotnet restore
   ```

2. **Set your connection string** in `appsettings.Development.json`:
   ```json
   "DefaultConnection": "Host=localhost;Port=5432;Database=MoviesAPI;Username=postgres;Password=YOURPASSWORD"
   ```

3. **Run migrations**:
   ```bash
   dotnet ef database update
   ```

4. **Start the API**:
   ```bash
   dotnet run
   ```
   - The API runs on `https://localhost:7115`
   - Swagger UI is available at `https://localhost:7115/swagger`

---

## 🌐 Frontend Setup (React‑Movies)

1. **Navigate & install**:
   ```bash
   cd ../react-movies
   npm install
   ```

2. **Configure API URL** in `.env.development`:
   ```
   REACT_APP_API_URL=https://localhost:7115/api
   ```

3. **Run frontend**:
   ```bash
   npm start
   ```
   - The app runs at `http://localhost:3000`

---

## 🧩 How It All Works

- **Pagination**: API computes `totalAmountOfRecords` header and returns per-page results.
- **Actors & Pictures**: Backend saves uploaded images to `wwwroot/actors`; frontend uploads via `<form enctype="multipart/form-data">`.
- **Validation & Errors**: ASP.NET filters parse bad requests into JSON lists; frontend displays them via `DisplayErrors`.
- **AutoMapper** maps between DTOs and Entities automatically.

---

## 📁 Project Structure

```
/MoviesAPI
 ├─ Controllers/
 ├─ DTOs/
 ├─ Entities/
 ├─ Helpers/            // Extensions, file storage services
 ├─ Filters/            // API exception & validation filters
 └─ Startup.cs

/react-movies
 ├─ src/
 │   ├─ actors/         // Actor components & models
 │   ├─ genres/         // Genre components
 │   ├─ utils/          // Shared components (Pagination, Entity abstraction)
 └─ .env.development
```

---

## ✅ Deployment Tips

- **Ubuntu or server**: Install Docker (for a lightweight frontend+backend stack), or install .NET/Node/PostgreSQL manually.
- **CI/CD**: Setup workflows to build backend, run migrations, build React app (`npm run build`), and serve static files from ASP.NET.

---

## 🔧 Common Issues

| Problem                                   | Solution                                                                 |
|------------------------------------------|--------------------------------------------------------------------------|
| CORS errors from React                   | Ensure the ASP.NET app configures CORS with `WithOrigins(frontendUrl)`   |
| PostgreSQL `timestamp with time zone`    | Set actor `DateOfBirth` to UTC or configure `EnableLegacyTimestampBehavior` |
| Secret exposure (Azure key, connection)  | Move secrets to environment variables or use `.gitignore` or GitHub secrets |

---

## ❤️ Contributing

Your feedback and improvements are welcome! Fork and send pull requests for bug fixes, UI refinements, or code enhancements.

---

## 📄 License

This project is provided “as-is” for educational purposes. Feel free to use and adapt it for learning or internal projects.

---

**Enjoy building 🎉 And let me know if you need anything else!**
