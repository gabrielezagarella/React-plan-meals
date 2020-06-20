import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from "../data/dummy_data";
import CustomHeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";

const FavoritesScreen = props => {
  const favMeal = MEALS.filter(meal => meal.id == "m1" || meal.id === "m2");
  return <MealList listData={favMeal} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: "My Favorite",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};
export default FavoritesScreen;
