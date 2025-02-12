import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
  return (
    <>
      <h3>Muokataan Elokuvateatterin tiedot</h3>
      <MovieTheaterForm
        model={{ name: "Finnkino", latitude: 60.169424010269616, longitude: 4.930749237537384 }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}