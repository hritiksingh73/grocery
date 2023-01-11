import React from 'react';
import {Modal, View, Button, Text} from 'react-native';
import {styles} from './styles';

const ModalComponent = props => {
  const {visible, cancelBtn, yesBtn} = props;

  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.message}>
            Are you sure, You want to remove this item?
          </Text>
          <View style={styles.btnstyle}>
            <Button title="yes" onPress={yesBtn} color="green" />
            <Button title="cancel" onPress={cancelBtn} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ModalComponent;
