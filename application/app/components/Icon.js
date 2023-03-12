import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, ViewPropTypes } from 'react-native';
import theme from '../includes/styles/theme.style';

const ICON_SIZE_S = 'small';
const BADGE_SIZE = 18;

const getIconStyles = (size) => {
    const iconSize = size === ICON_SIZE_S ? theme.ICON_SIZE_S : theme.ICON_SIZE;

    return StyleSheet.create({
        img: {
            width: iconSize,
            height: iconSize,
        },
    });
}


const Icon = ({ source, size, cryptoBadge, style }) => {
    const styles = getIconStyles(size);

    return (
        <>
            <Image source={source} style={[styles.img, style]} />
        </>
    );
};

Icon.propTypes = {
    source: Image.propTypes.source.isRequired,
    size: PropTypes.oneOf([
        ICON_SIZE_S,
    ]),
    style: ViewPropTypes.style,
};

export default Icon;