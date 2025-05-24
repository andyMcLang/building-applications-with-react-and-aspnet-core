import axios from "axios";
import { useNavigate } from "react-router-dom";
import GenreForm from "./GenreForm";
import { genreCreationDTO } from "./genres.model";
import { urlGenres } from "../endpoints";
import { useState } from "react";
import DisplayErrors from "../utils/DisplayErrors";

export default function CreateGenre() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<string[]>([]);

  async function create(genre: genreCreationDTO) {
    try {
      await axios.post(urlGenres, genre);
      navigate("/genres"); // vie takaisin genrelistaan onnistuneen lisäyksen jälkeen
    } catch (error) {
      console.error(error);
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }

  return (
    <>
      <h3>Luodaan uusi genre</h3>
      <DisplayErrors errors={errors} />

      <GenreForm
        model={{ name: "" }}
        onSubmit={async (value) => {
          await create(value);
        }}
      />
    </>
  );
}
