import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
  return (
    <>
      <h3>Muokataan Elokuvateatterin tiedot</h3>
      <MovieTheaterForm
        model={{ name: "Finnkino" }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}