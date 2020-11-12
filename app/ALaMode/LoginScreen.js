import React, { useState } from 'react';
import { View ,StyleSheet, Image, ImageBackground ,Text, TextInput,Dimensions} from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import { useDimensions } from '@react-native-community/hooks'

function LoginScreen(props) {
    const [Email , setEmail] = useState();
    const [Password , setPassword] = useState();
    const { width, height } = useDimensions().window
    // console.log(width);
    return (
        <View style={styles.Container}>
            <Image style={styles.HeadImage} source={require('../assets/Banner-thumb.png')}/>
            <Image style={styles.BlackImage} source={require('../assets/Path-1175.png')}/>
            <View style={styles.FormSignIn}>
                <AppText children="Sign In" style={{color:'white',fontWeight: "bold",fontSize:20}}/>
                <AppTextInput
                icon='account'
                onChangeText={(text) => setEmail(text)} 
                placeholder="Email"
                keyboardType='email-address'
                autoCorrect={false}
                textContentType='emailAddress' // for IOS ONLY TO GET CASH MAILS
                
                />
                <AppTextInput
                icon='lock'
                onChangeText={(text) => setPassword(text)} 
                placeholder="Password"
                secureTextEntry
                autoCorrect={false}
                textContentType='password' // for IOS ONLY TO GET CASH MAILS

                />
                <AppButton title="Sign In"
                 onPress={() => console.log(Email,Password)}
                 color="whiteBrown"/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        
    },
    HeadImage:{
        width:"100%",
        height:"40%"
    },
    BlackImage:{
        width:"100%",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flex:2

    },
    FormSignIn:{
        position:'absolute',
        top:Dimensions.get('screen').height /2.4,
        width:"90%",
        // height:"100%",
        alignSelf:"center"
    },
    
})
export default LoginScreen;