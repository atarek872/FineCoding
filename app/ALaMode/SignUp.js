import React ,{useState} from "react";
import { StyleSheet ,Image,ImageBackground, View ,Text,Linking} from "react-native";

import * as Yup from "yup";
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import CheckBox from '@react-native-community/checkbox';

import {
    AppForm as Form,
    AppFormField as FormField,
    SubmitButton,
  } from "../components/forms";
import colors from "../config/colors";
  
// import 

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    toggle: Yup.boolean().required(true),
  });
function SignUp(props) {

    return (
        <Screen>
            <Image style={styles.HeadImage} source={require('../assets/Banner-thumb.png')}/>
            <ImageBackground style={styles.BlackImage} source={require('../assets/Path-1175.png')}>
           <View style={styles.Form}>
           <AppText children="Sign In" style={{color:'white',fontWeight: "bold",fontSize:20}}/>

                <Form
                    initialValues={{ name: "", email: "", password: ""  }}
                    onSubmit={ (values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <FormField
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                    />
                    <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                    />
                    <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                    />
                    <View style={{
                    }}>
                    <CheckBox
                        disabled={false}
                        tintColors={{ true: colors.whiteBrown, false: colors.white }}
                        style={{
                            position:"absolute",
                            
                        }}
                        name="toggle"
                    />
                   <Text style={{color:'white',fontWeight: "bold",fontSize:20 ,paddingLeft:40,paddingTop:2}}>By creating an account, you agree to the Kenakata <Text
                    style={{color:colors.whiteBrown,fontWeight: "bold",fontSize:20 ,paddingLeft:40,paddingTop:2,textDecorationLine: 'underline'}}
                    onPress={() => {
                        Linking.openURL('https://google.com');
                    }}>Terms of service</Text> and <Text
                   style={{color:colors.whiteBrown,fontWeight: "bold",fontSize:20 ,paddingLeft:40,paddingTop:2,textDecorationLine: 'underline'}}
                   onPress={() => {
                    Linking.openURL('https://google.com');
                  }}>privacy policy</Text>.</Text>
                   
                  
                    </View>
                    
                    <SubmitButton title="Sign Up" />
                </Form>
                
            </View>
            <View style={styles.SignIN}>
            <Text style={{color:'white',fontWeight: "bold",fontSize:20 ,paddingTop:80,alignItems:"center"}}>Already have an account? <Text
                    style={{color:colors.whiteBrown,fontWeight: "bold",fontSize:20 ,paddingLeft:40,paddingTop:2,textDecorationLine: 'underline'}}
                    onPress={() => {
                        Linking.openURL('https://google.com');
                    }}>Sign In</Text></Text>
            </View>
            </ImageBackground>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
    padding: 10,
  },
  HeadImage:{
      width:"100%",

    },
  BlackImage:{
      width:"100%",
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      height:"100%", 
      overflow: 'hidden',
      
  },
  Form:{
      paddingTop:20,
      width:"90%",
      alignSelf:"center",
    //   textAlignVertical:"center"
  },
  SignIN:{
      width:"100%",
      justifyContent:"center",
      alignItems:"center"
  }
})
export default SignUp;