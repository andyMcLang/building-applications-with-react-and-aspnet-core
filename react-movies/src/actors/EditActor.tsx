import ActorForm from "./ActorForm";

export default function EditActor() {
  return (
    <>
      <h3>Muokataan Näyttelijätiedot</h3>
      <ActorForm
        model={{ name: "Tom Cruise", dateOfBirth: new Date("1962-07-03T00:00:00") }}
        onSubmit={(values) => {
          console.log(values);
        }}
      />
    </>
  );
}
