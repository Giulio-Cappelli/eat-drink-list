import { useMantineTheme } from "@mantine/core";
import { LatLngExpression, icon } from "leaflet";
import { useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Place } from "../../types/types";

import "leaflet/dist/leaflet.css";

const ICON = icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
  //iconUrl: require("../images/marker.png"),
  iconSize: [24, 24],
});

const getMarker = (data: Place) => {
  if (data.id !== -2 && data.id !== -3) {
    return (
      <Marker position={data} icon={ICON} key={0}>
      </Marker>
    );
  }
  return <></>;
};

const MapPicker = (props: { preview: Place }) => {
  const { preview } = props;

  const trento: LatLngExpression = [46.0649489, 11.1233195];

  const [data, setData] = useState<Place>({
    id: -2,
    name: "",
    city: "",
    address: "",
    lat: trento[0],
    lng: trento[1],
    typology: [],
    phone: "",
    notes: "",
  }); //Default to Trento

  if (preview.id !== -3) {
    setData({
      id: -1,
      name: "",
      city: "",
      address: "",
      lat: Number(preview.lat),
      lng: Number(preview.lng),
      typology: [],
      phone: "",
      notes: "",
    });
  }

  const theme = useMantineTheme();

  return (
    <MapContainer
      center={trento}
      zoom={13}
      style={{ height: "100%", width: "100%", borderRadius: theme.radius.md }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {getMarker(data)}
    </MapContainer>
  );
};

export default MapPicker;
