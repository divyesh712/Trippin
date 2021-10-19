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
    {
        id: 4,
        image: require('../assets/image/new_york_1.png'),
        name: "New York",
    },
    {
        id: 5,
        image: require('../assets/image/san_fransico_1.png'),
        name: "San Francisco",
    },
    {
        id: 6,
        image: require('../assets/image/los_angels_1.png'),
        name: "Los Angeles",
    },
    {
        id: 7,
        image: require('../assets/image/new_york_2.png'),
        name: "New York"
    },
    {
        id: 8,
        image: require('../assets/image/san_fransico_2.png'),
        name: "San Francisco",
    },
];


const City = (props) => {

    const [myActiveTheme, SetmyActiveTheme] = useState(myThemeColors.light);

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
                    <Text style={styles.city_text_style}>City</Text>
                </View>
            </View>
            <View style={styles.text_input_view}>
                <View style={styles.text_input}>
                    <TextInput
                        style={styles.text_input_style}
                        placeholder="Search for Cities"
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
                    contentContainerStyle={{ paddingBottom: hp("5%"),paddingTop: hp("3%"), }}
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


        </View>
    );
}

export default City;

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
        width: wp("41%"),
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
        width: wp("49%"),
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
        height: hp("84%"),
        marginTop: hp("2%")
    },
    flatlist_view_city:
    {
        alignSelf: "center",
        width: wp("92%"),
        height: hp("84%"),


    },
    city_view:
    {
        width: wp("43%"),
        height: hp("20%"),
        marginBottom: hp("2%"),
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
        alignItems: "center"
    }



})