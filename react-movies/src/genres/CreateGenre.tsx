import axios from "axios";
import { useNavigate } from "react-router-dom";
import GenreForm from "./GenreForm";
import { genreCreationDTO } from "./genres.model";
import { urlGenres } from "../endpoints";

export default function CreateGenre() {
  const navigate = useNavigate();

  async function create(genre: genreCreationDTO) {
    try {
      await axios.post(urlGenres, genre);
      navigate("/genres"); // vie takaisin genrelistaan onnistuneen lisäyksen jälkeen
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h3>Luodaan uusi genre</h3>
      <GenreForm
        model={{ name: "" }}
        onSubmit={async (value) => {
          await create(value);
        }}
      />
    </>
  );
}
