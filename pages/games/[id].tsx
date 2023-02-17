import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';

export default function Game() {
  return (
    <Layout>
      <Head>
        <title>Detroit: Become Human</title>
      </Head>

      <section className='container'>
        <div className='game-details'>
          <Image
            src='https://i.imgur.com/c0fZxQC.jpg'
            alt='Detroit: Become Human'
            width={360}
            height={540}
          />
          <div className='details-right'>
            <h1>Detroit: Become Human</h1>
            <div className='tags'></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
