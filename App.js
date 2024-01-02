// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, StyleSheet,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './screens/SignIn';
import { Account } from './screens/Account';
import { Provider, useSelector } from 'react-redux';
import store from './sotre/sotre';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ico-material-design';
import Message from './screens/message';
import Recompense from './screens/Recompense';
import ProgressBar from './components/ProgressBar';



function HomeScreen({navigation}) {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <View>
          <Image source={require('./assets/Ellipse3.png')} style={styles.headerImage} />
        </View>
        <View style={styles.headerTitle}>
          <Text style={styles.headerName} >Hello, {loggedInUser ? loggedInUser.name : 'Utilisateur'}</Text>
          <Text style={styles.headerJob} >Beginner</Text>
        </View>
        <View style={styles.headerLogo}>
          <Icon name="settings-cogwheel-button" height="24" width="24" color='lightgrey'/>
        </View>
      </View>

      <View style={styles.section1}>
        <View style={styles.section1Goal}>
          <Text style={{fontWeight:'bold',}}>Week Goal <Text style={{color:'#5D63D1'}}>50km</Text></Text>
          <Icon name="keyboard-right-arrow-button-1" height="16" width="16" color='lightgrey'/>
          
        </View>
        <View style={styles.section1Done}>
          <Text>35 km Done</Text>
          <Text style={{color:'lightgrey'}}>15 Km Left</Text>
        </View>
        <View style={styles.section1Progress}>
          <ProgressBar progress={0.5} width={200} height={10} color="#5D63D1" />
        </View>
      </View>

      <View style={styles.section2}>
        <View  style={styles.section2Img}>
          <Image source={require('./assets/image10.png')} />
        </View>
        <View style={styles.section2Texte}>
          <Text style={{color:'#ffff'}}>Current Jogging</Text>
          <Text style={{color:'lightgrey'}}>01:06:44</Text>
        </View>
        <View style={styles.section2Texte}>
          <Text style={{color:'#ffff'}}>10.9 km</Text>
          <Text style={{color:'lightgrey'}}>539 kcal</Text>
        </View>
      </View>

      <View >
        <View style={styles.section3Title}>
          <Text>Recent Activity</Text>
          <Text>All</Text>
        </View>
        <View style={styles.section3Card}>
          <View style={styles.section3CardA}>
            <View style={styles.section3Image}>
              <Image style={{borderRadius:16}} source={require('./assets/map1.png')} />
            </View>
            <View style={styles.section3Texte}>
              <Text style={{marginBottom:5,color:'lightgrey'}}>November 25</Text>
              <Text  style={{marginBottom:5,}}>10.12 km</Text>
              <View style={styles.section3SousTexte}>
                <Text style={{color:'lightgrey'}}>701 kcal</Text>
                <Text style={{color:'lightgrey'}}> 11,2km/hr</Text>
              </View>
            </View>
            <View style={styles.section3Icon}><Icon name="keyboard-right-arrow-button-1" height="16" width="16" color='black'/></View>
          </View>

          <View style={styles.section3CardA}>
            <View style={styles.section3Image}>
              <Image style={{borderRadius:16}} source={require('./assets/map1.png')} />
            </View>
            <View style={styles.section3Texte}>
              <Text style={{marginBottom:5,color:'lightgrey'}}>November 25</Text>
              <Text  style={{marginBottom:5,}}>10.12 km</Text>
              <View style={styles.section3SousTexte}>
                <Text style={{color:'lightgrey'}}>701 kcal</Text>
                <Text style={{color:'lightgrey'}}> 11,2km/hr</Text>
              </View>
            </View>
            <View style={styles.section3Icon}><Icon name="keyboard-right-arrow-button-1" height="16" width="16" color='black'/></View>
          </View>

          <View style={styles.section3CardA}>
            <View style={styles.section3Image}>
              <Image style={{borderRadius:16}} source={require('./assets/map1.png')} />
            </View>
            <View style={styles.section3Texte}>
              <Text style={{marginBottom:5,color:'lightgrey'}}>November 25</Text>
              <Text  style={{marginBottom:5,}}>10.12 km</Text>
              <View style={styles.section3SousTexte}>
                <Text style={{color:'lightgrey'}}>701 kcal</Text>
                <Text style={{color:'lightgrey'}}> 11,2km/hr</Text>
              </View>
            </View>
            <View style={styles.section3Icon}><Icon name="keyboard-right-arrow-button-1" height="16" width="16" color='black'/></View>
          </View>
          



        </View>
        
      </View>
        

      
    </View>
    
  );
}


const Stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

function App() {
  return (

    <NavigationContainer style={styles.test}>
      <Provider store={store}>
      <tab.Navigator 
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'rgba(34,36,40,1)',
            position: 'absolute',
            bottom: 20,
            left:20,
            width: '90%', 
            borderRadius:16,
            backgroundColor:'#ffff'
        },
        tabBarLabelStyle: {
          display: 'none' // Masquer les labels des onglets
        },
      })}>
        <tab.Screen name='SignIn' component={SignIn} 
        options={{
          tabBarIcon:({Iconcolor,IconSize}) =>(
            <Icon name="round-account-button-with-user-inside" height="20" width="15" color="#BFC2C8" />
          ),
        }}/>
        <tab.Screen name='Home' component={HomeScreen}
        options={{
          tabBarIcon:({Iconcolor,IconSize}) =>(
            <Icon name="home-button" height="20" width="15" color="#BFC2C8" />
          ),
        }}
         />
        <tab.Screen name='Message' component={Message}
        options={{
          tabBarIcon:({Iconcolor,IconSize}) =>(
            <Icon name="add-comment-button" height="20" width="15" color="#BFC2C8" />
          ),
        }} />
        <tab.Screen name='Account' component={Recompense}
        options={{
          tabBarIcon:({Iconcolor,IconSize}) =>(
            <Icon name="list-button-with-3-elements" height="20" width="15" color="#BFC2C8" />
          ),
        }} />
      </tab.Navigator>
      </Provider>
      {/* <Stack.Navigator initialRouteName='Home'>
        <Provider store={store}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Account" component={Account} />
        </Provider>
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#e7eaf6',
    paddingBottom:100
  },
  container2:{
    backgroundColor:'blue',
  },
  header:{
    paddingTop: 50,
    backgroundColor:'#5D63D1',
    flexDirection:'row',
    alignItems:'flex-start',
    borderBottomLeftRadius:16,
    borderBottomRightRadius:16,
    height:220,
  },
  headerTitle:{
    color:'#fff',
    display:'flex',
    flexDirection:'column',
  },
  headerImage:{
    marginLeft:40,
    marginTop:20,
  },
  headerName:{
    marginLeft:10,
    marginTop:20,
    fontSize:15,
    color:'#ffff',
  },
  headerJob:{
    color:'lightgrey',
    marginLeft:10,
  },
  headerLogo:{
    marginTop:20,
    marginLeft:150,
  },
  section1:{
    backgroundColor:'#ffff',
    position:'absolute',
    top:150,
    width:'90%',
    borderRadius:16,
    marginLeft:20,
    borderWidth:3,
    borderColor:'#5D63D11A',
  },
  section1Goal:{
    margin:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  section1Done:{
    margin:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  section1Progress:{
    margin:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  section2:{
    marginTop:80,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    width: '90%',
    backgroundColor:'#5D63D1',
    borderRadius:30,
    marginLeft:20,
  },
  section2Img:{
    padding:10,
  },
  section2Texte:{
    color:'#ffff',
    padding:10,
  },
  section3Title:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    margin:20,
  },
  section3Card:{
    backgroundColor:'#ffff',
    width:'90%',
    marginLeft:20,
    borderRadius:16,
    display:'flex',
    flexDirection:'column',
  },
  section3CardA:{
    display:'flex',
    flexDirection:'row'
  },
  section3Image:{
    margin:10,
  },
  section3Texte:{
    marginTop:20
  },
  section3SousTexte:{
    display:'flex',
    flexDirection:'row'
  },
  section3Icon:{
    marginTop:40,
    marginLeft:80
  }
  
  
})

export default App;