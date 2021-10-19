// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';

// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Splash from './src/screens/Splash';
// import City from './src/screens/City';
// import Followers from './src/screens/Followers';
// import Login from './src/screens/Login';
// import Register from './src/screens/Register';
// import Welcome from './src/screens/Welcome';
// import Forget_password from './src/screens/Forget_password';
// import Search from './src/screens/Search';
// import Activities_city from './src/screens/Activities_city';
// import BottomTabBar from './src/screens/BottomTabBar';
// import Home from './src/screens/Home';
// import Activities from './src/screens/Activities';
// import Send_Feedback from './src/screens/Send_Feedback';
// import Change_Password from './src/screens/Change_Password';
// import Update_Profile from './src/screens/Update_Profile';
// import Activity_detail from './src/screens/Activity_detail';
// import My_Profile from './src/screens/My_Profile';
// import Other_User_Profile from './src/screens/Other_User_Profile';











// const Stack = createNativeStackNavigator();


// const App = () => {

//   return (
   
//     <NavigationContainer headerMode="none">
//     <Stack.Navigator >
//       <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
//       <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
//       <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
//       <Stack.Screen name="City" component={City} options={{ headerShown: false }} />
//       <Stack.Screen name="Followers" component={Followers} options={{ headerShown: false }} />
//       <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
//       <Stack.Screen name="Forget_password" component={Forget_password} options={{ headerShown: false }} />
//       <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
//       <Stack.Screen name="Activities_city" component={Activities_city} options={{ headerShown: false }} />
//       <Stack.Screen name="BottomTabBar" component={BottomTabBar} options={{ headerShown: false }} />
//       <Stack.Screen name="Home"  component={Home} options={{ headerShown: false }} />
//       <Stack.Screen name="Activities" component={Activities} options={{ headerShown: false }} />
//       <Stack.Screen name="Send_Feedback" component={Send_Feedback} options={{ headerShown: false }} />
//       <Stack.Screen name="Change_Password" component={Change_Password} options={{ headerShown: false }} />
//       <Stack.Screen name="Update_Profile" component={Update_Profile} options={{ headerShown: false }} />
//       <Stack.Screen name="Activity_detail" component={Activity_detail} options={{ headerShown: false }} />
//       <Stack.Screen name="My_Profile" component={My_Profile} options={{ headerShown: false }} />
//       <Stack.Screen name="Other_User_Profile" component={Other_User_Profile} options={{ headerShown: false }} />
      
      

      




     

//     </Stack.Navigator>
//   </NavigationContainer>
  
//   );
// };



// export default App;


import * as React from 'react';
import { View, Text,Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NavigationContainer, useNavigationState, useRoute } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const Context = React.createContext(); 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Splash from './src/screens/Splash';
import City from './src/screens/City';
import Followers from './src/screens/Followers';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Welcome from './src/screens/Welcome';
import Forget_password from './src/screens/Forget_password';
import Search from './src/screens/Search';
import Activities_city from './src/screens/Activities_city';
import Message from './src/screens/Message';
import Home from './src/screens/Home'; 
import Activities from './src/screens/Activities';
import Send_Feedback from './src/screens/Send_Feedback';
import Change_Password from './src/screens/Change_Password';
import Update_Profile from './src/screens/Update_Profile';
import Activity_detail from './src/screens/Activity_detail';
import My_Profile from './src/screens/My_Profile';
import Other_User_Profile from './src/screens/Other_User_Profile';
import Activites_city from './src/screens/Activities_city';

const SettingsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
 

function SettingsStackScreen({ navigation }) {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={My_Profile} />
    </SettingsStack.Navigator>
  )
}
const Stack = createStackNavigator()
 


function ProfileStackScreen({ navigation }) {
  const { screen, setScreen } = React.useContext(Context)
  if (screen == 0) {
    navigation.setOptions({ tabBarVisible: true })
  } else {
    navigation.setOptions({ tabBarVisible: false })
  }
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <ProfileStack.Screen name="Followers" component={Followers} options={{ headerShown: false }}/>
      <ProfileStack.Screen name="Activities_city" component={Activities_city} options={{ headerShown: false }}/>
      <ProfileStack.Screen name="City" component={City} options={{ headerShown: false }}/>
      <ProfileStack.Screen name="My_Profile" component={My_Profile} options={{ headerShown: false }}/>

    </ProfileStack.Navigator>
  )
}

function BottomNav({ navigation }) {
  return (
    <Tab.Navigator> 
      <Tab.Screen
        name="Homes"
        component={ProfileStackScreen}
        screenOptions={{ headerShown: false }}
        options={{ 
          tabBarLabel:'', 
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image source={color == myThemeColors.light.light_gray ? require('./src/assets/icon/home_tab.png') : require('./src/assets/icon/home_tab.png')} style={{ height: hp('3%'), width: hp('3%'),marginTop:hp("1.5%") }} resizeMode='contain'></Image>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ 
          tabBarLabel: '',
          headerShown: false ,
          tabBarIcon: ({ color }) => (
            <Image source={color == '#000000' ? require('./src/assets/icon/search_tab.png') : require('./src/assets/icon/search_tab.png')} style={{ height: hp('3%'), width: hp('3%'),marginTop:hp("1.5%")  }} resizeMode='contain'></Image>
          ),
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Followers"
        component={Message}
        options={{
          tabBarLabel: '',
          headerShown: false ,
          tabBarIcon: ({ color }) => (
            <Image source={color == '#000000' ? require('./src/assets/icon/map_tab.png') : require('./src/assets/icon/map_tab.png')} style={{ height: hp('3%'), width: hp('3%'),marginTop:hp("1.5%")  }} resizeMode='contain'></Image>
          ),
        }}
      />
      <Tab.Screen
        name="Other_User_Profile"
        component={Search}
        options={{
          tabBarLabel: '',
          headerShown: false ,
          tabBarIcon: ({ color }) => (
            <Image source={color == '#000000' ? require('./src/assets/icon/chat_tab.png') : require('./src/assets/icon/chat_tab.png')} style={{ height: hp('3%'), width: hp('3%'),marginTop:hp("1.5%")  }} resizeMode='contain'></Image>
          ),
        }}
      />

      <Tab.Screen
        name="My_Profile"
        component={My_Profile}
        options={{
          tabBarLabel: '',
          headerShown: false ,
          tabBarIcon: ({ color }) => (
            <Image source={color == '#000000' ? require('./src/assets/icon/profile_tab.png') : require('./src/assets/icon/profile_tab.png')} style={{ height: hp('3%'), width: hp('3%'),marginTop:hp("1.5%")  }} resizeMode='contain'></Image>
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  const [screen, setScreen] = React.useState(0);

  return (
    <Context.Provider value={{ screen, setScreen }}>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />  
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Forget_password" component={Forget_password} options={{ headerShown: false }} />
        <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}