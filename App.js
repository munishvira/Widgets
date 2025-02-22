import { View, Platform, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './src/screens/profile';
import Home from './src/screens/home';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Explore from './src/screens/explore';
import Care from './src/screens/care';
import Daily from './src/screens/daily';
import {HomeSvg,SearchSvg,CareSvg,ProfileSvg,GemSvg,FilledHomeSvg,FilledSearchSvg,FilledCareSvg,FilledProfileSvg,FilledGemSvg} from './src/svg/tabBarIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// const data = [
//   {id:1,icon:'Sun',label:'Morning',activity:[{text1:"Dealing with Rejection",text2:"Learn to heal with and cope with being rejected"},{text1:"How to Fight Fairly",text2:"Learn how to have peaceful, constructive disagreements"}]},
//   {id:1,icon:'Tea',label:'Afternoon',activity:[{text1:"Exploring Met and Unmet",text2:"Learn how to meet your emotional needs"},{text1:"Communicating Assertively",text2:"This session will help you communicate assertively with confidence in both your words and body language"}]},
//   {id:1,icon:'Moon',label:'Evening',activity:[{text1:"Loving-Kindness Meditation",text2:"Channel compassopn and goodwill to others to feel connected and open hearted"},{text1:"Listening Empathetically",text2:"Learn the foundational skills of listening to others with empathy"}]}
// ]

function App() {
  return (
		<SafeAreaProvider>
			<StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content' />
			<NavigationContainer>
				<Tab.Navigator 
					initialRouteName="HOME" // Initial Route when apps open
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {

							let IconComponent; // Show Svg according to Tab
							let showBadge = route.name === "PROFILE"; // Show dot on Profile tab

							if (route.name === "HOME") {
								if(focused) IconComponent = FilledHomeSvg 
									else IconComponent = HomeSvg 
							} else if (route.name === "EXPLORE") {
								if(focused) IconComponent = FilledSearchSvg 
									else IconComponent = SearchSvg 
							} else if (route.name === "CARE") {
								if(focused) IconComponent = FilledCareSvg 
									else IconComponent = CareSvg 
							} else if (route.name === "DAILY") {
								if(focused) IconComponent = FilledGemSvg 
									else IconComponent = GemSvg 
							} else if (route.name === "PROFILE") {
								if(focused) IconComponent = FilledProfileSvg 
									else IconComponent = ProfileSvg 
							}

							return (
								<View style={styles.iconContainer}>
									<IconComponent color={color} size={size} />
									{showBadge && <View style={styles.dotBadge} />}
								</View>
							);
						},
						tabBarLabelStyle: styles.tabBarLabel,
						headerShown:false,
						tabBarActiveTintColor: "#FFFFFF", 
						tabBarInactiveTintColor: "#666666",
						tabBarStyle: styles.tabBar,
						tabBarButton: (props) => <TouchableOpacity activeOpacity={1} {...props} /> // Remove opacity on touch
					})}
				>
					<Tab.Screen name="HOME" component={Home} />
					<Tab.Screen name="EXPLORE" component={Explore} />
					<Tab.Screen name="CARE" component={Care} />
					<Tab.Screen name="DAILY" component={Daily} />
					<Tab.Screen name="PROFILE" component={Profile} />
				</Tab.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
  );
}

export default App

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    position: "relative",
  },
  dotBadge: {
    position: "absolute",
    top: 0,
    right: -5,
    width: 4,
    height: 4,
    backgroundColor: "red",
    borderRadius: 2,
  },
	tabBarLabel: {
		fontSize: 12,
		fontFamily: 'OpenSansMedium',
	},
	tabBar:{
		backgroundColor: "#101b27",
		height:60,
	}
});