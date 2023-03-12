import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import theme from '../includes/styles/theme.style';
import DropShadow from 'react-native-drop-shadow';

const CARD_TYPE_LIGHT = 'light';
const CARD_TYPE_EMERALD = 'emerald';
const CARD_TYPE_DARK = 'dark';

const getBackgroundColorForType = (type) => {
    switch (type) {
        case CARD_TYPE_LIGHT:
            return theme.COLOR_WHITE;
        case CARD_TYPE_EMERALD:
            return theme.COLOR_PRIMARY_EMERALD;
        case CARD_TYPE_DARK:
            return theme.COLOR_PRIMARY_TIMBER;
        default:
            return theme.COLOR_WHITE;
    }
}

const getCardStyles = (type) => {
    return StyleSheet.create({
        shadow: {
            shadowColor: theme.COLOR_NEUTRAL_400,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 1,
            shadowRadius: 1,
        },
        card: {
            borderRadius: theme.BORDER_RADIUS_CARD_M,
            backgroundColor: getBackgroundColorForType(type),
            paddingLeft: theme.CARD_PADDING_HORIZONTAL,
            paddingRight: theme.CARD_PADDING_HORIZONTAL,
            paddingTop: theme.CARD_PADDING_VERTICAL,
            paddingBottom: theme.CARD_PADDING_VERTICAL,
        },
    });
}

const Card = ({ type, style, children }) => {
    const styles = type ? getCardStyles(type) : getCardStyles(CARD_TYPE_LIGHT);

    return (
        <DropShadow style={styles.shadow}>
            <View style={[styles.card, style]}>{children}</View>
        </DropShadow>
    );
};

Card.propTypes = {
    type: PropTypes.oneOf([
        CARD_TYPE_LIGHT,
        CARD_TYPE_EMERALD,
        CARD_TYPE_DARK,
    ]),
    style: ViewPropTypes.style,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
    ]).isRequired,
}

export default Card;