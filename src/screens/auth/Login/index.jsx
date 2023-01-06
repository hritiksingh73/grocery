import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import LoginTextField from '../../../components/TextInputField';
import LoginBtn from '../../../components/loginBtn';
import auth from '@react-native-firebase/auth';
import {ValidateEmail, ValidatePassword} from '../../../utils';
import images from '../../../config/images';

const Login = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState('');
  const [isValidPassword, setIsValidPassword] = useState('');

  const isValidate = async () => {
    if (userEmail === '' || userPassword === '') {
      alert('please enter above details');
    } else {
      if (isValidEmail != '' || isValidPassword != '') {
        alert('please enter currect info.');
      } else {
        try {
          const Response = await auth().signInWithEmailAndPassword(
            userEmail,
            userPassword,
          );
          console.log('\n\n===========userDetails==========');
          console.log('userName :', Response.user.displayName);
          console.log('userEmail :', Response.user.email);
          console.log('userNumber :', Response.user.phoneNumber);
          console.log('userPassword :', Response.user.uid);
        } catch (error) {
          if (error.code === 'auth/user-not-found') {
            alert('user not found!');
          }
          if (error.code === 'auth/wrong-password') {
            alert('you entered wrong password!');
          }
        }
      }
    }
  };

  const IsEmailValid = () => {
    ValidateEmail().test(userEmail)
      ? setIsValidEmail('')
      : setIsValidEmail('Enter valid Email');
  };

  const IsPasswordValid = () => {
    ValidatePassword().test(userPassword)
      ? setIsValidPassword('')
      : setIsValidPassword('Enter valid Password');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.screenMargin}
        showsVerticalScrollIndicator={false}>
        <View style={styles.cntrItm}>
          <Image style={styles.headerImg} source={images.grocery} />
        </View>
        <Text style={styles.headerfnt}>Welcome back!</Text>

        <LoginTextField
          icon="mail"
          placeholder="Email"
          warrning={isValidEmail}
          onChangeText={val => {
            setUserEmail(val);
            IsEmailValid();
          }}
        />
        <LoginTextField
          icon="key"
          rightIcon="eye"
          placeholder="Password"
          maxLength={16}
          secureTextEntry={true}
          warrning={isValidPassword}
          onChangeText={val => {
            setUserPassword(val);
            IsPasswordValid();
          }}
        />

        <TouchableOpacity style={styles.forgotTxtOpacity}>
          <Text style={styles.forgotTxt}>Forgot Password?</Text>
        </TouchableOpacity>

        <LoginBtn name={'Login'} onPress={isValidate} />

        <View style={styles.flxDirectn}>
          <Text style={styles.orTxtRow}> __________________ </Text>
          <Text style={styles.orTxt}>OR</Text>
          <Text style={styles.orTxtRow}> __________________ </Text>
        </View>

        <Text style={styles.headerfnt}>Continue with</Text>

        <View style={styles.imgContainer}>
          <Image style={styles.fbBtn} source={images.facebook} />
          <Image style={styles.googleBtn} source={images.google} />
        </View>

        <Text style={styles.footerTxt}>
          <Text>Dont't have an account?</Text>
          <Text
            style={styles.rgstrTxt}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            {' '}
            Register here.
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
