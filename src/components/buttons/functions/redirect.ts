import { Place } from "../../../types/types";

export const redirect = (place: Place) => {
  const url = `https://maps.google.com/?q=${place.name + ", " + place.address}`;
  //const geoUrl = `geo:${place.lat},${place.lng}?z=13`;
  window.open(url, "_blank")?.focus();
};