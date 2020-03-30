import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CommonActions } from "@react-navigation/native";

const ConversationsPage = ({ navigation }) => {
  // console.log(navigation.dangerouslyGetState());
  const handlePress = () => {
    navigation.dispatch(CommonActions.setParams({ conversationId: 1 }));
    navigation.navigate("Conversation");
  };
  return (
    <View>
      <Button title="Go to Conversation" onPress={() => handlePress()} />
    </View>
  );
};

export default ConversationsPage;

const styles = StyleSheet.create({});
