import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import { splash_logo, Left_errow, serch_icon } from '../utils/appContest';
import myfontsize from '../utils/myfontsize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import Followers from './Followers';
import Activities from './Activities';
import Update_Profile from './Update_Profile';
import Activity_detail from './Activity_detail';
import My_Profile from './My_Profile';
import Other_User_Profile from './Other_User_Profile';
import { StackNavigator, TabNavigator } from 'react-navigation';
  

const Tab = createBottomTabNavigator();

const BottomTabBar = (props) => {
  const [tab,Settab] = useState(0)
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarVisible={false}
      activeColor={myThemeColors.light.light_gray}
      barStyle={{ backgroundColor: '#83F045', }}
   >
      <Tab.Screen
        name="Home"
        component={Home}
        screenOptions={{ headerShown: false }}
        options={{
          tabBarLabel:'',
          headerShown: false ,
          tabBarIcon: ({ color }) => (
            <Image source={color == myThemeColors.light.light_gray ? require('../assets/icon/home_tab.png') : require('../assets/icon/home_tab.png')} style={{ height: hp('3%'), width: hp('3%'),marginTop:hp("1.5%") }} resizeMode='contain'></Image>
            
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
            <Image source={color == '#000000' ? require('../assets/icon/search_tab.png') : require('../assets/icon/search_tab.png')} style={{ height: hp('3%'), width: hp('3%'),marginTop:hp("1.5%")  }} resizeMode='contain'></Image>
          ),
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Followers"
        component={Followers}
        options={{
          tabBarLabel: '',
          headerShown: false ,
          tabBarIcon: ({ color }) => (
            <Image source={color == '#000000' ? require('../assets/icon/map_tab.png') : require('../assets/icon/map_tab.png')} style={{ height: hp('3%'), width: hp('3%'),marginTop:hp("1.5%")  }} resizeMode='contain'></Image>
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
            <Image source={color == '#000000' ? require('../assets/icon/chat_tab.png') : require('../assets/icon/chat_tab.png')} style={{ height: hp('3%'), width: hp('3%'),marginTop:hp("1.5%")  }} resizeMode='contain'></Image>
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
            <Image source={color == '#000000' ? require('../assets/icon/profile_tab.png') : require('../assets/icon/profile_tab.png')} style={{ height: hp('3%'), width: hp('3%'),marginTop:hp("1.5%")  }} resizeMode='contain'></Image>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabBar;