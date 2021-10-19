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
import { splash_logo, Left_errow, serch_icon,map_icon,plus_icon,close_icon,plus_circle } from '../utils/appContest';
import myfontsize from '../utils/myfontsize';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import PagerView from 'react-native-pager-view';


const city = [
    {
        id: 1,
        image: require('../assets/image/new_york.png'),
        name: "New York",
    },
    {
        id: 2,
        image: require('../assets/image/san_fransico.png'),
        name: "San Francisco",
    },
    {
        id: 3,
        image: require('../assets/image/los_angels.png'),
        name: "Los Angeles",
    },
    // {
    //     id: 4,
    //     image: require('../assets/image/new_york_1.png'),
    //     name: "New York",
    // },
    // {
    //     id: 5,
    //     image: require('../assets/image/san_fransico_1.png'),
    //     name: "San Francisco",
    // },
    // {
    //     id: 6,
    //     image: require('../assets/image/los_angels_1.png'),
    //     name: "Los Angeles",
    // },
    // {
    //     id: 7,
    //     image: require('../assets/image/new_york_2.png'),
    //     name: "New York"
    // },
    // {
    //     id: 8,
    //     image: require('../assets/image/san_fransico_2.png'),
    //     name: "San Francisco",
    // },
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
        image: require('../assets/image/Rectangle_3.png'),
        name: "Hiking",
        img: require('../assets/icon/location.png'),
        address: "Campbell County, Wyoming, USA",
        img1: require('../assets/icon/google.png'),
        img2: require('../assets/icon/star.png'),
        no: '4.5 / 5',
    },
    // {
    //     id: 3,
    //     image: require('../assets/image/Rectangle_3.png'),
    //     name: "Hiking",
    //     img: require('../assets/icon/location.png'),
    //     address: "Campbell County, Wyoming, USA",
    //     img1: require('../assets/icon/google.png'),
    //     img2: require('../assets/icon/star.png'),
    //     no: '4.5 / 5',
    // },
    // {
    //     id: 4,
    //     image: require('../assets/image/Rectangle_3.png'),
    //     name: "Hiking",
    //     img: require('../assets/icon/location.png'),
    //     address: "Campbell County, Wyoming, USA",
    //     img1: require('../assets/icon/google.png'),
    //     img2: require('../assets/icon/star.png'),
    //     no: '4.5 / 5',
    // },
    // {
    //     id: 5,
    //     image: require('../assets/image/Rectangle_3.png'),
    //     name: "Hiking",
    //     img: require('../assets/icon/location.png'),
    //     address: "Campbell County, Wyoming, USA",
    //     img1: require('../assets/icon/google.png'),
    //     img2: require('../assets/icon/star.png'),
    //     no: '4.5 / 5',
    // },
    // {
    //     id: 6,
    //     image: require('../assets/image/Rectangle_3.png'),
    //     name: "Hiking",
    //     img: require('../assets/icon/location.png'),
    //     address: "Campbell County, Wyoming, USA",
    //     img1: require('../assets/icon/google.png'),
    //     img2: require('../assets/icon/star.png'),
    //     no: '4.5 / 5',
    // },
];
const trips = [
    {
        id: 1,
        image: require('../assets/image/new_york.png'),
        name: "Yosemite National Park",
        fun:"Hiking,Climbing,Ski Touring,Rafting"
    },
    {
        id: 2,
        image: require('../assets/image/san_fransico.png'),
        name: "San Francisco",
        fun:"Beach stroll,Country Trip,Hike,Beach stroll"
    },
    {
        id: 3,
        image: require('../assets/image/los_angels.png'),
        name: "Los Angeles",
        fun:"Movie Watching,   Market Eats,Galleries"
    },
];

const following = [
    {
        id: 1,
        image: require('../assets/image/follow_11.png'),
        icon: require('../assets/icon/close.png'),
        name: "Wade Warren",
        city:"Mumbai, Goa, Agra, Jaisalmer, more"
    },
    {
        id: 2,
        image: require('../assets/image/Ellipse_2.png'),
        icon: require('../assets/icon/close.png'),
        name: "Floyd Miles",
        city:"Mumbai, Goa, Agra, Jaisalmer, more"
    },
    {
        id: 3,
        image: require('../assets/image/Ellipse_3.png'),
        icon: require('../assets/icon/close.png'),
        name: "Theresa Webb",
        city:"Mumbai, Goa, Agra, Jaisalmer, more"
    },
];


const Search = (props) => {


    const [myActiveTheme, SetmyActiveTheme] = useState(myThemeColors.light);

    const City = () => (
        <View style={styles.flatlist_view}>
            <View style={styles.city_Text_view}>
                <Text style={styles.city_Text}>Cities</Text>
            </View>
        <FlatList
            style={styles.flatlist_view_city}
            contentContainerStyle={{ paddingBottom: hp("5%"),paddingTop: hp("1%"), }}
            data={city}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
                <TouchableOpacity onPress={() => {props.navigation.navigate("Activities_city")}} style={styles.city_view}>
                    <View style={styles.image_view}>
                        <Image source={item.image} resizeMode="stretch" style={styles.image_style} />
                    </View>
                    <View style={styles.text_view}>
                        <Text style={styles.name_text}>{item.name}</Text>
                    </View>

                </TouchableOpacity>
            } />

    </View>
      );
      
      const Activity = () => (
        <View style={styles.flatlist_view}>
             <View style={styles.city_Text_view}>
                <Text style={styles.city_Text}>Activity</Text>
            </View>
        <FlatList
            style={styles.flatlist_view_city}
            contentContainerStyle={{ paddingBottom: hp("5%"),paddingTop: hp("1%"), }}
            data={activity}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
            <TouchableOpacity onPress={() => {props.navigation.navigate("Activity_detail")}}  style={styles.activity_view} >
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
         <TouchableOpacity style={styles.plus_icon_view} onPress={() => {props.navigation.navigate("Activities")}} > 
                    <Image source={plus_circle} resizeMode="stretch" style={styles.plus_circle_style} />
        </TouchableOpacity>
    </View>
      );
      const Trips = () => (
        <View style={styles.flatlist_view}>
             <View style={styles.city_Text_view}>
                <Text style={styles.city_Text}>Trips</Text>
            </View>
        <FlatList
            style={styles.flatlist_view_city}
            contentContainerStyle={{ paddingBottom: hp("5%"),paddingTop: hp("1%"), }}
            data={trips}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
                <TouchableOpacity onPress={() => {props.navigation.navigate("City")}} style={styles.trip_view}>
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
        <TouchableOpacity style={styles.plus_icon_view} onPress={() => {props.navigation.navigate("Activities_city")}} > 
                    <Image source={plus_circle} resizeMode="stretch" style={styles.plus_circle_style} />
        </TouchableOpacity>
    </View>
      );
      const Following = () => (
        <View style={styles.flatlist_view}>
             <View style={styles.city_Text_view}>
                <Text style={styles.city_Text}>Following</Text>
            </View>
        <FlatList
            style={styles.flatlist_view_city}
            contentContainerStyle={{ paddingBottom: hp("5%"),paddingTop: hp("1%"), }}
            data={following}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
                <TouchableOpacity onPress={() => {props.navigation.navigate("Followers")}} style={styles.city_view}>
                     <TouchableOpacity style={styles.close_view}>
                        <Image source={item.icon} resizeMode="stretch" style={styles.close_style} />
                    </TouchableOpacity>
                     <View style={styles.follow_view}>
                        <Image source={item.image} resizeMode="stretch" style={styles.follow_style} />
                    </View>
                    <View style={styles.text_view}>
                        <Text style={styles.name_text}>{item.name}</Text>
                    </View> 
                    <View style={styles.fun_view}>
                        <Text style={styles.fun_text}>{item.city}</Text>
                    </View>

                </TouchableOpacity>
            } />
        <TouchableOpacity style={styles.plus_icon_view}  onPress={() => {props.navigation.navigate("Activities_city")}} > 
                    <Image source={plus_circle} resizeMode="stretch" style={styles.plus_circle_style} />
        </TouchableOpacity>
    </View>
      );
    

      const layout = useWindowDimensions();
      const [index, setIndex] = React.useState(0);


      const [routes] = React.useState([
        { key: 'City', title: 'City' },
        { key: 'Activity', title: 'Activity' },
        { key: 'Trips', title: 'Trips' },
        { key: 'Following', title: 'Following' },
      ]);
    
      const renderScene = SceneMap({
        City: City,
        Activity: Activity,
        Trips: Trips,
        Following:Following,
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
          indicatorStyle={{ backgroundColor:myThemeColors.light.primary_blue,height:hp("0.4%")}}
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
                    <Text style={styles.city_text_style}>Search</Text>
                </View>
                <TouchableOpacity style={styles.left_errow_view} onPress={() => props.navigation.goBack()} > 
                    <Image source={map_icon} resizeMode="stretch" style={styles.left_errow_style} />
                </TouchableOpacity>
              
            </View>
           <View style={styles.text_input_view}>
                <View style={styles.text_input}>
                    <TextInput
                        style={styles.text_input_style}
                        placeholder="Search for Cities, Activities, Following..."
                        placeholderTextColor={myThemeColors.light.light_gray}
                    />
                </View>
                <TouchableOpacity style={styles.serch_icon_view}>
                    <Image source={serch_icon} resizeMode="stretch" style={styles.search_icon_style} />
                </TouchableOpacity>
            </View>

            <TabView
            navigationState={{ index,routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            initialLayout={{ width: layout.width }}
            
    />
            {/* <View style={styles.flatlist_view}>
                <FlatList
                    style={styles.flatlist_view_city}
                    contentContainerStyle={{ paddingBottom: hp("5%"),paddingTop: hp("3%"), }}
                    data={city}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => {props.navigation.navigate("Followers")}} style={styles.city_view}>
                            <View style={styles.image_view}>
                                <Image source={item.image} resizeMode="stretch" style={styles.image_style} />
                            </View>
                            <View style={styles.text_view}>
                                <Text style={styles.name_text}>{item.name}</Text>
                            </View>

                        </TouchableOpacity>
                    } />

            </View>  */}


        </View>
    );
}

export default Search;

const styles = StyleSheet.create({
    container:
    {
        width: wp("100%"),
        height: hp("100%"),
        backgroundColor: myThemeColors.light.mainbg,
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
        alignItems:"center"
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
        alignItems:"center"
    },
    city_text_style:
    {
        fontSize: myfontsize.h3.fontSize,
        fontFamily: myfontsize.h13.fontFamily,
        fontWeight: "600",
        paddingLeft:wp("5%"),
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
        width: wp("100%"),
        backgroundColor: myThemeColors.light.light_gray_background,
        height: hp("78%"),
        marginTop: hp("2%")
    },
    flatlist_view_city:
    {
        alignSelf: "center",
        width: wp("92%"),
        height: hp("84%"),
        // backgroundColor:"red"


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
        paddingTop:hp("1%")
    },
    name_text:
    {
        fontFamily:myfontsize.h13.fontFamily,
        fontWeight:"400"
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
        alignSelf:"center",
        // backgroundColor:"yellow",
        justifyContent:"center"
    },
    city_Text:
    {
        fontFamily:myfontsize.h12.fontFamily,
        fontSize:myfontsize.h3.fontSize,
    },
    plus_icon_view:
    {
        width: wp("14%"),
        height: hp("7%"),
        // backgroundColor:myThemeColors.light.primary_blue,
        // borderRadius:hp("7%")/2,
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
        right:0,
        bottom:0,
        marginBottom:hp("5%"),
        marginRight:wp("5%")
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
        justifyContent:"center",
        alignItems:"center",
        marginBottom:hp("1%")
        // alignSelf:"center"
    },
    fun_text:
    {
        
        fontFamily:myfontsize.h12.fontFamily,
        // fontSize:myfontsize.h1.fontSize,
        color:myThemeColors.light.light_gray,
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
    follow_view:
    {
        width: wp("43%"),
        height: hp("9%"),
        alignItems:"center",
        // backgroundColor:"yellow",
        justifyContent:"center"
    },
    follow_style:
    {
        width: wp("14%"),
        height: hp("7%"),
    },
    close_view:
    {
        width: wp("6%"),
        height: hp("2%"),
        position:"absolute",
        top:0,
        marginTop:hp("1.5%"),
        right:0,
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
    }
   




})