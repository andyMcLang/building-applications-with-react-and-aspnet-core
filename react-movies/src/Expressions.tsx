export default function Expressions() {
  const imageLogo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s";
  const dublicate = (value: number) => value * 2;
  return (
    <>
      <h3>Example Expressions</h3>
      <div>Number of 3.65 dublicate is: {dublicate(3.65)}</div>
      <img src={imageLogo} alt="react logo"></img>
    </>
  );
}
