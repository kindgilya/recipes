import { useEffect, useState } from 'react'
import './App.css'
import RecepiesList from './components/RecipiesList/RecepiesList'
import Header from './components/Header/Header';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [skip, setSkip] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes?limit=10&skip=${skip}`).then((response) => response.json()).then((data) => {
      setRecipes([...recipes, ...data.recipes]);
    })
  }, [skip])

  const skipHandler = () => {
    setSkip(skip + 10);
  }
  
  return <>
  {searchText}
  <Header setSearchText={setSearchText} searchText={searchText}></Header>
  <div className='container'>
    <RecepiesList recipes={recipes} skipHandler={skipHandler} countLoadedRecipes={recipes.length}/>
  </div>
  </>
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


*/
