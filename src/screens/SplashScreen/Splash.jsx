import {Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../../config/Image';
import styles from './styles';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={imagePath.splash} style={styles.image} />
    </View>
  );
};

export default Splash;
