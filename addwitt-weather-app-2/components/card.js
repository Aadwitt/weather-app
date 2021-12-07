import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, TextInput, View, Button, Image } from 'react-native';
import axios from 'axios';

export default function Card(props) {
  const [name, setName] = useState('');
  const [main, setMain] = useState({});
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.title}&units=metric&appid=eedd52cc943dd9174f2c65178d154bdd`
      )
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setMain(res.data.main);
        setWeather(res.data.weather[0]);
      });
  }, [props.title]);

  const icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
    <View style={styles.card}>
      <View>
        <Text style={{ fontSize: 30, fontWeight: 900 }}>{name} </Text>
      </View>

  <View style={styles.top}>

  <View >
        <Text style={{ textAlign:'left' }}>MAX</Text>
        <Text style={{ textAlign:'left' }}>{main.temp_max} &#8451; </Text>
      </View>
      
  <View>
        <Text style={{ textAlign:'right' }}>MIN</Text>
        <Text style={{ textAlign:'right' }}>{main.temp_min} &#8451; </Text>
      </View>
      


      </View>



      <View style={styles.iconCon}>
     
        <Image style={styles.icon} source={icon} />
      </View>

      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
          {main.temp}&#8451;
        </Text>
        <View style={styles.bottom}>
          <Text>Feels Like </Text>
          <Text>{main.feels_like}&#8451; </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    backgroundColor: '#f1d4d4',
    justifyContent: 'space-around',
    margin: 20,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    color: '#646464',
    shadowColor: '#fff8cd',
    shadowRadius: 20,
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  icon: {
    height: 80,
    width: 80,
  },
  iconCon: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 50,
    paddingRight: 50,
  },
});
