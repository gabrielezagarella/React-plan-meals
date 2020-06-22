import React from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import CustomHeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import DefaulText from "../components/DefaulText";

const FavoritesScreen = props => {
  const favMeal = useSelector(state => state.meals.favoriteMeals);

  if (favMeal.length === 0 || !favMeal) {
    return (
      <View style={styles.content}>
        <DefaulText>No Favorites Meals Found!</DefaulText>
      </View>
    );
  }
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default FavoritesScreen;
