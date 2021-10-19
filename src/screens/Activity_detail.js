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
    ScrollView,
    SafeAreaView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import { splash_logo, Left_errow, serch_icon, plus_icon, Subtract, Ellipse_1, Vector2, google } from '../utils/appContest';
import myfontsize from '../utils/myfontsize';

const city = [
    {
        id: 1,
        image: require('../assets/image/Rectangle_11.png'),
    },
    {
        id: 2,
        image: require('../assets/image/Rectangle_12.png'),
    },
    {
        id: 3,
        image: require('../assets/image/Rectangle_11.png'),
    },
    {
        id: 4,
        image: require('../assets/image/Rectangle_12.png'),
    },
    {
        id: 5,
        image: require('../assets/image/Rectangle_11.png'),
    },
];

const Data = [
    {
        id: 1,
        image: require('../assets/image/follow.png'),
        name: "Olive Yew",
        img: require('../assets/icon/star.png'),
        img1: require('../assets/icon/gray_star.png'),
        text: 'It has survived not only five centuries',
    },
    {
        id: 2,
        image: require('../assets/image/follow.png'),
        name: "Olive Yew",
        img: require('../assets/icon/star.png'),
        img1: require('../assets/icon/gray_star.png'),
        text: 'It has survived not only five centuries',
    },
    {
        id: 3,
        image: require('../assets/image/follow.png'),
        name: "Olive Yew",
        img: require('../assets/icon/star.png'),
        img1: require('../assets/icon/gray_star.png'),
        text: 'It has survived not only five centuries',
    },
];

const Activity_detail = (props) => {

    const [myActiveTheme, SetmyActiveTheme] = useState(myThemeColors.light);

    return (

        <View style={styles.container}>
            <ScrollView style={styles.mainContainer} >
                <StatusBar
                    backgroundColor={myThemeColors.light.light_gray_background}
                    barStyle="dark-content"
                />
                <View style={styles.image_header_view}>
                    <View style={styles.bg_image_view}>
                        <Image source={Subtract} resizeMode='stretch' style={styles.bg_img} />
                    </View>
                    <View style={styles.profile_header_view}>
                        <Image source={Ellipse_1} resizeMode='stretch' style={styles.profile_img} />
                    </View>
                    <View style={styles.profile_name_view}>
                        <Text style={styles.profile_name}>Alfa Anggara</Text>
                    </View>
                    <View style={styles.name_view}>
                        <Text style={styles.name}>Hiking Advanchar Alfa Style</Text>
                    </View>
                </View>


                <View style={styles.second_view}>

                    <View style={styles.address_main_view}>
                        <View style={styles.address_view}>
                            <Text style={styles.add_text}>Address:</Text>
                            <Text style={styles.address_text}> 8 S. Circle Hollow Street,</Text>
                        </View>
                        <View style={styles.add_view}>
                            <Text style={styles.address_text}>Brooklyn, NY USA 10467</Text>
                        </View>
                    </View>

                    <View style={styles.ratting_main_view}>
                        <View style={{ height: hp('1%'), width: wp('90%') }}></View>

                        <View style={styles.ratting_view}>
                            <View style={styles.ratting}>
                                <Text style={styles.ratting_text}>Rating</Text>
                            </View>

                            <View style={styles.ratting_first_view}>
                                <View style={styles.image_view1}>
                                    <Image source={Vector2} resizeMode="contain" style={{ height: hp('3%'), width: wp('6%') }} />
                                </View>
                                <View style={styles.text_view1}>
                                    <Text style={styles.text1}>4.5 / 5</Text>
                                </View>
                            </View>

                            <View style={styles.ratting_second_view}>
                                <View style={styles.image_view2}>
                                    <Image source={google} resizeMode="contain" style={{ height: hp('3%'), width: wp('6%') }} />
                                </View>
                                <View style={styles.text_view2}>
                                    <Text style={styles.text1}>4.5 / 5</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.description_main_view}>
                    <View style={styles.description_view}>
                        <Text style={styles.description_text}>Description</Text>
                    </View>
                    <View style={styles.goal_main_view}>
                        <View style={styles.sub_point_main_view}>
                            <View style={styles.point_main_view}>
                                <View style={styles.point_view}></View>
                            </View>
                            <View style={styles.point_text_view}>
                                <Text style={styles.font_style} >Lorem Ipsum has been the industry</Text>
                            </View>
                        </View>
                        <View style={styles.sub_point_main_view}>
                            <View style={styles.point_main_view}>
                                <View style={styles.point_view}></View>
                            </View>
                            <View style={styles.point_text_view}>
                                <Text style={styles.font_style} >It has survived not only five centuries</Text>
                            </View>
                        </View>
                        <View style={styles.sub_point_main_view}>
                            <View style={styles.point_main_view}>
                                <View style={styles.point_view}></View>
                            </View>
                            <View style={styles.point_text_view}>
                                <Text style={styles.font_style} >It is a long established fact that a reader</Text>
                            </View>
                        </View>
                    </View>

                </View>


                <View style={styles.flatlist_one}>

                    <View style={styles.flatlist_outer_view_one}>
                        <View style={styles.photos_view}>
                            <Text style={styles.photos_text}>Photos</Text>
                        </View>
                        <View style={styles.see_all_main_view}>
                            <TouchableOpacity style={styles.see_all_view}>
                                <Text style={styles.see_all_text}>
                                    See All
                                </Text>
                                <View style={styles.arrow_view}>
                                    <Image source={require('../assets/icon/right_arrow.png')} resizeMode="contain" style={{ height: hp('1%'), width: wp('4%') }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.flatlist_view}>
                        <FlatList
                            style={{ height: hp('23%'), width: wp('100%'), }}
                            contentContainerStyle={{ paddingTop: hp("2%"),paddingRight:wp("5%") }}
                            horizontal={true}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            nestedScrollEnabled={true}
                            data={city}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>

                                <View style={styles.img_view}>
                                    <TouchableOpacity onPress={() => { props.navigation.navigate('Send_Feedback')}} style={{ height: hp('23%'), width: wp('40%'), }}>
                                        <Image source={item.image} style={{ height: hp('20%'), width: wp('40%'),borderRadius:hp("1%") }} resizeMode="cover" />
                                    </TouchableOpacity>
                                </View>
                            }
                        />
                    </View>
                </View>

                <View style={styles.flatlist_two}>

                    <View style={styles.flatlist_outer_view_one}>
                        <View style={styles.photos_view}>
                            <Text style={styles.photos_text}>Reviews</Text>
                        </View>
                        <View style={styles.see_all_main_view}>
                            <TouchableOpacity onPress={() => {props.navigation.navigate("Send_Feedback")}} style={styles.see_all_view}>
                                <Text style={styles.see_all_text}>
                                    Send Feedback
                                </Text>
                                <View style={styles.arrow_view}>
                                    <Image source={require('../assets/icon/right_arrow.png')} resizeMode="contain" style={{ height: hp('1%'), width: wp('4%') }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.flatlist_view_outer}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            style={styles.community_flatliststyle}
                            nestedScrollEnabled={true}
                            contentContainerStyle={{ paddingBottom: hp("8%"), paddingTop: hp("2%") }}
                            data={Data}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <View style={styles.flatlist_second_view}>
                                    <View style={styles.flatlist_view1}>
                                        <View style={styles.profile_image_view} >
                                            <Image source={item.image} style={styles.profile_image} />
                                        </View>
                                        <View style={styles.ratt_view}>
                                            <View style={styles.name_text_view} >
                                                <Text style={styles.name_text}>{item.name}</Text>
                                            </View>
                                            <View style={styles.name_text_view1} >
                                                <TouchableOpacity  style={styles.star_view}><Image source={item.img} style={styles.star} resizeMode="cover" /></TouchableOpacity>
                                                <TouchableOpacity style={styles.star_view}><Image source={item.img} style={styles.star} resizeMode="cover" /></TouchableOpacity>
                                                <TouchableOpacity style={styles.star_view}><Image source={item.img} style={styles.star} resizeMode="cover" /></TouchableOpacity>
                                                <TouchableOpacity style={styles.star_view}><Image source={item.img1} style={styles.star} resizeMode="cover" /></TouchableOpacity>
                                                <TouchableOpacity style={styles.star_view}><Image source={item.img1} style={styles.star} resizeMode="cover" /></TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ height: hp('3%'), width: wp('85%'), alignSelf: 'center' }}>
                                        <Text style={styles.name_text1}>{item.text}</Text>
                                    </View>
                                </View>
                            }
                        />
                    </View>
                </View>

            </ScrollView>
        </View>

    );
}

export default Activity_detail;

const styles = StyleSheet.create({
    container:
    {
        width: wp("100%"),
        height: hp("100%"),
        backgroundColor: myThemeColors.light.mainbg,
        borderRadius: hp("3%")
    },
    mainContainer: {
        width: wp('100%'),
        height: hp('100%'),
        // backgroundColor: "#F5EEEA",
    },
    image_header_view: {
        height: hp('54%'), 
        width: wp('100%')
    },
    bg_image_view: {
        height: hp('43%'), 
        width: wp('100%')
    },
    bg_img: {
        height: hp('35%'),
        width: wp('100%')
    },
    profile_header_view: {
        width: wp('100%'), 
        alignItems: 'center', 
        position: 'absolute', 
        top: 0, 
        marginTop: hp('29.2%')
    },
    profile_img: {
        height: hp('12.5%'), 
        width: wp('25%')
    },
    profile_name_view: {
        height: hp('3%'), 
        width: wp('100%'), 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    profile_name: {
        fontFamily: myfontsize.h10.fontFamily, 
        fontSize: myfontsize.h1.fontSize
    },
    name_view: {
        height: hp('8%'), 
        width: wp('100%'), 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    name: {
        fontFamily: myfontsize.h3.fontFamily, 
        fontSize: myfontsize.h1.fontSize
    },
    second_view: {
        height: hp('17%'), 
        width: wp('90%'), 
        alignSelf: 'center', 
        borderTopWidth: hp('0.10%'), 
        borderTopColor: myThemeColors.light.gray_one
    },
    address_main_view: {
        height: hp('10%'), 
        width: wp('90%'), 
        alignSelf: 'center', 
        justifyContent: 'center'
    },
    address_view: {
        height: hp('2.5%'), 
        width: wp('70%'), 
        alignSelf: 'center', 
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    add_text: {
        fontFamily: myfontsize.h3.fontFamily, 
        fontSize: myfontsize.h1.fontSize, 
        color: myThemeColors.light.gray
    },
    address_text: {
        fontFamily: myfontsize.h10.fontFamily, 
        fontSize: myfontsize.h1.fontSize, 
        color: myThemeColors.light.light_gray
    },
    add_view: {
        height: hp('2.5%'), 
        width: wp('70%'), 
        alignSelf: 'center', 
        alignItems: 'center'
    },
    ratting_main_view: {
        height: hp('7%'), 
        width: wp('90%'), 
        alignSelf: 'center', 
        borderTopWidth: hp('0.10%'), 
        borderTopColor: myThemeColors.light.gray_one
    },
    ratting_view: {
        height: hp('6%'), 
        width: wp('90%'), 
        alignSelf: 'center', 
        flexDirection: 'row'
    },
    ratting: {
        height: hp('6%'), 
        width: wp('41%'), 
        alignSelf: 'center', 
        justifyContent: 'center'
    },
    ratting_text: {
        fontFamily: myfontsize.h3.fontFamily, 
        fontSize: myfontsize.h1.fontSize, 
        color: myThemeColors.light.gray
    },
    ratting_first_view: {
        height: hp('6%'), 
        width: wp('30%'), 
        alignSelf: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
    },
    ratting_second_view: {
        height: hp('6%'), 
        width: wp('19%'), 
        alignSelf: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
    },
    description_main_view: {
        height: hp('17%'), 
        width: wp('90%'), 
        alignSelf: 'center', 
        borderTopWidth: hp('0.10%'), 
        borderTopColor: myThemeColors.light.gray_one
    },
    description_view: {
        height: hp('6%'), 
        width: wp('90%'), 
        alignSelf: 'center', 
        justifyContent: 'center'
    },
    description_text: {
        fontFamily: myfontsize.h3.fontFamily, 
        fontSize: myfontsize.h1.fontSize, 
        color: myThemeColors.light.gray
    },
    flatlist_one: {
        height: hp('31%'), 
        width: wp('90%'), 
        alignSelf: 'center', 
        borderTopWidth: hp('0.10%'), 
        borderTopColor: myThemeColors.light.gray_one,
    },
    flatlist_outer_view_one: {
        height: hp('6%'), 
        width: wp('90%'), 
        alignSelf: 'center', 
        flexDirection: 'row',
    },
    photos_view: {
        height: hp('6%'), 
        width: wp('45%'), 
        justifyContent: "flex-end",
    },
    photos_text: {
        fontFamily: myfontsize.h3.fontFamily, 
        fontSize: myfontsize.h1.fontSize, 
        color: myThemeColors.light.gray
    },
    see_all_main_view: {
        height: hp('6%'), 
        width: wp('45%'), 
        justifyContent: 'flex-end', 
        alignItems: 'flex-end'
    },
    see_all_view: {
        height: hp('6%'), 
        width: wp('25%'), 
        alignItems: 'flex-end', 
        justifyContent: 'flex-end', 
        flexDirection: "row"
    },
    see_all_text: {
        fontFamily: myfontsize.h13.fontFamily, 
        fontSize: hp('1.8%'), color: "#898F97"
    },
    arrow_view: {
        height: hp('2.5%'), 
        width: wp('3%'), 
        justifyContent: "center",
    },
    flatlist_two: {
        height: hp('40%'), 
        width: wp('90%'), 
        alignSelf: 'center', 
        borderTopWidth: hp('0.10%'), 
        borderTopColor: myThemeColors.light.gray_one,
    },
    img_view: {
        height: hp('23%'), 
        width: wp('40%'), 
        marginRight: hp('1.5%'),
    },
    flatlist_second_view: {
        height: hp('9%'), 
        width: wp('90%'), 
        marginBottom: hp('2%')
    },
    ratt_view: {
        width: wp('75%'), 
        height: hp('6%')
    },
    star_view: {
        marginRight: hp('1%')
    },
    image_view1: {
        height: hp('6%'),
        width: wp('8%'),
        justifyContent: 'center',
    },
    text_view1: {
        height: hp('6%'),
        width: wp('23%'),
        justifyContent: 'center'
    },
    text1: {
        color: myThemeColors.light.defaultfont,
        fontSize: hp('1.7%'),
        fontFamily: myfontsize.h10.fontFamily
    },
    image_view2: {
        height: hp('6%'),
        width: wp('8%'),
        justifyContent: 'center',
    },
    text_view2: {
        height: hp('6%'),
        width: wp('13%'),
        justifyContent: 'center'
    },
    text2: {
        color: myThemeColors.light.defaultfont,
        fontSize: hp('1.7%'),
        fontFamily: myfontsize.h10.fontFamily
    },
    font_style: {
        fontFamily: myfontsize.h10.fontFamily,
        fontSize: myfontsize.h1.fontSize,
        color: myThemeColors.light.light_gray
    },
    goal_main_view: {
        height: hp('11%'),
        width: wp('80%'),
        alignSelf: 'center',
    },
    goal_view: {
        height: hp('5%'),
        width: wp('80%'),
        justifyContent: 'center',

    },
    sub_point_main_view: {
        height: hp('3%'),
        width: wp('80%'),
        flexDirection: 'row',
        alignItems: 'center',

    },
    point_main_view: {
        height: hp('3%'),
        width: wp('6%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    point_view: {
        height: hp('1%'),
        width: wp('1.9%'),
        backgroundColor: myThemeColors.light.gray,
        borderRadius: hp('0.50%')
    },
    point_text_view: {
        height: hp('3%'),
        width: wp('75%'),
        justifyContent: 'center',
        marginLeft: wp('1%')
    },
    flatlist_view:
    {
        width: wp("100%"),
        // backgroundColor: myThemeColors.light.light_gray_background,
        height: hp("25%"),
    },
    flatlist_view_city:
    {
        alignSelf: "center",
        width: wp("90%"),
        height: hp("25%"),
    },
    city_view:
    {
        width: wp("43%"),
        height: hp("27%"),
        marginBottom: hp("1 %"),
        marginLeft: wp("2.3%"),
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
    flatlist_view_outer: {
        height: hp('33%'),
        width: wp('90%'),
        alignSelf: 'center'

    },
    flatlist_view1:
    {
        width: wp('90%'),
        height: hp('6%'),
        flexDirection: "row",
        alignSelf: "center",
        // backgroundColor: 'red'
    },
    profile_image_view:
    {
        width: wp('15%'),
        height: hp('6%'),
        // justifyContent: "center",
        // backgroundColor: 'yellow'
    },
    profile_image:
    {
        width: wp('12%'),
        height: hp('6%'),
        resizeMode: "contain"
    },
    name_text_view:
    {
        width: wp('75%'),
        height: hp('3%'),
        justifyContent: "center",
        // backgroundColor: 'blue'
    },
    name_text_view1:
    {
        width: wp('75%'),
        height: hp('3%'),
        alignItems: "center",
        // backgroundColor: 'red',
        flexDirection: 'row',

    },
    name_text:
    {
        fontSize: myfontsize.h2.fontSize,
        color: myThemeColors.light.defaultfont,
        fontFamily: myfontsize.h13.fontFamily
    },
    name_text1:
    {
        fontSize: myfontsize.h1.fontSize,
        color: myThemeColors.light.light_gray,
        fontFamily: myfontsize.h12.fontFamily,
    },
    star:{
        height: hp('2.1%'), width: wp('4.2%')
    },
})