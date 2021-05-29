import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
export default class AllCountry extends React.Component {
  constructor() {
    super()
    this.state = {
    Countries:'' ,
    };
  }
 
  
  render() {
   
    return (
      <View>
       <Text> America, Spain</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
