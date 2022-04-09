import classes from './CityItem.module.css'
import Card from '../ui/Card'
import {useContext} from 'react'
import FavoritesContext from '../store/favorites-context'


function CityItem(props) {

    const FavoritesCTX = useContext(FavoritesContext);

    const itemIsFavorite =FavoritesCTX.itemIsFavorite(props.id)

    function toggleFavoritesStatusHandler() {
       if(itemIsFavorite){
           FavoritesCTX.removeFavorite(props.id);
           console.log("yes");
       }
       else
       {
         FavoritesCTX.addFavorite(
            {
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                country:props.country
             });
             console.log("oxi");
       }
    }






    return (
        <li className={classes.item}     >
            <Card>
                <div className={classes.image}  >
                    <img src={props.image} alt={props.title} />
                </div>

                <div className={classes.content}   >
                    <h3>{props.title}</h3>
                    <address>{props.country}</address>
                    <p>{props.description}</p>
                </div>

                <div className={classes.actions}    >
                    <button onClick={toggleFavoritesStatusHandler}> {itemIsFavorite? 'Remove from Favorites' :'Add to Favorites'}</button>
                </div>
            </Card>

        </li>
    );

}


export default CityItem;