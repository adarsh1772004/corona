import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
export default class StyleBar extends React.Component {
  render() {
    return (
      <View Style={{ flex: 1 }}>
        <DrawerItems {...this.props}></DrawerItems>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
