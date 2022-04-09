import NewCityForm from '../components/cities/NewCityForm'

import { useNavigate } from 'react-router-dom'

function NewCitiesPage() {
    const navigate = useNavigate();

    function addCityHandler(cityData) {


        fetch('https://cb2022makistselios-default-rtdb.firebaseio.com/cities.json', {

            method: 'POST',
            body: JSON.stringify(cityData),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(() => { navigate('/', { replace: true }) })

    }






    return (
        <section>
            <h1>Add new City</h1>
            <NewCityForm onAddCity={addCityHandler} />
        </section>
    )

}

export default NewCitiesPage;