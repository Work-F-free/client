const amenities = [
  "3D-принтер",
  "Сканер",
  "Wi-Fi",
  "Чай, кофе, вода",
  "Профессиональный клининг",
  "Зона отдыха с диванами и креслами",
  "Настольный теннис",
  "Бильярд",
  "Спортзал или фитнес-зона",
  "Душевые кабины",
  "Велопарковка",
  "Парковка для автомобилей ",
  "Терраса или балкон",
  "Библиотека с профессиональной литературой",
  "Кафе или ресторан на территории коворкинга"
];


export const generateRandomAdditionals = (): string[] => {
  const min: number = 3
  const max: number = 6

  const numElements = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = [...amenities].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numElements);
}

