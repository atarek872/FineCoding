import React from 'react';
import { Text,StyleSheet } from 'react-native';

function AppText({children,style}) {
    return (
    <Text style={[styles.text,style]}>{children}</Text>
    );
}
const styles = StyleSheet.create({
    text:{
        color:"black",
        fontSize: 25,
        fontStyle:"normal",
        fontWeight:"600",
        // textShadowRadius:30,
        // textShadowColor:'gray',
        // textAlign:'center'
    }
        
})
export default AppText;