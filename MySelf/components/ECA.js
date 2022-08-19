import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Eca = props => {
  return (
    <ScrollView>
    <SafeAreaView style={styles.a}>
    <Text style={styles.text}>
    => Former Executive member {'\n'} DIU-CPC.{'\n'}{'\n'}
    => 	Former organizer {'\n'} Mujib Borsho IT Carnival 2021{'\n'}{'\n'}
    => 	Two times ICPC preliminary participant {'\n'} 2019, 2020{'\n'}{'\n'}
    => 	I have solved more than 250 problems on URI, UVa, Toph, Codeshef, Codeforces and so on.{'\n'}{'\n'}




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
});

export default Eca;