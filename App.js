import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Covid from "./Screen/Covid-19Status";
import HomeMedic from "./Screen/HomeMedic";
import Hospital from "./Screen/Hospital";
import Prevension from "./Screen/Prevention";
import AllCountry from "./Screen/AllCountry";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { State } from "react-native-gesture-handler";
import StyleBarMenu from "./Component/StyleBarMenu";
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const AppNAvigator = createMaterialBottomTabNavigator({
  Covid19Status: {
    screen: Covid,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./download-_1_.jpg")}
          style={{ width: 30, height: 30 }}
        ></Image>
      ),
    },
  },
  Prevension: {
    screen: Prevension,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./download.png")}
          style={{ width: 30, height: 30 }}
        ></Image>
      ),
    },
  },
  HomeMedic: {
    screen: HomeMedic,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./images.png")}
          style={{ width: 30, height: 30 }}
        ></Image>
      ),
    },
  },
  Hospital: {
    screen: Hospital,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./Hospital.png")}
          style={{ width: 30, height: 30 }}
        ></Image>
      ),
    },
  },
});
const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppNavigator,
    },
    AllCountry: {
      screen: AllCountry,
    },
    State: {
      screen: State,
    },
  },
  { contentComponent: StyleBarMenu }
);
const AppContainer = createAppContainer(DrawerNavigator);
const styles = StyleSheet.create({});
