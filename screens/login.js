
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const login = ({navigation}) => {
  //useless text here is just a erased word
  const [text, onChangeText] = React.useState(null);
  {/* textss or text is just a variable name*/}
  const [text2, onChangeText2] = React.useState(null);
  const onPress = () => console.log("Button Press2");

  return (
    <SafeAreaView style={styles.container}>
      <Image  style={styles.image} source={ require ('../assets/icon.png')}/>
      <TextInput
        style={[styles.input,styles.setColorWhite]}
        onChangeText={onChangeText}
        placeholder="Email or Username"
        placeholderTextColor='white'
        value={text}
      />
      <TextInput
       style={[styles.input,styles.setColorWhite]}
       onChangeText={onChangeText2}
       secureTextEntry={true}
       placeholder="Password..."
       placeholderTextColor='white'
       value={text2}
      />
      
      <TouchableOpacity
      style={styles.buttonlogin}
      onPress={()=>navigation.navigate('Tab')}>
        <Text style={styles.setColorBlack}> LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.or} > OR</Text>

      <TouchableOpacity
      style={styles.buttonloginfb}
        onPress={()=> console.log("Tappeds with facebook")}>
        <Text style={styles.setColorWhite}> Login with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={()=>navigation.navigate('signup')}>
        <Text style={styles.donthave} > Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black',
  },input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    backgroundColor:'#949797',
    borderRadius: 5,
  },
  buttonlogin: {
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 82,
    marginTop:13,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'white',
  },
  buttonloginfb: {
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 37,
    marginTop:10,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'blue',
  },
  setColorWhite : {
    color: 'white'
  },
  setColorBlack : {
    color: 'black'
  },
  or : {
    color: 'white',
    marginTop:5,
  },
  donthave : {
    color: 'white',
    marginTop:16,
  },
  text: {
    fontSize: 1,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  image: {
    width: 66,
    height: 58,
    marginBottom: 45,
  },
});

export default login;