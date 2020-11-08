import React from 'react';
import { ImageBackground ,StyleSheet, View, Image , Text} from 'react-native';
import AppText from "../components/AppText";

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        source={require('../assets/zamalek.jpg')}
        style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/20.webp')}/>
                <AppText >نادي القرن الحقيقي لكرة القدم</AppText>
            </View>
            
            <View style={styles.LoginButton}></View>
            <View style={styles.Registerbutton}></View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background : {
        flex:1,
        justifyContent:"flex-end",
        alignItems:'center'
    },
    LoginButton:{
        width:"100%",
        height:50,
        backgroundColor:"red"
    },
    Registerbutton:{
        width:"100%",
        height:50,
        backgroundColor:"#fff"
    },
    logo:{
        width:100,
        height:100,

    },
    logoContainer:{
        position:'absolute',
        top:40,
        alignItems:"center"
    }
})
export default WelcomeScreen;