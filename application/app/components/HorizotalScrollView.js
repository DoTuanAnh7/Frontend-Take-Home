import React from 'react';
import {Dimensions, View} from 'react-native';
import PropTypes from 'prop-types';
import Carousel from 'react-native-reanimated-carousel';
import SuperChargeWallet from '../../app/components/SuperChargeWallet';

const HorizontalScrollView = ({data}) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Carousel
        loop
        width={width}
        height={height / 6}
        data={data}
        scrollAnimationDuration={100}
        mode="parallax"
        renderItem={SuperChargeWallet}
      />
    </View>
  );
};

HorizontalScrollView.propTypes = {
  depositAccount: PropTypes.array,
};

export default HorizontalScrollView;
