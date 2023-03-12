import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import Body from './Body';

const LINK_TYPE_S = 'small';
const LINK_TYPE_NORMAL = 'normal';
const LINK_TYPE_L = 'large';

const styles = StyleSheet.create({
    text: {
        textDecorationLine: 'underline',
    },
})

const Link = ({ type, url, onPress, style, children }) => (
    <Body
        type={type ? type : LINK_TYPE_NORMAL}
        onPress={onPress ? onPress : () => InAppBrowser.open(url)}
        style={[styles.text, style]}
    >
        {children}
    </Body>
);

Link.propTypes = {
    type: PropTypes.oneOf([
        LINK_TYPE_S,
        LINK_TYPE_NORMAL,
        LINK_TYPE_L,
    ]),
    url: PropTypes.string,
    onPress: PropTypes.func,
    style: Text.propTypes.style,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]).isRequired,
};

export default Link;