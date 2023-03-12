import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import Button from '../forms/Button';
import PropTypes from 'prop-types';
import theme from '../../includes/styles/theme.style';

const BottomButton = ({ onPress, disabled, children, style }) => (
    <View style={[
        {
            marginTop: theme.SPACING_S,
            marginBottom: 40,
            marginLeft: '8%',
            marginRight: '8%',
        },
        style,
    ]}>
        <Button
            type={disabled ? 'disabled' : 'primary'}
            onPress={onPress}
        >{children}</Button>
    </View>
);

BottomButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    children: PropTypes.string.isRequired,
    style: ViewPropTypes.style,
};

export default BottomButton;
