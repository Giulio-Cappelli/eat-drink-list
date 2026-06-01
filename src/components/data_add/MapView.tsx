import { useEffect } from "react";
import { useMantineTheme } from "@mantine/core";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import MapViewMarker from "./MapViewMarker";

const RecenterMap = ({ coords }: { coords: LatLngExpression }) => {
	const map = useMap();

	useEffect(() => {
		map.flyTo(coords, map.getZoom(), {
			animate: true,
		});
	}, [coords, map]);

	return null;
};

const MapView = (props: { coords: LatLngExpression }) => {
	const { coords } = props;
	const theme = useMantineTheme();

	return (
		<MapContainer
			center={coords}
			zoom={18}
			style={{ height: "100%", width: "100%", borderRadius: theme.radius.md }}
			scrollWheelZoom={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<MapViewMarker coords={coords} />
			<RecenterMap coords={coords} />
		</MapContainer>
	);
};

export default MapView;
