import CityItem from "./CityItem";
import classes from './CityList.module.css'

function CityList(props) {

    return (
        <ul  className={classes.list}    >
            {props.cities.map((city) => (
                <CityItem
                    key={city.id}
                    id={city.id}
                    image={city.image}
                    title={city.title}
                    country={city.country}
                    description={city.description}
                />
            ))
            }


        </ul>

    );


}


export default CityList;