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
import MovieDetails from "./movies/MovieDetails";

type MyRoute = {
  path: string;
  element: React.ReactElement;
  isAdmin?: boolean;
};

const routes: MyRoute[] = [
  {
    path: "/genres",
    element: React.createElement(IndexGenres),
    isAdmin: true,
  },
  {
    path: "/genres/create",
    element: React.createElement(CreateGenre),
    isAdmin: true,
  },
  {
    path: "/genres/edit/:id",
    element: React.createElement(EditGenre),
    isAdmin: true,
  },
  {
    path: "/actors",
    element: React.createElement(IndexActors),
    isAdmin: true,
  },
  {
    path: "/actors/create",
    element: React.createElement(CreateActor),
    isAdmin: true,
  },
  {
    path: "/actors/edit/:id",
    element: React.createElement(EditActor),
    isAdmin: true,
  },
  {
    path: "/movietheaters",
    element: React.createElement(IndexMovieTheaters),
    isAdmin: true,
  },
  {
    path: "/movietheaters/create",
    element: React.createElement(CreateMovieTheater),
    isAdmin: true,
  },
  {
    path: "/movietheaters/edit/:id",
    element: React.createElement(EditMovieTheater),
    isAdmin: true,
  },
  {
    path: "/movies/create",
    element: React.createElement(CreateMovie),
    isAdmin: true,
  },
  {
    path: "/movies/edit/:id",
    element: React.createElement(EditMovie),
    isAdmin: true,
  },
  {
    path: "/movies/filter",
    element: React.createElement(FilterMovies),
  },
  {
    path: "/movie/:id",
    element: React.createElement(MovieDetails),
  },
  {
    path: "/",
    element: React.createElement(LandingPage),
  },
  {
    path: "*",
    element: React.createElement(RedirecttoLandingPage),
  },
];

export default routes;
