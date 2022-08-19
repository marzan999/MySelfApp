import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Skills = props => {
  return (
    <ScrollView>
    <SafeAreaView style={styles.a}>
    <Text style={styles.text}>
    <Text style={styles.text2}>Projects{'\n'}{'\n'}</Text>
	 => C Programming Learning App using React Native.{'\n'}{'\n'}
	 => Todo List using React Native.{'\n'}{'\n'}
	 => Planet App using React Native.{'\n'}{'\n'}
	 => Supershop Billing System using C++.{'\n'}{'\n'}
	 => Stopwatch using C++.{'\n'}{'\n'}
	 => TicTacToe game using C++ and Java.{'\n'}{'\n'}
	 => ATM Transaction using C++.{'\n'}{'\n'}
	 => Music Player app for android using Java.{'\n'}{'\n'}
	 => Wallpaper app for android using Java.{'\n'}{'\n'}{'\n'}{'\n'}

   <Text style={styles.text2}>Work Experience{'\n'}{'\n'}</Text>
   => Android App Development {'\n'} Dec 2020 – April 2021{'\n'}{'\n'}
   => Competitive Problem Solving {'\n'} April 2019 – present{'\n'}{'\n'}
   => React Native Development  {'\n'} June 2021 - present{'\n'}{'\n'}



</Text>

    </SafeAreaView>
    </ScrollView>
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
  }, 
  text2: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});

export default Skills;