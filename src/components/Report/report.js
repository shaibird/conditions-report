import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export const Report = () => {
    
    const styles = StyleSheet.create({
        redText: {
          color: 'red',
          fontSize: 20
        }
      });
      
      

  return (
    <View>
      <Text>Hello!</Text>
      <Text style={styles.redText}>My favorite things are:</Text>
      <View>
        <Text>- Cheese burgers</Text>
        <Text>- Armadillos</Text>
        <Text>- Rattlesnake venom</Text>
      </View>
    </View>
  );
}