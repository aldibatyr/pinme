import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ConversationsPage from "./ConversationsPage";
import ConversationPage from "./ConversationPage";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import BottomNavigator from "./BottomNavigator";

const MessagesStack = createStackNavigator();

const MessagesStackNavigator = () => {
  const [conversations, setConversations] = useState({});
  const theme = useTheme();
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen
        name="Conversations"
        component={BottomNavigator}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center", paddingRight: 20 }}
              onPress={() => {}}
            >
              <Ionicons name="ios-add" size={32} color={theme.colors.text}/>
            </TouchableOpacity>
          )
        }}
      />
      <MessagesStack.Screen
        name="Conversation"
        component={ConversationPage}
      />
    </MessagesStack.Navigator>
  );
};

export default MessagesStackNavigator;

const styles = StyleSheet.create({});
