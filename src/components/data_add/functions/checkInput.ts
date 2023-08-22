export const checkInput = (
  name: string,
  city: string,
  address: string,
  lat: string,
  lng: string,
  typology: string[]
): boolean => {
  return (
    name.trim().length === 0 ||
    city.trim().length === 0 ||
    address.trim().length === 0 ||
    Number(lat) === 0 ||
    Number(lng) === 0 ||
    typology.length < 1
  );
};
