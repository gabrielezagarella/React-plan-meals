import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaulText from "../components/DefaulText";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaulText>{props.children}</DefaulText>
    </View>
  );
};
const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const availableMeals = useSelector(state => state.meals.meals);
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  return (
    <ScrollView>
      <DefaulText style={styles.title}>{selectedMeal.title}</DefaulText>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaulText>{selectedMeal.duration}m</DefaulText>
        <DefaulText>{selectedMeal.complexity.toUpperCase()}</DefaulText>
        <DefaulText>{selectedMeal.affordability.toUpperCase()}</DefaulText>
      </View>
      <DefaulText style={styles.title}>Ingredients</DefaulText>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <DefaulText style={styles.title}>Steps</DefaulText>
      {selectedMeal.steps.map(step => (
        <DefaulText style={styles.listStep} key={step}>
          {step}
        </DefaulText>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    )
  };
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
    margin: 8
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  },
  listStep: {
    marginVertical: 5,
    marginHorizontal: 15,
    padding: 5
  }
});

export default MealDetailScreen;
