import GenreForm from "./GenreForm";

export default function CreateGenre() {
  return (
    <>
      <h3>Luodaan uusi genre</h3>
      <GenreForm
        model={{ name: "" }}
        onSubmit={async (value) => {
          await new Promise((r) => setTimeout(r, 400));
          console.log(value);
        }}
      />
    </>
  );
}
