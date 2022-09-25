import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

// headers: {
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//     'X-RapidAPI-Key': '6383ee5c74msh4fd2395e2419c23p1a18cajsn8375f81ff4d6'
// }

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '6383ee5c74msh4fd2395e2419c23p1a18cajsn8375f81ff4d6'
          }
    })

    return data;
}