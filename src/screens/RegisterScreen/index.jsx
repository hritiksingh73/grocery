import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {addUser} from '../../redux/action/Action';
import FormContainer from '../../component/FormComponent/Login_RegisterFormComponent/FormInput';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
  emailValidator,
  phoneNumberValidator,
  passwordValidator,
} from '../../utils/Validation';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [registeremail, setRegisterEmail] = useState('');
  const [cellNumber, setCellNumber] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [validation, setValidation] = useState({
    errorname: '',
    errorregisteremail: '',
    errorcellNumber: '',
    errorpassword: '',
  });
  const registerUserDetails = async () => {
    try {
      const userRes = await auth().createUserWithEmailAndPassword(
        registeremail,
        password,
      );
      await userRes.user.updateProfile({
        displayName: name,
      });
      firestore()
        .collection('Users')
        .doc(userRes.user.uid)
        .set({
          name: name,
          id: userRes.user.uid,
          email: registeremail,
        })
        .then(() => {
          console.log('User Details has been saved to firestore !!!');
        });
      dispatch(addUser(registeremail, userRes.user.uid, name));
    } catch (error) {
      console.error(error.code);
    }
  };

  const nameValidator = () => {
    name === ''
      ? setValidation({
          ...validation,
          errorname: 'Name Should not contain Special Character ',
        })
      : setValidation({errorname: ''});
  };

  const validatorEmail = () => {
    registeremail === '' || !emailValidator(registeremail)
      ? setValidation({
          ...validation,
          errorregisteremail: 'please enter a valid email',
        })
      : setValidation({errorregisteremail: ''});
  };
  const validatorMobile = () => {
    cellNumber === '' || !phoneNumberValidator(cellNumber)
      ? setValidation({
          ...validation,
          errorcellNumber: 'please enter a valid mobile number',
        })
      : setValidation({errorcellNumber: ''});
  };
  const validatorPassword = () => {
    password == '' || !passwordValidator(password)
      ? setValidation({
          ...validation,
          errorpassword: 'please enter a valid password (eg: John@1234)',
        })
      : setValidation({errorpassword: ''});
  };

  return (
    <KeyboardAvoidingView>
      <SafeAreaView style={styles.contaienr}>
        <FormContainer
          Icon="user"
          placeholder="Full Name"
          autoCapitalize="words"
          onChangeText={text => setName(text)}
          onBlur={() => nameValidator()}
          value={name}
        />
        <Text style={styles.errormsg}>{validation.errorname}</Text>
        <FormContainer
          Icon="mail"
          keyboardType="email-address"
          placeholder="Email"
          autoCapitalize="words"
          onChangeText={text => setRegisterEmail(text)}
          onBlur={() => validatorEmail()}
          value={registeremail}
        />
        <Text style={styles.errormsg}>{validation.errorregisteremail}</Text>
        <FormContainer
          Icon="mobile1"
          keyboardType="phone-pad"
          placeholder="Mobile Number"
          autoCapitalize="words"
          onChangeText={text => setCellNumber(text)}
          onBlur={() => validatorMobile()}
          value={cellNumber}
        />
        <Text style={styles.errormsg}>{validation.errorcellNumber}</Text>
        <FormContainer
          Icon="key"
          placeholder="Password"
          autoCapitalize="words"
          onChangeText={text => setPassword(text)}
          onBlur={() => validatorPassword()}
          value={password}
        />
        <Text style={styles.errormsg}>{validation.errorpassword}</Text>
        <TouchableOpacity
          style={styles.registerButtonContainer}
          onPress={() => registerUserDetails()}>
          <Text style={styles.registerButton}>Register</Text>
        </TouchableOpacity>
        <View style={styles.bottomHeadline}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.loginButton}>Login Here</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default RegisterScreen;
