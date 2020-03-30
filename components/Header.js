import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Appbar, Avatar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

const Header = ({ scene, previous, navigation }) => {
  const theme = useTheme();
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
  return (
    <Appbar.Header theme={{ colors: { primary: theme.colors.surface } }}>
      {previous ? (
        <Appbar.BackAction
          onPress={() => navigation.pop()}
          color={theme.colors.primary}
        />
      ) : (
        <React.Fragment />
      )}
      <Appbar.Content title={title} />
      <Appbar.Action />
      <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Avatar.Image
            size={40}
            source={{
              uri: "https://randomuser.me/api/portraits/women/68.jpg"
            }}
          />
        </TouchableOpacity>
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({});
