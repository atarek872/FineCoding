import React from 'react';
import { View ,StyleSheet, Image, ImageBackground ,Text} from 'react-native';
import AppText from '../components/AppText';

function LoginScreen(props) {
    return (
        <View style={styles.Container}>
            <Image style={styles.HeadImage} source={require('../assets/Banner-thumb.png')}/>
            <Image style={styles.BlackImage} source={require('../assets/Path-1175.png')}/>
            <View style={styles.FormSignIn}>
                <AppText children="Sign In" style={{color:'white',fontWeight: "bold",fontSize:20,paddingLeft:20}}/>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Container:{
        // flex:1
    },
    HeadImage:{
        width:"100%",
    },
    BlackImage:{
        width:"100%",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,

    },
    FormSignIn:{
        position:'absolute',
        top:360,
    },
    
})
export default LoginScreen;