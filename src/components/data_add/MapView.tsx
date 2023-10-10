import { useMantineTheme } from "@mantine/core";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import MapViewMarker from "./MapViewMarker";

const MapView = (props: { coords: LatLngExpression }) => {
  const { coords } = props;
  const theme = useMantineTheme();

  //const [center, setCenter] = useState<LatLngExpression>([46.0649489, 11.1233195]);

  return (
    <MapContainer
      center={coords}
      zoom={13}
      style={{ height: "100%", width: "100%", borderRadius: theme.radius.md }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapViewMarker coords={coords} />
    </MapContainer>
  );
};

export default MapView;
