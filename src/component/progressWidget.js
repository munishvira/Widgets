import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

const ProgressWidget = ({scores}) => {
  return (
    <>
      <Text style={styles.growthText}>Your areas for growth are:</Text>
      <View style={styles.container}>
        {scores && scores.length > 1 && scores.map((item, index) => (
          <View style={styles.progressContainer} key={index}>
            <AnimatedCircularProgress   // Library to plot Circle
              size={80}
              width={7}
              backgroundWidth={7}
              fill={item.value}
              tintColor={item?.color || "#E63946"}
              backgroundColor="#EDEDEC"
              arcSweepAngle={240}
              rotation={240}
              lineCap="round"
            >
              {fill => <View style={{alignItems:'center'}}>
                <Text style={styles.valueText}>{item.value}</Text>
                <Text style={[styles.subValueText,{color:item.operator === '+' ? '#2A9D8F' : '#E63946'}]}>
                  ({item.operator}{item.subValue})
                </Text>
              </View>}
            </AnimatedCircularProgress>
            <Text style={styles.boldNumericText}>{item.value} <Text style={styles.numericText}>out of 100</Text></Text>
            <Text style={styles.labelText}>{item.label}</Text>
          </View>
        ))}
        {scores && scores.length <= 0 && <Text style={styles.labelText}>No data available</Text>}
      </View>
    </>
  )
}

export default ProgressWidget

const styles = StyleSheet.create({
  growthText:{
    fontSize: 16,
    fontFamily: 'OpenSansBold',
    color:'#333',
    lineHeight:24,
  },
	container: {
    flexDirection: 'row',
    justifyContent:'space-between',
		marginTop:20,
		width:'100%'
  },
	progressContainer:{
		flex:1,
		alignItems:'center',
	},
	valueText:{
		fontSize: 16,
    fontFamily: 'OpenSansBold',
    color:'#333',
	},
	subValueText:{
		fontSize: 12,
    fontFamily: 'OpenSansRegular',
    color:'#333',
	},
	boldNumericText:{
		fontSize: 12,
    fontFamily: 'OpenSansBold',
    color:'#666',
	},
	numericText:{
		fontSize: 12,
    fontFamily: 'OpenSansRegular',
    color:'#666',
	},
	labelText:{
		marginTop:5,
		fontSize: 16,
    fontFamily: 'OpenSansMedium',
    color:'#333',
		textAlign:'center'
	}
})
