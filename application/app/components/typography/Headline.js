import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import theme from '../../includes/styles/theme.style';

const HEADLINE_TYPE_H1 = 'H1';
const HEADLINE_TYPE_H2 = 'H2';
const HEADLINE_TYPE_H3 = 'H3';


const ALIGN_LEFT = 'left';
const ALIGN_CENTER = 'center';
const ALIGN_RIGHT = 'right';

const fontStyles = {
    [HEADLINE_TYPE_H1]: {
        fontSize: theme.FONT_SIZE_HEADLINE_H1,
        lineHeight: theme.FONT_SIZE_HEADLINE_H1 * 1.2,
        letterSpacing: 0,
    },
    [HEADLINE_TYPE_H2]: {
        fontSize: theme.FONT_SIZE_HEADLINE_H2,
        lineHeight: theme.FONT_SIZE_HEADLINE_H2 * 1.5,
        letterSpacing: theme.FONT_SIZE_HEADLINE_H2 * -0.005,
    },
    [HEADLINE_TYPE_H3]: {
        fontSize: theme.FONT_SIZE_HEADLINE_H3,
        lineHeight: theme.FONT_SIZE_HEADLINE_H3 * 1.5,
        letterSpacing: 0,
    },
};

const getHeadlineStyles = (type, align) => {
    const headlineStyles = fontStyles[type];
    
    return StyleSheet.create({
        text: {
            fontFamily: theme.FONT_FAMILY_MEDIUM,
            fontSize: headlineStyles.fontSize,
            lineHeight: headlineStyles.lineHeight,
            letterSpacing: headlineStyles.letterSpacing,
            textAlign: align ? align : ALIGN_LEFT,
            color: theme.COLOR_NEUTRAL_BLACK,
        }
    });
};

const Headline = ({ type, align, style, children }) => {
    const styles = getHeadlineStyles(type, align);

    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
};

Headline.propTypes = {
    type: PropTypes.oneOf([
        HEADLINE_TYPE_H1,
        HEADLINE_TYPE_H2,
        HEADLINE_TYPE_H3,
    ]).isRequired,
    align: PropTypes.oneOf([
        ALIGN_LEFT,
        ALIGN_CENTER,
        ALIGN_RIGHT,
    ]),
    style: Text.propTypes.style,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
    ]),
};

export default Headline;