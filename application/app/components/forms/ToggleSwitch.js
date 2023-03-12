import React from 'react';
import { ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import ToggleSwitch from 'toggle-switch-react-native';
import theme from '../../includes/styles/theme.style';


const SWITCH_SIZE_MEDIUM = 'medium';

const Switch = ({ isONToggle, onColor, offColor, labelStyle, size, onToggle }) => {
  return (
    <ToggleSwitch
      isOn={isONToggle}
      onColor={onColor ? onColor : theme.COLOR_PRIMARY_GREEN}
      offColor={offColor ? offColor : theme.COLOR_NEUTRAL_400}
      labelStyle={labelStyle ? labelStyle : {}}
      size={size ? size : SWITCH_SIZE_MEDIUM}
      onToggle={onToggle}
    />
  )
}

Switch.propTypes = {
  isONToggle: PropTypes.bool.isRequired,
  onColor: PropTypes.string,
  offColor: PropTypes.string,
  labelStyle: ViewPropTypes.style,
  size: PropTypes.string,
  onToggle: PropTypes.func.isRequired,
};

export default Switch;