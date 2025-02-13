import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";
import "react-bootstrap-typeahead/css/Typeahead.css"; // Muista importata tyyli
import { ReactElement } from "react";

export default function TypeAheadActors(props: typeAheadActorsProps) {
  // Kovakoodattu näyttelijälista (käytetään, jos props.actors ei ole määritelty)
  const actors: actorMovieDTO[] = [
    {
      id: 1,
      name: "Morgan Freeman",
      character: "Red",
      picture:
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/05/somerset-in-se7en3.jpg",
    },
    {
      id: 2,
      name: "Gene Hackman",
      character: "Lex Luthor",
      picture:
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/04/lk.jpg",
    },
    {
      id: 3,
      name: "Frances McDormand",
      character: "Fern",
      picture:
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/11/abby-blood-simple.jpg",
    },
  ];

  const selected: actorMovieDTO[] = [];

  return (
    <div className="mb-3">
      <label>{props.displayName}</label>
      <Typeahead
        id="typehead"
        onChange={(selected) => {
          if (props.actors.findIndex((x) => x.id === actors[0].id) === -1) {
            props.onAdd([...props.actors, actors[0]]);
          }

          console.log("Valittu näyttelijä:", selected);
        }}
        options={actors} // 🔹 Varmistetaan oikea tyyppi
        labelKey={(option) => (option as actorMovieDTO).name} // 🔹 Ongelma korjattu: varmistetaan oikea tyyppi
        filterBy={(option, state) => {
          const input = state.text.toLowerCase();
          const actor = option as actorMovieDTO; // 🔹 Typecastataan oikein
          return (
            actor.name.toLowerCase().includes(input) || // Etsi näyttelijän nimellä
            actor.character.toLowerCase().includes(input) // Etsi hahmon nimellä
          );
        }}
        placeholder="Kirjoita näyttelijän nimi..."
        minLength={1}
        flip={true}
        selected={selected}
        renderMenuItemChildren={(option) => {
          const actor = option as actorMovieDTO; // 🔹 Pakotetaan oikea tyyppi
          return (
            <div className="d-flex align-items-center">
              <img
                src={actor.picture}
                alt={actor.name}
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 10,
                  borderRadius: "50%",
                }}
              />
              <div>
                <strong>{actor.name}</strong>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>
                  {actor.character}
                </div>
              </div>
            </div>
          );
        }}
      />

      <ul className="list-group">
        {props.actors.map((actor) => (
          <li key={actor.id} className="list-group-item list-group-item-action">
            {props.listUi(actor)}
            <span
              className="badge badge-primary badge-pill pointer text-dark"
              style={{ marginLeft: "0.5rem" }}
              onClick={() => props.onRemove(actor)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface typeAheadActorsProps {
  displayName: string;
  actors: actorMovieDTO[];
  onAdd(actors: actorMovieDTO[]): void;
  onRemove(actor: actorMovieDTO): void;
  listUi(actor: actorMovieDTO): ReactElement;
}
