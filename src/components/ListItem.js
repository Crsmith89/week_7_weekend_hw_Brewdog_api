import React from 'react'
const ListItem = ({beer, onBeerClick}) => {

    const handleClick = function(){
        onBeerClick(beer)
    }
// console.log(`clicked on${beer}`) show what i have clicked on
    return <li onClick={handleClick}>{beer.name}</li>

}

export default ListItem; 