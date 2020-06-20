import React from "react";
import { Platform, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Color from "../constants/Color";
import { Ionicons } from "@expo/vector-icons";

const defaulStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Color.primaryColor : "white"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
  headerTitleStyle: {
    fontFamily: "open-sans-bold"
  }
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories"
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaulStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaulStackNavOptions
  }
);

const FilterNavigator = createStackNavigator({
  Filters: FiltersScreen
});

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Color.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans" }}>Meals</Text>
        ) : (
          ""
        )
    }
  },
  Favorite: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Color.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans" }}>Meals</Text>
        ) : (
          ""
        )
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Color.primaryColor
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans"
          },
          activeTintColor: Color.accentColor
        }
      });

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
        drawerIcon: draweInfo => {
          return (
            <Ionicons
              name="md-restaurant"
              size={25}
              color={draweInfo.tintColor}
            />
          );
        }
      }
    },
    Filters: {
      screen: FilterNavigator,
      navigationOptions: {
        drawerIcon: draweInfo => {
          return (
            <Ionicons name="md-filing" size={25} color={draweInfo.tintColor} />
          );
        }
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: Color.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold"
      }
    }
  }
);
export default createAppContainer(MainNavigator);
