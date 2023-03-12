import React, { cloneElement }                                     from 'react';
import PropTypes                                                   from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View, ViewPropTypes } from 'react-native';
import theme                                                       from '../../includes/styles/theme.style';

const BUTTON_TYPE_PRIMARY   = 'primary';
const BUTTON_TYPE_SECONDARY = 'secondary';
const BUTTON_TYPE_DARK      = 'dark';
const BUTTON_TYPE_DISABLED  = 'disabled';
const BUTTON_TYPE_LINE      = 'line'

const getButtonStyles = (type) => {
    let backgroundColor;
    let textColor;

    switch (type) {
        case BUTTON_TYPE_PRIMARY:
            backgroundColor = theme.COLOR_GOLDEN_YELLOW;
            textColor       = theme.COLOR_NEUTRAL_BLACK;
            break;
        case BUTTON_TYPE_SECONDARY:
            backgroundColor = theme.COLOR_NEUTRAL_600;
            textColor       = theme.COLOR_NEUTRAL_BLACK;
            break;
        case BUTTON_TYPE_DARK:
            backgroundColor = theme.COLOR_PRIMARY_TIMBER;
            textColor       = theme.COLOR_WHITE;
            break;
        case BUTTON_TYPE_LINE:
            backgroundColor = theme.COLOR_NEUTRAL_BLACK;
            textColor       = theme.COLOR_NEUTRAL_300;
    }
    return StyleSheet.create({
        button: {
            backgroundColor: type === BUTTON_TYPE_DISABLED ? theme.COLOR_NEUTRAL_600 : backgroundColor,
            borderColor: type === BUTTON_TYPE_SECONDARY ? theme.COLOR_SECONDARY_GREY : type === BUTTON_TYPE_LINE ? theme.COLOR_NEUTRAL_300 : 'transparent',
            borderWidth: type === BUTTON_TYPE_SECONDARY || type === BUTTON_TYPE_LINE ? 1 : 0,
            borderRadius: theme.BORDER_RADIUS_BUTTON,
            paddingTop: theme.SPACING_14,
            paddingBottom: theme.SPACING_14,
            paddingHorizontal: theme.SPACING_14
        },
        flexRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            fontSize: theme.FONT_SIZE_L,
            fontFamily: theme.FONT_FAMILY_MEDIUM,
            color: type === BUTTON_TYPE_DISABLED ? theme.COLOR_NEUTRAL_400 : textColor,
            alignSelf: 'center',
        },
        icon: {
            marginLeft: theme.SPACING_XS,
        },
    });
};

const Button = ({ type, onPress, children, icon, style }) => {
    const styles = getButtonStyles(type ? type : BUTTON_TYPE_PRIMARY);

    return (
        <TouchableOpacity onPress={ onPress } style={ [ styles.button, style ] }
                          disabled={ type === BUTTON_TYPE_DISABLED }>
            <View style={ styles.flexRow }>
                <View style={ { paddingRight: icon ? 10 : 0 } }>
                    { icon ? cloneElement(icon, { style: styles.icon }) : null }
                </View>
                <Text style={ styles.text }>{ children }</Text>
            </View>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf([
        BUTTON_TYPE_PRIMARY,
        BUTTON_TYPE_SECONDARY,
        BUTTON_TYPE_DARK,
        BUTTON_TYPE_DISABLED,
        BUTTON_TYPE_LINE,
    ]),
    onPress: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]).isRequired,
    icon: PropTypes.element,
    style: ViewPropTypes.style,
};

export default Button;
