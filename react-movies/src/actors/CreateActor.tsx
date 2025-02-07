import ActorForm from "./ActorForm";

export default function CreateActor() {
  return (
    <>
      <h3>Lisää Näyttelijä</h3>
      <ActorForm
        model={{ name: "", dateOfBirth: undefined }}
        onSubmit={(values) => {
          console.log(values);
        }}
      />
    </>
  );
}
