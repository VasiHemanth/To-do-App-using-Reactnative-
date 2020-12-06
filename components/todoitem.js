import React from 'react';
import { StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
} from 'react-native';

export default function TodoItem( {item ,pressHandler}) {

    return(
        <TouchableOpacity onPress= {() => pressHandler(item.key) }>
            <Text style={styles.item}>
            { item.text }
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    item : {
        fontSize:18,
        padding: 20,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
        margin : 5,
    
    }

});