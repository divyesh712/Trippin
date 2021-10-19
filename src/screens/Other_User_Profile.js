import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    TextInput,
    useWindowDimensions,
    FlatList,
    ImageBackground,
    ScrollView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import { splash_logo, Left_errow, serch_icon, map_icon, plus_icon, close_icon, plus_circle,routing,phone,email, group_2, Ellipse_1, user, call_calling, sms,  lifebuoy,Ellipse_37,Vector } from '../utils/appContest';
import myfontsize from '../utils/myfontsize';

// const item = [
//     {
//         id: 1,
//         image: require('../assets/image/Rectangle_15.png'),
//         name: "Yosemite National Park",
//         fun: "Hiking,Climbing,Ski Touring,Rafting"
//     },
//     {
//         id: 2,
//         image: require('../assets/image/san_fransico.png'),
//         name: "San Francisco",
//         fun: "Beach stroll,Country Trip,Hike,Beach stroll"
//     },
//     {
//         id: 3,
//         image: require('../assets/image/los_angels.png'),
//         name: "Los Angeles",
//         fun: "Movie Watching,   Market Eats,Galleries"
//     },
// ];

const trips = [
    {
        id: 1,
        image: require('../assets/image/Rectangle_15.png'),
        name: "Yosemite National Park",
        fun: "Hiking,Climbing,Ski Touring,Rafting"
    },
    {
        id: 2,
        image: require('../assets/image/Rectangle_16.png'),
        name: "San Francisco",
        fun: "Beach stroll,Country Trip,Hike,Beach stroll"
    },
    {
        id: 1,
        image: require('../assets/image/Rectangle_15.png'),
        name: "Yosemite National Park",
        fun: "Hiking,Climbing,Ski Touring,Rafting"
    },
    {
        id: 4,
        image: require('../assets/image/Rectangle_16.png'),
        name: "Los Angeles",
        fun: "Movie Watching,    Market Eats,Galleries"
    },
    {
        id: 1,
        image: require('../assets/image/Rectangle_15.png'),
        name: "Yosemite National Park",
        fun: "Hiking,Climbing,Ski Touring,Rafting"
    },
];

const activity = [
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
        image: require('../assets/image/Rectangle_17.png'),
        name: "Star Gazing",
        img: require('../assets/icon/location.png'),
        address: "Campbell County, Wyoming, USA",
        img1: require('../assets/icon/google.png'),
        img2: require('../assets/icon/star.png'),
        no: '4.5 / 5',
    },
    {
        id: 3,
        image: require('../assets/image/Rectangle_17.png'),
        name: "Horseback Riding",
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

]

const Search = () => {
    return (
        
        <View style={styles.container}>
            <StatusBar
                backgroundColor={myThemeColors.light.light_gray_background}
                barStyle="dark-content"
            />
            <ScrollView contentContainerStyle={{paddingBottom:hp("10%")}}>
            <View style={styles.headre_style}>
                {/* <View style={styles.city_text_view}>
                        <Text style={styles.city_text_style}>Alfa Anggara</Text>
                    </View>
                    <TouchableOpacity style={styles.left_errow_view}>
                        <Image source={group_2} style={styles.left_errow_style} ></Image>
                    </TouchableOpacity> */}
                <View style={styles.city_text_view}>
                    <Text style={styles.city_text_style}>Alfa Anggara</Text>
                </View>
                <TouchableOpacity style={styles.left_errow_view} onPress={() => props.navigation.goBack()} >
                    <Image source={group_2} resizeMode="stretch" style={styles.left_errow_style} />
                </TouchableOpacity>
            </View>
            <View style={{ height: hp('2%'), width: wp('100%') }}></View>
            <View style={{ height: hp('19%'), width: wp('100%'), flexDirection: "row", }}>
                    <View style={{ height: hp('13%'), width: wp('35%'), justifyContent: "center" }}>
                        <Image source={Ellipse_37} style={{ height: hp('15%'), width: wp('30%'), resizeMode: "contain", alignSelf: 'center', }}></Image>
                    </View>
                    <View style={{ height: hp('19%'), width: wp('65%'), justifyContent: "center" }}>
                        <View style={{ height: hp('4%'), width: wp('66%'), alignItems: 'center', flexDirection: "row", }}>
                            <View style={{ height: hp('4%'), width: wp('9%'), justifyContent: "center", }}>
                                <Image source={user} style={{ height: hp('2.8%'), width: wp('5.8%'), resizeMode: 'contain', }}>
                                </Image>
                            </View>
                            <View style={{ height: hp('4%'), width: wp('57%'), justifyContent: "center" }}>
                                <Text style={{ fontSize: myfontsize.h1.fontSize, fontFamily: myfontsize.h12.fontFamily, }}>Alfa Anggara</Text>
                            </View>
                        </View>
                        <View style={{ height: hp('4%'), width: wp('66%'), alignItems: 'center', flexDirection: "row" }}>
                            <View style={{ height: hp('4%'), width: wp('9%'), justifyContent: "center", }}>
                                <Image source={phone} style={{ height: hp('2.8%'), width: wp('5.8%'), resizeMode: 'contain', }}>
                                </Image>
                            </View>
                            <View style={{ height: hp('4%'), width: wp('57%'), justifyContent: "center" }}>
                                <Text style={{ fontSize: myfontsize.h1.fontSize, fontFamily: myfontsize.h12.fontFamily, }}>+ 123 456 7890</Text>
                            </View>
                        </View>
                        <View style={{ height: hp('4%'), width: wp('66%'), alignItems: 'center', flexDirection: "row" }}>
                            <View style={{ height: hp('4%'), width: wp('9%'), justifyContent: "center", }}>
                                <Image source={email} style={{ height: hp('2.8%'), width: wp('5.8%'), resizeMode: 'contain', }}>
                                </Image>
                            </View>
                            <View style={{ height: hp('4%'), width: wp('57%'), justifyContent: "center" }}>
                                <Text style={{ fontSize: myfontsize.h1.fontSize, fontFamily: myfontsize.h12.fontFamily, }}>alfaanggara@gmail.com</Text>
                            </View>
                        </View>
                        <View style={{ height: hp('6%'), width: wp('60%'), flexDirection: "row",  }}>
                            <View style={styles.follow_view} >

                                <TouchableOpacity style={styles.follow_touch}>

                                    <View style={styles.unfollow_touch}>
                                        <Text style={styles.unfollow_text}>Follow</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ height: hp('6%'), width: wp('31%'),  }}>
                                <View style={styles.follow_view1} >
                                  
                                        <TouchableOpacity style={styles.unfollow_touch1}>
                                            <Text style={styles.unfollow_text1}>Send Message</Text>
                                        </TouchableOpacity>

                                
                                </View>
                            </View>
                            <View style={{height:hp('6%'),width:wp('13%'),justifyContent:"center",alignSelf:"center",}}>
                            <TouchableOpacity style={{height:hp('4.5%'),width:wp('9%'),justifyContent:"center",  borderRadius: hp('4.5%')/2, borderWidth: 0.1,marginTop:hp("1%"),alignItems:"center"}}>
                                <Image source={Vector} style={{height:hp('2%'),width:wp('4%'),resizeMode:'contain',alignSelf:"center",}}></Image>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            <View style={{ height: hp('10%'), width: wp('100%'),justifyContent: 'center' }}>
                <View style={{
                    height: hp('9%'), width: wp('90%'), alignSelf: 'center', flexDirection: "row", borderBottomWidth: wp('0.1%'),justifyContent:"center",alignItems:"center",
                    borderBottomColor: myThemeColors.light.light_gray, borderTopWidth: wp('0.1%'), borderTopColor: myThemeColors.light.light_gray,
                }}>
                    <View style={{ height: hp('8%'), width: wp('30%'), alignItems: "center", justifyContent: "center", }}>
                        <Text style={{ fontWeight: 'bold', fontSize: myfontsize.h4.fontSize }}>50</Text>
                        <Text style={{ color: myThemeColors.light.light_gray, fontSize: myfontsize.h1.fontSize, fontFamily: myfontsize.h12.fontFamily, }}>Trips</Text>
                    </View>

                    <View style={{ height: hp('8%'), width: wp('30%'), alignItems: "center", justifyContent: "center" ,borderLeftWidth:0.5,borderLeftColor:myThemeColors.light.light_gray,borderRightColor:myThemeColors.light.light_gray,borderRightWidth:0.5}}>
                        <Text style={{ fontWeight: 'bold', fontSize: myfontsize.h4.fontSize }}>425K</Text>
                        <Text style={{ color: myThemeColors.light.light_gray, fontSize: myfontsize.h1.fontSize, fontFamily: myfontsize.h12.fontFamily, }}>Followers</Text>
                    </View>
                    <View style={{ height: hp('8%'), width: wp('30%'), alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontWeight: 'bold', fontSize: myfontsize.h4.fontSize }}
                        >956</Text>
                        <Text style={{ color: myThemeColors.light.light_gray, fontSize: myfontsize.h1.fontSize, fontFamily: myfontsize.h12.fontFamily, }}>Following</Text>
                    </View>
                </View>
            </View>
            <View style={{ height: hp('6%'), width: wp('100%'),  flexDirection: "row" }}>
                <View style={{ height: hp('6%'), width: wp('15%'), justifyContent: "center", alignItems: "center" }}>
                    <Image source={routing} style={{ height: hp('3%'), width: wp('6%'), resizeMode: "contain", }}></Image>
                </View>
                <View style={{ height: hp('6%'), width: wp('71%'), alignSelf: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: myfontsize.h4.fontSize, fontFamily: myfontsize.h13.fontFamily, }}>Trips</Text>
                </View>
                <TouchableOpacity style={{ height: hp('6%'), width: wp('14%'), alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: myfontsize.h2.fontSize, fontFamily: myfontsize.h13.fontFamily, color: myThemeColors.light.primary_blue }} >Add</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={{ height: hp('15%'), width: wp('100%') ,backgroundColor:"red"}}>
            <FlatList
                numColumns={3}
                // showsVerticalScrollIndicator={false}
                data={item}
                showsHorizontalScrollIndicator={true}
                nestedScrollEnabled={true}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{height:hp('10%'),width:wp('30%')}}>
                        <Image source={item.image} style={{height:hp('10%'),width:wp('70%'),resizeMode:'contain'}}></Image>
                    </TouchableOpacity>
                } />
            </View> */}
            <View style={styles.flatlist_view1}>

                <FlatList
                    style={styles.flatlist_view_city1}
                    contentContainerStyle={{ paddingBottom: hp("5%"), paddingTop: hp("1%"),paddingRight:wp("2%"), marginLeft: wp("3%") }}
                    data={trips}
                    // numColumns={2}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    // showsVerticalScrollIndicator={false}
                    // nestedScrollEnabled={true}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={styles.trip_view}>
                            <View style={styles.image_view}>
                                <Image source={item.image} resizeMode="stretch" style={styles.image_style} />
                            </View>
                            <View style={styles.text_view}>
                                <Text style={styles.name_text}>{item.name}</Text>
                            </View>
                            <View style={styles.fun_view}>
                                <Text style={styles.fun_text}>{item.fun}</Text>
                            </View>

                        </TouchableOpacity>
                    } />
                {/* <TouchableOpacity style={styles.plus_icon_view} >
                    <Image source={plus_circle} resizeMode="stretch" style={styles.plus_circle_style} />
                </TouchableOpacity> */}
            </View>
            <View style={{ height: hp('6%'), width: wp('100%'),  flexDirection: "row",  }}>
                <View style={{ height: hp('6%'), width: wp('15%'), justifyContent: "center", alignItems: "center" }}>
                    <Image source={lifebuoy} style={{ height: hp('3%'), width: wp('6%'), resizeMode: "contain", }}></Image>
                </View>
                <View style={{ height: hp('6%'), width: wp('71%'), alignSelf: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: myfontsize.h4.fontSize, fontFamily: myfontsize.h13.fontFamily, }}>Activities</Text>
                </View>
                <TouchableOpacity style={{ height: hp('6%'), width: wp('14%'), alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: myfontsize.h2.fontSize, fontFamily: myfontsize.h13.fontFamily, color: myThemeColors.light.primary_blue }} >Add</Text>
                </TouchableOpacity>
            </View>
            <View style={{width:wp("90%"),   borderTopWidth:0.5,alignSelf:"center", borderTopColor:myThemeColors.light.light_gray, }}></View>
            <View style={styles.flatlist_view}>
                <FlatList
                    style={styles.flatlist_view_city}
                    contentContainerStyle={{ paddingBottom: hp("5%"), paddingTop: hp("1%"),marginLeft: wp("3%") }}
                    data={activity}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    // nestedScrollEnabled={true}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={styles.activity_view}>
                            <View style={styles.background_image__view}>
                                <ImageBackground source={item.image} resizeMode="stretch" style={styles.background_image_style} >
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
                            <View style={styles.all_tetx_view}>
                                {/* <Text style={styles.name_text}>{item.name}</Text> */}
                                <View style={styles.text_view2}>
                                    <Text style={styles.hiking_text}>{item.name}</Text>
                                </View>
                                <View style={styles.headview}>
                                    <View style={styles.headview1}>
                                        <View style={styles.image_view2}>
                                            <TouchableOpacity><Image source={item.img} resizeMode="contain" style={{ height: hp('2.5%'), width: wp('5%') }} /></TouchableOpacity>
                                        </View>
                                        <View style={styles.text_view3}>
                                            <Text style={styles.text3}>{item.address}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: hp('3.5%'), width: wp('38%'), alignSelf: 'center', flexDirection: 'row', alignself: 'center' }}>
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
                {/* <TouchableOpacity style={styles.plus_icon_view} >
                    <Image source={plus_circle} resizeMode="stretch" style={styles.plus_circle_style} />
                </TouchableOpacity> */}
            </View>


            </ScrollView>
        </View>
    )
}

export default Search;

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


    },
    left_errow_view:
    {
        width: wp("9%"),
        height: hp("8%"),
        justifyContent: "center",
        // backgroundColor:"red",
        // alignItems: "center"
    },
    left_errow_style:
    {
        width: wp("4.8%"),
        height: hp("7.2%"),
        resizeMode: "contain",

    },
    city_text_view:
    {
        width: wp("91%"),
        height: hp("8%"),
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"pink"
    },
    city_text_style:
    {
        fontSize: myfontsize.h3.fontSize,
        fontFamily: myfontsize.h13.fontFamily,
        fontWeight: "600",
        paddingLeft: wp("5%"),
    },

    flatlist_view1:
    {
        width: wp("100%"),
        // backgroundColor: myThemeColors.light.light_gray_background,
        height: hp("30%"),
        // backgroundColor: 'yellow'
    },
    flatlist_view_city1:
    {
        alignSelf: "center",
        width: wp("100%"),
        height: hp("30%"),
        // backgroundColor: "yellow"

    },
    flatlist_view_city:
    {
        alignSelf: "center",
        width: wp("100%"),
        height: hp("29%"),
     
        // backgroundColor: "pink"

    },
    flatlist_view:
    {
        width: wp("100%"),
        height: hp("35%"),
        backgroundColor: myThemeColors.light.light_gray_background,
        // paddingRight:wp("2%")
       
        // backgroundColor: 'yellow'
    },
    city_view:
    {
        width: wp("43%"),
        height: hp("20%"),
        marginBottom: hp("1.4%"),
        marginLeft: wp("2.3%"),
        // backgroundColor:"yellow",
        backgroundColor: myThemeColors.light.mainbg,
        elevation: 2,
        borderRadius: hp("1%"),
        justifyContent: "center",
        alignItems: "center"


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
        fontWeight: "400"
    },
    text_view:
    {
        width: wp("43%"),
        height: hp("4%"),
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"yellow"
    },
    city_Text_view:
    {
        width: wp("88%"),
        height: hp("5%"),
        alignSelf: "center",
        // backgroundColor:"yellow",
        justifyContent: "center"
    },
    city_Text:
    {
        fontFamily: myfontsize.h12.fontFamily,
        fontSize: myfontsize.h3.fontSize,
    },
    plus_icon_view:
    {
        width: wp("14%"),
        height: hp("7%"),
        // backgroundColor:myThemeColors.light.primary_blue,
        // borderRadius:hp("7%")/2,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        right: 0,
        bottom: 0,
        marginBottom: hp("5%"),
        marginRight: wp("5%")
    },
    plus_circle_style:
    {
        width: wp("14%"),
        height: hp("7%"),
    },
    trip_view:
    {
        width: wp("43%"),
        height: hp("27%"),
        // marginBottom: hp("1.2%"),
        marginRight: wp("4.1%"),
        // backgroundColor:"yellow",
        backgroundColor: myThemeColors.light.mainbg,
        elevation: 2,
        borderRadius: hp("1%"),
        justifyContent: "center",
        alignItems: "center"

    },
    follow_view:
    {
        width: wp("43%"),
        height: hp("9%"),
        alignItems: "center",
        // backgroundColor:"yellow",
        justifyContent: "center"
    },
    follow_style:
    {
        width: wp("14%"),
        height: hp("7%"),
    },
    fun_view:
    {
        width: wp("45%"),
        height: hp("6%"),
        justifyContent: "center",
        textAlign:"center",
        alignItems:"center",
        marginBottom: hp("1%")
        // alignSelf:"center"
    },
    fun_text:
    {

        fontFamily: myfontsize.h12.fontFamily,
        // fontSize:myfontsize.h1.fontSize,
        color: myThemeColors.light.light_gray,
    },
    activity_view:
    {
        width: wp("38%"),
        height: hp("31%"),
        // marginBottom: hp("1%"),
        marginRight: wp("3%"),
        backgroundColor: myThemeColors.light.mainbg,
        elevation: 2,
        borderRadius: hp("1%"),
        // justifyContent: "center",
        alignItems: "center",
        // backgroundColor:'yellow'
    },
    background_image__view:
    {
        width: wp("38%"),
        height: hp("19%"),
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:'red'
    },
    background_image_style:
    {
        width: wp("36%"),
        height: hp("18%"),
        // paddingTop: hp("1%")
    },
    header_view1: {
        height: hp('3%'),
        width: wp('37%'),
        alignSelf: 'center',
        alignItems: 'flex-end',
        marginTop:hp("0.5%")
    },
    header_view2: {
        height: hp('3%'),
        width: wp('19%'),
        backgroundColor: 'white',
        borderRadius: hp('0.50%'),
        flexDirection: 'row'
    },
    image_view1: {
        height: hp('3%'),
        width: wp('5.5%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_view1: {
        height: hp('3%'),
        width: wp('13.5%'),
        justifyContent: 'center'
    },
    text1: {
        color: myThemeColors.light.defaultfont,
        fontSize: hp('1.7%'),
        fontFamily: myfontsize.h10.fontFamily
    },
    text_view2: {
        height: hp('3%'),
        width: wp('38%'),
        justifyContent: 'flex-end',
        alignSelf: 'center',
        // backgroundColor:"pink"
    },
    headview: {
        height: hp('4.7%'),
        width: wp('38%'),
        alignSelf: 'center',
        flexDirection: 'row'
    },
    headview1: {
        height: hp('3.7%'),
        width: wp('38%'),
        alignSelf: 'flex-end',
        flexDirection: 'row'
    },
    hiking_text:
    {
        fontFamily: myfontsize.h13.fontFamily,
        // fontWeight: "400",
        fontSize: hp('1.7%')
    },
    all_tetx_view:
    {
        width: wp("38%"),
        height: hp("11.2%"),
        // backgroundColor:'red',
        paddingLeft:wp('3%')
        // alignItems:"center"

    },
    text_view3: {
        height: hp('3.7%'),
        width: wp('32%')
    },
    text3: {
        color: myThemeColors.light.light_gray,
        fontSize: hp('1.6%'),
        fontFamily: myfontsize.h12.fontFamily,
        lineHeight: hp('1.8%')
    },
    image_view2: {
        height: hp('3.7%'),
        width: wp('6%'),
    },
    google_view: {
        height: hp('3.5%'),
        width: wp('8%'),
        justifyContent: 'center'
    },
    google_text_view: {
        height: hp('3.5%'),
        width: wp('30%'),
        justifyContent: 'center'
    },
    google_text: {
        color: myThemeColors.light.defaultfont,
        fontSize: hp('1.7%'),
        fontFamily: myfontsize.h13.fontFamily
    },
    follow_view:
    {
        width: wp("18%"),
        height: hp("7%"),
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"yellow"

    },
    follow_view1:
    {
        width: wp("29%"),
        height: hp("7%"),
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"yellow"

    },
    follow_touch:
    {
        width: wp("15%"),
        height: hp("4%"),
        backgroundColor: myThemeColors.light.primary_blue,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp("2%"),
        // backgroundColor:'pink'

    },
    follow_text:
    {
        color: myThemeColors.light.mainbg,
        fontFamily: myfontsize.h10.fontFamily,
        fontSize: hp("1.5%")
    },
    unfollow_touch:
    {
        width: wp("15%"),
        height: hp("5%"),
        // backgroundColor:myThemeColors.light.mainbg,
        justifyContent: "center",
        borderWidth: 0.1,
        borderColor: myThemeColors.light.light_gray,
        // elevation:1,
        alignItems: "center",
        borderRadius: hp("3%"),
        backgroundColor:myThemeColors.light.primary_blue

    },
    unfollow_text:
    {
       
        fontSize: myfontsize.h3.fontSize,
        fontFamily: myfontsize.h13.fontFamily,
        fontWeight: "600",
         color:myThemeColors.light.mainbg,
      
    },
    unfollow_touch1:
    {
        width: wp("29%"),
        height: hp("5%"),
        // backgroundColor:myThemeColors.light.mainbg,
        justifyContent: "center",
        borderWidth: 0.1,
        borderColor: myThemeColors.light.light_gray,
        // elevation:1,
        alignItems: "center",
        borderRadius: hp("3%"),
        // backgroundColor: 'pink',
        // marginLeft:wp('3%')

    },
    unfollow_text1:
    {
       
        fontSize: myfontsize.h3.fontSize,
        fontFamily: myfontsize.h13.fontFamily,
        fontWeight: "600",
        color:myThemeColors.light.defaultfont
   
    },
})