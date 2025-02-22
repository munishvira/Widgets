import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ProgressWidget from '../component/progressWidget';

const scores = [
  { label: "Mental Wellbeing", value: 41, operator:'-', subValue:9, color: "#E63946" },
  { label: "Work-Life Balance", value: 47, operator:'+', subValue:7, color: "#FFBF00" },
  { label: "Self Efficacy", value: 50, operator:'-', subValue:30, color: "#FFBF00" },
];

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {/* Widget to show wellness progress */}
        <ProgressWidget scores={scores} /> 
      </View>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('DAILY')}>
        <Text style={styles.buttonText}>Navigate to other Widget</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FCFB7',
    padding:20,
    alignItems:'center'
  },
  cardContainer:{
    backgroundColor:"#FFF",
    padding:20,
    borderRadius:20,
    elevation:5
  },
  button:{
    marginTop:20,
    padding:10,
    borderRadius:20,
    backgroundColor:"#264B5A"
  },
  buttonText:{
    fontSize: 14,
    fontFamily: 'OpenSansBold',
    color:'#FFF',
    lineHeight:24,
  }
})
