export function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}
export const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};
