export interface GameListItem {
  id: string;
  title: string;
  price: number;
  posterImg: string;
}

export interface GameDetails {
  id: string;
  title: string;
  date: Date;
  description: string;
  posterImg: string;
  price: number;
  tags: string[];
}
