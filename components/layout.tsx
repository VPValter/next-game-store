import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Vlad&#39;s NextJS Game Store</title>
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

        <Search />

        <ul>
          <li>
            <Link href='/register'>Register</Link>
          </li>
          <li>
            <Link href='/login'>Login</Link>
          </li>
        </ul>
      </nav>

      {children}
    </>
  );
}
