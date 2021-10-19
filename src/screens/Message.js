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
    ImageBackground
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import { splash_logo, Left_errow, serch_icon, map_icon, plus_icon, close_icon, plus_circle } from '../utils/appContest';
import myfontsize from '../utils/myfontsize';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view'; 
import Followers from './Followers';

 
const chat = [
    {
        id: 1,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Cody Fisher",
        city: "Hello",
        time: "13:02",
        msg:"02",
    },
    {
        id: 2,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Wade Warren",
        city: "👌 Cool",
        time: "14:59",
        msg:"02",
    },
    {
        id: 3,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Marvin McKinney",
        city: "Looks Great 💫",
        time: "15:01",
        msg:"01",
    },
    {
        id: 4,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Dianne Russell",
        city: "👍 Great Work",
        time: "15:05",
    },
    {
        id: 5,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Jenny Wilson",
        city: "Good Morning",
        time: "13:02",
    },
    {
        id: 6,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Theresa Webb",
        city: "Bob says hi.",
        time: "15:20",
    },
    {
        id: 7,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Eleanor Pena",
        city: "Say hello to alice 🖐",
        time: "16:00",
    },
    {
        id: 8,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Ronald Richards",
        city: "I hope so 😊",
        time: "16:05",
    },
    {
        id: 9,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Courtney Henry",
        city: "Hi 🤚",
        time: "16:08",
    },
    {
        id: 10,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Jacob Jones",
        city: "Document",
        time: "17:00",
    }, 
    {
        id: 11,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Jacob Jones",
        city: "Document",
        time: "17:00",
    }, {
        id: 12,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Jacob Jones",
        city: "Document",
        time: "17:00",
    }, 
    {
        id: 14,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Jacob Jones",
        city: "Document",
        time: "17:00",
    }, 
    {
        id: 13,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Jacob Jones",
        city: "Document",
        time: "17:00",
    }, 
    {
        id: 15,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Jacob Jones",
        city: "Document",
        time: "17:00",
    }, 
    {
        id: 16,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Jacob Jones",
        city: "Document",
        time: "17:00",
    }, 

];

const followers = [
    {
        id: 1,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Cody Fisher",
        city: "Hello",
        time: "13:02",
        msg:"02",
    },
    {
        id: 2,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Wade Warren",
        city: "👌 Cool",
        time: "14:59",
        msg:"02",
    },
    {
        id: 3,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Marvin McKinney",
        city: "Looks Great 💫",
        time: "15:01",
        msg:"01",
    },
    {
        id: 4,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Dianne Russell",
        city: "👍 Great Work",
        time: "15:05",
    },
    {
        id: 5,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Jenny Wilson",
        city: "Good Morning",
        time: "13:02",
    },
    {
        id: 6,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Theresa Webb",
        city: "Bob says hi.",
        time: "15:20",
    },
    {
        id: 7,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Eleanor Pena",
        city: "Say hello to alice 🖐",
        time: "16:00",
    },

    {
        id: 8,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Ronald Richards",
        city: "I hope so 😊",
        time: "16:05",
    },
    {
        id: 9,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Courtney Henry",
        city: "Hi 🤚",
        time: "16:08",
    },
    {
        id: 10,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Jacob Jones",
        city: "Document",
        time: "17:00",
    },
    {
        id: 11,
        image: require('../assets/icon/user_icon.png'),
        active_icon: require('../assets/icon/user_icon.png'),
        name: "Brooklyn Simmons",
        city: "👌 Cool",
        time: "17:25",
    }, 
];

const Search = (props) => {


    const [myActiveTheme, SetmyActiveTheme] = useState(myThemeColors.light);

    const Chat = () => (
        <View style={styles.flatlist_view}> 
            <FlatList 
                contentContainerStyle={{ paddingBottom: hp("5%"), paddingTop: hp("2"), }}
                data={chat}

                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                keyExtractor={item => item.id}
                renderItem={({ item }) => 
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Chat') }} style={styles.city_view}>
                        <View style={styles.image_view}> 
                            <View style={styles.image2_view}> 
                                <Image source={item.image} resizeMode="contain" style={styles.image_style} />
                                <Image source={item.active_icon} resizeMode="contain" style={styles.image_style1} />
                            </View> 
                        </View>
                        <View style={styles.text_view}>
                            <Text style={styles.name_text}>{item.name}</Text>
                            <Text style={styles.city_text}>{item.city}</Text>
                        </View>
                        <View style={styles.follow_view} >
                            <View style={styles.follow1_view}>
                                <Text style={styles.time_text}>{item.time}</Text>
                            </View>
                            {item.msg != null ?
                            <View style={styles.follow2_view}>
                                <Text style={styles.msg_text}>{item.msg}</Text>
                            </View>
                            :
                            null
                }
                        </View>

                    </TouchableOpacity>
                }

            />

        </View>
    );

    const Followers = () => (
        <View style={styles.flatlist_view}>
            <FlatList
                style={styles.flatlist_view_city}
                contentContainerStyle={{ paddingBottom: hp("5%"), paddingTop: hp("2%"), }}
                data={followers}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Chat') }} style={styles.city_view}>
                        <View style={styles.image_view}> 
                            <View style={styles.image2_view}> 
                                <Image source={item.image} resizeMode="contain" style={styles.image_style} />
                                <Image source={item.active_icon} resizeMode="contain" style={styles.image_style1} />
                            </View> 
                        </View>
                        <View style={styles.text_view}>
                            <Text style={styles.name_text}>{item.name}</Text>
                            <Text style={styles.city_text}>{item.city}</Text>
                        </View>  
                    </TouchableOpacity> 
                } />
        </View>
    );

    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);


    const [routes] = React.useState([
        { key: 'Chat', title: 'Chat' },
        { key: 'Followers', title: 'Followers' },

    ]);

    const renderScene = SceneMap({
        Chat: Chat,
        Followers: Followers,

    });

    const TextColor = ({ route, focused, color }) => {
        return (
            <View>
                <Text
                    style={[focused ? styles.activeTabTextColor : styles.tabTextColor]}
                >
                    {route.title}
                </Text>
            </View>
        )
    }
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: myThemeColors.light.primary_blue, height: hp("0.5%") }}
            style={{ backgroundColor: 'white', }}
            renderLabel={TextColor}
            pressColor="transparent"

        />
    )

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={myThemeColors.light.light_gray_background}
                barStyle="dark-content"
            />
            <View style={styles.headre_style}>
                <View style={styles.city_text_view}>
                    <Text style={styles.city_text_style}>Message</Text>
                </View>
                <TouchableOpacity style={styles.left_errow_view} onPress={() => props.navigation.goBack()} >
                    <Image source={serch_icon} resizeMode="stretch" style={styles.left_errow_style} />
                </TouchableOpacity> 
            </View> 
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderBadge={({ route }) => (
                    <Text style={{color:"black",fontSize:'25'}}>hghgh</Text>
                  )}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
                initialLayout={{ width: layout.width }}

            />
        </View>
    );
}

export default Search;

const styles = StyleSheet.create({
    container:
    {
         flex:1,
        backgroundColor: myThemeColors.light.primary_blue,
        borderRadius: hp("3%")
    },
    headre_style:
    {
        width: wp("90%"),
        height: hp("8%"),
        flexDirection: "row",
        alignSelf: "center",
        //    backgroundColor:"yellow",
    },
    left_errow_view:
    {
        width: wp("5%"),
        height: hp("8%"),
        justifyContent: "center",
        // backgroundColor:"red",
        alignItems: "center"
    },
    left_errow_style:
    {
        width: wp("5%"),
        height: hp("2.5%"),

    },
    city_text_view:
    {
        width: wp("85%"),
        height: hp("8%"),
        justifyContent: "center",
        alignItems: "center"
    },
    city_text_style:
    {
        fontSize: myfontsize.h3.fontSize,
        fontFamily: myfontsize.h13.fontFamily,
        fontWeight: "600",
        paddingLeft: wp("5%"),
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
    serch_icon_view:
    {
        width: wp("12%"),
        height: hp("6%"),
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
        flex:1,
        //width: wp("100%"),
        backgroundColor: myThemeColors.light.light_gray_background,
        //height: hp("80%"),
        // marginTop: hp("2%"),
        // backgroundColor:"black"
    },

    // city_view:
    // {
    //     width: wp("43%"),
    //     height: hp("20%"),
    //     marginBottom: hp("2%"),
    //     marginLeft: wp("2.3%"),
    //     // backgroundColor:"yellow",
    //     backgroundColor: myThemeColors.light.mainbg,
    //     elevation: 2,
    //     borderRadius: hp("1%"),
    //     justifyContent: "center",
    //     alignItems: "center"


    // },
    // image_view:
    // {
    //     width: wp("43%"),
    //     height: hp("15.5%"),
    //     justifyContent: "center",
    //     alignItems: "center",

    // },
    // image_style:
    // {
    //     width: wp("41%"),
    //     height: hp("15%"),
    //     paddingTop:hp("1%")
    // },
    // name_text:
    // {
    //     fontFamily:myfontsize.h13.fontFamily,
    //     fontWeight:"400"
    // },
    // text_view:
    // {
    //     width: wp("43%"),
    //     height: hp("4%"),
    //     justifyContent: "center",
    //     alignItems: "center",
    //     // backgroundColor:"yellow"
    // },
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
    fun_view:
    {
        width: wp("43%"),
        height: hp("6%"),
        justifyContent: "center",
        alignItems: "center",
        marginBottom: hp("1%")
        // alignSelf:"center"
    },
    fun_text:
    {

        fontFamily: myfontsize.h12.fontFamily,
        // fontSize:myfontsize.h1.fontSize,
        color: myThemeColors.light.light_gray,
    },
    trip_view:
    {
        width: wp("43%"),
        height: hp("27%"),
        marginBottom: hp("1.2%"),
        marginLeft: wp("2.3%"),
        // backgroundColor:"yellow",
        backgroundColor: myThemeColors.light.mainbg,
        elevation: 2,
        borderRadius: hp("1%"),
        justifyContent: "center",
        alignItems: "center"

    },


    close_view:
    {
        width: wp("6%"),
        height: hp("2%"),
        position: "absolute",
        top: 0,
        marginTop: hp("1.5%"),
        right: 0,
        // backgroundColor:"yellow"
    },
    close_style:
    {
        width: wp("3%"),
        height: hp("1.5%"),
    },
    activity_view:
    {
        width: wp("43%"),
        height: hp("27.5%"),
        marginBottom: hp("1 %"),
        marginLeft: wp("2.3%"),
        backgroundColor: myThemeColors.light.mainbg,
        elevation: 2,
        borderRadius: hp("1%"),
        // justifyContent: "center",
        alignItems: "center",
    },
    background_image__view:
    {
        width: wp("43%"),
        height: hp("15.5%"),
        justifyContent: "center",
        alignItems: "center",
    },
    background_image_style:
    {
        width: wp("41%"),
        height: hp("15%"),
        paddingTop: hp("1%")
    },
    header_view1: {
        height: hp('3%'),
        width: wp('37%'),
        alignSelf: 'center',
        alignItems: 'flex-end'
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
        alignSelf: 'center'
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
    image_view2: {
        height: hp('3.7%'),
        width: wp('6%'),
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
    hiking_text:
    {
        fontFamily: myfontsize.h13.fontFamily,
        // fontWeight: "400",
        fontSize: hp('1.7%')
    },
    all_tetx_view:
    {
        width: wp("43%"),
        height: hp("11.2%"),
    },
    // ================================================================
    // ================================================================
    flatlist_view_city:
    {
        alignSelf: "center",
          width: wp("100%"),
          height: hp("84%"),
        // flex:1,
        // flexDirection:'column',
        // backgroundColor:"red",

    },
    city_view:
    {
        //width: wp("100%"),
        //height: hp("8%"),
        flexDirection: "row",
        flex:1,
        // marginBottom: hp("2%"),
        // marginLeft: wp("2.3%"),
        // backgroundColor:"black",
        // backgroundColor: myThemeColors.light.light_gray_background,
        // elevation: 2,
        // borderRadius: hp("1%"),
        // justifyContent: "center",
        // alignItems: "center"
        alignSelf: "center",
        borderBottomWidth: wp("0.3"),
        borderBottomColor: "#EEEEEE",



    },
    image_view:
    {
        flex:0.2,
        // width: wp("20%"),
        // height: hp("8%"),
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"blue"

    },
    image1_view: {
        width: wp("14%"),
        height: hp("2%"),
        // alignItems:"flex-end",

        // backgroundColor:"blue",
        // marginBottom:hp("-2.5%"),
        top: 0,
        // marginRight:wp("2.5%")
    },
    image2_view: {
        width: wp("12%"),
        height: hp("6%"),
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"pink"

    },
    image_style:
    {
        width: wp("12%"),
        height: hp("6%"),
        // backgroundColor:"green"
    },
    image_style1: {
        width: wp("3%"),
        height: hp("1.5%"),
        position: "absolute",
        right: 0,
        top: 0,
        // backgroundColor:"red",
        // paddingLeft:wp("2%")
    },
    name_text:
    {
        fontFamily: myfontsize.h13.fontFamily,
        // fontWeight:"500"
    },
    text_view:
    {
        flex:0.8,
        // width: wp("60%"),
        // height: hp("8%"),
        justifyContent: "center",
        // backgroundColor:"red"

    },
    city_text:
    {
        fontFamily: myfontsize.h10.fontFamily,
        color: myThemeColors.light.light_gray,
    },
    time_text: {
        fontFamily: myfontsize.h10.fontFamily,
        color: myThemeColors.light.light_gray,
    },
    msg_text: {
        color:"#FFFFFF",
        fontSize:hp("1.2%"),
        fontFamily:myfontsize.h10.fontFamily,

    },
    follow_view:
    {
        flex:0.2,
        flexDirection:'column',
        // width: wp("20%"),
        // height: hp("8%"),
        alignItems: "center",
        // backgroundColor: "yellow",
        justifyContent: "center",
        // alignItems:"flex-end"

    },
    follow1_view:{
        flex:0.2,
        // width: wp("20%"),
        // height: hp("2.7%"),
        alignItems:"center",
        // backgroundColor:"red"
    },
    follow2_view:{
        flex:0.1,
        paddingLeft:hp("0.5%"),
        paddingRight:hp("0.5%"),
        // width: wp("4.4%"),
        // height: hp("2.2%"),
        backgroundColor:"#3D70FF",
        alignItems:"center",
        borderRadius:hp("2.2%")/2,
        //marginLeft:wp("5%"),
        justifyContent:"center"
        
    },






})