import React from 'react';
import {Text} from 'react-native';

const Emoji = props => (
    <Text accessibilityRole="image" accessibilityLabel={props.label}>{props.symbol}</Text>
);

export default Emoji;