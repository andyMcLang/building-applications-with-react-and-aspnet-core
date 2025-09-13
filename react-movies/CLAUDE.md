# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript frontend for a movie management system that communicates with an ASP.NET Core API backend. The application supports managing movies, actors, genres, and movie theaters with role-based access control.

## Development Commands

- **Start development server**: `npm start` - Runs on http://localhost:3000
- **Build for production**: `npm run build` - Creates optimized production build
- **Run tests**: `npm test` - Launches test runner in watch mode
- **Type checking**: No separate command (handled by Create React App's build process)

## Architecture Overview

### Authentication & Authorization
- Uses React Context (`AuthenticationContext`) for managing user claims
- Admin-only routes are protected via `isAdmin` flag in route configuration
- Claims-based authentication with roles (admin/user)

### API Integration
- Base API URL configured via environment variables:
  - Development: `REACT_APP_API_URL=https://localhost:7115/api` (from `.env.development`)
- API endpoints centralized in `src/endpoints.ts`
- Uses axios for HTTP requests
- Main API endpoints: `/genres`, `/actors`, `/movietheaters`, `/movies`

### Routing
- Centralized route configuration in `src/route-config.ts`
- Uses React Router v7 with Routes/Route components
- Admin routes automatically redirect unauthorized users with Finnish message
- Wildcard route redirects to landing page

### Form Handling
- **Formik** for form state management with custom field components in `src/forms/`:
  - `TextField.tsx` - Basic text input
  - `DateField.tsx` - Date picker
  - `ImageField.tsx` - Image upload
  - `MapField.tsx` - Map location picker
  - `MultipleSelector.tsx` - Multi-select dropdown
  - `TypeAheadActors.tsx` - Actor search/select
- **Yup** for validation with custom validation rules (see `src/Validation.ts`)
- Custom validation: `firstLetterUppercase()` method for Finnish language requirements

### UI Components
- **Bootstrap 5.0** for styling
- Reusable components in `src/utils/`:
  - `GenericList.tsx` - List display with pagination
  - `Pagination.tsx` - Pagination controls
  - `Loading.tsx` - Loading indicator
  - `DisplayErrors.tsx` - Error display
  - `Map.tsx` - Leaflet map integration
- **react-leaflet** for map functionality
- **SweetAlert2** for confirmations and alerts

### Entity Management
- Feature-based folder structure: `/actors`, `/genres`, `/movies`, `/movietheaters`
- Each entity follows CRUD pattern: Index, Create, Edit components
- Generic base components: `IndexEntity.tsx`, `EditEntity.tsx` in utils

### Language
- Application uses Finnish language for user-facing text
- Comments and some UI text are in Finnish
- Error messages and validation text in Finnish

## Key Dependencies

- **React 18.2** with TypeScript
- **React Router DOM 7.1** for navigation
- **Formik 2.2** + **Yup 0.32** for forms and validation
- **Axios 0.21** for API calls
- **Bootstrap 5.0** for UI styling
- **react-leaflet 4.0** + **Leaflet 1.7** for maps
- **SweetAlert2 10.16** for modals/alerts

## File Structure Patterns

```
src/
├── auth/           # Authentication context and models
├── actors/         # Actor CRUD components
├── genres/         # Genre CRUD components
├── movies/         # Movie CRUD components
├── movietheaters/  # Movie theater CRUD components
├── forms/          # Reusable form field components
├── utils/          # Shared utilities and components
├── endpoints.ts    # API endpoint definitions
├── route-config.ts # Centralized routing configuration
└── Validation.ts   # Custom Yup validation extensions
```

## Development Notes

- Uses Create React App configuration (no ejection)
- TypeScript strict mode enabled
- Application bootstrapped with standard CRA setup
- Environment-specific configuration via `.env` files
- Uses claims-based authorization pattern