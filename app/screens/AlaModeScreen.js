import React from 'react';
import { View,StyleSheet,ImageBackground ,Image,Text} from 'react-native';

function AlaModeScreen(props) {
    return (
        <ImageBackground
        // blurRadius={10}
        style={styles.background}
        source={require("../assets/BG.png")}
      >
        <ImageBackground
            // blurRadius={10}
            style={styles.background2}
            source={require("../assets/icon-pattern.png")}
        >
            <View style={styles.logoContainer}>         
                <Image  source={require("../assets/splash-circle.png")} />
            </View>
            <View style={styles.LogoIcon}>
            <Image style={{justifyContent:'center',alignItems: 'center'}} source={require("../assets/Group-299.png")} />

            </View>
        </ImageBackground>
      </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

      },
      background2:{
        width:"100%",
        height:"100%"
      },
      logoContainer:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:240
      },
      LogoIcon:{
        position:"absolute",
        top:280,
        left:0,
        right:0,
        bottom:0,
        alignItems:"center",

    }   
})
export default AlaModeScreen;