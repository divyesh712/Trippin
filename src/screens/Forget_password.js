import React, { useState, useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    TextInput,
    useColorScheme,
    Button,
    Image,
    Dimensions,
    Keyboard,
    View,
    Animated,
} from 'react-native';

import myFontSize from '../utils/myfontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function forget_password(props) {

    return (
        <View style={{ height: hp('100%'), width: wp('100%'), alignItems: "center" }}>
            <View style={{ height: hp('8%'), width: wp('100%'), backgroundColor: "#ffffff", flexDirection: "row", borderTopRightRadius: hp('3%'), justifyContent: "space-between", alignItems: "center", borderTopLeftRadius: hp('4%') }}>

                <View style={{ height: hp('8%'), width: wp('12%'), alignItems: "center", justifyContent: "center", }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()} >
                    <Image source={require('../assets/icon/back_img.png')} resizeMode="contain" style={{ height: hp('2.5%'), width: wp('6%') }} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: hp('5%'), width: wp('70%'), justifyContent: "center", }}>
                    <Text style={{ fontFamily: myFontSize.h13.fontFamily, fontSize: myFontSize.h4.fontSize }}>
                        Forgot Password
                    </Text>
                </View>
            </View>
            <View style={{ height: hp('15%'), width: wp('80%'), alignItems: "center", justifyContent: "center" }}>
                <Text style={{ textAlign: "center", fontFamily: myFontSize.h12.fontFamily, fontSize: myFontSize.h4.fontSize, color: "#898F97" }}>
                    Enter your email address to reset password for your account
                </Text>
            </View>
            {/* <View style={{ height: hp('10%'), width: wp('85%'), justifyContent: "center",alignItems:"center" }}> */}
                <View style={{ height: hp('7%'), width: wp('85%'),  justifyContent: "center",  borderRadius: hp('0.5%') }}>
                    <TextInput
                        placeholder="Email Address"
                        placeholderTextColor="#A7ADB5"
                        style={{paddingLeft:wp("3%")}}
                    />
                </View>
            {/* </View> */}
            <View style={{ height: hp('15%'), width: wp('85%'), justifyContent: "flex-end" }}>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Update_Profile')}}  style={{ height: hp('6%'), width: wp('85  %'), borderRadius: hp('5%'), backgroundColor: "#3D70FF", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontFamily: myFontSize.h13.fontFamily, fontSize: myFontSize.h1.fontSize, color: "#ffffff" }}>
                    Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}