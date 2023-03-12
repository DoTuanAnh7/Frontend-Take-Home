import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import theme from '../../includes/styles/theme.style';

const BODY_TYPE_S = 'small';
const BODY_TYPE_NORMAL = 'normal';
const BODY_TYPE_L = 'large';

const ALIGN_LEFT = 'left';
const ALIGN_CENTER = 'center';
const ALIGN_RIGHT = 'right';

const fontStyles = {
    [BODY_TYPE_S]: {
        size: theme.FONT_SIZE_S,
        lineHeight: theme.FONT_SIZE_S * 1.5,
        letterSpacing: 0,
    },
    [BODY_TYPE_NORMAL]: {
        size: theme.FONT_SIZE_BASE,
        lineHeight: theme.FONT_SIZE_BASE * 1.5,
        letterSpacing: 0,
    },
    [BODY_TYPE_L]: {
        size: theme.FONT_SIZE_L,
        lineHeight: theme.FONT_SIZE_L * 1.2,
        letterSpacing: theme.FONT_SIZE_L * -0.005,
    }
};

const getBodyStyles = (type, align) => {
    const fontTypeStyles = type ? fontStyles[type] : fontStyles[BODY_TYPE_NORMAL];

    return StyleSheet.create({
        text: {
            fontFamily: theme.FONT_FAMILY_BASE,
            fontSize: fontTypeStyles.size,
            lineHeight: fontTypeStyles.lineHeight,
            letterSpacing: fontTypeStyles.letterSpacing,
            textAlign: align ? align : ALIGN_LEFT,
            color: theme.COLOR_NEUTRAL_BLACK,
        }
    });
}

const Body = ({ type, align, onPress, style, children }) => {
    const styles = getBodyStyles(type, align);

    return (
        <Text style={[styles.text, style]} onPress={onPress}>{children}</Text>
    );
};

Body.propTypes = {
    type: PropTypes.oneOf([
        BODY_TYPE_S,
        BODY_TYPE_NORMAL,
        BODY_TYPE_L,
    ]),
    align: PropTypes.oneOf([
        ALIGN_LEFT,
        ALIGN_CENTER,
        ALIGN_RIGHT,
    ]),
    onPress: PropTypes.func,
    style: Text.propTypes.style,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]).isRequired,
};

export default Body;