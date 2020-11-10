import React from 'react';
import {Image, StyleSheet ,View ,TouchableOpacity} from 'react-native';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({image,title,price ,onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity onPress={onPress}>
        <View style={styles.Container}>
            <Image style={styles.image} source={image} />
            <View>
          <AppText>{title}</AppText>
          <AppText style={styles.price}>{price}</AppText>
            </View>
        </View>
        </TouchableOpacity>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        padding:15
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