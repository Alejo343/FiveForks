import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Overlay, Text } from "@rneui/themed";
import { styles } from "./LoadingModal.styles";

export function LoadingModal({ show, text }) {
  return (
    <Overlay visible={show} overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#00a680" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}
