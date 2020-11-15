import React from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";

import AuthNavigator from "./app/navigation/AuthNavigator";
import colors from "./app/config/colors";
import { AntDesign} from "@expo/vector-icons";


// To Build Navigation Container 
import {NavigationContainer} from "@react-navigation/native";
// TO Build Navigation Tab
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import navigationTheme from "./app/navigation/navigationTheme";

//Navigation Tab
const Tab = createBottomTabNavigator();
const TabNavigator = () =>(
  <Tab.Navigator
  tabBarOptions={{
    activeBackgroundColor:colors.whiteBrown,
    activeTintColor:colors.blackBrown,
    inactiveBackgroundColor:colors.light,
    inactiveTintColor:colors.whiteBrown
  }}>
      <Tab.Screen name="Home" component={AuthNavigator} options={{
        tabBarIcon: ({size , color}) => <AntDesign name="home" size={size} color={color}/>
      }}/>
      <Tab.Screen name="Form" component={ListingEditScreen} options={{
        tabBarIcon: ({size , color}) => <AntDesign name="meho" size={size} color={color}/>
      }}/>
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <StackNavigation/> */}
      <AuthNavigator/>
    </NavigationContainer>
  );
}
