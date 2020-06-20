import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy_data";

const FavoritesScreen = props => {
  const favMeal = MEALS.filter(meal => meal.id == "m1" || meal.id === "m2");
  return <MealList listData={favMeal} navigation={props.navigation} />;
};
FavoritesScreen.navigationOptions = {
  headerTitle: "My Favorite"
};

export default FavoritesScreen;
