import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const {width} = Dimensions.get('window');

export const ProductItem = ({item}: any) => {

};
const styles = StyleSheet.create({
  container: {
    width: width / 2.2,
    backgroundColor: 'white',
    marginVertical: 4,
    marginRight: 4,
    borderRadius: 20,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 180,
    alignSelf: 'center',
    borderRadius: 20,
    resizeMode: 'cover',
  },
  titleContainer: {
    padding: 8,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
