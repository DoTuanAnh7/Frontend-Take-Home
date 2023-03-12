import React from 'react';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import theme from '../includes/styles/theme.style';

const styles = StyleSheet.create({
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: theme.COLOR_NEUTRAL_500,
    },
});

const Divider = ({ style }) => <View style={[styles.divider, style]} />;

Divider.propTypes = {
    style: ViewPropTypes.style,
};

export default Divider;