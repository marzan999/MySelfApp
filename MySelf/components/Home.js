import { View, Text, Button, StyleSheet, TouchableOpacity, onPress, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

const NavigateToDetails = props => {
    props.navigation.navigate('About')
}
const NavigateToEducation = props => {
    props.navigation.navigate('Education')
}

const Home = props => {
  return (
    <View>

    <Text style={styles.hello}>HELLO</Text>
    <Text style={styles.iamM}>I'm Marzan</Text>
    <Text style={styles.iamMM}>This is all about me. You can check and know about me and my details. </Text>

         <TouchableOpacity style={styles.button} onPress={() => NavigateToDetails(props)} >
        <Text>ABOUT</Text>
      </TouchableOpacity>

         <TouchableOpacity style={styles.button} onPress={() => NavigateToEducation(props)} >
        <Text>EDUCATION</Text>
      </TouchableOpacity>

         <TouchableOpacity style={styles.button} onPress={() => NavigateToDetails(props)} >
        <Text>SKILLS</Text>
      </TouchableOpacity>

         <TouchableOpacity style={styles.button} onPress={() => NavigateToDetails(props)} >
        <Text>ECA</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity title='go to about' onPress={() => NavigateToDetails(props)}></TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#20B2AA",
    padding: 10, 
    marginTop: 40,
    marginLeft: 110,
    marginRight: 110, 
    height: 70,
    borderRadius: 20
    }, 

    hello: {
      fontSize: 40, 
      fontWeight: 'bold',
      color: '#556B2F',
      marginLeft: 15,
      marginTop: 30
    }, 
    iamM: {
      fontSize: 40, 
      color: '#40E0D0',
      marginLeft: 15
    }, 
    iamMM: {
marginLeft: 15, 
marginTop: 10
    }
});

export default Home;