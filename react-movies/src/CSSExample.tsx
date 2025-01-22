import css from "./CSSExample.module.css";

export default function CSSExample() {
  const nelio = {
    backgroundColor: "green",
    width: "80px",
    height: "80px",
    marginLeft: "1rem",
  };

  return (
    <>
      <h1 className={css["otsikko"]}>CSS Esimerkki</h1>
      <div style={nelio}></div>
    </>
  );
}
