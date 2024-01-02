// RegistrationScreen.js
import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setPassword, addRegistration, resetUser } from '../action/action';

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

  const handleSubmit = () => {
    // Ajouter les données d'inscription au tableau
    dispatch(addRegistration({ name, email, password }));

    // Réinitialiser le formulaire après la soumission
    dispatch(resetUser());
  };

  return (
    <View style={{margin:50}}>
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
      <Button title="S'inscrire" onPress={handleSubmit} />
    </View>
  );
}