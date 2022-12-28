import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Textinput from '../../../components/Textinput';
import {useDispatch} from 'react-redux';
import {updateReg} from '../../../redux/action/action';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {styles} from './styles';

import regex from '../../../utils/regex';

const RegistrationScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobNo, setMobno] = useState('');
  const [password, setPassword] = useState('');
  const [isValidemail, setisValidemail] = useState(true);
  const [isPassValid, setisPassValid] = useState(true);

  const RegisterDetails = () => {
    const object = {fullName, email, mobNo, password};
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) => {
        user.updateProfile({
          displayName: fullName,
        });
        firestore()
          .collection('Users')
          .doc(user.uid)
          .set({
            name: fullName,
            email: email,
            userUid: user.uid,
          })
          .then(() => {
            console.log('User added!');
          });
        //console.log(email);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email  in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log(' email invalid!');
        }
        console.error(error);
      });
    dispatch(updateReg(object));
    navigation.navigate('Home');

    //console.log(object);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>Register</Text>
        <IconAntDesign style={styles.icon} name="left" size={25} />
      </View>

      <Textinput
        onChangeText={Name => setfullName(Name)}
        defaultValue={fullName}
      />

      <Text style={styles.field}>FullName</Text>
      <IconAntDesign style={styles.icontwo} name="user" size={25} />
      <Textinput
        onChangeText={Email => setEmail(Email)}
        defaultValue={email}
        onBlur={() => {
          setisValidemail(
            regex.reg.test(email) === true ? '' : 'Incorrect email',
          );
        }}
      />
      <Text style={styles.errorMsg}>{isValidemail}</Text>
      <Text style={styles.field}>Email</Text>
      <IconAntDesign style={styles.icontwo} name="mail" size={25} />
      <Textinput onChangeText={Mob => setMobno(Mob)} defaultValue={mobNo} />

      <Text style={styles.field}>Mobile No</Text>
      <IconAntDesign style={styles.icontwo} name="mobile1" size={25} />
      <Textinput
        onChangeText={pass => setPassword(pass)}
        defaultValue={password}
        secureTextEntry
        onBlur={() => {
          setisPassValid(
            regex.passRegex.test(password) === true ? '' : 'NeedStrongPass',
          );
        }}
      />

      <Text style={styles.field}>Password</Text>
      <IconAntDesign style={styles.icontwo} name="key" size={25} />
      <View>
        <Text style={styles.errorMsgofPass}>{isPassValid}</Text>
        <TouchableOpacity style={styles.btn} onPress={() => RegisterDetails()}>
          <Text style={styles.btnOne}>Register</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.log}>Already have an account?</Text>
      <TouchableOpacity
        style={styles.logtwo}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Login here</Text>
      </TouchableOpacity>
    </View>
  );
};
export default RegistrationScreen;
