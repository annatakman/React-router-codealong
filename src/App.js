import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CocktailList } from 'pages/CocktailList'
import { CocktailDetails } from 'pages/CocktailDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          < CocktailList />
        </Route>
        <Route path="/cocktails/:cocktailId" exact >
          <CocktailDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
