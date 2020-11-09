import React from 'react';
import {View,StyleSheet} from 'react-native';
import Card from '../components/Card.js'

function CardsView(props) {
    return (
        <View style={{
            backgroundColor:"#f8f4f4",
            padding:20,
            paddingTop:100
        }}>
            <Card 
                title="redJacket for sale"
                price="$100"
                image={require("../assets/abdallah.jpg")}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    
})
export default CardsView;