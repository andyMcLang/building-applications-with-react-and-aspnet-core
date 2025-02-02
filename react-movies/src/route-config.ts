import { RouteObject } from "react-router-dom";
import CreateGenre from "./genres/CreateGenre";
import IndexGenres from "./genres/IndexGenres";
import LandingPage from "./movies/LandingPage";
import EditGenre from "./genres/EditGenre";
import IndexActors from "./actors/indexActors";
import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexMovieTheaters from "./movietheaters/indexMovieTheaters";
import CreateMovieTheater from "./movietheaters/CreateMovieTheater";
import EditMovieTheater from "./movietheaters/EditMovieTheater";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import React from "react";
import RedirecttoLandingPage from "./utils/RedirectToLandingPage";

const routes: RouteObject[] = [
  {
    path: "/genres",
    element: React.createElement(IndexGenres),
  },
  {
    path: "/genres/create",
    element: React.createElement(CreateGenre),
  },
  {
    path: "/genres/edit/:id",
    element: React.createElement(EditGenre),
  },
  {
    path: "/actors",
    element: React.createElement(IndexActors),
  },
  {
    path: "/actors/create",
    element: React.createElement(CreateActor),
  },
  {
    path: "/actors/edit/:id",
    element: React.createElement(EditActor),
  },
  {
    path: "/movietheaters",
    element: React.createElement(IndexMovieTheaters),
  },
  {
    path: "/movietheaters/create",
    element: React.createElement(CreateMovieTheater),
  },
  {
    path: "/movietheaters/edit/:id",
    element: React.createElement(EditMovieTheater),
  },
  {
    path: "/movies/create",
    element: React.createElement(CreateMovie),
  },
  {
    path: "/movies/edit/:id",
    element: React.createElement(EditMovie),
  },
  {
    path: "/movies/filter",
    element: React.createElement(FilterMovies),
  },
  {
    path: "/",
    element: React.createElement(LandingPage),
  },
  {
    path: '*',
    element: React.createElement(RedirecttoLandingPage)
  }
];

export default routes;
