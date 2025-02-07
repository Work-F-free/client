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

export const formatTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const generateSchedule = (selectedDate: Date) => {
  const startDate = new Date(selectedDate);
  startDate.setHours(9, 0, 0, 0);

  const scheduleArray = [];
  for (let i = 0; i < 9; i++) {
    const from = new Date(startDate);
    const to = new Date(startDate);
    to.setHours(startDate.getHours() + 1, 0, 0, 0);

    scheduleArray.push({ from, to });
    startDate.setHours(startDate.getHours() + 1);
  }
  return scheduleArray
};
