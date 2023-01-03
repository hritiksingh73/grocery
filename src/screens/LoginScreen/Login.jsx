import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';

import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import styles from '../LoginScreen/styles';
import FormContainer from '../../component/FormComponent/Login_RegisterFormComponent/FormInput';
import auth from '@react-native-firebase/auth';
import ImagePath from '../../config/Image';
import SocialMedia from '../../component/ButtonComponent/SocialMediaButton';
import firestore from '@react-native-firebase/firestore';
import {emailValidator, passwordValidator} from '../../utils/Validation';

const LoginPage = () => {
  const [registeremail, setRegisterEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation] = useState({
    emailError: '',
    passwordError: '',
  });
  const userData = useSelector(state => state.userInfo.loginpage);

  const navigation = useNavigation();

  const validateEmail = () => {
    registeremail === '' || !emailValidator(registeremail)
      ? setValidation({
          ...validation,
          emailError: 'please enter a valid email (eg: A@123@Indianic.com)',
        })
      : setValidation({...validation, emailError: ''});
  };

  const validatePassword = () => {
    password === '' || !passwordValidator(password)
      ? setValidation({
          ...validation,
          passwordError: 'please enter a valid password ',
        })
      : setValidation({...validation, passwordError: ''});
  };

  const dispatchCredentials = async () => {
    try {
      firestore()
        .collection(userData.name)
        .doc(userData.uid)
        .set({
          CustomerCredentials: userData,
        })
        .then(() => {
          console.log('User added! by Aditya');
        });

      const userRes = await auth().signInWithEmailAndPassword(
        registeremail,
        password,
      );
    } catch (error) {
      console.log(error.code);
    }
  };

  const facebookButton = () => {
    alert('Facebook Login Successfull!!! ');
  };
  const googleButton = () => {
    alert('Google Login Successfull!!! ');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={ImagePath.grocerryMain} style={styles.groceryHeader} />
      <FormContainer
        Text="Email"
        Icon="mail"
        onChangeText={text => setRegisterEmail(text)}
        keyboardType="email-address"
        value={registeremail}
        placeholder="Email"
        autoCapitalize="words"
        onBlur={() => validateEmail()}
      />
      <Text style={styles.errormsg}>{validation.emailError}</Text>
      <FormContainer
        Text="Password"
        Icon="key"
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Password"
        autoCapitalize="words"
        onBlur={() => validatePassword()}
        secureTextEntry={true}
        maxLength={9}
      />
      <Text style={styles.errormsg}>{validation.passwordError}</Text>
      <TouchableOpacity style={styles.forgetPassword}>
        <Text style={styles.forgetPassword}>Forget Password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={
          !emailValidator(registeremail) || !passwordValidator(password)
            ? true
            : false
        }
        onPress={() => {
          dispatchCredentials();
        }}
        style={styles.loginButtonContainer}>
        <Text style={styles.loginButton}>Login</Text>
      </TouchableOpacity>
      <View style={styles.or}>
        <View style={styles.line} />
        <Text style={styles.text}>OR</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.continuewith}>Continue With</Text>
      <View style={styles.bottomSocialMedia}>
        <TouchableOpacity
          style={styles.bottomFacebook}
          onPress={facebookButton}>
          <SocialMedia style={styles.facebook} source={ImagePath.facebook} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomGoogle} onPress={googleButton}>
          <SocialMedia style={styles.googleImage} source={ImagePath.google} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomHeadline}>
        <Text>Dont have an account?</Text>
        <TouchableOpacity>
          <Text
            style={{color: 'green'}}
            onPress={() => navigation.navigate('RegisterScreen')}>
            Register here
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
