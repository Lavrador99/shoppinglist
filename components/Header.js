import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Shopping List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 50,
        padding: 15,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems:'center'
    },
    text: {
        color: '#fff',
        fontSize: 20
    }
})

export default Header;