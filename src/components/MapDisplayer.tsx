import { useMantineTheme } from "@mantine/core";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { Places } from "../types/types";
import MapMarker from "./MapMarker";

const selectMarkers = (selection: number) => {
  const eat: Places = require("../data/eat.json");
  const drink: Places = require("../data/drink.json");

  switch (selection) {
    case 0:
      return <MapMarker data={eat} />;
    case 1:
      return <MapMarker data={drink} />;
    default:
      return <></>;
  }
};

const MapDisplayer = (props: { selection: number }) => {
  const { selection } = props;

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
      {selectMarkers(selection)}
    </MapContainer>
  );
};
export default MapDisplayer;
