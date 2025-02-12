import MovieForm from "./MovieForm";

export default function EditMovie() {
  return (
    <>
      <h3>Muokataan Elokuvan Tiedot</h3>
      <MovieForm
        model={{ title: "Venom: The Last Dance", inTheaters: true, trailer: "",
          releaseDate: new Date('2025-02-12T00:00:00')
         }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
