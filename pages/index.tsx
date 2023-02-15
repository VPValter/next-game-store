import prisma from '../lib/prisma';
import GameItem from '../components/GameItem';
import Layout from '../components/layout';
import { GameListItem } from '../types';

export async function getServerSideProps() {
  const games: Array<GameListItem> = await prisma.games.findMany();
  return {
    props: {
      games: JSON.parse(JSON.stringify(games)),
    },
  };
}

interface Props {
  games: GameListItem[];
}

export default function Home({ games }: Props) {
  return (
    <Layout>

      <div className='cart-container'></div>

      <section className='container'>
        <div className='games-list'>
          {games &&
            games.map((item) => {
              return <GameItem game={item} key={item.id} />;
            })}
        </div>
      </section>
    </Layout>
  );
}
