import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ListItem from "../components/ListItem"
function CardDetails(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/abdallah.jpg')} />
            <View style={styles.detailsContainer}>
            <ListItem 
            title="redJacket for sale"
            price="$100"
            image={require("../assets/20.webp")}
            />
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300
    },
    detailsContainer:{
        marginVertical:50,
    },
})
export default CardDetails;