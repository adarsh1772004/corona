import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
export default class Covid extends React.Component {
  constructor() {
    super()
    this.state = {
      HospitalGlobal:'',
      Countries:'',
    };
  }
 
  
  render() {
   
    return (
      <View>
       <Text> West Bengal, Hydrabad</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
