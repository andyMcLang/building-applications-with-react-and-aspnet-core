
import { useNavigate } from "react-router-dom";
import Button from "../utils/Button";

export default function CreateGenre() {
  const navigate = useNavigate();
  return (
    <>
      <h3>Luodaan Genre</h3>
      <Button
        onClick={() => {
          // ... tallennetaan tietokantaan
          navigate("/genres");
        }}
      >
        Tallenna tiedot
      </Button>
    </>
  );
}
