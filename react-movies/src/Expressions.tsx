export default function Expressions() {
  const subtext = "Tämä on alateksti";
  const reactLogoURL =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png";
  const dublikaatio = (value: number) => value * 2;
  return (
    <>
      <h1>Expressions Esimerkki</h1>
      <h2>{subtext.toUpperCase()}</h2>
      <h3>Numero 3 tuplattuna tekee: {dublikaatio(3)}</h3>
      <img src={reactLogoURL} alt="react logo" />
    </>
  );
}
