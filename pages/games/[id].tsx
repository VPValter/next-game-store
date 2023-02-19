import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
// import Link from 'next/link';
import Layout from '../../components/layout';
import { GameDetails } from '../../types';
import prisma from '../../lib/prisma';

// TODO: Params type??
export async function getServerSideProps({ params }) {
  const game: GameDetails = await prisma.games.findUniqueOrThrow({
    where: {
      id: params.id,
    },
  });
  return {
    props: {
      game: JSON.parse(JSON.stringify(game)),
    },
  };
}

interface Props {
  game: GameDetails;
}

const Game: NextPage<Props> = ({ game }) => {
  // console.log(game);
  return (
    game && (
      <Layout>
        <Head>
          <title>{game.title}</title>
        </Head>

        <section className='container'>
          <div className='game-details'>
            <Image
              src={game.posterImg}
              alt={game.title}
              width={360}
              height={540}
            />
            <div className='details-right'>
              <h1>{game.title}</h1>

              {/* <div className='tags'>
                {game.tags.map((item, i) => {
                  <Link href={`/games/tags/${item}`} key={i}>
                    {item}
                  </Link>
                })}
              </div> */}

              {game.description.split(/(?:<br>|\\n)+/).map((item, i) => (
                <p key={i}>{item}</p>
              ))}

              {/* TODO : DEV !!! */}

              {game.price > 0 ? (
                <p className='price'>{game.price}</p>
              ) : (
                <p className='price free'>FREE</p>
              )}

            </div>
          </div>
        </section>
      </Layout>
    )
  );
};

export default Game;
