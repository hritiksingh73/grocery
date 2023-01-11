import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {userInfoDetails, userId} from '../../redux/actions/userAction';
import {color} from '../../constant/color';
import TextField from '../../components/TextField';
import ButtonComponent from '../../components/ButtonComponent';
import {styles} from './styles';
import {
  validateEmail,
  validatePassword,
  validatePhNumber,
} from '../../utils/validation';

const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState({
    nameError: '',
    emailError: '',
    mobileError: '',
    passwordError: '',
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const registerBtnHandler = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) => {
        user.updateProfile({
          displayName: fullName,
        });
        dispatch(userId(user.uid));
        console.log('User account created & signed in!');

        firestore()
          .collection('Users')
          .doc(user.uid)
          .set({
            name: fullName,
            email: email,
          })
          .then(() => {
            console.log('User added!', userId);
          });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });

    let userInfo = {
      fullName: fullName,
      email: email,
      mobileNumber: mobileNumber,
    };
    const reduxRes = dispatch(userInfoDetails(userInfo));
  };

  const nameValidator = () => {
    fullName == ''
      ? setValidation({nameError: 'please enter your name'})
      : setValidation({nameError: ''});
  };

  const emailValidator = () => {
    email == '' || !validateEmail(email)
      ? setValidation({emailError: 'please enter a valid email'})
      : setValidation({emailError: ''});
  };
  const mobileValidator = () => {
    mobileNumber == '' || !validatePhNumber(mobileNumber)
      ? setValidation({mobileError: 'please enter a valid mobile number'})
      : setValidation({mobileError: ''});
  };
  const passwordValidator = () => {
    password == '' || !validatePassword(password)
      ? setValidation({
          passwordError: 'please enter a valid password (eg: John@1234)',
        })
      : setValidation({passwordError: ''});
  };

  return (
    <SafeAreaView>
      <Text style={styles.headerText}>Register {'\n'}</Text>

      <TextField
        name="user"
        placeholder="Full Name"
        value={fullName}
        onBlur={() => nameValidator()}
        onChangeText={val => setFullName(val)}
        text={validation.nameError}
      />

      <TextField
        name="mail"
        placeholder="Email"
        value={email}
        onBlur={() => emailValidator()}
        onChangeText={val => setEmail(val)}
        text={validation.emailError}
      />

      <TextField
        name="phone"
        placeholder="Mobile number"
        value={mobileNumber}
        onBlur={() => mobileValidator()}
        onChangeText={val => setMobileNumber(val)}
        text={validation.mobileError}
      />

      <TextField
        name="key"
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        maxLength={9}
        onBlur={() => passwordValidator()}
        onChangeText={val => setPassword(val)}
        text={validation.passwordError}
      />

      <ButtonComponent
        style={{backgroundColor: color.primary}}
        onPress={() => registerBtnHandler()}
        disabled={
          fullName == '' ||
          !validateEmail(email) ||
          !validatePassword(password) ||
          !validatePhNumber(mobileNumber)
            ? true
            : false
        }>
        <Text>Register</Text>
      </ButtonComponent>

      <View style={styles.accountText}>
        <Text style={styles.textStyle}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.textStyle, styles.loginText]}>Login here.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default RegisterScreen;
