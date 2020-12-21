import React from 'react';
import { StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem( {item ,pressHandler}) {

    return(
        <TouchableOpacity onPress= {() => pressHandler(item.key) }>
            <View style={styles.item} >
            <MaterialIcons name="delete" size={25} color="#555" />
            <Text style = {styles.text} >{ item.text }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    item : {
        
        padding: 20,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
        margin : 5,
        flexDirection:'row',
    },
    text : {
        fontSize:20,
        paddingLeft:5,
    }

});