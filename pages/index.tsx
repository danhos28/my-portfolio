import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Daniel Hosea</title>
      </Head>
      <Navbar />
      <Intro />
      <About />,
    </div>
  );
};

export default Home;
