import React from "react"

const BeerDetail = ({beer}) => {

    if (beer === null){
        return null
    }
   

    return(
        <div>
            <h3>{beer.detail}</h3>
            <p>Beer Name: {beer.name}</p>
            <p>Tagline: {beer.tagline}</p>
            <p>Description:{beer.description}</p>
            <p>ABV %: {beer.abv}</p>
            <img src= {beer.image_url} width="50" height="230" alt=""/>
        </div>
    )
}

export default BeerDetail