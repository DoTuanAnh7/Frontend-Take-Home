import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Body from './Body';
import PropTypes from 'prop-types';
import theme from '../../includes/styles/theme.style';

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
    },
    listKey: {
        width: theme.FONT_SIZE_S,
    },
    listKeyBold: {
        fontSize: theme.FONT_SIZE_20,
        fontWeight: 'bold',
        marginRight: 2
    },
    text: {
        flex: 1,
        flexWrap: 'wrap',
        paddingLeft: theme.SPACING_XXS,
        color: theme.COLOR_NEUTRAL_BLACK
    },
})

const ListItem = ({ itemKey, style, children, bold }) => (
    <View style={[styles.listItem, style]}>
        {bold ?
            <Body style={styles.listKeyBold}>{itemKey}</Body>
            :
            <Body style={styles.listKey}>{itemKey}</Body>
        }
        <Body style={styles.text}>{children}</Body>
    </View>
);

ListItem.propTypes = {
    itemKey: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    style: Text.propTypes.style,
    bold: PropTypes.bool
};

export default ListItem;