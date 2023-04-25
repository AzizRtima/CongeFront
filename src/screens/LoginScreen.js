import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({navigation}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // handle login logic here
    navigation.navigate('Conge');
  };

  const handleForgotPassword = () => {
    // handle forgot password logic here
  };

  return (
    <SafeAreaView>
    <ScrollView>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={30}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Accès réservé aux responsables de Phoenix</Text>
          {/* <Image style={styles.headerImage} source={require('../assets/logo.png')} /> */}
        </View>

        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/loginImage.png')} style={styles.image} />
          </View>

          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder='Matricule'
              value={id}
              onChangeText={setId}
            />
            <TextInput
              style={styles.input}
              placeholder='Mot de passe'
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Connexion</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonAnnuler} onPress={handleLogin}>
                <Text style={styles.buttonText}>Annuler</Text>
              </TouchableOpacity>
            </View>

            {/* <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#575151',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  headerText: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerImage: {
    width: 180,
    height: 70,
    marginLeft: 20,
  },
  container: {
  
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 3,
    width: 280,
    height: 280,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 150,
  },
  formContainer: {
    flex: 2,
    marginLeft: 10,
    justifyContent:"center",
    alignItems:'center',
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,

  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
    marginHorizontal: 5,
    backgroundColor:"blue"
  },
  buttonAnnuler: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
    marginHorizontal: 5,
    backgroundColor:"red"
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  forgotPasswordText: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;