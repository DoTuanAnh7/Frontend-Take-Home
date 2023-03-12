import React from 'react';
import { View } from 'react-native';
import Button from '../forms/Button';
import PropTypes from 'prop-types';
import theme from '../../includes/styles/theme.style';


const BottomButton = ({ onPressCancel, onPressNext, disabled, childrenCancel, childrenNext }) => (
  <View style={{
    marginTop: theme.SPACING_S,
    marginBottom: 40,
    marginLeft: '8%',
    marginRight: '8%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }}>
    <Button
      style={{
        flex: 1,
        marginRight: theme.SPACING_14,
      }}
      type={disabled ? 'disabled' : 'secondary'}
      onPress={onPressCancel}
    >{childrenCancel}</Button>
    <Button
      style={{ flex: 1 }}
      type={disabled ? 'disabled' : 'primary'}
      onPress={onPressNext}
    >{childrenNext}</Button>
  </View>
);

BottomButton.propTypes = {
  onPressCancel: PropTypes.func.isRequired,
  onPressNext: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  childrenNext: PropTypes.string.isRequired,
  childrenCancel: PropTypes.string.isRequired,
};

export default BottomButton;
