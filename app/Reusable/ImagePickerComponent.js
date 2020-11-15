import React , {useEffect ,useState} from 'react';
import {Button, Image, StyleSheet} from 'react-native';
import Screen from "../components/Screen";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


function ImagePickerComponent(props) {

    const [imageUri , setImageUri] = useState();

    const requestPermisson = async () => {
        // coustom permissions
        const result = await Permissions.askAsync(Permissions.CAMERA_ROLL ,Permissions.LOCATION);

        const {granted} = await ImagePicker.getCameraRollPermissionsAsync();
        //result.granted == granted hya hya boolean value

        if(!result.granted) alert('You need to enable permission to access the library.');
    }




    useEffect(() => {
        requestPermisson();
    },[]);


    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if(!result.cancelled)
                setImageUri(result.uri);
        } catch (error) {
            console.log("Error reading an image" , error);
        }
    }


    return (
        <Screen>
            <Button title="Select Image" onPress={selectImage}></Button>
            <Image source={{uri: imageUri}} style={{width:200,height:200}}/>
        </Screen>
    );
}
const styles = StyleSheet.create({
    
})
export default ImagePickerComponent;