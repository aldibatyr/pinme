import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Button,
  SafeAreaView
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Registration = ({ navigation }) => {
  const window = useWindowDimensions();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <View style={{ marginTop: 40, marginBottom: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 24 }}>Let's Get Your Info</Text>
        </View>
        <View>
          <TextInput
            style={{ ...styles.input, width: window.width - 40 }}
            placeholder="What is your name?"
          />
          <TextInput
            style={{ ...styles.input, width: window.width - 40 }}
            placeholder="Password"
          />
          <TextInput
            style={{ ...styles.input, width: window.width - 40 }}
            placeholder="Repeat Password"
          />
          <View>
            <Button title="Register" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "center"
          }}
        >
          <Text>Already registered? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={{ color: "blue" }}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5
  }
});
