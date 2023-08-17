import { useMantineTheme } from "@mantine/core";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { Places } from "../types/types";
import MapMarker from "./MapMarker";

const selectMarkers = (data: Places) => {
      return <MapMarker data={data} />;
};

const MapDisplayer = (props: { data: Places }) => {
  const { data } = props;

  const center = [46.0649489, 11.1233195] as LatLngExpression; // Trento

  const theme = useMantineTheme();

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "100%", width: "100%", borderRadius: theme.radius.md }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectMarkers(data)}
    </MapContainer>
  );
};
export default MapDisplayer;
