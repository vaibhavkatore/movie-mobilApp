import React from 'react';
import {ImageBackground, StyleSheet, Text, View, TextInput, Button, Alert, ColorPropType } from 'react-native';
const logoImage = require('./assets/img/back3.jpg');

export default function App() {
  return ( 
 
      
    <View style={styles.container}>
       <ImageBackground
    source={logoImage}
    style={styles.images}
    >

      <View style={styles.inside}>
      <Text style={{margin:30, fontSize:30, color:"white"}}>Sign Up</Text>
      <TextInput placeholder="Fist name" style={styles.inputStyles}/>
      <TextInput placeholder="Last Name" style={styles.inputStyles}/>
      <TextInput placeholder="Email" style={styles.inputStyles}/>
      <TextInput placeholder="Phone" style={styles.inputStyles}/>
      <TextInput placeholder="Password" style={styles.inputStyles}/>

     <Text style={styles.buttonStyle} >Submit</Text>
     </View>
     </ImageBackground>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  inside: {
    alignItems: 'center',
  
  },
  inputStyles:{
    borderColor:'black', 
    borderWidth:0.1, 
    width:300, 
    padding:10,
    marginBottom:10,
    borderRadius: 10,
    backgroundColor:"white"
  },
   buttonStyle:{
    fontSize:20,
    marginTop:10,
    borderRadius:10, 
    width:200, 
    padding:10,
    backgroundColor:"green",
    textAlign:"center",
    color:"white"
   
  },
  images: {
    flex: 1,
   resizeMode:"cover"
},
});
