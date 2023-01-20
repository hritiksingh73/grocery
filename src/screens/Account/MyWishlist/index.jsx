import React from 'react';
import {SafeAreaView} from 'react-native';
import ItemList from '../../../components/ItemList';
import {useSelector} from 'react-redux';
import styles from './styles';

const MyWishlist = () => {
  const userWishlist = useSelector(state => state.user.userWishlist);
  return (
    <SafeAreaView style={styles.container}>
      <ItemList data={userWishlist} />
    </SafeAreaView>
  );
};

export default MyWishlist;
