import React, { useState, useRef } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myfontsize from '../utils/myfontsize';
import myThemeColors from '../utils/myThemeColors';

export default function Login(props) {

    const [password, Setpassword] = useState("");
    const [passwordVisibility, SetpasswordVisibility] = useState(true);

    const TogglePasswordVisibility = () => {
        SetpasswordVisibility(!passwordVisibility);
    }

    const passwordRef = useRef();
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageview}>
                <Image
                    style={styles.backgroundimage}
                    source={require('../assets/image/login_image.png')}
                >
                </Image>

            </View>
            <View style={styles.logintag}>
                <View style={styles.logo_view}>
                    <Image source={require('../assets/icon/Login_logo.png')} resizeMode='contain' style={styles.loginlogo} />
                </View>
                <View style={styles.lineview}>
                    <Image
                        source={require('../assets/icon/Login_line.png')} resizeMode='contain' style={styles.loginline_1} />
                </View>
                <View style={styles.textmain}>
                    <View style={styles.textview}>
                        <Text style={{ textAlign: "center", color: '#898F97' }}>Helping You Enjoy Your Travels in The</Text>
                    </View>
                    <View style={styles.textview1}>
                        <Text style={{ textAlign: "center", color: '#898F97' }}>Most Efficient Way Possible.</Text>
                    </View>
                </View>

                <View style={styles.usermain}>
                    <View style={styles.userview}>
                        <TextInput style={styles.all_lable_color}
                            placeholder="Email Address"
                            placeholderTextColor="#A7ADB5"
                        // textAlign="center"
                        />
                    </View>
                    <View style={styles.passwordview}>
                        <TextInput style={styles.password_lable_color}
                            ref={passwordRef}
                            returnKeyType="done"
                            onSubmitEditing={() => { Keyboard.dismiss() }}
                            blurOnSubmit={false}
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            placeholder="Password"
                            // textAlign="center"
                            placeholderTextColor="#A7ADB5"
                            value={password}
                            onChangeText={(e) => Setpassword(e)}
                        />
                          <TouchableOpacity style={styles.passwordicon}>
                                    <Image source={require('../assets/icon/password_icon.png')} resizeMode="stretch" style={{ height: hp('2%'), width: wp('4%'),}}></Image>
                                </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: hp('1%'), width: wp('90%') }}></View>

                <View style={styles.login}>
                    <TouchableOpacity style={styles.login_button_style} onPress={() => { props.navigation.navigate('BottomNav') }}><Text style={styles.next_text}>Login</Text></TouchableOpacity>
                </View>
                <View style={styles.forgotView}>
                    <TouchableOpacity style={styles.forgottouchable} onPress={() => { props.navigation.navigate('Forget_password')}}>
                        <Text style={styles.forgottext}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: hp('3.5%'), width: wp('100%'), }}></View>
                <View style={styles.noaccount_View}>
                    <View style={styles.accountview}>
                        <Text style={styles.noaccount_text}>Don’t have an account?</Text>
                    </View>
                    <TouchableOpacity style={styles.regi_view} onPress={() => { props.navigation.navigate('Register')}}>
                        {/* <View > */}
                            <Text style={styles.regi_text}> Register Now</Text>
                        {/* </View> */}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        width: wp('100%'),
        height: hp('100%'),
    },
    loginlogo: {
        height: hp('10%'),
        width: wp('60%'),
        marginTop: hp('1%'),
        resizeMode: 'contain', 

    },
    textmain:{
        height: hp('10%'),
         width: wp('100%'), 
         justifyContent: "center" ,
         backgroundColor: "#F5EEEA",
    },
    textview:{
        height: hp('4%'),
         width: wp('90%'), 
         alignSelf: "center", 
         justifyContent: "center" 
    },
    textview1:{
        height: hp('3%'), 
        width: wp('90%'), 
        alignSelf: "center", 
        justifyContent: "center" 
    },
    imageview:{
        height: hp('35%'), 
        width: wp('100%'),
    },
    backgroundimage:{
        height: hp('65%'), 
        width: wp('100%'), 
        resizeMode: "stretch",
    },
    loginline_1: {
        height: hp('10%'),
        width: wp('43%'),
        resizeMode: 'contain',

    },
    logo_view: {
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        height: hp('13%'), 
        width: wp('90%'),

    },
    lineview:{
        height: hp('3%'), 
        width: wp('70%'), 
        justifyContent: "center",
         alignItems: "flex-end",
    },
    logintag: {
        height: hp('65%'),
        width: wp('100%'),
        borderTopLeftRadius: hp('3%'),
        borderTopRightRadius: hp('3%'),
        backgroundColor: "#F5EEEA",
        opacity:0.99,
    },
    userview: {
        height: hp('6.5%'),
        width: wp('90%'),
        borderRadius: hp('0.8%'),
        textAlign: 'center',
        // color: "transparent",
        borderWidth: hp('0.1%'),
        alignSelf: "center",
        backgroundColor: '#ffffff',
        borderColor: "#fff",

    },
    usermain:{
        height: hp('16%'), 
        width: wp('90%'), 
        alignSelf: "center" 
    },
    passwordview: {
        height: hp('6.5%'),
        width: wp('90%'),
        borderRadius: hp('0.8%'),
        alignSelf: "center",
        // color: "transparent",
        textAlign: 'center',
        borderWidth: hp('0.1%'),
        borderColor: "#fff",
        marginTop: hp('2%'),
        backgroundColor: '#ffffff',
        flexDirection:'row'
    },
    password_lable_color: {
        paddingLeft: wp('3%'),
        width: wp('82%'),
        alignItems: "center",
        justifyContent: "center",
        // color: "#ffffff",
        fontSize: myfontsize.h1.fontSize,
        fontFamily: myfontsize.h12.fontFamily,
    },
    all_lable_color: {
         paddingLeft:wp('3%'),
        width: wp('85%'),
        alignItems: "center",
        justifyContent: "center",
        // color: "#ffffff",
        fontSize: myfontsize.h1.fontSize,
        fontFamily: myfontsize.h12.fontFamily,
      
    },
    passwordicon:{
        height:hp('6.5%'),
        width:wp('8%'),
        justifyContent: "center", 
    },
    login:
    {
        width: wp('90%'),
        height: hp('6.5%'),
        // position:"absolute",
        // bottom:0,
        // marginBottom:hp("10%"),
        alignSelf: "center",
        borderRadius: hp('0.1%'),
        // backgroundColor: "pink"
    },
    login_button_style:
    {
        width: wp('90%'),
        height: hp('6.5%'),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#3D70FF',
        borderWidth:wp('0.5%'),
        borderRadius: hp("7%") / 2,
        borderColor:'#3D70FF',
        // backgroundColor: myThemeColors.purple,
    },
    accountview:{
        width: wp('47%'), 
        height: hp('3.5%'), 
        justifyContent: "center", 
        alignItems:'flex-end'
    },
    next_text:
    {
        color: "#fff",
        fontSize: myfontsize.h4.fontSize,
        fontFamily: myfontsize.h12.fontFamily, 
    },
    noaccount_View: {
        height: hp('7%'),
        width: wp('100%'),
        // borderRadius: hp('4%'),
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    regi_view:{
        width: wp('30%'), 
        height: hp('3.5%'), 
        // alignItems: "flex-start", 
        justifyContent: "center"
    },

    regi_text: {
        color: "#ffffff",
        fontSize: hp('2%'),
        fontFamily: myfontsize.h4.fontFamily,
        //fontSize:myfontsize.h4.fontSize,
        borderBottomColor: "white",
        // backgroundColor:"blue"

    },
    noaccount_text: {

        color: "#C6C6C6",
        //  fontSize:hp('2%'),
        fontSize: myfontsize.h1.fontSize,
        fontFamily: myfontsize.h12.fontFamily,
        color: "#A7ADB5"
    },
    regi_text: {

        color: "#C6C6C6",
        //  fontSize:hp('2%'),
        fontSize: myfontsize.h1.fontSize,
        fontFamily: myfontsize.h12.fontFamily,
        color: "#3D70FF"
    },
    forgotView:{
        height: hp('5%'), 
        width: wp('100%'), 
        justifyContent: "center",
    },
    forgottext:{
        textAlign: "center",
         color: "#3D70FF", 
         fontSize: myfontsize.h2.fontSize,
         fontFamily: myfontsize.h12.fontFamily, 
    },
    forgottouchable:{
        height: hp('3%'), 
        width: wp('90%'), 
        alignSelf: 'center',
    },

});