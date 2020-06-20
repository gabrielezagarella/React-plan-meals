import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaulText from "../components/DefaulText";
import Color from "../constants/Color";

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <DefaulText>{props.label}</DefaulText>
      <Switch
        trackColor={{ true: Color.primaryColor }}
        thumbColor={Platform.OS === "android" ? Color.primaryColor : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};
const FiltersScreen = props => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <DefaulText style={styles.title}>
        Available Filters / Restrictions
      </DefaulText>
      <FilterSwitch
        label={"Gluten-free"}
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label={"Lactose-free"}
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label={"Vegan-free"}
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label={"Vegetarian-free"}
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filter Meals",
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
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={() => {
            navData.navigation.getParam("save")();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    margin: 20,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10
  }
});

export default FiltersScreen;
