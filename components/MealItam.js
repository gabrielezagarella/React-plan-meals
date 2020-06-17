import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackground
} from "react-native";

const MealItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.mealItem}>
      <TouchableCmp onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: props.image }} style={styles.image}>
              <Text style={styles.title}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{props.duration}</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};
const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc"
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "90%"
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },
  image: {
    width: "100%",
    height: "100%",
    alignItems: "center"
  }
});

export default MealItem;
