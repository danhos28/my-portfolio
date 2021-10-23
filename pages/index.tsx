import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import About from './components/About';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import { Canvas, useFrame } from '@react-three/fiber';
import ThreeBg from './components/ThreeBg';

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
