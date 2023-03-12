import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import theme from '../../includes/styles/theme.style';

const ALIGN_LEFT = 'left';
const ALIGN_CENTER = 'center';
const ALIGN_RIGHT = 'right';

const getSubHeadlineStyles = (align) => {
    return StyleSheet.create({
        text: {
            fontFamily: theme.FONT_FAMILY_MEDIUM,
            fontSize: theme.FONT_SIZE_S,
            lineHeight: theme.FONT_SIZE_S * 1.2,
            letterSpacing: theme.FONT_SIZE_S * -0.01,
            color: theme.COLOR_NEUTRAL_BLACK,
            textAlign: align ? align : ALIGN_LEFT,
        },
    });
}

const SubHeadline = ({ align, style, children }) => {
    const styles = getSubHeadlineStyles(align);

    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}

SubHeadline.propTypes = {
    align: PropTypes.oneOf([
        ALIGN_LEFT,
        ALIGN_CENTER,
        ALIGN_RIGHT,
    ]),
    style: Text.propTypes.style,
    children: PropTypes.string.isRequired,
};

export default SubHeadline;