import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const About = props => {
  return (
    <SafeAreaView style={styles.a}>
    <Text style={styles.text}>I am Marzan Islam. I am studying at Dhaka International University, dept. of  CSE. I love problem solving. Cause, it makes me active and helps me to think different. I am really enjoying my work what I am doing and always ready to learn new technology.</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  a: {
    flex: 1,
  }, 
  text: {
    fontSize: 25,
    fontWeight: '300',
    marginLeft: 10
  }
});

export default About;