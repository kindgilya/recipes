import { useEffect, useState } from 'react'
import './App.css'
import RecepiesList from './components/RecipiesList/RecepiesList'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes?limit=10&skip=${skip}`).then((response) => response.json()).then((data) => {
      setRecipes([...recipes, ...data.recipes]);
    })
  }, [skip])

  const skipHandler = () => {
    setSkip(skip + 10);
  }
  
  return <div className='container'>
    <RecepiesList recipes={recipes} skipHandler={skipHandler} countLoadedRecipes={recipes.length}/>
  </div>
}

export default App
