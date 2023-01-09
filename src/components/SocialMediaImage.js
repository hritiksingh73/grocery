import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const SocialMediaImage = props => {
  return (
    <Image source = {props.source} style = {props.style}
    />
  );
};
export default SocialMediaImage;
