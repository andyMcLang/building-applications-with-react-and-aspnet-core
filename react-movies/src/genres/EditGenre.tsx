import { useParams, useNavigate } from "react-router-dom";
import GenreForm from "./GenreForm";
import { useEffect, useState } from "react";
import { urlGenres } from "../endpoints";
import axios, { AxiosResponse } from "axios";
import { genreCreationDTO } from "./genres.model";
import Loading from "../utils/Loading";
import DisplayErrors from "../utils/DisplayErrors";

export default function EditGenre() {
  const { id }: any = useParams();
  const [genre, setGenre] = useState<genreCreationDTO>();
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${urlGenres}/${id}`)
      .then((response: AxiosResponse<genreCreationDTO>) => {
        setGenre(response.data);
      });
  }, [id]);

  async function edit(genreToEdit: genreCreationDTO) {
    try {
      await axios.put(`${urlGenres}/${id}`, genreToEdit);
      navigate("/genres");
    } catch (error) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }

  return (
    <>
      <h3>Muokataan Genreä</h3>
      <DisplayErrors errors={errors} />
      {genre ? (
        <GenreForm
          model={{ name: "Action" }}
          onSubmit={async (value) => {
            await edit(value);
          }}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}
