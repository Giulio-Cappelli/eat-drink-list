import { Place } from "../../../types/types";

export const call = (place: Place) => {
  let phoneNumber = place.phone;
  const phoneNumberSplit = phoneNumber.split("-");

  phoneNumber = "tel:" + phoneNumberSplit[0] + phoneNumberSplit[1];

  window.open(phoneNumber, "_blank")?.focus();
};