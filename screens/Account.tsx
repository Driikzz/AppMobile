// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useSelector } from 'react-redux';

export default function Account() {
  const registrations = useSelector((state) => state.user.registrations);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    const registration = registrations.find(
      (reg) => reg.email === email && reg.password === password
    );

    if (registration) {
      // Connexion réussie
      setLoginError('');
      // Faites ce que vous voulez après une connexion réussie
    } else {
      // Identifiants de connexion invalides
      setLoginError('Identifiants de connexion invalides');
    }
  };

  return (
    <View>
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
    </View>
  );
}