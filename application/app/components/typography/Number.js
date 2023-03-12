import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import theme from '../../includes/styles/theme.style';

const styles = StyleSheet.create({
    circle: {
        borderColor: theme.COLOR_PRIMARY_GREEN,
        borderWidth: 1,
        borderRadius: theme.ICON_SIZE / 2,
        width: theme.ICON_SIZE,
        height: theme.ICON_SIZE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: theme.FONT_FAMILY_BASE,
        fontSize: theme.FONT_SIZE_NUMBER,
        lineHeight: theme.FONT_SIZE_NUMBER * 1.5,
        color: theme.COLOR_PRIMARY_GREEN,
    },
});

const Number = ({ children, style }) => (
    <View style={[styles.circle, style]}>
        <Text style={styles.text}>{children}</Text>
    </View>
);

Number.propTypes = {
    children: PropTypes.string.isRequired,
    style: ViewPropTypes.style,
};

export default Number;