// RegistrationScreen.js
import React from 'react';
import { View, TextInput, Button, StyleSheet, Image, ImageBackground, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setPassword, addRegistration, resetUser } from '../action/action';
import axios from 'axios';



export default function RegistrationScreen() {
  const dispatch = useDispatch();
  const { name, email, password } = useSelector((state) => state.user);

  const handleNameChange = (text) => {
    dispatch(setName(text));
  };

  const handleEmailChange = (text) => {
    dispatch(setEmail(text));
  };

  const handlePasswordChange = (text) => {
    dispatch(setPassword(text));
  };
  
  const postData = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:4000/users', {
        name: name,
        email: email,
        password: password
      });
      console.log('Réponse du serveur :', response.data);
    } catch (error) {
      if (error.response) {
        // La requête a été effectuée et le serveur a renvoyé une réponse avec un code d'erreur
        console.error('Erreur de réponse du serveur :', error.response.data);
        console.error('Statut de la réponse du serveur :', error.response.status);
        console.error('En-têtes de la réponse du serveur :', error.response.headers);
      } else if (error.request) {
        // La requête a été effectuée mais aucune réponse n'a été reçue
        console.error('Aucune réponse reçue du serveur :', error.request);
      } else {
        // Une erreur s'est produite lors de la configuration de la requête
        console.error('Erreur lors de la configuration de la requête :', error.message);
      }
    }
    dispatch(resetUser());
  };
  
  
  // const handleSubmit = () => {
  //   const newUser = {
  //     name: name,
  //     email: email,
  //     password: password
  //   };
  //   console.log(newUser);
  
  //   fetch('http://10.0.2.2:4000/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newUser)
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       console.error('Une erreur est survenue lors de l\'inscription', error);
  //     });
  
    
  // };



  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.jpg')}>
        <View >
          <Text style={styles.text}>Inscription</Text>
        </View>
        <View style={styles.form}>
          <TextInput
          placeholder="Nom"
          value={name}
          onChangeText={handleNameChange}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={handleEmailChange}
          />
          <TextInput
            placeholder="Mot de passe"
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry
          />
        </View>
        <View style={styles.button}>
          <Button  color={"black"} title="S'inscrire" onPress={postData} />
        </View>
      </ImageBackground>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:0,
   
  },
  form:{
    paddingLeft:50,
    paddingTop:100
  },
  button:{
    padding:50,
    paddingBottom:400,
    borderRadius: 16,
    backgroundColor:'#5a83D9',
    color:'white', 
  },
  text:{
    marginTop:100, 
    marginLeft:50,
    fontSize:50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  }
});