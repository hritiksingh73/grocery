import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

//import {registerUser} from '../../redux/action/Action.js';
import {userFullInfo, userCreate} from '../../../redux/action/Action';
import InputField from '../../../components/InputField';
import styles from './styles';
import {
  EmailValid,
  PasswordValid,
  NameValid,
  PhoneValid,
} from '../../../../src/utils/rejexValidate';
import LoginButton from '../../../components/LoginButton';

const RegisterScreen = ({navigation}) => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [fullnameValid, setFullNameValid] = useState(true);
  const [mobilenoValid, setMobileNoValid] = useState(true);
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartData.cartProducts);

  const userID = useSelector(state => state.userData.userID);
  const updateRegister = async () => {
    if (email === '' && password === '') {
      alert('Empty email and password');
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(({user}) => {
          user.updateProfile({
            displayName: fullname,
          });
          dispatch(userCreate(user.uid));
          // console.log('User account created & signed in!');

          firestore()
            .collection('Users')
            .doc(user.uid)
            .set({
              name: fullname,
              email: email,
              mobile: mobileno,
            })
            .then(() => {
              // console.log('User added!', userID);
            });
        })

        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
          }

          if (error.code === 'auth/invalid-email') {
          }
          // console.error(error);
        });
      let userInfo = {
        fullname: fullname,
        email: email,
        mobileno: mobileno,
      };

      dispatch(userFullInfo(userInfo));
      // console.log(userInfo);
    }
  };

  const checkValidFullName = () => {
    NameValid().test(fullname)
      ? setFullNameValid('')
      : setFullNameValid('Enter a valid name');
  };

  const checkValidEmail = () => {
    EmailValid().test(email) ? setEmailValid('') : setEmailValid('Wrong Email');
  };

  const checkValidPassword = () => {
    PasswordValid().test(password)
      ? setPasswordValid('')
      : setPasswordValid('Enter a Valid Password');
  };

  const checkValidMobileNo = () => {
    PhoneValid().test(mobileno)
      ? setMobileNoValid('')
      : setMobileNoValid('Enter a Valid mobile no');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Icon name="leftcircleo" size={20} />
      <Text style={styles.register}>Register</Text>
      <InputField
        icon="user"
        placeholder="Full Name"
        value={fullname}
        style={styles.placeholderInput}
        autoCapitalize="words"
        onBlur={checkValidFullName}
        onChangeText={text => setFullName(text)}
      />
      <Text style={styles.text}>{fullnameValid}</Text>
      <InputField
        icon="mail"
        placeholder="Email"
        value={email}
        style={styles.placeholderInput}
        onBlur={checkValidEmail}
        autoCapitalize="words"
        onChangeText={text => setEmail(text)}
      />
      <Text style={styles.text}>{emailValid}</Text>
      <InputField
        icon="phone"
        placeholder="Mobile No"
        value={mobileno}
        style={styles.placeholderInput}
        onBlur={checkValidMobileNo}
        onChangeText={text => setMobileNo(text)}
      />
      <Text style={styles.text}>{mobilenoValid}</Text>
      <InputField
        icon="key"
        placeholder="Password"
        value={password}
        style={styles.placeholderInput}
        autoCapitalize="words"
        onBlur={checkValidPassword}
        onChangeText={text => setPassword(text)}
      />
      <Text style={styles.text}>{passwordValid}</Text>
      <View style={styles.button}>
        <LoginButton name="Register" onPress={() => updateRegister()} />
      </View>
      <View style={styles.bottomLine}>
        <Text style={styles.account}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.login}>Login here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
