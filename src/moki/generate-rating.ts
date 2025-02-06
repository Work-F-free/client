export const generateRandomNumber = (min:number, max: number ): number => {
  const random = Math.random();
  const randomNumber = min + random * (max - min);

  return randomNumber;
}
