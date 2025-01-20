import css from "./CSSExample.module.css";

export default function CSSExample() {
  const nelio = {
    backgroundColor: "green",
    width: "80px",
    height: "30px",
    marginLeft: "1rem",
  };

  return (
    <>
      <h1 className="red">CSS Esimerkki</h1>
      <h2 style={{ color: "blue", fontSize: "25px" }}>Alateksti</h2>
      <div style={nelio}>Tyylitajua!</div>
      <br />
      <div style={nelio}></div>
      <br />
      <h2 className={css["primary-color"]}>
        Haa! Tämä tekstin tyyli moduulista!
      </h2>
      <h2 className="primary-color">Tämän tekstin tyyli ei ole moduulista!</h2>
    </>
  );
}
