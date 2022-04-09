import CityList from "../components/cities/CityList";
import { useState, useEffect } from "react";



const DUMMY_DATA = [
    {
        id: 1,
        title: 'Athens',
        image: 'https://cdn.britannica.com/66/102266-050-FBDEFCA1/acropolis-city-state-Greece-Athens.jpg',
        country: 'Greece',
        description: 'Classical Athens was a powerful city-state. It was a centre for the arts, learning and philosophy, and the home of Platos Academy and Aristotles Lyceum It is widely referred to as the cradle of Western civilization and the birthplace of democracy'
    },
    {
        id: 1,
        title: 'Madrid',
        image: 'https://www.tripsavvy.com/thmb/vLOWxjCoy7EO8RGxOifrMLCQrPY=/1500x1004/filters:fill(auto,1)/thingstodoinmadridskyline-d05bf06ef9144f04973d5bfc50fbcee6.jpg',
        country: 'Spain',
        description: 'Madrid is the capital and most populous city of Spain. The city has almost 3.4 million inhabitants and a metropolitan area population of approximately 6.7 million.'
    },
]




function AllCitiesPage() {

    const [count, setCount] = useState(2000);
    const [visible, setVisible] = useState(true);

    const [isLoading, setIsLoading] = useState(true);
    const [loadedCities, setLoadedCities] = useState([]);


    useEffect(() => {

        fetch('https://cb2022makistselios-default-rtdb.firebaseio.com/cities.json')
            .then((response) => { return response.json() })
            .then((data) => {
                const cities = [];

                for (const key in data) {
                    const city = {
                        id: key,
                        ...data[key]
                    }
                    console.log(city);
                    cities.push(city);
                }

                setIsLoading(false);
                setLoadedCities(cities);
            }
            )
    },[])


















    if (isLoading) {
        return (
            <section>
                <p>Loading Spinner.......</p>
            </section>
        )
    }



    return <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click me </button>
        <div>
            {count > 2005 && <h1>All Cities </h1>}
        </div>


        <button onClick={() => setVisible(!visible)}    >Hide Cities</button>

        {visible && <CityList cities={loadedCities} />}

    </div>
}

export default AllCitiesPage;