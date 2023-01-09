import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';

import {userFullInfo} from '../../../redux/action/Action.js';
import InputField from '../../../components/InputField';
import styles from '../LoginScreen/styles.js';
import image from '../../../config/Image.js';
import SocialMediaImage from '../../../components/SocialMediaImage';
import color from '../../../constant/color';
import LoginButton from '../../../components/LoginButton';
import {EmailValid, PasswordValid} from '../../../../src/utils/rejexValidate';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector(state => state.userData.userRecord);

  const updateLogin = async () => {
    if (email === '' && password === '') {
      alert('Empty email and password');
    } else {
      try {
        //console.log('Calling--->')
        const userRes = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        //console.log(userRes)
        let userInfo = {
          email: email,
          password: password,
        };
        const res = dispatch(userFullInfo(userInfo));
      } catch (error) {
        //console.log(error.code)
      }
    }
  };

  const validEmail = () => {
    EmailValid().test(email) ? setEmailValid('') : setEmailValid('Wrong Email');
  };

  const validPassword = () => {
    PasswordValid().test(password)
      ? setPasswordValid('')
      : setPasswordValid('Enter a Valid Password');
  };

  const facebook = () => {
    alert('Sign into facebook successfully ');
  };

  const google = () => {
    alert('Sign into google successfully ');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={image.grocery} style={styles.groceryImage} />
        <Text style={styles.welcome}>Welcome Back!</Text>
        <InputField
          icon="mail"
          placeholder="Email"
          style={styles.placeholderInput}
          value={email}
          onBlur={validEmail}
          autoCapitalize="words"
          onChangeText={val => setEmail(val)}
        />
        <Text style={styles.error}>{emailValid}</Text>
        <InputField
          icon="key"
          placeholder="Password"
          value={password}
          style={styles.placeholderInput}
          secureTextEntry={true}
          onBlur={validPassword}
          onChangeText={val => setPassword(val)}
        />
        <Text style={styles.error}>{passwordValid}</Text>
        <Text style={styles.forgot}>Forgot Password?</Text>
        <View style={styles.login}>
          <LoginButton name="Login" onPress={updateLogin} />
        </View>
        <View style={styles.or}>
          <View style={styles.line} />
          <Text style={styles.text}>OR</Text>
          <View style={styles.line} />
        </View>
        <Text style={styles.continuewith}>Continue With</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={facebook}>
            <SocialMediaImage source={image.facebook} style={styles.facebook} />
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={google}>
              <SocialMediaImage
                source={image.googlebtn}
                style={styles.google}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomLine}>
          <Text style={styles.account}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.register}>Register here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
