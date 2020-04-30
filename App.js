import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import Header from './components/Header'
import ListItem from './components/ListItem';
import NewItem from './components/NewItem';


const App = () => {

  const [idt, setIdt] = useState(1);
  const [items, setItems] = useState([
      {
        id: idt,
        text: 'milk'
      },
  ]);

  const addItem = (text) => {
      var newId = idt;
      newId++;

      setIdt(newId);

      const newItem = {
        id: newId,
        text: text
      }

      setItems(prevItems => {
        return [ ...prevItems, newItem]
      });
  }

  const deleteItem = (id) => {
    
      setItems(prevItems => (
        prevItems.filter(item => item.id != id)
      ))
  }


  return (
    <View style={styles.container} >
      <Header></Header>
      <NewItem add = {addItem} > </NewItem>
      <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem = {deleteItem} /> } ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
  },
 
})

export default App