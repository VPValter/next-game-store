export const fetchGames = () => {
  return fetch('https://next-game-store-three.vercel.app/api/games').then((res) => res.json());
};
