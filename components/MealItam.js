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
import DefaulText from "../components/DefaulText";

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
              <View style={styles.titleContainer}>
                <DefaulText style={styles.title} numberOfLines={1}>
                  {props.title}
                </DefaulText>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <DefaulText>{props.duration}</DefaulText>
            <DefaulText>{props.complexity.toUpperCase()}</DefaulText>
            <DefaulText>{props.affordability.toUpperCase()}</DefaulText>
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
    backgroundColor: "#dcdcdc",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "85%"
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%"
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    width: "100%",
    textAlign: "center"
  }
});

export default MealItem;
