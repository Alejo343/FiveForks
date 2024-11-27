import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { screen } from "../../utils";

export default function ResturantsScreen(props) {
  const { navigation } = props;

  const goToAddResturant = () => {
    navigation.navigate(screen.restaurant.addRestaurant);
  };

  return (
    <View>
      <Text>pantalla</Text>
      <Button title="Crear resturante" onPress={goToAddResturant}></Button>
    </View>
  );
}
