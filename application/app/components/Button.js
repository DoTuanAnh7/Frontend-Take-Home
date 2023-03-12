import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';
import theme from '../includes/styles/theme.style';
import * as commonStyle from '../includes/main-style';

const Button = ({
  style,
  height,
  width,
  title,
  borderRadius,
  onPress,
  isDashboard,
  isFocus,
  yellowButton
}) => {

  const styles = StyleSheet.create({
    isDashboard: {
      height: commonStyle.getResponsiveScreenHeight(height),
      width: commonStyle.getResponsiveScreenWidth(width),
      borderRadius: borderRadius,
      justifyContent: 'center',
      backgroundColor: isFocus === title ? theme.COLOR_BINANCE_BLUE_FOCUS : theme.COLOR_BINANCE_BLUE,
      borderColor: 'red',
      marginRight: commonStyle.getResponsiveScreenWidth(2),
    },

    yellowButton: {
      height: commonStyle.getResponsiveScreenHeight(height),
      width: commonStyle.getResponsiveScreenWidth(width),
      borderRadius: borderRadius,
      justifyContent: 'center',
      backgroundColor: isFocus === title ? theme.COLOR_GOLDEN_YELLOW : theme.COLOR_BINANCE_BLUE,
      borderColor: 'red',
      marginRight: commonStyle.getResponsiveScreenWidth(2),
    },
    normal: {
      height: commonStyle.getResponsiveScreenHeight(height),
      width: commonStyle.getResponsiveScreenWidth(width),
      borderRadius: borderRadius,
      justifyContent: 'center',
      backgroundColor: theme.COLOR_GOLDEN_YELLOW,
      borderColor: 'red',
      marginRight: commonStyle.getResponsiveScreenWidth(2),
    }

  });

  return (
    <View style={[style]}>
      <TouchableOpacity
        style={isDashboard ?
          styles.isDashboard
          : yellowButton ?
            styles.yellowButton
            :
            styles.normal
        }
        onPress={onPress}>
        <View>
          <Text
            style={{
              color: isDashboard || yellowButton ? theme.COLOR_WHITE : theme.COLOR_NEUTRAL_BLACK,
              alignSelf: 'center',
              justifyContent: 'center',
              fontSize: theme.FONT_SIZE_BASE,
            }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  style: ViewPropTypes.style,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  onPress: PropTypes.func,
  isFocus: PropTypes.object,
  yellowButton: PropTypes.bool,
  title: PropTypes.string,
  borderRadius: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  isDashboard: PropTypes.bool,

};

export default Button;
