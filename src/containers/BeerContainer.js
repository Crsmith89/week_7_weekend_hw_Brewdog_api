import { useEffect, useState } from 'react';
import BeerList from '../components/BeerList';
import BeerDetail from '../components/BeerDetail';
import './BeerContainer.css';

// Beers set as an empty array, "Beer List.map" don't know the length of fetch. null would break on beer list. truthy / falsy allows null selected beer.  
const BeerContainer = () => {
    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);
    // null becomes object. 

    useEffect(() => {
        getBeers();
    }, []);

    // fetches list 25 beers, can shorten list on page by using ?per_page10, review layout / css if get that far..
    const getBeers = function(){
        fetch('https://api.punkapi.com/v2/beers')
        .then(results => results.json())
        .then(data => setBeers(data));
    };
// click event, state selected beer...show details later props as functions
    const onBeerClickContainer = function(beer){
        setSelectedBeer(beer);
    };



// Passing through beers through this component, beer list,  
    return (
        <div className="main-container">
            <BeerList beers={beers} onBeerClick={(beer) => onBeerClickContainer(beer)}/>
            <BeerDetail beer={selectedBeer}/> 
                

        </div>
    )

}

export default BeerContainer; 