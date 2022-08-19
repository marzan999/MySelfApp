import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Education = props => {
  return (
    <SafeAreaView style={styles.a}>
    <Text style={styles.text}>
    B.Sc in CSE (3.86 (avg.) out of 4.00)
Dhaka International University{'\n'}
2019 – present{'\n'}{'\n'}

H.S.C. in Science (3.83 out of 5.00)
Gabtali Govt. Degree College{'\n'}
2016 - 2018

</Text>
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

export default Education;