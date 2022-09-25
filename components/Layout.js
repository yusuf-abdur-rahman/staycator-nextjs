import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import Footer from "./Footer";

const Layout = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const override = {
        //position: 'absolute',
        //top: '50%',
        //left: '50%'
    };

    useEffect(() => {
        //handleStart();
        //handleStop();
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleStop);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleStop);
        }

    }, [router])


    const handleStart = () => {
        //console.log('Route Changed');
        setLoading(true);
    }

    const handleStop = () => {
        setLoading(false);
        console.log('Route Change Complete');
    }


    return <>
        <Head>
            <title>Staycator</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Link href={'/'}>
            <h1 className='p-2 cursor-pointer font-bold text-center text-5xl text-white bg-slate-700 tracking-wide'>STAYCATOR</h1>
        </Link>
        <main className="font-mono">
            {!loading ?
                <div>
                    {children}
                </div> :
                <div className="flex min-h-screen justify-center items-center">
                    <ClipLoader loading={loading} cssOverride={override}/>
                </div>}
        </main> 
        <Footer />
    </>

}


export default Layout;