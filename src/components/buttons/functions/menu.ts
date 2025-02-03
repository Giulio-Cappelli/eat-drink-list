import { Place } from "../../../types/types";

export const menu = (place: Place) => {
  const url = `${place.menu}`;
  window.open(url, "_blank")?.focus();
};