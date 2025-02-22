import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

const ActivityWidget = ({activity}) => {
  return (
    <View style={styles.container}>
			<View style={styles.section}>
        <TouchableOpacity style={styles.activityItem}>
          <Icon type="material" name="play-circle" size={32} color="#2A9D8F"  />
          <View style={styles.textContainer}>
            <Text style={styles.activityText}>{activity.title}</Text>
            <Text style={styles.activitySubText}>{activity.description}</Text>
          </View>
        </TouchableOpacity>
			</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  activityItem: { 
		backgroundColor:'#EAEAEA',
		padding:20,
		borderRadius:10,
		flexDirection: "row", 
		alignItems: "center", 
		marginBottom: 10 
	},
	textContainer:{
		paddingLeft:15
	},
  activityText: { 
		fontSize: 14, 
		fontFamily: 'OpenSansMedium',
		color: "#333" 
	},
	activitySubText:{
		marginTop:10,
		fontSize: 10, 
		fontFamily: 'OpenSansRegular',
		color: "#333",
		paddingRight:20 
	}
});

export default ActivityWidget;
