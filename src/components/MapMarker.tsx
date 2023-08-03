import { Marker, Popup } from "react-leaflet";

import { LatLngExpression, icon } from "leaflet";
import { Place, Places } from "../types/types";

const ICON = icon({
  iconUrl: "/marker.png",
  iconSize: [24, 24],
});

const getMarkers = (data: Place[]) => {
  return data.map((element: Place) => {
    return (
      <Marker
        position={[element.lat, element.lng] as LatLngExpression}
        icon={ICON}
        key={element.id}
      >
        <Popup>{element.name}</Popup>
      </Marker>
    );
  });
};

const MapMarker = (props: { data: Places }) => {
  const { data } = props;

  return <>{getMarkers(data.places)}</>;
};
export default MapMarker;
