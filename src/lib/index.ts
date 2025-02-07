export const generateDatesMap = (n: number) => {
  return Array.from({ length: n }, (_, i) => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + i);
    return newDate;
  });
};

export const dateToText = (date: Date | null | undefined): string | undefined => {
  if (date) {
    const day = date.getDate();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${day}.${month}`;
  }
  return undefined;
};
