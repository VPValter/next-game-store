import Link from 'next/link';
import Image from 'next/image';
import { GameListItem } from '../types';
import styles from '../styles/GameItem.module.css';

interface Props {
  game: GameListItem;
}

const GameItem = ({ game }: Props) => {
  return (
    <div className={styles.gameItem} key={game.id}>
      <Link href={`/games/${game.id}`}>
        <Image src={game.posterImg} alt={game.title} width={220} height={280} />
        <h3>{game.title}</h3>
        {game.price > 0 ? (
          <span className={styles.listPrice}>{game.price}</span>
        ) : (
          <span className='free-price'>FREE</span>
        )}
      </Link>
    </div>
  );
};

export default GameItem;
