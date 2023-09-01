export const previewPlace = (
  setPreview: any,
  name: string,
  city: string,
  address: string,
  lat: string,
  lng: string
): any => {
  console.log("Preview Place");
  setPreview({
    id: -1,
    name: name,
    city: city,
    address: address,
    lat: Number(lat),
    lng: Number(lng),
    typology: [],
    phone: "",
    notes: "",
  });

  return;
};

export const addPlace = (
  name: string,
  city: string,
  address: string,
  lat: string,
  lng: string,
  typology: string[],
  phone: string,
  note: string
): any => {
  return;
};
