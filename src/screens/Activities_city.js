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
    ImageBackground,KeyboardAvoidingView
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import { splash_logo, Left_errow, serch_icon,plus_icon,plus_circle } from '../utils/appContest';
import myfontsize from '../utils/myfontsize';

import ActionButton from 'react-native-action-button';

const city = [
    {
        id: 1,
        image: require('../assets/image/Rectangle_3.png'),
        name: "Hiking",
        img: require('../assets/icon/location.png'),
        address: "Campbell County, Wyoming, USA",
        img1: require('../assets/icon/google.png'),
        img2: require('../assets/icon/star.png'),
        no: '4.5 / 5',
    },
    {
        id: 2,
        image: require('../assets/image/Rectangle_3.png'),
        name: "Hiking",
        img: require('../assets/icon/location.png'),
        address: "Campbell County, Wyoming, USA",
        img1: require('../assets/icon/google.png'),
        img2: require('../assets/icon/star.png'),
        no: '4.5 / 5',
    },
    {
        id: 3,
        image: require('../assets/image/Rectangle_3.png'),
        name: "Hiking",
        img: require('../assets/icon/location.png'),
        address: "Campbell County, Wyoming, USA",
        img1: require('../assets/icon/google.png'),
        img2: require('../assets/icon/star.png'),
        no: '4.5 / 5',
    },
    {
        id: 4,
        image: require('../assets/image/Rectangle_3.png'),
        name: "Hiking",
        img: require('../assets/icon/location.png'),
        address: "Campbell County, Wyoming, USA",
        img1: require('../assets/icon/google.png'),
        img2: require('../assets/icon/star.png'),
        no: '4.5 / 5',
    },
    {
        id: 5,
        image: require('../assets/image/Rectangle_3.png'),
        name: "Hiking",
        img: require('../assets/icon/location.png'),
        address: "Campbell County, Wyoming, USA",
        img1: require('../assets/icon/google.png'),
        img2: require('../assets/icon/star.png'),
        no: '4.5 / 5',
    },
    {
        id: 6,
        image: require('../assets/image/Rectangle_3.png'),
        name: "Hiking",
        img: require('../assets/icon/location.png'),
        address: "Campbell County, Wyoming, USA",
        img1: require('../assets/icon/google.png'),
        img2: require('../assets/icon/star.png'),
        no: '4.5 / 5',
    },
];


const Activites_city = (props) => {

    const [myActiveTheme, SetmyActiveTheme] = useState(myThemeColors.light);

    return (
        <View style={styles.container}> 
        <KeyboardAwareScrollView style={styles.container}>
            <StatusBar
                backgroundColor={myThemeColors.light.light_gray_background}
                barStyle="dark-content"
            />
            <View style={styles.headre_style}>
                <TouchableOpacity style={styles.left_errow_view} onPress={() => props.navigation.goBack()} >
                    <Image source={Left_errow} style={styles.left_errow_style} />
                </TouchableOpacity>
                <View style={styles.city_text_view}>
                    <Text style={styles.city_text_style}>New York</Text>
                </View>
                <View style={styles.blank_view}>
                    {/* <Text style={styles.blank_text}></Text> */}
                </View>
            </View>
            <View style={styles.text_input_view}>
                <View style={styles.text_input}>
                    <TextInput
                        style={styles.text_input_style}
                        placeholder="Search for Activities"
                        placeholderTextColor={myThemeColors.light.light_gray}
                    />
                </View>
                <TouchableOpacity style={styles.serch_icon_view}>
                    <Image source={serch_icon} style={styles.search_icon_style} />
                </TouchableOpacity>
            </View>
            
            <View style={styles.flatlist_view}>
                <FlatList
                      style={styles.flatlist_view_city} 
                    contentContainerStyle={{ paddingBottom: hp("5%"), paddingTop: hp("1.5%"), }}
                    data={city}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => { props.navigation.navigate("Activity_detail") }} style={styles.city_view}>
                            <View style={styles.image_view}>
                                <ImageBackground source={item.image} resizeMode="stretch" style={styles.image_style} >
                                    <View style={styles.header_view1}>
                                        <View style={styles.header_view2}>
                                            <View style={styles.image_view1}>
                                                <Image source={item.img2} resizeMode="contain" style={{ height: hp('3.5%'), width: wp('3.5%') }} />
                                            </View>
                                            <View style={styles.text_view1}>
                                                <Text style={styles.text1}>{item.no}</Text>
                                            </View>
                                        </View>
                                    </View> 
                                </ImageBackground>
                            </View>
                            <View style={styles.text_view}>
                                {/* <Text style={styles.name_text}>{item.name}</Text> */}
                                <View style={styles.text_view2}>
                                    <Text style={styles.name_text}>{item.name}</Text>
                                </View>
                                <View style={styles.headview}>
                                    <View style={styles.headview1}>
                                        <View style={styles.image_view2}>
                                            <TouchableOpacity><Image source={item.img} resizeMode="stretch" style={{ height: hp('2.5%'), width: wp('5%') }} /></TouchableOpacity>
                                        </View>
                                        <View style={styles.text_view3}>
                                            <Text style={styles.text3}>{item.address}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: hp('3.5%'), width: wp('38%'), alignSelf: 'center', flexDirection: 'row', alignself: 'center'}}>
                                    <View style={styles.google_view}>
                                        <TouchableOpacity><Image source={item.img1} resizeMode="stretch" style={{ height: hp('3%'), width: wp('6%') }} /></TouchableOpacity>
                                    </View>
                                    <View style={styles.google_text_view}>
                                        <Text style={{ color: myThemeColors.light.defaultfont, fontSize: hp('1.7%'), fontFamily: myfontsize.h13.fontFamily }}>{item.no}</Text>
                                    </View>
                                </View>
                            </View> 
                        </TouchableOpacity> 
                    } /> 
            </View>
            
        

        </KeyboardAwareScrollView>
            <ActionButton  size={55} position={"right"} activeOpacity={1} useNativeFeedback={false} style={styles.plus_icon_view} onPress={() => props.navigation.goBack()} > 
            <Image source={plus_circle} resizeMode="stretch" style={styles.plus_icon_view} />
</ActionButton >
</View>
    );
}

export default Activites_city;

const styles = StyleSheet.create({
    container:
    {
        flex:1, 
        flexDirection:'column',
        backgroundColor: myThemeColors.light.mainbg,
        borderRadius: hp("3%")
    },
    headre_style:
    {
        flex:0.1,
        flexDirection: "row",
        alignSelf: "center",
        //    backgroundColor: myThemeColors.light.mainbg,
    },
    left_errow_view:
    {
        width: wp("10%"),
        height: hp("8%"),
        justifyContent: "center",
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
    },
    city_text_style:
    {
        fontSize: myfontsize.h3.fontSize,
        fontFamily: myfontsize.h13.fontFamily,
        fontWeight: "600",
        alignSelf: 'center'
    },
    blank_view: {
        width: wp("10%"),
        height: hp("8%"),
        justifyContent: "center",
    },
    text_input_view:
    { 
        flex:0.05, 
        alignSelf: "center",
        justifyContent:"flex-start",
        backgroundColor: myThemeColors.light.light_gray_background,
        flexDirection: "row",
        borderRadius: hp("1%"),

    },
    text_input:
    {
        flex:0.77, 
        backgroundColor: myThemeColors.light.light_gray_background,
        borderRadius: hp("1%"),

    },
    text_input_style:
    {
        backgroundColor: myThemeColors.light.light_gray_background,
        borderRadius: hp("1%"),
        // width: wp("78%"),
        // height: hp("6%"), 
        fontFamily: myfontsize.h12.fontFamily,
        paddingLeft: hp("2%")
    },
    serch_icon_view:
    {
        flex:0.11,
        // width: wp("12%"),
        // height: hp("6%"),
        justifyContent: "center",
        alignItems: "center"
    },
    search_icon_style:
    {
        width: wp("5.6%"),
        height: hp("3%"),
    },
    flatlist_view:
    {
        flex:0.75,
        // width: wp("100%"),
        backgroundColor: myThemeColors.light.light_gray_background, 
        marginTop: hp("2%"),
    },
    flatlist_view_city:
    {
        flex: 1,  
        alignSelf: "center",
        // backgroundColor:'red',
    },
    city_view:
    {
        width: wp("43%"),
        height: hp("27%"),
        marginBottom: hp("1 %"),
         marginLeft: wp("1%"),
         marginRight: wp("1%"),
        backgroundColor: myThemeColors.light.mainbg,
        elevation: 2,
        borderRadius: hp("1%"),
        // justifyContent: "center",
        alignItems: "center",


    },
    image_view:
    {
        width: wp("43%"),
        height: hp("15.5%"),
        justifyContent: "center",
        alignItems: "center",

    },
    image_style:
    {
        width: wp("41%"),
        height: hp("15%"),
        paddingTop: hp("1%")
    },
    name_text:
    {
        fontFamily: myfontsize.h13.fontFamily,
        // fontWeight: "400",
        fontSize: hp('1.7%')
    },
    text_view:
    {
        width: wp("43%"),
        height: hp("11.2%"),
    },
    plus_icon_view:
    {
        flex:0.1, 
    },
    left_errow_style1:{
        width: wp("5%"),
        height: hp("2.5%"),
    },
    header_view1:{
        height: hp('3%'), 
        width: wp('37%'),
        alignSelf: 'center',
        alignItems:'flex-end'
    },
    header_view2:{
        height: hp('3%'), 
        width: wp('19%'), 
        backgroundColor: 'white', 
        borderRadius: hp('0.50%'), 
        flexDirection: 'row'
    },
    image_view1:{
        height: hp('3%'), 
        width: wp('5.5%'), 
        justifyContent: 'center',
        alignItems:'center'
    },
    text_view1:{
        height: hp('3%'), 
        width: wp('13.5%'), 
        justifyContent: 'center'
    },
    text1:{
        color: myThemeColors.light.defaultfont, 
        fontSize: hp('1.7%'), 
        fontFamily: myfontsize.h10.fontFamily 
    },
    text_view2:{
        height: hp('3%'), 
        width: wp('38%'), 
        justifyContent: 'flex-end', 
        alignSelf: 'center'
    },
    headview:{
        height: hp('4.7%'), 
        width: wp('38%'), 
        alignSelf: 'center', 
        flexDirection: 'row'
    },
    headview1:{
        height: hp('3.7%'), 
        width: wp('38%'), 
        alignSelf:'flex-end', 
        flexDirection: 'row'
    },
    image_view2:{
        height: hp('3.7%'), 
        width: wp('6%'),
    },
    text_view3:{
        height: hp('3.7%'), 
        width: wp('32%') 
    },
    text3:{
        color: myThemeColors.light.light_gray, 
        fontSize: hp('1.6%'), 
        fontFamily: myfontsize.h12.fontFamily, 
        lineHeight: hp('1.8%')
    },
    google_view:{
        height: hp('3.5%'), 
        width: wp('8%'),
        justifyContent:'center' 
    },
    google_text_view:{
        height: hp('3.5%'), 
        width: wp('30%'), 
        justifyContent: 'center'
    },
    google_text:{
        color: myThemeColors.light.defaultfont, 
        fontSize: hp('1.7%'), 
        fontFamily: myfontsize.h13.fontFamily
    }
})