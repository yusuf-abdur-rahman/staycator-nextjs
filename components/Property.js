import millify from 'millify';
import Image from 'next/image';
import { useState } from 'react';
import SimpleImageViewer from './SimpleImageViewer';

const Property = ({ propertyDetails }) => {
    const [viewPhotos, setViewPhotos] = useState(false);
    const {
        id,
        description,
        agency: { name },
        contactName,
        completionStatus,
        furnishingStatus,
        rooms,
        baths,
        area,
        externalID,
        phoneNumber: { phone, mobile, whatsapp },
        photos,
        price,
        purpose,
    } = propertyDetails;
    const shortDesc = description.substr(0, 300);
    const [desc, setDesc] = useState(shortDesc);

    // const setDescription = (prevDesc) => {
    //     setDesc((prevDesc) => {
    //         if (prevDesc === description) {
    //             return shortDesc;
    //         }
    //         else {
    //             return description;
    //         }
    //     });
    // }

    const setDescription = () => setDesc((prevDesc) => prevDesc === shortDesc ? description : shortDesc);

    return <section className="flex flex-col  justify-center p-4">
        <h1 className="text-3xl font-bold m-2 text-center">{name || 'NA'}</h1>
        <span className="p-2 text-xl font-semibold self-center">ROOMS: {rooms} BATHS: {baths}</span>
        <h2 className='text-2xl font-extrabold self-center'>AED {millify(price)}</h2>
        <p className='p-2 m-5 border-4 border-black cursor-pointer' onClick={setDescription}>
            {desc}{desc === description ? '' : '...'}
        </p>
        <div className='flex justify-between'>
            <h3 className='m-3 p-2 sm: self-center md:self-start md:text-xl font-bold tracking-wide cursor-pointer border-2 border-black hover:bg-slate-300 text-center'
                onClick={() => setViewPhotos(!viewPhotos)}
            >
                {viewPhotos ? "Hide Photos" : "View Photos"}
            </h3>
            <div className='flex gap-2 m-2 p-2 text-lg font-semibold'>
                <div className='flex flex-col items-center justify-center'>
                    <h1>COMPLETED</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`inline h-6 w-6 ${completionStatus === 'completed' && 'fill-green-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <span className='flex flex-col items-center justify-center'>
                    FURNISHED
                    <svg xmlns="http://www.w3.org/2000/svg" className={`inline h-6 w-6 ${furnishingStatus === 'furnished' && 'fill-green-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
            </div>
        </div>
        {viewPhotos && <SimpleImageViewer photos={photos} />}
        <br/>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold text-2xl'>Contact Name: {contactName || 'NA'}</h1>
            <div className='flex gap-2 font-semibold text-xl'>
                <div className='flex'>
                    <div className='p-1'>
                        <Image src="/wa-icon.svg" width='20' height='20' alt='Whatsapp'/>
                    </div>
                    <div style={{padding:'1px'}}>
                        {whatsapp || 'NA'}
                    </div>
                </div>
                <div className='flex'>
                    <div className='p-1'>
                        <Image src="/phone-icon.png" width='20' height='20' alt='Mobile'/>
                    </div>
                    <div style={{padding:'1px'}}>
                        {mobile || 'NA'}
                    </div>
                </div>
            </div>
        </div>
        <br/><br/>
    </section>
}

export default Property;