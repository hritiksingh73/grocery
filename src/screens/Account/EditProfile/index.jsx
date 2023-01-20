import React from 'react';
import {View, Text, TextInput, SafeAreaView, TouchableOpacity} from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import styles from './styles';

const EditProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alin}>
        <View style={styles.imgContainer}></View>
        <TouchableOpacity>
          <Text style={styles.uploadPhoto}>Upload Photo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.userNameBlock}>
        <View style={styles.nameBoxWidth}>
          <View style={styles.userNameBox}>
            <View style={styles.emailContainer}>
              <Text style={styles.title}>Email</Text>
              <TextInput style={styles.userEmail} value={'Praveen'} />
            </View>
          </View>
        </View>
        <View style={styles.nameBoxWidth}>
          <View style={styles.userNameBox}>
            <View style={styles.emailContainer}>
              <Text style={styles.title}>Email</Text>
              <TextInput style={styles.userEmail} value={'Shakya'} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.userDetailsBox}>
        <View style={styles.emailContainer}>
          <Text style={styles.title}>Email</Text>
          <TextInput
            style={styles.userEmail}
            value={'praveenShakya@gmail.com'}
          />
        </View>
      </View>

      <View style={styles.userDetailsBox}>
        <View style={styles.emailContainer}>
          <Text style={styles.title}>Phone Number</Text>
          <TextInput style={styles.userEmail} value={'+1 99876 34445'} />
        </View>
      </View>

      <View style={styles.btnContainer}>
        <PrimaryButton name={'Save'} />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
