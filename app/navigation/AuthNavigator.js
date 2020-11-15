import React from "react";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import MessagesScreen from "../screens/MessagesScreen";
import AlaModeScreen from "../ALaMode/AlaModeScreen";
import LoginScreen from "../ALaMode/LoginScreen";
import AccountScreen from "../screens/AccountScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUp from "../ALaMode/SignUp";
import ImagePickerComponent from "../Reusable/ImagePickerComponent";
import Screen from "../components/Screen";
import test1 from "../test1";
import { Button, Text } from "react-native";
import colors from "../config/colors";
import {MaterialCommunityIcons ,AntDesign} from "@expo/vector-icons";

// Navigation 
import {createStackNavigator} from '@react-navigation/stack'

// To Build Navigation Container 
import {NavigationContainer} from "@react-navigation/native";
// TO Build Navigation Tab
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

const Stack = createStackNavigator();


const AuthNavigator = () => (
    <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{
        headerStyle:{backgroundColor:colors.blackBrown},
        headerTintColor:colors.light
      }}>
        
        <Stack.Screen name="SignUp" options={{title:"SignUp",headerTitleAlign:"center",headerShown:false}} component={SignUp}/>
        <Stack.Screen name="LoginScreen" options={{headerShown:false}} component={LoginScreen}/>
        <Stack.Screen name="AlaModeScreen" options={{headerShown:false}} component={AlaModeScreen}/>
        <Stack.Screen name="ListingEditScreen" component={ListingEditScreen}/>
        <Stack.Screen name="MessagesScreen" component={MessagesScreen}/>
        <Stack.Screen name="WelcomeScreen" options={{headerShown:false}} component={WelcomeScreen}/>
    
      </Stack.Navigator>
)

export default AuthNavigator;