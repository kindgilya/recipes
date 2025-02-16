import { useEffect, useState } from 'react'
import './App.css'
import RecepiesList from './components/RecipiesList/RecepiesList'

function App() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes').then((response) => response.json()).then((data) => setRecipes(data))
  }, [])
  
  return <div className='container'>
    <RecepiesList recipes={recipes}/>
  </div>
}

export default App

/* 

create git rep -> commits

folder components

scss
classnames (module)

*/
