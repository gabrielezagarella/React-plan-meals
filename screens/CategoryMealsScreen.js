import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy_data";
import MealList from "../components/MealList";
const CategoryMealsScreen = props => {

  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    cat => cat.categoryIds.indexOf(catId) >= 0
  );

  return (
    <MealList listData={displayedMeals} navigation={props.navigation}/>
  );
};
CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectCategory.title
  };
};

export default CategoryMealsScreen;
