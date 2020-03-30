import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export const CocktailDetails = () => {
  const { cocktailId } = useParams()
  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
      .then(res => res.json())
      .then(json => {
        setCocktails(json.drinks)
      })
  }, [cocktailId])

  return (
    <div>
      {cocktails.map((cocktail) => (
        <div key={cocktail.idDrink}>
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <h3>Instructions</h3>
          <p>{cocktail.strInstructions}</p>
        </div>
      ))}
    </div>
  )
}