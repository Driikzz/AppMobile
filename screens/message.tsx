// Autre écran
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from '../action/action';
import axios from 'axios';

export default function MesssageScreen() {
  // const registrations = useSelector((state) => state.user.registrations);
  const [registrations, setRegistrations] = useState([]);
  const dispatch = useDispatch();
  
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  
  const [name, setName] = useState(loggedInUser ? loggedInUser.name : '');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const handleUpdateProfile = () => {
    console.log(loggedInUser.email);
    axios.put(`http://10.0.2.2:4000/update/${loggedInUser.email}`, {
      name: name,
    })
    .then(response => {
      
      if (response.status !== 200) {
        throw new Error('Erreur de réseau ou réponse non valide');
      }
      setShowSuccessModal(true); 
    })
    .catch(error => {
      console.error('Une erreur est survenue lors de la mise à jour du nom', error);
    });
      
    dispatch(updateName(name));
    setShowSuccessModal(true); 
  };
  const closeModal = () => {
    setShowSuccessModal(false);
  };

  useEffect(() => {
    fetchUsers(); 
    const interval = setInterval(fetchUsers, 5000); 

    return () => {
      clearInterval(interval); 
    };
  }, []);

  const fetchUsers = () => {
    axios.get('http://10.0.2.2:4000/users')
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Erreur de réseau ou réponse non valide');
        }
        setRegistrations(response.data);
        return response.data;
      })
      .then(data => {
        displayUsers(data);
      })
      .catch(error => {
        console.error('Une erreur est survenue lors de la récupération des utilisateurs', error);
      });
  };
  const displayUsers = (users) => {
    users.forEach(user => {
      // console.log(user.name, user.email);
    });
  };
  const user = useSelector(state => state.user.loggedInUser);
  React.useEffect(() => {
    console.log('Informations de l\'utilisateur :', user);
  }, []);

  return (
    <View style={{margin:100}}>
        <View>
          <Text>Nom: {user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Mot de passe: {user.password}</Text>

        <View style={{margin:10}}>
            <Text>Modifier votre nom, votre nom actuelle est :  {user.name}</Text>
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
            <Text>Ancien nom : {user.name}</Text>
            <Text>Nouveau nom : {name}</Text>
            <Button title="OK" onPress={closeModal} />
            </View>
        </Modal>
        </View>  
    </View>
  );
}