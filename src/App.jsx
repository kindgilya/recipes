import { useEffect, useState } from "react";
import "./App.css";
import RecepiesList from "./components/RecipiesList/RecepiesList";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import Theme from "./context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRecipes,
  selectFilteredRecipes,
  selectRecipesStatus,
  selectTotalRecipes,
} from "./feachers/recipesSlice";

function App() {
  // const [recipes, setRecipes] = useState([]);
  const [skip, setSkip] = useState(0);
  const [searchText, setSearchText] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [filteredRecipes, setFilteredRecipes] = useState([]);
  // const [filters, setFilters] = useState({
  //   difficulty: "",
  //   cookingTime: "",
  //   cuisine: "",
  //   calories: { min: "", max: "" },
  //   tags: [],
  //   mealType: [],
  // });

  const dispatch = useDispatch();
  const totalRecipes = useSelector(selectTotalRecipes);
  const recipesStatus = useSelector(selectRecipesStatus);
  const filteredRecipes = useSelector(selectFilteredRecipes);

  useEffect(() => {
    dispatch(fetchRecipes(skip));
  }, [dispatch, skip]);

  // useEffect(() => {
  //   // setIsLoading(true);
  //   fetch(`https://dummyjson.com/recipes?limit=10&skip=${skip}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRecipes((prev) => [...prev, ...data.recipes]);
  //       // totalRecipes.current = data.total;
  //     });
  //   // .finally(() => setIsLoading(false));
  //   // destroy | перед вызовом следующей итерации useEffect
  //   return () => {};
  // }, [skip]);

  const skipHandler = () => {
    if (skip + 10 < totalRecipes) {
      setSkip((prev) => prev + 10);
    }
  };

  // if (searchText) {
  //   result = result.filter((recipe) =>
  //     recipe.name.toLowerCase().includes(searchText.toLowerCase())
  //   );
  // }

  return (
    <Theme>
      <Header setSearchText={setSearchText} searchText={searchText} />
      <div className="container">
        <Filter />
      </div>
      <div className="container">
        <RecepiesList
          recipes={filteredRecipes}
          skipHandler={skipHandler}
          countLoadedRecipes={totalRecipes}
          isLoading={recipesStatus}
          totalRecipes={totalRecipes}
        />
      </div>
    </Theme>
  );
}

export default App;

// const Header = () => {
//   const user = useSelector(selectUser)
//   const getWelcom = () => {
//     // Math.random
//   }

//   return <HeaderUI></HeaderUI>
// }

// export default Header

// const HeaderUI = ({id, name, avatar}) => {
//   return (
//     <header>id: {id} name: {name} avatar: {avatar}</header>
//   )
// }

// export default HeaderUI
