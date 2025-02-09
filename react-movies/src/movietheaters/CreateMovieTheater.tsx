import MovieTheaterForm from "./MovieTheaterForm";

export default function CreateMovieTheater() {
  return (
    <>
      <h3>Luodaan Elokuvateatterin tiedot</h3>
      <MovieTheaterForm
        model={{ name: "" }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}