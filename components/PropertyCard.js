import Image from 'next/image';
import millify from 'millify';
import Link from 'next/link';

function PropertyCard({ id, agency: { name }, coverPhoto, furnishingStatus, price, title, externalID }) {
    const isFurnished = furnishingStatus === 'furnished' ? 'YES'
        : furnishingStatus === 'unfurnished' ? 'NO'
            : 'NA';
    return <Link href={`details/${externalID}`}>
        <div className='p-2 m-2 bg-slate-50 cursor-pointer shadow-md md:hover:scale-105 md:transition md:ease-in-out md:duration-200 md:hover:border-2 font-bold md:hover:m-0 hover:border-2 hover:border-blue-400'>
            <Image src={coverPhoto.url} width={'300px'} height={'150px'} />
            <h1 className='p-1'>{name.substr(0, 10)}...</h1>
            <p className='p-1 font-semibold'>AED {millify(price)}</p>
            <p className='p-1 font-semibold'>FURNISHED: {isFurnished}</p>
        </div>
    </Link>
}

export default PropertyCard;