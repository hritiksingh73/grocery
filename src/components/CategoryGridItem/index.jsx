import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

const CategoryGridItem = props => {
  const {imgSource, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.imgStyle} source={imgSource} />
    </TouchableOpacity>
  );
};
export default CategoryGridItem;
