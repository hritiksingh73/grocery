import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import styles from './styles';

const Sort = () => {
  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.txtContainerHeight}>
        <Text style={styles.heading}>Sort</Text>
        <Text style={styles.txt}>Price - Low to High</Text>
        <Text style={styles.txt}>Price - High to Low</Text>
        <Text style={styles.txt}>Newest First</Text>
        <Text style={styles.txt}>Discount</Text>
      </View>
      <View style={styles.btn}>
        <PrimaryButton name={'Cancel'} />
        <Text>{'    '}</Text>
        <PrimaryButton name={'Apply'} />
      </View>
    </SafeAreaView>
  );
};

export default Sort;
