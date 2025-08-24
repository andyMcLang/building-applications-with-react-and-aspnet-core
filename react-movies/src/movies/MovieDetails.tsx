import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { urlMovies } from "../endpoints";
import { Link, useParams } from "react-router-dom";
import { movieDTO } from "./movies.model";
import Loading from "../utils/Loading";

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
      | {movie.releaseDate.toDateString()}
      <div style={{ display: "flex", marginTop: "1rem" }}>
        <span style={{ display: "inline-block", marginRight: "1rem" }}>
          <img
            src={movie.poster}
            style={{ width: "225px", height: "315px" }}
            alt="poster"
          />
        </span>

        {movie.trailer ? (
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
    </div>
  ) : (
    <Loading />
  );
}
