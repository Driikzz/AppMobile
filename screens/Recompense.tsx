import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {loginUserFailure, loginUserSuccess, setLoggedInUser } from '../action/action';
import axios from 'axios';

export default function Recompense() {
  const dispatch = useDispatch();
  // const registrations = useSelector((state) => state.user.registrations);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [logisOk, setLogIsOk] = useState('');

  const handleLogin = () => {
    const requestData = {
      email: email,
      password: password,
    };
   
    axios.post('http://10.0.2.2:4000/login', requestData)
      .then(response => {
        if (response.data.success) {
          console.log('Utilisateur connecté avec succès');
          setLogIsOk('Connecté');
          console.log("L'email de l'utilisateur est :", email);

          axios.get(`http://10.0.2.2:4000/users/${email}`)
            .then(userResponse => {
              userResponse.data.forEach(user => {
                console.log('Informations de l\'utilisateur :', user.name, user.email, user.password);
                dispatch(loginUserSuccess(user));
              });
              
            })
            .catch(userError => {
              console.error('Erreur lors de la récupération des informations de l\'utilisateur', userError);
            });
            
          setEmail('');
          setPassword('');
        } else {
          Alert.alert('Erreur', 'Nom d\'utilisateur ou mot de passe incorrect');
          dispatch(loginUserFailure('Nom d\'utilisateur ou mot de passe incorrect'));
        }
      })
      .catch(error => {
        console.error('Erreur de connexion', error);
      });

    };

      const handleLDelete = () => {
        axios.delete(`http://10.0.2.2:4000/delete/${email}`,)
        .then(response => {
          if (response.status !== 200) {
            throw new Error('Erreur de réseau ou réponse non valide');
          }
          console.log('Utilisateur supprimé avec succès');
          setLogIsOk('Utilisateur supprimé avec succès');
          setEmail('');
          setPassword('');    
      });


  };
  return (
    <View style={{margin:50}}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Se connecter" onPress={handleLogin} />
      {loginError ? <Text>{loginError}</Text> : null}
      {logisOk ? <Text>{logisOk} {}</Text> : null}
      <Button title="Supprimer son compte" onPress={handleLDelete} />
    </View>
  );
}