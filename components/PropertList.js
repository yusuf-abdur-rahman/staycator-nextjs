import Link from "next/link";
import PropertyCard from "./PropertyCard";

const PropertyList = ({ properties, rent }) => {
    console.log('Properties', properties)
    return <div className='p-5 flex flex-col items-center md:items-start'>
        <Link href={`search?purpose=${rent? 'for-rent' : 'for-sale'}`}>
            <div className="ml-5">
                <h1 className='text-2xl font-bold tracking-wide cursor-pointer hover:border-b-2 hover:border-slate-200 inline'>
                    Explore All Options To {rent ? 'Rent' : 'Buy'} {'>'}
                </h1>
            </div>
        </Link>
        <div className="md:grid grid-cols-6 gap-3 p-5">
            {properties.map(property => {
                return <div key={property.id}>
                    <PropertyCard {...property} />
                </div>
            })}
        </div>
    </div>
}

export default PropertyList;