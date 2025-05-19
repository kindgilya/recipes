import { useEffect, useState, useRef } from 'react'
import './App.css'
import RecepiesList from './components/RecipiesList/RecepiesList'
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Theme from './context/ThemeContext';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [skip, setSkip] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
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
      return () => {
        // document.removeEventListener('click', func)
        // clearTimeout(ref.current)
        // clearInterval(ref.current)
      }
  }, [skip])

  const skipHandler = () => {
    if (skip + 10 < totalRecipes.current) {
      setSkip((prev) => prev + 10)
    }
  }


  return (
    <Theme>
      <Header setSearchText={setSearchText} searchText={searchText} />
      <div className="container">
       <Filter 
        onFilterChange={()=>{}}
        recipes={recipes}
      />
      </div>
      <div className="container">
        <RecepiesList
          recipes={recipes}
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

/* 

ДЗ:

1. когда жмем на кнопку показаь еще, у нас срабатывает skipHandler + 10, нужно написать логику по блокровке смены состояния setSkip
 (взять тотал рецептов (он есть в ответе сервера)) (подумать где хранить тотал useRef) useRef() -> {current: 50}
2. сделать компонент лоадер(крутилка)
3. использовать лоадер в кнопке показать еще в момент загрузки
(надо понимать статус загрузки (добавить состояние статус загрузки (загружаю, не загружаю)))
4. надо создать компонент логотип svg
5. написать функцию для фильтрации recipes
6. стилизовать компоненты форм (инпут )
7. стилизовать компонент поиск (можно добавить иконку слева от инпут)
8. сделать фильтр выпадающим (будет кнопка показать скрыть фильтр (добавить стрелоку внутрь кнопки ))
9. кнопка переключения темы, постилизовать списки (точки)

*/
