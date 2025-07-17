import IndexEntity from "../utils/IndexEntity";
import { actorDTO } from "./actors.model";
import { urlActors } from "../endpoints";

export default function IndexActors() {
  return (
    <IndexEntity<actorDTO>
      url={urlActors}
      createURL="actors/create"
      title="Actors"
      entityName="Actor"
    >
      {(actors, button) => (
        <>
          <thead>
            <tr>
              <th></th>
              <th>Nimi</th>
            </tr>
          </thead>
          <tbody>
            {actors?.map((actor) => (
              <tr key={actor.id}>
                <td>{button(`actors/edit/${actor.id}`, actor.id)}</td>
                <td>{actor.name}</td>
              </tr>
            ))}
          </tbody>
        </>
      )}
    </IndexEntity>
  );
}
