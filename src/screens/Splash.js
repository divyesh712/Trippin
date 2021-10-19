import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';
import {splash_logo,splash_icon} from '../utils/appContest';
import myfontsize from '../utils/myfontsize';
 





 const Splash = (props) => {

     useEffect(() => {
         setTimeout(() => {
             props.navigation.replace('Login');
         }, 2000);
     }, []);

    const [myActiveTheme,SetmyActiveTheme] = useState(myThemeColors.light);

    return (
        <View style={styles.container}>
         <StatusBar
           backgroundColor = {myThemeColors.light.primary_blue}
           barStyle = "light-content"
         />
         
           <Image source={splash_icon} resizeMode="stretch" style={styles.logo_style} />
            <Text style={styles.trippin_text}>Trippin</Text>

        </View>
    );
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        width: wp("100%"),
        height: hp("100%"),
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:myThemeColors.light.primary_blue,
    },
    // splash_view:{
    //     width: wp("100%"),
    //     height: hp("25%"),
    //     justifyContent:"center",
    //     alignItems:"center",
    //     // backgroundColor:"yellow"
    // },
    logo_style:{
        width: wp("38%"),
        height: hp("19%"),
       },
       trippin_text:
       {
           color:myThemeColors.light.mainbg,
           fontSize:hp("7.5%"),
           fontFamily:myfontsize.h13.fontFamily,
       }
})