import * as React from 'react';
import {View} from 'react-native';
import {Chip} from 'react-native-paper';
import {styles} from './styles';

const ChipComponent = () => (
  <>
    <View style={styles.container}>
      <Chip style={styles.chip}>Rocoto</Chip>
      <Chip style={styles.chip}>Lomo</Chip>
      <Chip style={styles.chip}>Saltado</Chip>
    </View>

    <View style={styles.container}>
      <Chip style={styles.chip}>Papas</Chip>
      <Chip style={styles.chip}>Huancaina</Chip>
      <Chip style={styles.chip}>Relleno</Chip>
    </View>

    <View style={styles.container}>
      <Chip style={styles.chip}>Contrary</Chip>
      <Chip style={styles.chip}>There</Chip>
      <Chip style={styles.chip}>Passage</Chip>
    </View>

    <View style={styles.container}>
      <Chip style={styles.chip}>Source</Chip>
      <Chip style={styles.chip}>Cicero</Chip>
      <Chip style={styles.chip}>Treatise</Chip>
    </View>
  </>
);
export default ChipComponent;
