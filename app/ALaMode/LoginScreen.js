import React from 'react';
import { View ,StyleSheet, Image ,Dimensions,ImageBackground , Text} from 'react-native';
import AppButton from '../components/AppButton';
import SubmitButton from '../components/forms/SubmitButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import { useDimensions } from '@react-native-community/hooks'
import {Formik} from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from '../components/forms';
import colors from '../config/colors';


const validationSchema = Yup.object().shape({
    Email: Yup.string().required().email().label("Email"),
    Password: Yup.string().required().min(4).label("Password")
})

function LoginScreen({navigation,route}) {

    const { width, height } = useDimensions().window;
    // console.log(width);
    return (
        <View style={styles.Container}>
            <Image style={styles.HeadImage} source={require('../assets/Banner-thumb.png')}/>
            <ImageBackground style={styles.BlackImage} source={require('../assets/Path-1175.png')}>
           <View style={styles.Form}>
           <AppText children="Sign In" style={{color:'white',fontWeight: "bold",fontSize:20}}/>
                <Formik
                initialValues={{Email:"",Password:""}}
                onSubmit={values =>  navigation.navigate('WelcomeScreen')}
                // onSubmit={values => console.log(values)}
                // onSubmit={() => navigation.navigate('WelcomeScreen')}
                validationSchema={validationSchema}
                >
                    {({handleChange,handelSubmit , errors , setFieldTouched , touched}) => (
                        <>
                            <AppTextInput
                            icon='account'
                            onChangeText={handleChange('Email')} 
                            placeholder="Email"
                            keyboardType='email-address'
                            autoCorrect={false}
                            textContentType='emailAddress' // for IOS ONLY TO GET CASH MAILS
                            onBlur={()=> setFieldTouched("Email")}
                            />
                            <ErrorMessage
                            error={errors.Email}
                            visible={touched.Email}
                            />
                            <AppTextInput
                            icon='lock'
                            onChangeText={handleChange('Password')} 
                            placeholder="Password"
                            onBlur={()=> setFieldTouched("Password")}
                            secureTextEntry
                            autoCorrect={false}
                            textContentType='password' // for IOS ONLY TO GET CASH MAILS

                            />
                            <ErrorMessage
                            error={errors.Password}
                            visible={touched.Password}
                            />
                            <SubmitButton title="Sign In"
                            onPress={handelSubmit}
                            color="whiteBrown"/>
                        </>
                    )}
                </Formik>
                
            </View>
            <View style={styles.SignUP}>
            <Text style={{color:'white',fontWeight: "bold",fontSize:20 ,alignItems:"center"}}>Don't have an account? <Text
                    style={{color:colors.whiteBrown,fontWeight: "bold",fontSize:20 ,paddingLeft:40,paddingTop:2,textDecorationLine: 'underline'}}
                    onPress={() => navigation.navigate("SignUp")}>Sign Up </Text></Text>
            </View>
            {/* //{route.params.id} */}
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        
    },
    HeadImage:{
        width:"100%",
        height:Dimensions.get('window').height /3
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
    FormSignIn:{
        position:'absolute',
        top:Dimensions.get('screen').height /2.4,
        width:"90%",
        // height:"100%",
        alignSelf:"center"
    },
    SignUP:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    }
    
})
export default LoginScreen;