import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    TextInput,
    FlatList,
    ImageBackground,
    Switch,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import { splash_logo, Left_errow, serch_icon, Rectangle, wrong, Group } from '../utils/appContest';
import myfontsize from '../utils/myfontsize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ToggleSwitch from 'toggle-switch-react-native'

const Activities = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <KeyboardAwareScrollView extraHeight={hp('15%')} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={myThemeColors.light.light_gray_background}
                    barStyle="dark-content"
                />
                <View style={styles.headre_style}>
                    <TouchableOpacity style={styles.left_errow_view} onPress={() => props.navigation.goBack()} >
                        <Image source={Left_errow} style={styles.left_errow_style} />
                    </TouchableOpacity>
                    <View style={styles.city_text_view}>
                        <Text style={styles.city_text_style}>Add My Own Activity</Text>
                    </View>
                </View>
                <View style={{ height: hp('31%'), width: wp('100%'), }}>
                    <View style={styles.passwordview}>
                        <TextInput style={styles.all_lable_color}
                            placeholder="Name *"
                            // textAlign="center"
                            placeholderTextColor="#A7ADB5"
                        />
                    </View>
                    <View style={styles.passwordview}>
                        <TextInput style={styles.all_lable_color}
                            placeholder="Address *"
                            // textAlign="center"
                            placeholderTextColor="#A7ADB5"
                        />
                    </View>
                    <View style={styles.passwordview}>
                        <View style={{ height: hp('6.5%'), width: wp('77%'),}}>
                            <TextInput style={styles.all_lable_color}
                                placeholder="Private/Public"
                                // textAlign="center"
                                placeholderTextColor="#A7ADB5"
                            />
                        </View>
                        <View style={{ height: hp('6.5%'), width: wp('13%'),justifyContent:"center"}}>
                            <ToggleSwitch
                                  isOn={isEnabled}
                                onColor="#3D70FF"
                                offColor="#808080"
                                labelStyle={{ color: "black", fontWeight: "900", }}
                                size="small"
                                onToggle={isOn => setIsEnabled(isOn)}

                            />
                        </View>
                    </View>
                    {/* <View style={{ height: hp('1%'), width: wp('100%') }}></View> */}
                    <View style={{ height: hp('3%'), width: wp('90%'), alignSelf: 'center', }}>
                        <Text style={{ alignSelf: "flex-end", fontSize: myfontsize.h2.fontSize, fontFamily: myfontsize.h12.fontFamily, color: myThemeColors.light.light_gray }}>Default Private*</Text>
                    </View>
                </View>
                <View style={{ height: hp('20%'), width: wp('100%'), justifyContent: 'center', }}>
                    <View style={{ height: hp('20%'), width: wp('90%'), alignSelf: "center", justifyContent: "space-between", flexDirection: 'row', borderRadius: hp('0.8%'), backgroundColor: myThemeColors.light.mainbg, borderColor: "#fff", }}>
                        <View style={{ height: hp('20%'), width: wp('28%'), justifyContent: "center", }}>
                            <Image source={Rectangle} style={{ height: hp('19%'), width: wp('28%'), borderRadius: hp('1%') }} />
                            <TouchableOpacity style={{ position: "absolute", width: wp('27%'), justifyContent: "center",top:0,marginTop:hp('1%')}}>
                                <Image source={wrong} style={{ height: hp('3%'), width: wp('6%'), resizeMode: "contain", alignSelf: "flex-end", }}></Image>
                            </TouchableOpacity>
                        </View>
                        {/* </ImageBackground> */}
                        <View style={{ height: hp('20%'), width: wp('28%'), justifyContent: "center", }}>
                            <ImageBackground style={{ height: hp('19%'), width: wp('28%'), borderColor: myThemeColors.light.lightborder1, borderWidth: wp('0.5%'), borderRadius: wp('1.3%'), justifyContent: "center" }} >
                                <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", }}>
                                    <Image source={Group} style={{ height: hp('5%'), width: wp('10%'), resizeMode: "contain", justifyContent: 'center', }}></Image>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                        <View style={{ height: hp('20%'), width: wp('28%'), justifyContent: "center", }}>
                            <ImageBackground style={{ height: hp('19%'), width: wp('28%'), justifyContent: "center", }} >
                            </ImageBackground>
                        </View>
                    </View>
                </View>
                <View style={{ height: hp('6%'), width: wp('90%'), alignSelf: 'center' }}>
                    <Text style={{ alignSelf: "flex-end", fontSize: myfontsize.h2.fontSize, fontFamily: myfontsize.h12.fontFamily, color: myThemeColors.light.light_gray }}>Not required or obvious*</Text>
                </View>
                <View style={{ height: hp('15%'), width: wp('90%'), alignSelf: 'center', backgroundColor: "#fff" }}>
                    <TextInput style={{ fontSize: myfontsize.h2.fontSize, fontFamily: myfontsize.h12.fontFamily, }}
                        placeholder="Description *"
                    >
                    </TextInput>
                </View>
                <View style={{ height: hp('5%'), width: wp('90%') }}></View>
                <View style={styles.login}>
                    <TouchableOpacity style={styles.login_button_style} onPress={() => { props.navigation.navigate('Followers') }}><Text style={styles.next_text}>Save</Text></TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
}

export default Activities;

const styles = StyleSheet.create({
    container:
    {
        width: wp("100%"),
        height: hp("100%"),
        backgroundColor: myThemeColors.light.light_gray_background,
        borderRadius: hp("3%")
    },
    headre_style:
    {
        width: wp("100%"),
        height: hp("8%"),
        flexDirection: "row",
        alignSelf: "center",
        borderRadius: hp("3%"),
     backgroundColor: myThemeColors.light.mainbg,
    },
    left_errow_view:
    {   
        width: wp("35%"),
        height: hp("8%"),
        justifyContent: "center",

    },
    left_errow_style:
    {
        width: wp("2.5%"),
        height: hp("2.5%"),
marginLeft:wp("5%")

    },
    city_text_view:
    {
        width: wp("65%"),
        height: hp("8%"),
        justifyContent: "center"
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
        height: hp("6%"),
        alignSelf: "center",
        backgroundColor: myThemeColors.light.light_gray_background,
        flexDirection: "row",
        borderRadius: hp("1%"),

    },
    text_input:
    {
        width: wp("78%"),
        height: hp("6%"),
        backgroundColor: myThemeColors.light.light_gray_background,
        borderRadius: hp("1%"),

    },
    text_input_style:
    {
        backgroundColor: myThemeColors.light.light_gray_background,
        borderRadius: hp("1%"),
        width: wp("78%"),
        height: hp("6%"),
        fontFamily: myfontsize.h12.fontFamily,
        paddingLeft: hp("2%")
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
        backgroundColor: myThemeColors.light.mainbg,
        flexDirection: "row"
    },

    all_lable_color: {
        paddingLeft: wp('3%'),
        width: wp('90%'),
        alignItems: "center",
        justifyContent: "center",
        // color: "#ffffff",
        fontSize: myfontsize.h2.fontSize,
        fontFamily: myfontsize.h12.fontFamily,

    },
    userview: {
        height: hp('6.5%'),
        width: wp('90%'),
        borderRadius: hp('0.8%'),
        textAlign: 'center',
        // color: "transparent",
        borderWidth: hp('0.1%'),
        alignSelf: "center",
        backgroundColor: myThemeColors.light.mainbg,
        borderColor: "#fff",
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
        backgroundColor: '#3D70FF',
        borderWidth: wp('0.5%'),
        borderRadius: hp("7%") / 2,
        borderColor: '#3D70FF',
        // backgroundColor: myThemeColors.purple,
    },
    next_text:
    {
        color: "#fff",
        fontFamily: myfontsize.h12.fontFamily, fontSize: myfontsize.h3.fontSize,
        fontWeight: '800'
    },
})