import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';

import TextField from '../../components/TextField';
import ButtonComponent from '../../components/ButtonComponent';
import {color} from '../../constant/color';
import {userInfoDetails} from '../../redux/actions/userAction';
import LoginBtn from '../../components/LoginBtn';
import {styles} from './styles';
import {validateEmail, validatePassword} from '../../utils/validation';
import image from '../../config/image';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState({
    emailError: '',
    passwordError: '',
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const loginBtnHandler = async () => {
    try {
      const userRes = await auth().signInWithEmailAndPassword(email, password);

      let userInfo = {
        uid: userRes.user.uid,
        email: email,
      };
      const reduxRes = dispatch(userInfoDetails(userInfo));
    } catch (error) {
      console.error(error.code);
    }
  };

  const emailValidator = () => {
    email == '' || !validateEmail(email)
      ? setValidation({emailError: 'please enter a valid email'})
      : setValidation({emailError: ''});
  };
  const passwordValidator = () => {
    password == '' || !validatePassword(password)
      ? setValidation({
          passwordError: 'please enter a valid password (eg: John@1234)',
        })
      : setValidation({passwordError: ''});
  };

  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
        <View style={styles.headerImage}>
          <Image source={image.grocery} />
          <Text style={[styles.textStyle]}>Welcome back!</Text>
        </View>

        <TextField 
          name="mail"
          placeholder="Email"
          value={email}
          onBlur={() => emailValidator()}
          onChangeText={val => setEmail(val)}
          text={validation.emailError}
        />

        <TextField
          name="key"
          placeholder="Password"
          value={password}
          onBlur={() => passwordValidator()}
          onChangeText={val => setPassword(val)}
          secureTextEntry={true}
          maxLength={9}
          text={validation.passwordError}
        />

        <Text style={styles.forgotStyle}>Forgot Password?</Text>

        <ButtonComponent
          style={{backgroundColor: color.primary}}
          onPress={() => loginBtnHandler()}
          disabled={
            !validateEmail(email) || !validatePassword(password) ? true : false
          }>
          <Text>Login</Text>
        </ButtonComponent>

        <View style={styles.orImage}>
          <Image source={image.orImage} />
          <Text style={styles.textStyle}>Continue with</Text>
        </View>

        <LoginBtn />

        <View style={styles.accountText}>
          <Text style={styles.textStyle}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={[styles.textStyle, {color: color.primary}]}>
              Register here.
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default LoginScreen;
