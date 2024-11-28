import React, { useState } from "react";
import { View } from "react-native";
import { Avatar, Text } from "@rneui/themed";

import * as ImagePicker from "expo-image-picker";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { styles } from "./InfoUser.styles";

export function InfoUser(props) {
  const { setLoading, setLoadingText } = props;
  const { uid, photoURL, displayName, email } = getAuth().currentUser;
  const [avatar, setAvatar] = useState(photoURL);
  const [error, setError] = useState(null);

  const changeAvatar = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [1, 1],
      });

      uploadImage(result.assets[0].uri);
      if (!result.canceled) uploadImage(result.uri);
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  const uploadImage = async (uri) => {
    setLoadingText("Actualizando Avatar");
    setLoading(true);

    try {
      const response = await fetch(uri);
      const blob = await response.blob();

      const storage = getStorage();
      const storageRef = ref(storage, `avatar/${uid}`);

      await uploadBytes(storageRef, blob);
      const imageUrl = await getDownloadURL(storageRef);

      const auth = getAuth();
      await updateProfile(auth.currentUser, { photoURL: imageUrl });

      setAvatar(imageUrl);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        containerStyle={styles.avatar}
        icon={{ type: "material", name: "person" }}
        source={{ uri: avatar }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>

      <View>
        <Text style={styles.displayName}>{displayName || "Anónimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}
