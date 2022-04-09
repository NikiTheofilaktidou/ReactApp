import {useContext} from 'react';
import FavoritesContext from '../components/store/favorites-context';
import CityList from '../components/cities/CityList'


function FavoritesPage() {

    const FavoritesCTX = useContext(FavoritesContext)

    let content;

    if(FavoritesCTX.totalFavorites === 0){
        content = <p>You have no favorite cities yet...</p>
    }
    else{
        content=<CityList cities={FavoritesCTX.favorites}></CityList>
    }



    return <div>
        <h1>My Favorites Cities!!!</h1>
        <>{content}</>
    </div>
}

export default FavoritesPage;