import '../styles/globals.css';
import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const override = {
    width: '50',
    height: '50',
    margin: "0 auto",
  };

  // useEffect(() => {
  //   //handleStart();
  //   //handleStop();
  //   router.events.on('routeChangeStart', handleStart);
  //   router.events.on('routeChangeComplete', handleStop);

  //   return () => {
  //     router.events.off('routeChangeStart', handleStart);
  //     router.events.off('routeChangeComplete', handleStop);
  //   }

  // }, [router])


  // const handleStart = () => {
  //   console.log('Route Changed');
  //   setLoading(true);
  // }

  // const handleStop = () => {
  //   setLoading(false);
  //   console.log('Route Change Complete');
  // }

  // return <>{!loading ? <Layout><Component {...pageProps} /> </Layout > :
  //   <ClipLoader loading={loading}  cssOverride={override} />}
  // </>

  return <Layout><Component {...pageProps} /> </Layout >
}

export default MyApp
