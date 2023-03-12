import * as React from 'react';
import { View, StyleSheet, Image} from 'react-native';
const loadingImg = require('../../assets/images_assets/loadingIcon.gif');

function Loading() {
  return (
    <View style={styles.loading}>
      <Image style={{ width: 80, height: 80 }} source={loadingImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    elevation: 11,
  },
});

export default Loading;
