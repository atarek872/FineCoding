import React, { Component , useState } from 'react';
import { View,StyleSheet ,FlatList, SafeAreaView ,Platform,StatusBar, Text,TouchableWithoutFeedback} from 'react-native';
import ListItem from "../components/ListItem";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Initialmessages = [
    {
        id:1,
        title:'T1',
        desc:'LE 200',
        image:require('../assets/abdallah.jpg')
    },{
        id:2,
        title:'T2',
        desc:'LE 100',
        image:require('../assets/Sasi.jpg')
    },
]

function MessagesScreen(){
  const [messages , setMessages] = useState(Initialmessages);

  const [refreshing , setRefreshing] = useState(false);

  const handelDelete = msg => {
      // delete te message from messages
      const newMessages = messages.filter(m => m.id !== msg.id);
      //call the server
      setMessages(newMessages);
  }

    return (
      <SafeAreaView style={styles.screen}>
      <FlatList 
      data={messages}
      keyExtractor={messages => messages.id.toString()}
      renderItem={({item}) => <ListItem 
      title={item.title}
      price={item.desc}
      image={item.image}
      onPress={()=> console.log('touch',item)}
      renderRightActions={() => 
      <TouchableWithoutFeedback onPress={() => handelDelete(item)}>
          <View style={{backgroundColor:'red',width:70,justifyContent:'center',alignItems:'center'}}>
          <MaterialCommunityIcons 
          name="trash-can"
          size={35}
          color="white"
          />
          </View>
      </TouchableWithoutFeedback>
      }
      />}
      ItemSeparatorComponent={() => <View style={{width:"100%" , height:1 ,backgroundColor:'#f8f4f4'}} ></View>}
      refreshing={refreshing}
      onRefresh={() => {
        setMessages(Initialmessages);
      }}
      />
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    screen:{
      paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      // backgroundColor:'yellow',
      flex:1
    }
})

export default MessagesScreen;
