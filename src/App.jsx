import { useEffect, useState, useRef } from 'react'
import './App.css'
import RecepiesList from './components/RecipiesList/RecepiesList'
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Theme from './context/ThemeContext';

function superFilterFunc(filteredData) {
  return (item) => {
    return Object.keys(filteredData).every((key) => {
      if (!filteredData[key]) return true;
      if (typeof filteredData[key] === "object" && filteredData[key] !== null && !Array.isArray(filteredData[key])) {
        return filteredData[key].min <= item[key] && filteredData[key].max >= item[key];
      }
      if (Array.isArray(filteredData[key])) {
        if (Array.isArray(item[key])) {
          return item[key].some(val => filteredData[key].includes(val));
        }
        return filteredData[key].includes(item[key]);
      }
      return filteredData[key] === item[key];
    });
  };
}

function App() {
  const [recipes, setRecipes] = useState([]);
  const [skip, setSkip] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [filters, setFilters] = useState({
    difficulty: '',
    cookingTime: '',
    cuisine: '',
    calories: { min: '', max: '' },
    tags: [],
    mealType: []
  });
  const totalRecipes = useRef(0);

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://dummyjson.com/recipes?limit=10&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes((prev) => [...prev, ...data.recipes])
        totalRecipes.current = data.total
      })
      .finally(() => setIsLoading(false))
      // destroy | перед вызовом следующей итерации useEffect
      return () => {}
  }, [skip])
  
  const skipHandler = () => {
    if (skip + 10 < totalRecipes.current) {
      setSkip((prev) => prev + 10)
    }
  }

   useEffect(() => {
    let filterObj = {};
    // difficulty
    if (filters.difficulty) filterObj.difficulty = filters.difficulty;
    // cuisine
    if (filters.cuisine) filterObj.cuisine = filters.cuisine;
    // calories
    if (filters.calories.min || filters.calories.max) {
      filterObj.caloriesPerServing = {
        min: filters.calories.min ? Number(filters.calories.min) : 0,
        max: filters.calories.max ? Number(filters.calories.max) : Infinity
      };
    }
    // tags
    if (filters.tags && filters.tags.length > 0) filterObj.tags = filters.tags;
    // mealType
    if (filters.mealType && filters.mealType.length > 0) filterObj.mealType = filters.mealType;
    // cookingTime 
    if (filters.cookingTime) {
      let [min, max] = filters.cookingTime.split('-');
      min = Number(min);
      max = Number(max);
      if (isNaN(max)) max = Infinity;
      filterObj.totalTime = { min, max };
    }

    let result = recipes.map(r => ({ ...r, totalTime: r.prepTimeMinutes + r.cookTimeMinutes }));

    if (searchText) {
      result = result.filter(recipe =>
        recipe.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredRecipes(result.filter(superFilterFunc(filterObj)));
  }, [recipes, searchText, filters]);


  return (
    <Theme>
      <Header setSearchText={setSearchText} searchText={searchText} />
      <div className="container">
       <Filter 
        onFilterChange={setFilters}
        currentFilters={filters}
      />
      </div>
      <div className="container">
        <RecepiesList
          recipes={filteredRecipes}
          skipHandler={skipHandler}
          countLoadedRecipes={recipes.length}
          isLoading={isLoading}
          totalRecipes={totalRecipes.current}
        />
      </div>
    </Theme>

  )
}

export default App
