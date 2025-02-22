import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import {SunIcon,MoonIcon,TeaCupIcon} from '../svg/dailyScreen';
import TaskWidget from '../component/activityWidget';
import { ProgressBar } from 'react-native-paper';

const activities = [
  {
    time: 'Morning',
    icon: 'sunny',
    color:"#FFD400",
    data: [
      { title: 'Dealing with Rejection', description: 'Learn to heal with and cope with being rejected' },
      { title: 'How to Fight Fairly', description: 'Learn how to have peaceful, constructive disagreements' },
    ],
  },
  {
    time: 'Afternoon',
    icon: 'coffee',
    color:"#923c01",
    data: [
      { title: 'Exploring Met and Unmet', description: 'Learn how to meet your emotional needs' },
      { title: 'Communicating Assertively', description: 'This session will help you communicate assertively with confidence in both your words and body language' },
    ],
  },
  {
    time: 'Evening',
    icon: 'brightness-2',
    color:"#FFD400",
    data: [
      { title: 'Loving-Kindness Meditation', description: 'Channel compassion and goodwill to others to feel connected and open-hearted' },
      { title: 'Listening Empathetically', description: 'Learn the foundational skills of listening to others with empathy' },
    ],
  },
];

const Daily = () => {
  return (
    <View style={styles.container}>    
      <FlatList
        data={activities}
        keyExtractor={(item) => item.time}
        ListHeaderComponent={(
          <>
            <View style={styles.initialContainer}>
              <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Good morning</Text>
                <Text style={styles.welcomeText2}>
                  Try this activities daily to see long term improvements in your mental-health and productivity
                </Text>
                <TouchableOpacity style={styles.reminderButton} testID="reminder-button">
                  <Icon name='notifications' size={20} color='#FFFFFF'/>
                  <Text style={styles.reminderText}>Set reminder</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imageContainer}>
                <Image style={styles.basketImage} source={require('../../assets/images/basket.png')} />
              </View>
            </View>
            <View style={styles.progressContainer}>
              <Text style={styles.progressText}>
                Finish 3+ exercises today to stay calm and focused
              </Text>
              <ProgressBar progress={0.1} fillStyle={{height:50,borderRadius:10}} style={styles.progressBar} color="#000" />
              <View style={styles.sessionContainer}>
                <Icon name='local-fire-department' size={16} color='#0F1B27'/>
                <Text style={styles.progressText2}>
                  2577 people doing sessions with you this hour
                </Text>
              </View>
            </View>
          </>
        )}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <View style={styles.dailyTaskContainer}>
              <Icon name={item.icon} type="material" color={item.color} size={20} />
              <Text style={styles.headingText}>
                {item.time}
              </Text>
            </View>
            {/* <View style={styles.header}>
              <Icon name={item.icon} type="ionicon" color="#333" size={20} />
              <Text style={styles.headerText}>{item.time}</Text>
            </View> */}
            {item.data.map((activity, index) => (
              <TaskWidget activity={activity} key={index}/>
            ))}
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.borderContainer}>
            <View style={styles.border}/>
            <Text style={styles.quoteText}>
              "I advise all of my clients to develop a consistent daily routine which includes a mindfulness exercise"
            </Text>
            <Text style={styles.authorText}>
              - — Linda Rinn, Clinical Psychologist
            </Text>
          </View>
        )}
      />
    </View>
  )
}

export default Daily

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FCFB7'
  },
  initialContainer: {
    backgroundColor:'#264B5A',
    flexDirection:'row',
    height:170
  },
  welcomeContainer: {
    paddingHorizontal:20,
    paddingTop:30,
    paddingBottom:10,
    width:'58%'
  },
  welcomeText: {
    fontSize: 16,
    fontFamily: 'OpenSansMedium',
    color:'#FFFFFF',
    lineHeight:24,
  },
  welcomeText2:{
    marginTop:10,
    fontSize: 12,
    fontFamily: 'OpenSansLight',
    color:'#B6B6B4',
    lineHeight:16,
  },
  reminderButton:{
    marginTop:10,
    flexDirection:'row',
    alignItems:'center',
    borderColor:'#FFFFFF',
    borderWidth:1,
    borderRadius:20,
    padding:5,
    width:'80%',
    justifyContent:'center'
  },
  reminderText: {
    paddingLeft:5,
    fontSize: 12,
    fontFamily: 'OpenSansMedium',
    color:'#FFFFFF',
  },
  imageContainer: {
    width:'42%',
    justifyContent:'flex-start'
  },
  basketImage:{
    height:'100%',
    width:'100%',
  },
  progressContainer:{
    padding:20,
    backgroundColor:'#f5ece2',
    marginBottom:10
  },
  progressText:{
    fontSize: 12,
    lineHeight:18,
    fontFamily: 'OpenSansMedium',
    color:'#0F1B27',
  },
  progressBar:{ 
    marginTop:5,
    marginBottom: 10,
    height:10,
    borderRadius:5,
    backgroundColor:'#FFFFFF',
  },
  filledStyle:{ 
    borderRadius:10,
  },
  sessionContainer:{
    flexDirection:'row',
  },
  progressText2:{
    paddingLeft:10,
    fontSize: 10,
    lineHeight:20,
    fontFamily: 'OpenSansRegular',
    color:'#0F1B27',
  },
  taskContainer:{
    paddingHorizontal:20
  },
  dailyTaskContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:20
  },
  headingText:{
    paddingLeft:10,
    fontSize: 16,
    fontFamily: 'OpenSansMedium',
    color:'#000',
  },
  borderContainer:{
    alignItems:'center',
    marginTop:20,
    marginBottom:10
  },
  border:{
    borderBottomWidth:1,
    borderColor: "#666",
    width:40,
    borderRadius:50
  },
  quoteText:{
    marginTop:20,
    fontSize: 12,
    fontFamily: 'OpenSansRegular',
    color:'#666',
    textAlign:'center',
    width:'75%'
  },
  authorText:{
    fontSize: 12,
    fontFamily: 'OpenSansRegular',
    color:'#666',
    textAlign:'center',
    marginBottom:50
  }
});