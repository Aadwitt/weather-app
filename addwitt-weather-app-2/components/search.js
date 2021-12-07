import React,{useState} from 'react';
import { Text, StyleSheet, TextInput, View, Button } from 'react-native';
import Card from './card'

export default function Search() {

const [x, setX]=useState("")
const [search,setSearch]=useState("")

function handleChange(e){
  setX(e.target.value)

}

function searchButton(){
  setSearch(x)
}




  const styles = StyleSheet.create({
    textInput: {
      padding: 20,
      borderWidth: 2,
      borderColor: '#ffe05d',
      margin: 20,
    },
    input: {
      margin: 20,
      position: 'relative',
    },
    button: {
      margin: 20,
      marginTop: 5,
    },
  });
  return (
    <View styles={styles.input}>
      <View style={styles.textInput}>
        <TextInput placeholder="City Name" onChange={handleChange}/>
      </View>

      <View style={styles.button}>
        <Button title="Search" color="#ff9642" onPress={searchButton} />
      </View>

       <Card title = {search}/>


    </View>
  );
}
