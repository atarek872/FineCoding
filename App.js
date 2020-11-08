import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View , SafeAreaView ,TouchableOpacity} from 'react-native';
import { useDimensions , useDeviceOrientation} from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
///const { width, height } = useDimensions().screen
//console.log(width);

//const {landscape} = useDeviceOrientation();
  return (
   <ViewImageScreen/>
//    <SafeAreaView style={{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   }}>

// <TouchableOpacity onPress={() => console.log('Hi Test')}>
//      <View style={{
//       //  Border 
//        backgroundColor:"dodgerblue",
//        width:100,
//        height:100,
//        borderWidth:10,
//        borderColor:"royalblue",
//        borderRadius:50,
//        borderTopWidth:20,
//        borderTopLeftRadius:50
       
//      }}/>
// </TouchableOpacity>
   
//    </SafeAreaView>
  );
}

