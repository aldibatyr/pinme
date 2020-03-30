import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { useTheme, IconButton } from "react-native-paper";

const SettingsScreen = ({navigation}) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, }}>
        <View style={{justifyContent: 'flex-start', alignItems:'flex-end'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconButton icon="close" size={32} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
