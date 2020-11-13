import React from 'react';
import { View ,StyleSheet, Image ,Dimensions} from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import { useDimensions } from '@react-native-community/hooks'
import {Formik} from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from '../components/forms';


const validationSchema = Yup.object().shape({
    Email: Yup.string().required().email().label("Email"),
    Password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    const { width, height } = useDimensions().window;
    // console.log(width);
    return (
        <View style={styles.Container}>
            <Image style={styles.HeadImage} source={require('../assets/Banner-thumb.png')}/>
            <Image style={styles.BlackImage} source={require('../assets/Path-1175.png')}/>
            <View style={styles.FormSignIn}>
                <Formik
                initialValues={{Email:"",Password:""}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
                >
                    {({handleChange,handelSubmit , errors , setFieldTouched , touched}) => (
                        <>
                            <AppText children="Sign In" style={{color:'white',fontWeight: "bold",fontSize:20}}/>
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
                            <AppButton title="Sign     In"
                            onPress={handelSubmit}
                            color="whiteBrown"/>
                        </>
                    )}
                </Formik>
                
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