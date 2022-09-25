import PropertyCard from "../../components/PropertyCard";
import { fetchApi } from "../../utils/fetchApi";
import Filter from '../../components/Filter';
import { useState } from "react";

const SearchPage = ({ properties }) => {
    const [showFilter, setShowFilter] = useState(false);
    return <>
        {/* <div className="m-4 text-2xl tracking-widest font-bold flex items-center justify-end cursor-pointer text-black hover:text-slate-400"
        onClick={() => setShowFilter(!showFilter)}>
            <p>{showFilter === false ? 'Show': 'Hide'} Filter</p>
        </div> */}
        {/* {showFilter && <Filter filterEnabled={showFilter}/>} */}
        <div className="p-4 flex flex-col items-center justify-center md:grid md:gap-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-5">
            {properties.map((property) => {
                return <div key={property.id}>
                    <PropertyCard {...property} />
                </div>
            })
            }
        </div>
    </>
}


export const getServerSideProps = async (context) => {
    const purpose = context.query.purpose;
    const url = `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&hitsPerPage=20&purpose=${purpose}`;
    const data = await fetchApi(url);
    return {
        props: {
            properties: data?.hits
        }
    }
}

export default SearchPage;