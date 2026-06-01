import { LatLngExpression } from "leaflet";
import { PlaceS, Places } from "../../../types/types";

const eat: Places = require("../../../data/eat.json");
const drink: Places = require("../../../data/drink.json");

const getLastId = (value: string, eat: Places, drink: Places): number => {
	switch (value) {
		case "eat": {
			const lastPlace = eat.places[eat.places.length - 1];
			return lastPlace ? lastPlace.id + 1 : 1;
		}
		case "drink": {
			const lastPlace = drink.places[drink.places.length - 1];
			return lastPlace ? lastPlace.id + 1 : 1;
		}
		default:
			return 1;
	}
};

export const previewPlace = (
	setPreview: any,
	lat: string,
	lng: string,
): any => {
	setPreview([Number(lat), Number(lng)] as LatLngExpression);
	return;
};

export const addPlace = (
	value: string,
	name: string,
	city: string,
	address: string,
	lat: string,
	lng: string,
	typology: string[],
	phone: string,
	notes: string,
	price: string,
	menu: string,
): PlaceS => {
	const id: number = getLastId(value, eat, drink);

	return {
		id,
		name,
		city,
		address,
		lat,
		lng,
		typology,
		phone,
		notes,
		price,
		menu,
	} as PlaceS;
};
