import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';

export default function CongeRechercheScreen() {
  const [matricule, setMatricule] = useState('');
  const [matriculeRemplacant, setMatriculeRemplacant] = useState('');

  const handleSearch = () => {
    // logique de recherche ici
    console.log(`Recherche de matricule : ${matricule}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mon application</Text>
        <View style={styles.headerRight}></View>
      </View>
      <View style={styles.body}>
              <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Matricule:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setMatricule}
            value={matricule}
            placeholder="Entrez le matricule"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Matricule remplaçant:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setMatriculeRemplacant}
            value={matriculeRemplacant}
            placeholder="Entrez le matricule remplaçant"
          />
        </View>
        </View>
      <View style={{alignItems:"center"}}>
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Rechercher</Text>
        </TouchableOpacity>
        </View>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#000000',
    paddingTop: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRight: {
    backgroundColor: '#EC1E12',
    height: 30,
    width: 250,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  formContainer: {
    
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  inputContainer: {
    width: '30%',
    marginVertical: 10,
    marginRight:15
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginVertical: 20,
    width:200,
    alignItems:'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

