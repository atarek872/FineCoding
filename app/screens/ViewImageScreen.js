import React from 'react';
import { Image ,StyleSheet,View} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
            </View>
            <View style={styles.deleteIcon}></View>
            <Image resizeMode="contain" style={styles.imageback} source={require('../assets/zamalekbackground.jpg')}/>
        </View>
    );
}
const styles = StyleSheet.create({
    closeIcon:{
        width:50,
        height:50,
        backgroundColor:"#fff",
        position:"absolute",
        top:30,
        left:40,
        
    },deleteIcon:{
        width:50,
        height:50,
        backgroundColor:"red",
        position:"absolute",
        top:30,
        right:40,
    },
    container:{
        backgroundColor:"#000",
        flex:1
    },
    imageback:{
        width:"100%",
        height:"100%"
    }
})

export default ViewImageScreen;