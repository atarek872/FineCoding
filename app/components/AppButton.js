import React from 'react';
import {View , StyleSheet, Text ,TouchableOpacity} from 'react-native';

function AppButton({title,onPress}) {
    return (
<TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
</TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'red',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        width:"100%",
        marginBottom:5
    },
    text:{
        color:'#fff',
        fontSize: 18,
        textTransform:"capitalize",
        fontWeight:'bold'
    }
})
export default AppButton;