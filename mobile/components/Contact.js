import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles";

const Contact = ({ name, photo, press }) => {
  return (
    <TouchableOpacity
      onPress={press}
      style={styles.listItem}
      underlayColor="#FFFF"
    >
      <View style={styles.imageWrap}>
        <Image style={{ width: 80, height: 80 }} source={{ uri: `${photo}` }} />
      </View>
      <View style={styles.titleWrap}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Contact;
