export const getFilterObject = (filters) => {
  const filterObj = {};

  // difficulty
  if (filters.difficulty) {
    filterObj.difficulty = filters.difficulty;
  }

  // cuisine
  if (filters.cuisine) {
    filterObj.cuisine = filters.cuisine;
  }

  // calories
  if (filters.calories.min || filters.calories.max) {
    filterObj.caloriesPerServing = {
      min: filters.calories.min ? Number(filters.calories.min) : 0,
      max: filters.calories.max ? Number(filters.calories.max) : Infinity,
    };
  }

  // tags
  if (filters.tags && filters.tags.length > 0) {
    filterObj.tags = filters.tags;
  }

  // mealType
  if (filters.mealType && filters.mealType.length > 0) {
    filterObj.mealType = filters.mealType;
  }

  // cookingTime
  if (filters.cookingTime) {
    let [min, max] = filters.cookingTime.split("-");
    min = Number(min);
    max = Number(max);
    if (isNaN(max)) max = Infinity;
    filterObj.totalTime = { min, max };
  }

  return filterObj;
};

export const getRecipesWithCalcTotalTime = (recipes) => {
  return recipes.map((recipe) => {
    const prepTimeMinutes = recipe?.prepTimeMinutes
      ? +recipe?.prepTimeMinutes
      : 0;
    const cookTimeMinutes = recipe?.cookTimeMinutes
      ? +recipe?.cookTimeMinutes
      : 0;

    return {
      ...recipe,
      totalTime: prepTimeMinutes + cookTimeMinutes,
    };
  });
};

export function superFilterFunc(filteredData) {
  return (item) => {
    return Object.keys(filteredData).every((key) => {
      if (!filteredData[key]) return true;
      if (
        typeof filteredData[key] === "object" &&
        filteredData[key] !== null &&
        !Array.isArray(filteredData[key])
      ) {
        return (
          filteredData[key].min <= item[key] &&
          filteredData[key].max >= item[key]
        );
      }
      if (Array.isArray(filteredData[key])) {
        if (Array.isArray(item[key])) {
          return item[key].some((val) => filteredData[key].includes(val));
        }
        return filteredData[key].includes(item[key]);
      }
      return filteredData[key] === item[key];
    });
  };
}
