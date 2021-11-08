import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import About from '../components/About';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  const [isDark, setDark] = useState(false);

  return (
    <div>
      <Head>
        <title>Daniel Hosea</title>
      </Head>
      <Navbar isDark={isDark} setDark={setDark} />
      <Intro isDark={isDark} />
      <About isDark={isDark} />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
