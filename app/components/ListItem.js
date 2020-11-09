import React from 'react';
import {Image, StyleSheet ,View} from 'react-native';
import AppText from './AppText';
function ListItem({image,title,price}) {
    return (
        <View style={styles.Container}>
            <Image style={styles.image} source={image} />
            <View>
          <AppText>{title}</AppText>
          <AppText style={styles.price}>{price}</AppText>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',

    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10
    },
    price:{
        fontWeight:"600",
        color:"#6e6969"
    }
})
export default ListItem;