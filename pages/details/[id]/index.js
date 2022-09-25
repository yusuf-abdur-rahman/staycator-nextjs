import { useRouter } from 'next/router'
import Property from '../../../components/Property';
import { fetchApi } from '../../../utils/fetchApi';


export default function DetailsPage({property}) {
    console.log('data', property);
    const router = useRouter();
    return <>
        <Property propertyDetails={property} />
    </>
}

export async function getServerSideProps(context) {
    const data = await fetchApi(`https://bayut.p.rapidapi.com/properties/detail?externalID=${context.params.id}`);
    return {
        props: {
            property: data
        }
    }

}