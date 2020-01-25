import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ContactData = ({ contacts, id }) => {
  return (
    <View style={{ width: "90%" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50
        }}
      >
        <Image
          style={{ width: 100, height: 150, width: "30%", borderRadius: 100 }}
          source={{ uri: `${contacts[id].photo}` }}
        />
        <Text
          style={{
            marginLeft: 20,
            textAlign: "center",
            fontSize: 30,
            width: "60%"
          }}
        >
          {contacts[id].name}
        </Text>
      </View>
      <View style={{ marginTop: 50, paddingLeft: 20 }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <MaterialIcons name="local-phone" size={32} />
          <Text
            style={{
              paddingLeft: 20,
              textDecorationLine: "underline",
              fontSize: 22
            }}
          >
            {contacts[id].phone}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <MaterialIcons name="email" size={32} />
          <Text
            style={{
              paddingLeft: 20,
              textDecorationLine: "underline",
              fontSize: 22
            }}
          >
            {contacts[id].eMail}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ContactData;
