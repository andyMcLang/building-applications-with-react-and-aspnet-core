import { actorCreationDTO } from "../actors/actors.model";

export function convertActorToFormData(actor: actorCreationDTO): FormData {
  const formData = new FormData();

  formData.append("name", actor.name);

  if (actor.biography) {
    formData.append("biography", actor.biography);
  }

  if (actor.dateOfBirth) {
    const isoDate = actor.dateOfBirth.toISOString().split("T")[0];
    formData.append("dateOfBirth", isoDate);
  }

  if (actor.picture) {
    formData.append("picture", actor.picture);
  }

  return formData;
}

function formatDate(date: Date) {
  date = new Date(date);
  const format = new Intl.DateTimeFormat("fi", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [{ value: month }, , { value: day }, , { value: year }] =
    format.formatToParts(date);

  return `${day}.${month}.${year}`;
}
