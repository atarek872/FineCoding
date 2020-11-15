import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text } from "react-native";
import Screen from "../app//components/Screen";
function test1({navigation}) {
    return (
        <Screen>
        <Text>Tweet</Text>
        <Button title="Details" onPress={()=>navigation.navigate("tweetsDetails" , {})}></Button>
      </Screen>
    );
}

export default test1;