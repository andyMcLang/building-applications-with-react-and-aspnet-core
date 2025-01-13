export default function Conditionals() {
  const nakohaitta = false;
  return (
    <>
      <h3>Conditionals Example</h3>
      <div>{nakohaitta ? <div>Näen!</div> : <span>En näe!</span>}</div>
    </>
  );
}
