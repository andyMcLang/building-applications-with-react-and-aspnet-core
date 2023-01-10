export default function Conditionals() {
  const voiNahda = true;
  return (
    <>
      <h1>Conditionals Esimerkki</h1>
      {voiNahda ? (
        <div>voit nähdä tämän koska arvo on true</div>
      ) : (
        <span>et voi nähdä tätä koska arvo on false</span>
      )}
    </>
  );
}
