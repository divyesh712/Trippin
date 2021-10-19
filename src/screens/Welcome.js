import React, { useState, useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    TextInput,
    useColorScheme,
    Button,
    Image,
    Dimensions,
    Keyboard,
    View,
    Animated,
} from 'react-native';

import myfontsize from '../utils/myfontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import myThemeColors from '../utils/myThemeColors';



export default function welcome_page(props) {
 
    return (
        <View style={{height:hp('100%'),width:wp('100%'),alignItems:"center"}}> 
          <StatusBar
                backgroundColor={myThemeColors.light.light_gray_background}
                barStyle="dark-content"
            />
           <View style={{height:hp('15%'),width:wp('90%'),flexDirection:"row",justifyContent:"flex-end",marginBottom:hp("4%")}}>
                <View  style={{height:hp('15%'),width:wp('50%'),justifyContent:"flex-end",alignItems:"flex-end"}}>
                <Text style={{fontFamily:myfontsize.h12.fontFamily,fontSize:myfontsize.h6.fontSize}} >
                            Welcome To
            </Text>
                </View>
                <View  style={{height:hp('15%'),width:wp('40%'),justifyContent:"flex-end",}}>
                <Image source={require('../assets/icon/Vector_1.png')} resizeMode="contain" style={{height:hp('7.2%'),width:wp('33%'),position:"absolute",bottom:-10}} />
                <Text style={{fontFamily:myfontsize.h13.fontFamily,fontSize:myfontsize.h7.fontSize,color:"#ffffff",paddingLeft:wp("4%")}} >
                        Trippin
                        </Text>
                        {/* <View style={{height:hp('10%'),width:wp('30%'),alignItems:"flex-start",justifyContent:"center",marginLeft:wp("27%")}}> */}
                   
                {/* </View> */}
                </View>
                {/* <View style={{height:hp('10%'),width:wp('30%'),alignItems:"flex-end",justifyContent:"center",marginLeft:wp("27%")}}>
                    <Image source={require('../assets/icon/Vector_1.png')} resizeMode="contain" style={{height:hp('6.5%'),width:wp('29%')}} />
                </View>
                <View style={{height:hp('10%'),width:wp('60%'),alignItems:"center",justifyContent:"center",position:"absolute",flexDirection:"row"}}>
                    <View style={{height:hp('10%'),width:wp('40%'),justifyContent:"center"}}>
                        <Text style={{fontFamily:myfontsize.h12.fontFamily,fontSize:myfontsize.h7.fontSize}} >
                            Welcome To
                        </Text>
                    </View>
                    <View style={{height:hp('10%'),width:wp('20%'),justifyContent:"center",}}>
                        <Text style={{fontFamily:myfontsize.h13.fontFamily,fontSize:myfontsize.h7.fontSize,color:"#ffffff",marginLeft:-wp("5%")}} >
                        Trippin
                        </Text>
                    </View>
                </View> */}
            </View>
            <View style={{height:hp('5%'),width:wp('90%'),alignItems:"center",}}>
                <Image source={require('../assets/icon/group_1.png')} resizeMode="contain" style={{height:hp('2%'),width:wp('39%')}} />
            </View>
            <View style={{height:hp('10%'),width:wp('80%'),alignItems:"center"}}>

                <Text style={{textAlign:"center",fontFamily:myfontsize.h12.fontFamily,fontSize:myfontsize.h1.fontSize,color:"#898F97"}}>
                Helping You Enjoy Your Travels in The 
                </Text>
                <Text style={{textAlign:"center",fontFamily:myfontsize.h12.fontFamily,fontSize:myfontsize.h1.fontSize,color:"#898F97"}}>
                Most Efficient Way Possible.
                </Text>
            </View>
            <View style={{height:hp('42%'),width:wp('90%'),}}>
                <View style={{height:hp('14%'),width:wp('90%'),flexDirection:"row"}}>
                    <View style={{height:hp('14%'),width:wp('30%'),justifyContent:"center"}}>
                        <Image source={require('../assets/icon/Rectangle_7.png')} resizeMode="contain" style={{height:hp('12%'),width:wp('24%')}} />
                    </View>
                    <View style={{height:hp('14%'),width:wp('30%'),position:"absolute",justifyContent:"center"}}>
                        <Image source={require('../assets/image/Rectangle_8.png')} resizeMode="contain" style={{height:hp('10.7%'),width:wp('24%')}} />
                    </View>
                    <View style={{height:hp('5%'),width:wp('30%'),position:"absolute",alignItems:"center",marginLeft:hp('1.3%')}}>
                        <Image source={require('../assets/icon/circle_1.png')} resizeMode="contain" style={{height:hp('3.5%'),width:wp('10%')}} />
                    </View>
                    <View style={{height:hp('14%'),width:wp('60%'),alignItems:"center",}}>
                        <View style={{height:hp('5%'),width:wp('54%'),justifyContent:"flex-end",}}>
                            <Text style={{fontFamily:myfontsize.h3.fontFamily,fontSize:myfontsize.h1.fontSize,}}>
                                Choose
                            </Text>
                        </View>
                        <View style={{height:hp('4%'),width:wp('54%'),justifyContent:"center"}}>
                            <Text style={{fontFamily:myfontsize.h3.fontFamily,fontSize:myfontsize.h1.fontSize,}}>
                            Your Destination
                            </Text>
                        </View>
                        <View style={{height:hp('2%'),width:wp('53%'),justifyContent:"center",}}>
                           <Image source={require('../assets/icon/Vector_2.png')} resizeMode="contain" style={{height:hp('2%'),width:wp('34%')}} />
                        </View>
                        
                    </View>
                </View>

                <View style={{height:hp('14%'),width:wp('90%'),flexDirection:"row"}}>
                    
                    <View style={{height:hp('14%'),width:wp('60%'),alignItems:"center",}}>
                        <View style={{height:hp('5%'),width:wp('54%'),justifyContent:"flex-end",alignItems:"flex-end"}}>
                            <Text style={{fontFamily:myfontsize.h3.fontFamily,fontSize:myfontsize.h1.fontSize,}}>
                            Pick Your Favorite

                            </Text>
                        </View>
                        <View style={{height:hp('4%'),width:wp('54%'),justifyContent:"center"}}>
                            <Text style={{fontFamily:myfontsize.h3.fontFamily,fontSize:myfontsize.h1.fontSize,}}>
                            Activities or Add Your Own!
                            </Text>
                        </View>
                        <View style={{height:hp('2%'),width:wp('43%'),justifyContent:"center",}}>
                           <Image source={require('../assets/icon/Vector_3.png')} resizeMode="contain" style={{height:hp('2%'),width:wp('36%')}} />
                        </View>
                        <View style={{height:hp('2%'),width:wp('54%'),justifyContent:"center",alignItems:"flex-end"}}>
                           <Image source={require('../assets/icon/Vector_4.png')} resizeMode="contain" style={{height:hp('1.5%'),width:wp('12%')}} />
                        </View>
                        
                    </View>
                    <View style={{height:hp('14%'),width:wp('30%'),alignItems:"center",justifyContent:"center",}}>
                        <Image source={require('../assets/icon/Rectangle_6.png')} resizeMode="contain" style={{height:hp('12%'),width:wp('24%')}} />
                    </View>
                    <View style={{height:hp('14%'),width:wp('87%'),position:"absolute",alignItems:"flex-end",justifyContent:"center"}}>
                        <Image source={require('../assets/image/Rectangle_9.png')} resizeMode="contain" style={{height:hp('10.7%'),width:wp('24%')}} />
                    </View>
                    <View style={{height:hp('6.8%'),width:wp('87%'),position:"absolute",alignItems:"flex-end",justifyContent:"flex-end",marginLeft:hp('1.3%')}}>
                        <Image source={require('../assets/icon/circle_2.png')} resizeMode="contain" style={{height:hp('4%'),width:wp('10%')}} />
                    </View>
                </View>

                <View style={{height:hp('14%'),width:wp('90%'),flexDirection:"row"}}>
                    <View style={{height:hp('14%'),width:wp('30%'),justifyContent:"center"}}>
                        <Image source={require('../assets/icon/Rectangle_7.png')} resizeMode="contain" style={{height:hp('12%'),width:wp('24%')}} />
                    </View>
                    <View style={{height:hp('14%'),width:wp('30%'),position:"absolute",justifyContent:"center"}}>
                        <Image source={require('../assets/image/Rectangle_10.png')} resizeMode="contain" style={{height:hp('10.7%'),width:wp('24%')}} />
                    </View>
                    <View style={{height:hp('5%'),width:wp('30%'),position:"absolute",alignItems:"center",marginLeft:hp('1.3%')}}>
                        <Image source={require('../assets/icon/circle_3.png')} resizeMode="contain" style={{height:hp('4.2%'),width:wp('10%')}} />
                    </View>
                    <View style={{height:hp('14%'),width:wp('60%'),alignItems:"center",}}>
                        <View style={{height:hp('5%'),width:wp('54%'),justifyContent:"flex-end",}}>
                            <Text style={{fontFamily:myfontsize.h3.fontFamily,fontSize:myfontsize.h1.fontSize,}}>
                            We Make You
                            </Text>
                        </View>
                        <View style={{height:hp('4%'),width:wp('54%'),justifyContent:"center"}}>
                            <Text style={{fontFamily:myfontsize.h3.fontFamily,fontSize:myfontsize.h1.fontSize,}}>
                            A Guided Map
                            </Text>
                        </View>
                        <View style={{height:hp('2%'),width:wp('53%'),justifyContent:"center",}}>
                           <Image source={require('../assets/icon/Vector_5.png')} resizeMode="contain" style={{height:hp('2%'),width:wp('27%')}} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{height:hp('23%'),width:wp('90%')}}>
                <View style={{height:hp('12%'),width:wp('90%'),justifyContent:"center"}}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Search') }} style={{height:hp('6%'),width:wp('90%'),borderRadius:hp('5%'),backgroundColor:"#3D70FF",alignItems:"center",justifyContent:"center"}}>
                        <Text style={{fontFamily:myfontsize.h13.fontFamily,fontSize:myfontsize.h1.fontSize,color:"#ffffff"}}>
                        I Am Just Looking Around
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:hp('6%'),width:wp('90%'),justifyContent:"center",}}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Login') }} style={{height:hp('6%'),width:wp('90%'),borderRadius:hp('5%'),borderWidth:wp('0.5%'),borderColor:"#EEEEEE",alignItems:"center",justifyContent:"center"}}>
                        <Text style={{fontFamily:myfontsize.h13.fontFamily,fontSize:myfontsize.h1.fontSize,color:"#3D70FF"}}>
                        Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}