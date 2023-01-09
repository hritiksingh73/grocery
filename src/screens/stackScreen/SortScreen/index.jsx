import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, Button} from 'react-native';
import styles from './styles.js';

const SortScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.sort}>Sort</Text>
        <Text style={styles.text}>Price - Low to High</Text>
        <Text style={styles.text}>Price - High to Low</Text>
        <Text style={styles.text}>Newest First</Text>
        <Text style={styles.text}>Discount</Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Cancel"
          onPress={() => navigation.navigate('Popular Products')}
        />
        <Button title="Apply" />
      </View>
    </SafeAreaView>
  );
};

export default SortScreen;
