import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { urlMovies, urlRatings } from "../endpoints";
import { Link, useParams } from "react-router-dom";
import { movieDTO } from "./movies.model";
import Loading from "../utils/Loading";
import ReactMarkdown from "react-markdown";
import coordinateDTO from "../utils/coordinates.model";
import MapLeaflet from "../utils/Map";
import Ratings from "../utils/Ratings";
import Swal from "sweetalert2";

export default function MovieDetails() {
  const { id }: any = useParams();
  const [movie, setMovie] = useState<movieDTO>();

  useEffect(() => {
    axios
      .get(`${urlMovies}/${id}`)
      .then((response: AxiosResponse<movieDTO>) => {
        response.data.releaseDate = new Date(response.data.releaseDate);
        setMovie(response.data);
      });
  }, [id]);

  function transformCoordinates(): coordinateDTO[] {
    const theaters = movie?.movieTheaters ?? [];

    return theaters
      .filter((mt) => mt.latitude != null && mt.longitude != null)
      .map((mt) => ({
        lat: mt.latitude!,
        lng: mt.longitude!,
        name: mt.name,
      }));
  }

  function generateEmbeddedVideoURL(trailer: string): string {
    if (!trailer) return "";

    try {
      const url = new URL(trailer);

      // youtu.be/<id>
      if (url.hostname.includes("youtu.be")) {
        const vid = url.pathname.replace("/", "");
        return `https://www.youtube.com/embed/${vid}`;
      }

      // youtube.com/watch?v=<id>
      const v = url.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;

      // valmiiksi /embed/<id>
      if (url.pathname.includes("/embed/")) {
        return `https://www.youtube.com${url.pathname}`;
      }
    } catch {
      // fallback jos käyttäjä syöttää pelkän ID:n
      return `https://www.youtube.com/embed/${trailer}`;
    }

    return "";
  }

  function handleRate(rate: number) {
    axios.post(urlRatings, { rating: rate, movieId: id }).then(() => {
      Swal.fire({
        title: "Kiitos äänestämisestä!",
        icon: "success",
        confirmButtonText: "OK",
      });
    });
  }

  return movie ? (
    <div>
      <h2>
        {movie.title} ({movie.releaseDate.getFullYear()})
      </h2>
      {movie.genres?.map((genre) => (
        <Link
          key={genre.id}
          style={{ marginRight: "5px" }}
          className="btn btn-primary btn-sm rounded-pill"
          to={`/movies/filter?genreId=${genre.id}`}
        >
          {genre.name}
        </Link>
      ))}{" "}
      | {movie.releaseDate.toDateString()}| Your vote:{" "}
      <Ratings maximumValue={5} selectedValue={0} onChange={handleRate} />
      <div style={{ display: "flex", marginTop: "1rem" }}>
        <span style={{ display: "inline-block", marginRight: "1rem" }}>
          <img
            src={movie.poster}
            style={{ width: "225px", height: "315px" }}
            alt="poster"
          />
        </span>

        {movie.trailer && generateEmbeddedVideoURL(movie.trailer) ? (
          <div>
            <iframe
              title="youtube-trailer"
              width="560"
              height="315"
              src={generateEmbeddedVideoURL(movie.trailer)}
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : null}
      </div>
      {movie.summary ? (
        <div style={{ marginTop: "1rem" }}>
          <h3>Yhteenveto</h3>
          <div>
            <ReactMarkdown>{movie.summary}</ReactMarkdown>
          </div>
        </div>
      ) : null}
      {movie.actors && movie.actors.length > 0 ? (
        <div style={{ marginTop: "1rem" }}>
          <h3>Näyttelijät</h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {movie.actors.map((actor) => (
              <div key={actor.id} style={{ marginBottom: "2px" }}>
                <img
                  alt="pic"
                  src={actor.picture}
                  style={{ width: "50px", verticalAlign: "middle" }}
                />
                <span
                  style={{
                    display: "inline-block",
                    width: "200px",
                    marginLeft: "1rem",
                  }}
                >
                  {actor.name}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: "45px",
                  }}
                >
                  ...
                </span>
                <span>{actor.character}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {movie.movieTheaters && movie.movieTheaters.length > 0 ? (
        <div style={{ marginTop: "1rem" }}>
          <h2>Ohjelmistossa nyt</h2>
          <MapLeaflet
            coordinates={transformCoordinates()}
            readOnly={true}
            height="400px"
          />
        </div>
      ) : null}
    </div>
  ) : (
    <Loading />
  );
}
