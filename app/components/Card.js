import React from 'react';
import {Image, StyleSheet,View} from 'react-native';
import AppButton from '../components/AppButton';
import AppText from "../components/AppText";

function Card({image,title,price}) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image}/>
            <View style={styles.detailsContainer}>

            </View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.Subtitle}>{price}</AppText>
        </View>
    );
}
const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:"white",
        marginBottom:20,
        overflow:'hidden'
    },
    image:{
        width:"100%",
        height:200
    },
    detailsContainer:{
        padding:5,
    },
    title:{
        marginBottom:7,
        paddingLeft:5
        // textAlign:'center'
    },
    Subtitle:{
        color:"blue",
        fontWeight:"bold",
        paddingLeft:5

    }
})
export default Card;