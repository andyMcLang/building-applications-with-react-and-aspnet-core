import { MapContainer, TileLayer, useMapEvent, Marker } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import coordinateDTO from "./coordinates.model";
import { useState } from "react";

interface MapProps {
  height?: string;
}

function MapClick(props: mapClickProps) {
  useMapEvent("click", (eventArgs) => {
    props.setCoordinates({ lat: eventArgs.latlng.lat, lng: eventArgs.latlng.lng });
  });
  return null;
}

interface mapClickProps {
  setCoordinates(coordinates: coordinateDTO): void;
}

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Map({ height = "500px" }: MapProps) {
  const [coordinates, setCoordinates] = useState<coordinateDTO[]>([]);
  return (
    <MapContainer
      center={[60.169628, 24.93068483]}
      zoom={14}
      style={{ height, width: "100%" }}
    >
      <TileLayer
        attribution="React Movies"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClick
        setCoordinates={(coordinates) => {
          setCoordinates([coordinates]);
        }}
      />
      {coordinates.map((coordinate, index) => <Marker key={index} position={[coordinate.lat, coordinate.lng]} />)}
    </MapContainer>
  );
}
