import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedInUser } from '../action/action';

export default function Recompense() {
  const dispatch = useDispatch();
  const registrations = useSelector((state) => state.user.registrations);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [logisOk, setLogIsOk] = useState('');

  const handleLogin = () => {
    const registration = registrations.find(
      (reg) => reg.email === email && reg.password === password
    );
  
    if (registration) {
      // Connexion réussie
      setLoginError('');
      dispatch(setLoggedInUser(registration));
      setLogIsOk('Connecté');
    } else {
      setLoginError('Identifiants de connexion invalides');
    }
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
      {logisOk ? <Text>{logisOk}</Text> : null}
    </View>
  );
}