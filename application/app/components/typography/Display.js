import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import theme from '../../includes/styles/theme.style';

const DISPLAY_TYPE_H1 = 'H1';
const DISPLAY_TYPE_H2 = 'H2';

const ALIGN_LEFT = 'left';
const ALIGN_CENTER = 'center';
const ALIGN_RIGHT = 'right';

const getDisplayStyles = (type, align) => {
    const fontSize = type === DISPLAY_TYPE_H1 ? theme.FONT_SIZE_DISPLAY_H1 : theme.FONT_SIZE_DISPLAY_H2;
    
    return StyleSheet.create({
        text: {
            fontFamily: theme.FONT_FAMILY_SEMIBOLD,
            fontSize: fontSize,
            lineHeight: fontSize * 1.15,
            letterSpacing: fontSize * -0.03,
            textAlign: align ? align : ALIGN_LEFT,
            color: theme.COLOR_NEUTRAL_BLACK,
        }
    });
};

const Display = ({ type, align, children, style }) => {
    const styles = getDisplayStyles(type, align);

    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
};

Display.propTypes = {
    type: PropTypes.oneOf([
        DISPLAY_TYPE_H1,
        DISPLAY_TYPE_H2,
    ]).isRequired,
    align: PropTypes.oneOf([
        ALIGN_LEFT,
        ALIGN_CENTER,
        ALIGN_RIGHT,
    ]),
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]).isRequired,
    style: Text.propTypes.style,
};

export default Display;