export const fetchGames = () => {
  return fetch('http://localhost:3000/api/games').then((res) => res.json());
};
