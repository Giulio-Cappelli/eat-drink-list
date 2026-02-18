import { useMantineTheme } from "@mantine/core";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Places } from "../../types/types";
import MapMarker from "./MapMarker";

const selectMarkers = (data: Places) => {
	return <MapMarker data={data} />;
};

const RecenterMap = ({ center }: { center: LatLngExpression }) => {
	const map = useMap();
	useEffect(() => {
		map.flyTo(center);
	}, [center, map]);
	return null;
};

const MapDisplayer = (props: {
	data: Places;
	activeCenter?: LatLngExpression;
}) => {
	const { data, activeCenter } = props;
	const defaultCenter = [46.0649489, 11.1233195] as LatLngExpression; // Trento

	const theme = useMantineTheme();

	return (
		<MapContainer
			center={defaultCenter}
			zoom={13}
			style={{ height: "100%", width: "100%", borderRadius: theme.radius.md }}
			scrollWheelZoom={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{selectMarkers(data)}
			{activeCenter && <RecenterMap center={activeCenter} />}
		</MapContainer>
	);
};
export default MapDisplayer;
