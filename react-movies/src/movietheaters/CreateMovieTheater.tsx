import axios from "axios";
import { movieTheaterCreationDTO } from "./movieTheater.model";
import MovieTheaterForm from "./MovieTheaterForm";
import { urlMovieTheaters } from "../endpoints";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DisplayErrors from "../utils/DisplayErrors";

export default function CreateMovieTheater() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<string[]>([]);

  async function create(movieTheater: movieTheaterCreationDTO) {
    try {
      await axios.post(urlMovieTheaters, movieTheater);
      navigate("/movietheaters");
    } catch (error) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }

  return (
    <>
      <h3>Luodaan Elokuvateatterin tiedot</h3>
      <DisplayErrors errors={errors} />
      <MovieTheaterForm
        model={{ name: "", latitude: 0, longitude: 0 }}
        onSubmit={async (values) => await create(values)}
      />
    </>
  );
}
