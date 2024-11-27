import { View, Text } from "react-native";
import React from "react";
import { getAuth } from "firebase/auth";

export function UserLoggedScreen(props) {
  const auth = getAuth();
  console.log(auth);
  return (
    <View>
      <Text>Usuario </Text>
      <Text>{auth.name}</Text>
    </View>
  );
}
