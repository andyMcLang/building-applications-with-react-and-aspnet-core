import { useParams } from "react-router-dom";
import GenreForm from "./GenreForm";

export default function EditGenre() {
  const { id }: any = useParams();

  return (
    <>
      <h3>Muokataan Genreä</h3>
      <GenreForm
        model={{ name: "Action" }}
        onSubmit={async (value) => {
          await new Promise((r) => setTimeout(r, 400));
          console.log(id);
          console.log(value);
        }}
      />
    </>
  );
}
