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

const routes = [
  {
    path: "/genres",
    component: IndexGenres,
    exact: true
  },
  {
    path: "/genres/create",
    component: CreateGenre,
  },
  {
    path: "/genres/edit",
    component: EditGenre,
  },

  {
    path: "/actors",
    component: IndexActors,    
    exact: true
  },
  {
    path: "/actors/create",
    component: CreateActor,
  },
  {
    path: "/actors/edit",
    component: EditActor,
  },

  
  {
    path: "/movietheaters",
    component: IndexMovieTheaters,
    exact: true
  },
  {
    path: "/movietheaters/create",
    component: CreateMovieTheater,
  },
  {
    path: "/movietheaters/edit",
    component: EditMovieTheater,
  },

  {
    path: "/movies/create",
    component: CreateMovie
  },
  {
    path: "/movies/edit",
    component: EditMovie,
  },
  {
    path: "/movies/filter",
    component: FilterMovies,
  },

  {
    path: "/",
    component: LandingPage,
  },
];

export default routes;
