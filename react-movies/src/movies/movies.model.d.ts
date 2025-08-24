import { actorMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";

export interface movieDTO {
  id: number;
  title: string;
  poster: string;
  inTheaters: boolean;
  trailer: string;
  summary?: string;
  releaseDate: Date;
  genres: genreDTO[];
  movieTheaters: movieTheaterDTO[];
  actors: actorMovieDTO[];
}

export interface movieCreationActorDTO {
  id: number;
  character: string;
}

export interface movieCreationDTO {
  title: string;
  inTheaters: boolean;
  trailer: string;
  summary?: string;
  releaseDate?: Date;
  poster?: File;
  posterURL?: string;
  genresIds?: number[];
  movieTheatersIds?: number[];
  actors?: movieCreationActorDTO[];
}

export interface landingPageDTO {
  ohjelmistossaNyt?: movieDTO[];
  tulossaLeffat?: movieDTO[];
}

export interface moviesPostGetDTO {
  genres: genreDTO[];
  movieTheater: movieTheaterDTO[];
}
