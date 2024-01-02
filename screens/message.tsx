// Autre écran
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from '../action/action';

export default function OtherScreen() {
  const registrations = useSelector((state) => state.user.registrations);
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [name, setName] = useState(loggedInUser ? loggedInUser.name : '');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const handleUpdateProfile = () => {
    dispatch(updateName(name));
    setShowSuccessModal(true); // Afficher la boîte de dialogue de succès
  };
  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <View style={{margin:100}}>
      {registrations.map((registration, index) => (
        <View key={index}>
          <Text>Nom: {registration.name}</Text>
          <Text>Email: {registration.email}</Text>
          <Text>Mot de passe: {registration.password}</Text>

        <View style={{margin:10}}>
            <Text>Modifier votre nom, votre nom actuelle est :  {registration.name}</Text>
            <TextInput
            placeholder="Nom"
            value={name}
            onChangeText={setName}
            />
            <Button title="Enregistrer" onPress={handleUpdateProfile} />
        </View>
        <Modal visible={showSuccessModal} onRequestClose={closeModal}>
            <View>
            <Text>Nom mis à jour</Text>
            <Text>Ancien nom : {registration.name}</Text>
            <Text>Nouveau nom : {name}</Text>
            <Button title="OK" onPress={closeModal} />
            </View>
        </Modal>
        </View>
        
      ))}
      
    </View>
  );
}