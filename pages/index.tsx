import Head from 'next/head';
import styles from '../styles/Home.module.css';
import prisma from '../lib/prisma';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import GameItem from '../components/GameItem';

interface Game {
  id: string;
  title: string;
  price: number;
  posterImg: string;
}

export async function getServerSideProps() {
  const games: Array<Game> = await prisma.games.findMany();
  return {
    props: {
      games: JSON.parse(JSON.stringify(games)),
    },
  };
}

interface Props {
  games: Game[];
}

export default function Home({ games }: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <nav className='navbar bg-lgray'>
        <div className='home-link'>
          <Link href='/'>
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </div>
        <form className='search-form'>
          <input type='search' name='search' id='' placeholder='Search' />
          <button type='submit'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <ul>
          <li>
            <Link href='/register'>Register</Link>
          </li>
          <li>
            <Link href='/login'>Login</Link>
          </li>
        </ul>
      </nav>

      <div className='cart-container'></div>

      <section className='container'>
        <div className='games-list'>
          {games &&
            games.map((item) => {
              return <GameItem game={item} key={item.id} />;
            })}
        </div>
      </section>
    </>
  );
}
