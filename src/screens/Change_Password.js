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
import { splash_logo, Left_errow, passwordlock, passwordeye } from '../utils/appContest';
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
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.left_errow_view}>
                    <Image source={Left_errow} resizeMode="contain" style={styles.left_errow_style} />
                </TouchableOpacity>
                <View style={styles.city_text_view}>
                    <Text style={styles.city_text_style}>Change Password</Text>
                </View>
            </View>
            {/* <View style={styles.text_input_view}>
                <TextInput
                    style={styles.text_input_style}
                    placeholder="Search for Cities"
                    placeholderTextColor={myThemeColors.light.light_gray}
                />

            </View> */}
            {/* <View style={styles.profile}>
                <Image source={profileimg} style={styles.profileimg}></Image>
            </View> */}
            <View style={styles.text_input_view}>
                <View style={styles.text_view}>
                    <Text style={styles.text}>Old Password*</Text>
                </View>
                <View style={styles.text_input_view1}>
                    <View style={styles.usericon_view}>
                        <Image source={passwordlock} resizeMode="contain" style={styles.usericon} />
                    </View>
                    <View style={styles.userinput_view}>
                        <TextInput style={styles.text_input}
                            secureTextEntry={true}
                            placeholder="Alfa Anggara"
                            placeholderTextColor={myThemeColors.light.black} />
                    </View>
                    <View style={styles.usericon_view}>
                        <Image source={passwordeye} resizeMode="contain" style={{ height: hp("3%"), width: wp("6%"), marginRight: hp("5%") }} />
                    </View>

                </View>

            </View>
            <View style={styles.text_input_view}>
                <View style={styles.text_view}>
                    <Text style={styles.text}>New Password*</Text>
                </View>
                <View style={styles.text_input_view1}>
                    <View style={styles.usericon_view}>
                        <Image source={passwordlock}  resizeMode="contain" style={styles.usericon} />
                    </View>
                    <View style={styles.userinput_view}>
                        <TextInput style={styles.text_input}
                            secureTextEntry={true}
                            placeholder="+ 123 456 7890"
                            placeholderTextColor={myThemeColors.light.black} />
                    </View>
                    <View style={styles.usericon_view}>
                        <Image source={passwordeye} resizeMode="contain" style={{ height: hp("3%"), width: wp("6%"), marginRight: hp("5%") }} />
                    </View>

                </View>

            </View>
            {/* <View style={styles.text_input_view}>
                <View style={styles.text_view}>
                    <Text style={styles.text}>Email Address*</Text>
                </View>
                <View style={styles.text_input_view1}>
                    <View style={styles.usericon_view}>
                        <Image source={email} style={styles.usericon} />
                    </View>
                    <View style={styles.userinput_view}>
                        <TextInput style={styles.text_input}
                            placeholder="alfaanggara@gmail.com"
                            placeholderTextColor={myThemeColors.light.black} />
                    </View>

                </View>
                <View style={styles.text_input_view1}>
                    <View style={styles.usericon_view}>
                        <Image source={password} style={styles.usericon} />
                    </View>
                    <View style={styles.userinput_view}>
                        <TextInput style={styles.text_input}
                            placeholder="Forgot Password"
                            placeholderTextColor={myThemeColors.light.black} />
                    </View>
                </View>

            </View> */}
            <View style={styles.button_update_view}>
                <TouchableOpacity style={styles.button_update} onPress={() => { props.navigation.navigate('Search')}}>
                    <Text style={styles.text_update_button}>Update Password</Text>
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

    },
    left_errow_view:
    {
        width: wp("15%"),
        height: hp("8%"),
        justifyContent: "center",
        alignItems:"center",
        // backgroundColor: "red",

    },
    left_errow_style:
    {
        width: wp("2.5%"),
        height: hp("2.5%"),

    },
    city_text_view:
    {
        width: wp("73%"),
        height: hp("8%"),
        justifyContent: "center",
        alignItems:"center",
        // backgroundColor: "blue",

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
        width: wp("12%"),
        height: hp("10%"),
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "red"
    },
    userinput_view: {
        width: wp("72%"),
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
        height: hp("12.6%"),
        width: wp("24.5%"),
    },
    usericon: {
        height: hp("2.5%"),
        width: wp("5%"),
    },
    button_update_view: {
        height: hp("20%"),
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
    text_update_button: {
        color: "white",
        fontSize: hp("2.3%"),
    },


})