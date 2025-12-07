// import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/Filter/Filter";
// import RecepiesList from "../components/RecipiesList/RecepiesList";
// import {
//   fetchRecipes,
//   selectFilteredRecipes,
//   selectRecipesStatus,
//   selectTotalRecipes,
// } from "../feachers/recipesSlice";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
// import mockServer from "../api/fakeServer.js";
// import { useEffect } from "react";

const HomePage = () => {
  // const [skip, setSkip] = useState(0);
  // const dispatch = useDispatch();
  // const totalRecipes = useSelector(selectTotalRecipes);
  // const recipesStatus = useSelector(selectRecipesStatus);
  // const filteredRecipes = useSelector(selectFilteredRecipes);

  // useEffect(() => {
  //   dispatch(fetchRecipes(skip));
  // }, [dispatch, skip]);

  // const skipHandler = () => {
  //   if (skip + 10 < totalRecipes) {
  //     setSkip((prev) => prev + 10);
  //   }
  // };

  // useEffect(() => {
  //   mockServer.getRecipes().then((data) => console.log(data));
  // }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Filter />
      </div>
      <div className="container">
        <Outlet />
        {/* <RecepiesList
          recipes={filteredRecipes}
          skipHandler={skipHandler}
          countLoadedRecipes={totalRecipes}
          isLoading={recipesStatus}
          totalRecipes={totalRecipes}
        /> */}
      </div>
    </>
  );
};

export default HomePage;
