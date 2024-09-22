const carType = [
  "car",
  " truck",
  "SUV",
  "van",
  "motorcycle",
  " bus",
  "electricVehicle",
  " hybridVehicle",
  " bicycle",
  " tractor",
];

export const carTypeOptions = carType.map((item) => {
  return {
    value: item,
    label: item,
  };
});
