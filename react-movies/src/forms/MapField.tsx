import { useFormikContext } from "formik";
import coordinateDTO from "../utils/coordinates.model"
import Map from "../utils/Map"

interface mapFieldProps {
    coordinates?: coordinateDTO[];
    latField: string;
    lngField: string;
}

export default function MapField({ coordinates = [], latField, lngField }: mapFieldProps) {

    const {values, setFieldValue} = useFormikContext<any>();

    function handleMapClick(coordinates: coordinateDTO) {
        setFieldValue(latField, coordinates.lat);
        setFieldValue(lngField, coordinates.lng);
    }

    return (
       <Map 
       coordinates={coordinates}
       handleMapClick={handleMapClick}
       />
    )
}
