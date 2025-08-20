import { actorCreationDTO } from "../actors/actors.model";
import { movieCreationDTO } from "../movies/movies.model";

export function convertActorToFormData(actor: actorCreationDTO): FormData {
  const formData = new FormData();

  formData.append("name", actor.name);

  if (actor.biography) {
    formData.append("biography", actor.biography);
  }

  if (actor.dateOfBirth) {
    const isoDate = actor.dateOfBirth.toISOString().split("T")[0];
    formData.append("dateOfBirth", isoDate);
  }

  if (actor.picture) {
    formData.append("picture", actor.picture);
  }

  return formData;
}

export function convertMovieToFormData(movie: movieCreationDTO) {
  const formData = new FormData();
  formData.append("title", movie.title);

  if (movie.summary) formData.append("summary", movie.summary);
  formData.append("trailer", movie.trailer);
  formData.append("inTheaters", String(movie.inTheaters));

  if (movie.releaseDate) {
    const isoDate = movie.releaseDate.toISOString().split("T")[0];
    formData.append("releaseDate", isoDate);
  }

  if (movie.poster) formData.append("poster", movie.poster);

  formData.append("genresIds", JSON.stringify(movie.genresIds ?? []));
  formData.append(
    "movieTheatersIds",
    JSON.stringify(movie.movieTheatersIds ?? [])
  );
  formData.append("actors", JSON.stringify(movie.actors ?? []));

  return formData;
}

function formatDate(date: Date) {
  date = new Date(date);
  const format = new Intl.DateTimeFormat("fi", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [{ value: month }, , { value: day }, , { value: year }] =
    format.formatToParts(date);

  return `${day}.${month}.${year}`;
}
