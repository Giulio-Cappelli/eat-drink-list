import { LatLngExpression, icon } from "leaflet";
import { Marker } from "react-leaflet";

const ICON = icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
  //iconUrl: require("../images/marker.png"),
  iconSize: [24, 24],
});

const MapViewMarker = (props: { coords: LatLngExpression }) => {
  const { coords } = props;

  return <Marker position={coords} icon={ICON} key={1}></Marker>;
};
export default MapViewMarker;
