import React from "react";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy_data";
import MealList from "../components/MealList";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    cat => cat.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectCategory.title
  };
};

export default CategoryMealsScreen;
