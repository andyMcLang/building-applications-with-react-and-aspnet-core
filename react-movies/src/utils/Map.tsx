import {
  MapContainer,
  TileLayer,
  useMapEvent,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import coordinateDTO from "./coordinates.model";
import { useEffect, useState } from "react";

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = defaultIcon;

export default function MapLeaflet({
  height = "500px",
  coordinates: initialCoordinates,
  handleMapClick = () => {},
  readOnly = false,
}: MapProps) {
  const [coordinates, setCoordinates] = useState<coordinateDTO[]>(
    initialCoordinates ?? []
  );

  useEffect(() => {
    setCoordinates(initialCoordinates ?? []);
  }, [initialCoordinates]);

  return (
    <MapContainer
      center={[60.169628, 24.93068483]}
      zoom={14}
      style={{ height, width: "100%" }}
    >
      <TileLayer
        attribution="React Leffat"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {readOnly ? null : (
        <MapClick
          setCoordinates={(coord) => {
            setCoordinates([coord]);
            handleMapClick(coord);
          }}
        />
      )}

      {coordinates.map((coordinate, index) => (
        <Marker key={index} position={[coordinate.lat, coordinate.lng]}>
          {coordinate.name ? <Popup>{coordinate.name}</Popup> : null}
        </Marker>
      ))}
    </MapContainer>
  );
}

interface MapProps {
  height?: string;
  coordinates: coordinateDTO[];
  handleMapClick?(coordinates: coordinateDTO): void;
  readOnly?: boolean;
}

function MapClick(props: mapClickProps) {
  useMapEvent("click", (eventArgs) => {
    props.setCoordinates({
      lat: eventArgs.latlng.lat,
      lng: eventArgs.latlng.lng,
    });
  });
  return null;
}

interface mapClickProps {
  setCoordinates(coordinates: coordinateDTO): void;
}
