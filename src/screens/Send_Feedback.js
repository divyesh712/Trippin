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
import { Rating, AirbnbRating } from 'react-native-ratings';



const Send_Feedback = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [rattingdata, Setrattingdata] = useState({});

    // <Rating
    //     showRating
    //     onFinishRating={ratingCompleted}
    //     style={{ paddingVertical: 10 }}
    // />

    return (
        // <KeyboardAwareScrollView extraHeight={hp('15%')} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
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
                        <Text style={styles.city_text_style}>Review</Text>
                    </View>
                </View>
                <View style={{ height: hp('12%'), width: wp('90%'), alignSelf: 'center', justifyContent: "center" }}>
                    <Text style={{ fontSize: myfontsize.h3.fontSize, fontFamily: myfontsize.h13.fontFamily, color:"#898F97", }}>Rating</Text>
                </View>
                <View style={{ height: hp('1%'), width: wp('80%'), justifyContent: "center", alignItems: "center", alignSelf: "center" }}>

                    <AirbnbRating
                        reviews={false}
                        count={5}
                        defaultRating={3}
                        size={50}
                        ratingColor={"#EEEEEE"}
                        // ratingBackgroundColor={'#3D70FF'}
                        selectedColor={'#3D70FF'}
                    // tintColor={'#3D70FF'} 
                    // style={{ height:hp('5%'),width:wp('80%'),backgroundColor:"pink" }}
                    />
                </View>
            <View style={{ height: hp('44%'), width: wp('90%'), alignSelf: 'center', justifyContent: "center",}}>
                <View style={{ height: hp('5%'), width: wp('90%'),}}>
                    <Text style={{ fontSize: myfontsize.h3.fontSize, fontFamily: myfontsize.h13.fontFamily, color:"#898F97", }}>Review(optional)</Text>
                </View>
                <View style={{ height: hp('18%'), width: wp('82%'),alignSelf: 'center' }}>
                    <Text style={{fontSize: myfontsize.h3.fontSize, fontFamily: myfontsize.h12.fontFamily, color: myThemeColors.light.light_gray,}}>Lorem Ipsum has been the industry. It has survived not only five centuries</Text>
                </View>
            </View>
            <View style={{height:hp('24%'),width:wp('100%')}}></View>
            <View style={styles.login}>
                    <TouchableOpacity style={styles.login_button_style} onPress={() => { props.navigation.navigate('Followers') }}><Text style={styles.next_text}>Submit</Text></TouchableOpacity>
                </View>
            </View>

        // </KeyboardAwareScrollView>
    );
}

export default Send_Feedback;

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
        backgroundColor: "#ffffff",
        borderTopLeftRadius: hp("3%"),
        borderTopRightRadius: hp("3%"),

    },
    left_errow_view:
    {
        width: wp("15%"),
        height: hp("8%"),
        justifyContent: "center",
        alignItems: "center",
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
        alignItems: "center",
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
});