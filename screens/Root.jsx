import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DrawerNavigator from "./appScreens/DrawerNavigator";
import { useContext } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { Context } from "../context/context";


const Root = () => {
  const context = useContext(Context);
  const theme = context.theme;
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <DrawerNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Root;

const styles = StyleSheet.create({});
