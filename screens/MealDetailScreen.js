import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { MEALS } from "../data/dummy_data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaulText from "../components/DefaulText";

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaulText>{selectedMeal.duration}m</DefaulText>
        <DefaulText>{selectedMeal.complexity.toUpperCase()}</DefaulText>
        <DefaulText>{selectedMeal.affordability.toUpperCase()}</DefaulText>
      </View>
      <DefaulText style={styles.title}>Ingredients</DefaulText>
      {selectedMeal.ingredients.map(ingredient => (
        <View style={styles.listItem}>
          <DefaulText key={ingredient}>{ingredient}</DefaulText>
        </View>
      ))}
      <DefaulText style={styles.title}>Steps</DefaulText>
      {selectedMeal.steps.map(step => (
        <View style={styles.listStep}>
          <DefaulText key={step}>{step}</DefaulText>
        </View>
      ))}
    </ScrollView>
  );
};
MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
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
    textAlign: "center"
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
