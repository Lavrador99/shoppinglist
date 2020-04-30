import React, { useState } from 'react'
import {View, Text, StyleSheet ,TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'


 const NewItem = ({ add }) => {
     const [text, setText] = useState('');

    const onChange = (textvalue) => {
        setText(textvalue);
    }

    const onAddItem = () => {
        add(text);
    }

    return (
        <View>
            <TextInput style={styles.input} placeholder="Add a new item... " onChangeText={onChange} />
            <TouchableOpacity style={styles.btn}   onPress={onAddItem} >
                <Text style={styles.btnText} >
                   <Icon name="plus" size={20}/> 
                   Add item
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        margin: 10,
        padding: 9,
        backgroundColor: "#00ff00"
    },
    btnText: {
        textAlign: 'center',
        color: "#000",
        fontSize: 20
    }
})

export default NewItem;