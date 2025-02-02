import { useParams } from "react-router-dom";

export default function EditGenre() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <p>Id numeroa ei löydy</p>;
  }

  return (
    <>
      <h3>Muokataan Genreä</h3>
      <p>Id: {id}</p>
    </>
  );
}
