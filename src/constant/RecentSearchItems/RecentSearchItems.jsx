import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import { Chip } from 'react-native-paper';

const RecentSearchItems = ({textLeft, textCenter, textRight}) => {
  return (
    <View style={styles.row}>
      <Chip style={styles.chip}>{textLeft}</Chip>
      <Chip style={styles.chip}>{textCenter}</Chip>
      <Chip style={styles.chip}>{textRight}</Chip>
    </View>
  );
};

export default RecentSearchItems;
