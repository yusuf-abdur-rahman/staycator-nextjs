import Link from 'next/link';
import Image from 'next/image';
import Banner from '../components/banner';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import PropertyList from '../components/PropertList';
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DynamicBanner = dynamic(() => import('../components/banner'), {
  suspense: true,
})


export default function Home({ propertiesForRent, propertiesForSale }) {
  console.log(propertiesForRent, propertiesForSale);
  return (
    <>
      <Banner2/>
      <br></br>
      <PropertyList properties={propertiesForSale} rent={false} />
      <hr />
      <PropertyList properties={propertiesForRent} rent={true} />
    </>
  )
}

export const getStaticProps = async () => {
  const propertiesForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
  const propertiesForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  return {
    props: {
      propertiesForRent: propertiesForRent?.hits,
      propertiesForSale: propertiesForSale?.hits
    }
  }

}

const Banner2 = () => {
  return <div className="flex flex-col items-center justify-center text-center p-2 text-gray-600 bg-slate-200">
      <h1 className="font-bold text-3xl p-2">
          Your One Stop Shop to Buy and Rent Houses.
      </h1>
      <h2 className="font-bold text-xl tracking-wide">Your next home is just a few clicks away.</h2>
  </div>
}

