import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    TextInput
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import { splash_logo, Left_errow, profileimg, user, phone, email, password } from '../utils/appContest';
import myfontsize from '../utils/myfontsize';


const Update_Profile = (props) => {

    const [myActiveTheme, SetmyActiveTheme] = useState(myThemeColors.light);

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={myThemeColors.light.mainbg}
                barStyle="dark-content"
            />
            <View style={styles.headre_style}>
                <TouchableOpacity  onPress={() => props.navigation.goBack()} style={styles.left_errow_view}>
                    <Image source={Left_errow} style={styles.left_errow_style} />
                </TouchableOpacity>
                <View style={styles.city_text_view}>
                    <Text style={styles.city_text_style}>Alfa Anggara</Text>
                </View>
            </View>
            {/* <View style={styles.text_input_view}>
                <TextInput
                    style={styles.text_input_style}
                    placeholder="Search for Cities"
                    placeholderTextColor={myThemeColors.light.light_gray}
                />

            </View> */}
            <View style={styles.profile}>
                <Image source={profileimg} resizeMode="contain" style={styles.profileimg}></Image>
            </View>
            <View style={styles.text_input_view}>
                <View style={styles.text_view}>
                    <Text style={styles.text}>Full Name*</Text>
                </View>
                <View style={styles.text_input_view1}>
                    <View style={styles.usericon_view}>
                        <Image source={user} resizeMode="contain" style={styles.usericon} />
                    </View>
                    <View style={styles.userinput_view}>
                        <TextInput style={styles.text_input}
                            placeholder="Alfa Anggara"
                            placeholderTextColor={myThemeColors.light.black} />
                    </View>

                </View>

            </View>
            {/* <View style={styles.text_input_view}>
                <View style={styles.text_view}>
                    <Text style={styles.text}>Phone Number*</Text>
                </View>
                <View style={styles.text_input_view1}>
                    <View style={styles.usericon_view}>
                        <Image source={phone} style={styles.usericon} />
                    </View>
                    <View style={styles.userinput_view}>
                        <TextInput style={styles.text_input}
                            placeholder="+ 123 456 7890"
                            placeholderTextColor={myThemeColors.light.black} />
                    </View>

                </View>

            </View> */}
            <View style={styles.text_input_view}>
                <View style={styles.text_view}>
                    <Text style={styles.text}>Email Address*</Text>
                </View>
                <View style={styles.text_input_view1}>
                    <View style={styles.usericon_view}>
                        <Image source={email} resizeMode="contain" style={styles.usericon} />
                    </View>
                    <View style={styles.userinput_view}>
                        <TextInput style={styles.text_input}
                            placeholder="alfaanggara@gmail.com"
                            placeholderTextColor={myThemeColors.light.black} />
                    </View>

                </View>
                {/* <View style={styles.text_input_view1}>
                    <View style={styles.usericon_view}>
                        <Image source={password} style={styles.usericon} />
                    </View>
                    <View style={styles.userinput_view}>
                        <TextInput style={styles.text_input}
                            placeholder="Forgot Password"
                            placeholderTextColor={myThemeColors.light.black} />
                    </View>
                </View> */}

            </View>
            <View style={styles.button_update_view}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("Followers") }} style={styles.button_update}>
                    <Text style={styles.text_update_button}>Update Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.button_change_password_view}>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Change_Password')}} style={styles.button_change_password}>
                    <Text style={styles.text_change_password_button}>Change Password</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}

export default Update_Profile;

const styles = StyleSheet.create({
    container:
    {
        width: wp("100%"),
        height: hp("100%"),
        backgroundColor: '#FAFAFA',
    },
    headre_style:
    {
        width: wp("100%"),
        height: hp("8%"),
        flexDirection: "row",
        alignSelf: "center",
        backgroundColor: "#ffffff",
        borderTopLeftRadius:hp("3%"),
        borderTopRightRadius:hp("3%"),
        // backgroundColor:"red",
    },
    left_errow_view:
    {
        width: wp("15%"),
        height: hp("8%"),
        justifyContent: "center",
        alignItems:"center",
        // backgroundColor:"yellow"
    },
    left_errow_style:
    {
        width: wp("2.5%"),
        height: hp("2.5%"),

    },
    city_text_view:
    {
        width: wp("70%"),
        height: hp("8%"),
        justifyContent: "center",
        alignItems:"center"
    },
    city_text_style:
    {
        fontSize: myfontsize.h3.fontSize,
        fontFamily: myfontsize.h13.fontFamily,
        fontWeight: "600"
    },
    text_input_view:
    {
        width: wp("90%"),
        height: hp("10%"),
        // backgroundColor: "yellow",
        alignSelf: "center",
        marginTop: hp("2%"),
        // flexDirection: "row",
    },
    text_input_view1: {
        width: wp("90%"),
        height: hp("7%"),
        flexDirection: "row",
        // backgroundColor: "skyblue",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        elevation: 1,
        marginTop: hp("1%"),
        borderRadius:hp("1%"),

    },
    text_input: {
        width: wp("90%"),
        height: hp("9%"),
    },
    usericon_view: {
        width: wp("15%"),
        height: hp("10%"),
        alignItems: "center",
        justifyContent: "center",
    },
    userinput_view: {
        width: wp("75%"),
        height: hp("10%"),
        justifyContent: "center",

    },
    // text_input_style:
    // {
    //     backgroundColor: myThemeColors.light.light_gray_background,
    // },
    text_view: {
        fontSize: myfontsize.h3.fontSize,
        fontFamily: myfontsize.h12.fontFamily,
        height: hp("3%"),
        width: wp("85%"),
    },
    text: {
        color: "#898F97",
    },
    profile: {
        height: hp("17%"),
        width: wp("100%"),
        // backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    profileimg: {
        height: hp("12%"),
        width: wp("24%"),
    },
    usericon: {
        height: hp("2.7%"),
        width: wp("5%"),
    },
    button_update_view: {
        height: hp("20%"),
        width: wp("90%"),
        // backgroundColor: "blue",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "flex-end",

    },
    button_change_password_view: {
        height: hp("15%"),
        width: wp("90%"),
        // backgroundColor: "red",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    button_update: {
        height: hp("8%"),
        width: wp("90%"),
        borderRadius: hp("5%"),
        backgroundColor: "#3D70FF",
        alignItems: "center",
        justifyContent: "center",
    },
    button_change_password: {
        height: hp("8%"),
        width: wp("90%"),
        borderRadius: hp("5%"),
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },
    text_update_button: {
        color: "white",
        fontSize: hp("2.3%"),
    },
    text_change_password_button: {
        color: "#3D70FF",
        fontSize: hp("2.3%"),
        backgroundColor: "#FFFFFF",
    },


})