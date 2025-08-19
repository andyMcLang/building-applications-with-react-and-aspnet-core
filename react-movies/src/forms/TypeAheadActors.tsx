import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";
import "react-bootstrap-typeahead/css/Typeahead.css"; // Muista importata tyyli
import { ReactElement, useState } from "react";
import { urlActors } from "../endpoints";
import axios, { AxiosResponse } from "axios";

export default function TypeAheadActors(props: typeAheadActorsProps) {
  const [actors, setActors] = useState<actorMovieDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [selected, setSelected] = useState<actorMovieDTO[]>([]);

  const [draggedElement, setDraggedElement] = useState<
    actorMovieDTO | undefined
  >(undefined);

  function handleSearch(query: string) {
    setIsLoading(true);

    axios
      .get(`${urlActors}/searchByName/${query}`)
      .then((response: AxiosResponse<actorMovieDTO[]>) => {
        setActors(response.data);
        setIsLoading(false);
      });
  }

  function handleDragStart(actor: actorMovieDTO) {
    setDraggedElement(actor);
  }

  function handleDragOver(actor: actorMovieDTO) {
    if (!draggedElement) {
      return;
    }

    if (actor.id !== draggedElement.id) {
      const draggedElementIndex = props.actors.findIndex(
        (x) => x.id === draggedElement.id
      );
      const actorIndex = props.actors.findIndex((x) => x.id === actor.id);

      const actors = [...props.actors];
      actors[actorIndex] = draggedElement;
      actors[draggedElementIndex] = actor;
      props.onAdd(actors);
    }
  }

  return (
    <div className="mb-3">
      <label>{props.displayName}</label>
      <AsyncTypeahead
        id="typehead"
        onChange={(selected) => {
          if (selected.length > 0) {
            const newActor = selected[0] as actorMovieDTO;
            if (!props.actors.some((x) => x.id === newActor.id)) {
              actors[0].character = "";
              props.onAdd([...props.actors, newActor]);
            }
          }
          setSelected(selected as actorMovieDTO[]);
        }}
        options={actors} // 🔹 Varmistetaan oikea tyyppi
        labelKey="name" // 🔹 Ongelma korjattu: varmistetaan oikea tyyppi
        filterBy={() => true}
        isLoading={isLoading}
        onSearch={handleSearch}
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

      <ul className="list-group mt-2">
        {props.actors.map((actor) => (
          <li
            key={actor.id}
            draggable={true}
            onDragStart={() => handleDragStart(actor)}
            onDragOver={() => handleDragOver(actor)}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          >
            {props.listUi(actor)}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => props.onRemove(actor)}
            >
              X
            </button>
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
