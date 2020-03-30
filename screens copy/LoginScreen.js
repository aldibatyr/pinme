import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  useWindowDimensions
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [error, setError] = useState("");
  const window = useWindowDimensions();
  const validateField = text => {
    if (text.length < 2) {
      setError("Name must be at least 1 character long");
      setButtonDisabled(true);
    } else {
      setError("");
      setButtonDisabled(false);
    }
    setName(text);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <View style={{ height: 50, marginTop: 40, alignItems: "center" }}>
          <AntDesign name="user" size={32} />
        </View>
        <View>
          <Text>Log In</Text>
          <TextInput
            placeholder="what is your name?"
            color="black"
            placeholderTextColor="grey"
            onChangeText={textValue => validateField(textValue)}
            style={{
              height: 50,
              borderBottomColor: "grey",
              borderBottomWidth: 0.5,
              width: window.width - 40
            }}
          />
          {error ? <Text>{error}</Text> : <Text></Text>}
        </View>
        <Button
          disabled={buttonDisabled}
          title="Log In"
          onPress={() =>
            navigation.navigate("home", {
              name: name
            })
          }
        />
        <Text>Don't have an account?</Text>
        <Button
          title="Register"
          onPress={() => navigation.navigate("register")}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
