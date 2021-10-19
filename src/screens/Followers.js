import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    TextInput,
    FlatList
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import { splash_logo, Left_errow, serch_icon } from '../utils/appContest';
import myfontsize from '../utils/myfontsize';

const city = [
    {
        id: 1,
        image: require('../assets/image/follow.png'),
        name: "Olive Yew",
        city:"Mumbai, Goa, Agra,...",
        follow:"Follow",
        unfollow:"UnFollow",
        isSelected:false,
    },
    {
        id: 2,
        image: require('../assets/image/follow_1.png'),
        name: "Teri Dactyl",
        city:"Agram, Jaisalmer, Goa,...",
        follow:"Follow",
        unfollow:"UnFollow",
        isSelected:false,
    },
    {
        id: 3,
        image: require('../assets/image/follow_2.png'),
        name: "Col Fays",
        city:"Agram, Jaisalmer, Goa,...",
        follow:"Follow",
        unfollow:"UnFollow",
        isSelected:false,
    },
    {
        id: 4,
        image: require('../assets/image/follow_3.png'),
        name: "Colin Sik",
        city:"Agram, Jaisalmer, Goa,...",
        follow:"Follow",
        unfollow:"UnFollow",
        isSelected:false,
    },
    {
        id: 5,
        image: require('../assets/image/follow_4.png'),
        name: "Jen Tile",
        city:"Mumbai, Goa, Agra,...",
        follow:"Follow",
        unfollow:"UnFollow",
        isSelected:false,
    },
    {
        id: 6,
        image: require('../assets/image/follow_5.png'),
        name: "Olive Yew",
        city:"Mumbai, Goa, Agra,...",
        follow:"Follow",
        unfollow:"UnFollow",
        isSelected:false,
    },
    {
        id: 7,
        image: require('../assets/image/follow_6.png'),
        name: "Rose Bush",
        city:"Agram, Jaisalmer, Goa,...",
        follow:"Follow",
        unfollow:"UnFollow",
        isSelected:false,
    },
    {
        id: 8,
        image: require('../assets/image/follow_7.png'),
        name: "Teri Dactyl",
        city:"Mumbai, Goa, Agra,...",
        follow:"Follow",
        unfollow:"UnFollow",
        isSelected:false,
    },
    {
        id: 9,
        image: require('../assets/image/follow_8.png'),
        name: "Pat N. Toffis",
        city:"Agram, Jaisalmer, Goa,...",
        follow:"Follow",
        unfollow:"UnFollow",
        isSelected:false,
    },
    {
        id: 10,
        image: require('../assets/image/follow_9.png'),
        name: "Lynne Gwafranca",
        city:"Mumbai, Goa, Agra,...",
        follow:"Follow",
        unfollow:"UnFollow",
        isSelected:false,
    },
    {
        id: 11,
        image: require('../assets/image/follow_10.png'),
        name: "Penny Black",
        city:"Agram, Jaisalmer, Goa,...",
        follow:"Follow",
        unfollow:"UnFollow",
        isSelected:false,
    },
    {
        id: 12,
        image: require('../assets/image/follow.png'),
        name: "Olive Yew",
        city:"Mumbai, Goa, Agra,...",
        follow:"Follow",
        unfollow:"UnFollow",
        isSelected:false,
    },
    {
        id: 13,
        image: require('../assets/image/follow_1.png'),
        name: "Teri Dactyl",
        city:"Agram, Jaisalmer, Goa,...",
        follow:"Follow",
        unfollow:"UnFollow",
        isSelected:false,
    },
    {
        id: 14,
        image: require('../assets/image/follow_2.png'),
        name: "Col Fays",
        city:"Agram, Jaisalmer, Goa,...",
        follow:"Follow",
        unfollow:"UnFollow",
        isSelected:false,
    },
];


const Followers = (props) => {

    const [myActiveTheme, SetmyActiveTheme] = useState(myThemeColors.light);
    const [follow, Setfollow] = useState(0);
    const [ DummyData , SetDummyData] = useState([]);

    const onPressItem = (ind) => {
        // const { DummyData } = useState;
        let arr = city.map(( item, index) => {
            if(ind == index ){
                item.isSelected = !item.isSelected
            }
            return {...item}
        })
        SetDummyData({arr});
    }

    return (
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
                    <Text style={styles.city_text_style}>Followers</Text>
                </View>
            </View>
            <View style={styles.flatlist_view}>
                <FlatList
                    style={styles.flatlist_view_city}
                    contentContainerStyle={{ paddingBottom: hp("5%"),paddingTop: hp("1%"), }}
                    data={city}
                    // numColumns={2}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('City')}} style={styles.city_view}>
                            <View style={styles.image_view}>
                                <Image source={item.image} resizeMode="stretch" style={styles.image_style} />
                            </View>
                            <View style={styles.text_view}>
                                <Text style={styles.name_text}>{item.name}</Text>
                                <Text style={styles.city_text}>{item.city}</Text>
                            </View>
                            <View style={styles.follow_view} >
                               
                                <TouchableOpacity onPress={() => onPressItem(index)} style={styles.follow_touch}>
                                {
                                        item.isSelected ? 
                                    <View style={styles.unfollow_touch}>
                                        <Text style={styles.unfollow_text}>{item.unfollow}</Text>
                                    </View>
                                    :
                                    <View style={styles.follow_touch}>
                                    <Text style={styles.follow_text}>{item.follow}</Text>
                                </View>
                                 }    
                                    </TouchableOpacity>
            
                   
                            </View>

                        </TouchableOpacity>
                    } />

            </View>


        </View>
    );
}

export default Followers;

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
        //    backgroundColor: myThemeColors.light.mainbg,
    },
    left_errow_view:
    {
        width: wp("35%"),
        height: hp("8%"),
        justifyContent: "center"
    },
    left_errow_style:
    {
        width: wp("2.5%"),
        height: hp("2.5%"),

    },
    city_text_view:
    {
        width: wp("45%"),
        height: hp("8%"),
        justifyContent: "center"
    },
    city_text_style:
    {
        fontSize: myfontsize.h3.fontSize,
        fontFamily: myfontsize.h13.fontFamily,
        // fontWeight: "900"
    },
    flatlist_view:
    {
        width: wp("100%"),
        backgroundColor: myThemeColors.light.light_gray_background,
        height: hp("92%"),

    },
    flatlist_view_city:
    {
        alignSelf: "center",
        width: wp("92%"),
        height: hp("92%"),


    },
    city_view:
    {
        width: wp("90%"),
        height: hp("8%"),
        flexDirection:"row",
        // marginBottom: hp("2%"),
        // marginLeft: wp("2.3%"),
        // backgroundColor:"yellow",
        backgroundColor: myThemeColors.light.light_gray_background,
        // elevation: 2,
        // borderRadius: hp("1%"),
        // justifyContent: "center",
        // alignItems: "center"


    },
    image_view:
    {
        width: wp("16%"),
        height: hp("8%"),
        justifyContent: "center",
        // alignItems: "center",
        
    },
    image_style:
    {
        width: wp("12%"),
        height: hp("6%"),
    },
    name_text:
    {
        fontFamily:myfontsize.h13.fontFamily,
        // fontWeight:"500"
    },
    text_view:
    {
        width: wp("56%"),
        height: hp("8%"),
        justifyContent: "center",
        
    },
    city_text:
    {
        fontFamily:myfontsize.h10.fontFamily,
        color:myThemeColors.light.light_gray,
    },
    follow_view:
    {
        width: wp("18%"),
        height: hp("8%"),
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"yellow"

    },
    follow_touch:
    {
        width: wp("18%"),
        height: hp("4%"),
        backgroundColor:myThemeColors.light.primary_blue,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:hp("2%")
    },
    follow_text:
    {
        color:myThemeColors.light.mainbg,
        fontFamily:myfontsize.h10.fontFamily,
        fontSize:hp("1.5%")
    },
    unfollow_touch:
    {
        width: wp("18%"),
        height: hp("4%"),
        backgroundColor:myThemeColors.light.mainbg,
        justifyContent:"center",
        borderWidth:0.1,
        borderColor:myThemeColors.light.light_gray,
        // elevation:1,
        alignItems:"center",
        borderRadius:hp("2%")
    },
    unfollow_text:
    {
        color:myThemeColors.light.defaultfont,
        fontFamily:myfontsize.h10.fontFamily,
        fontSize:hp("1.5%")
    }



})