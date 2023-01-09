import * as React from 'react';
import {View} from 'react-native';
import {Chip} from 'react-native-paper';
import styles from './styles';

const ChipComponent = () => {
 return(
    <>
        <View style={styles.mainBox}>
          <Chip
            onPress={() => Alert.alert('Information chip pressed')}
            style={styles.chipStyle}>
            Rocoto
          </Chip>
          <Chip style={styles.chipStyle}>Lomo</Chip>
          <Chip style={styles.chipStyle}>Saltado</Chip>
        </View>

        <View style={styles.mainBox}>
          <Chip style={styles.chipStyle}>Papas</Chip>
          <Chip style={styles.chipStyle}>Huancaina</Chip>
          <Chip style={styles.chipStyle}>Relleno</Chip>
        </View>
        <View style={styles.mainBox}>
          <Chip style={styles.chipStyle}>Contrary</Chip>
          <Chip style={styles.chipStyle}>There</Chip>
          <Chip style={styles.chipStyle}>Passage</Chip>
        </View>
        <View style={styles.mainBox}>
          <Chip style={styles.chipStyle}>Source</Chip>
          <Chip style={styles.chipStyle}>Cicero</Chip>
          <Chip style={styles.chipStyle}>Treatise</Chip>
        </View>
        </>
 )}
 export default ChipComponent;