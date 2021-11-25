
import React from 'react';
import { StyleSheet, Text, SafeAreaView, image, TextInput, TouchableOpacity } from 'react-native';


const screen1 = ({navigation}) => {
  
  //useless text here is just a erased word
  const [text, onChangeText] = React.useState(null);
  {/* textss or text is just a variable name*/}
  const [text2, onChangeText2] = React.useState(null);
  const [text3, onChangeText3] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
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
      <TextInput
       style={[styles.input,styles.setColorWhite]}
       onChangeText={onChangeText3}
       secureTextEntry={true}
       placeholder="Repeat Password..."
       placeholderTextColor='white'
       value={text3}
      />
      
      <TouchableOpacity
      style={styles.buttonlogin}
        onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.setColorBlack}>Signup</Text>
      </TouchableOpacity>

      <Text style={styles.or} > OR</Text>

      <TouchableOpacity
      style={styles.buttonloginfb}
        onPress={()=> console.log("Tapped sign up with fb")}>
        <Text style={styles.setColorWhite}> Signup with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
         onPress={()=>navigation.navigate('Login')}>
         <Text style={styles.donthave} >You already have an account? Login</Text>
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

export default screen1;