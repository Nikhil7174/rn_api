import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const NumberFactForm = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [fact, setFact] = useState('');

  const fetchData = async () => {
    const url = `https://numbersapi.p.rapidapi.com/${month}/${day}/date`;

    const options = {
      method: 'GET',
      url,
      params: {
        fragment: 'true',
        json: 'true',
      },
      headers: {
        'X-RapidAPI-Key': 'f0196a86d4mshe3c28233b0faf7bp181186jsn9dc2badd56cb',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setFact(response.data.text);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={{padding:20, alignContent:'center', justifyContent:'center', marginTop:200}}>
      <TextInput
        placeholder="Enter day"
        value={day}
        onChangeText={(text) => setDay(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Enter month"
        value={month}
        onChangeText={(text) => setMonth(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        keyboardType="numeric"
      />
      <Button title="Get Number Fact" onPress={fetchData} />

      {fact !== '' && <Text>{fact}</Text>}
    </View>
  );
};

export default NumberFactForm;
