import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Dialog from 'react-native-dialog';

const Prompt = ({ isVisible, title, description, initialValue, onCancel, onConfirm }) => {
    const [value, setValue] = useState(initialValue);

    return (
        <View>
            <Dialog.Container visible={isVisible}>
                <Dialog.Title>{title}</Dialog.Title>
                <Dialog.Description>{description}</Dialog.Description>
                <Dialog.Input value={value} keyboardType="numeric" onChangeText={(text) => setValue(text)} />
                <Dialog.Button label="Cancel" bold={true} onPress={onCancel} />
                <Dialog.Button label="OK" onPress={() => onConfirm(value)} />
            </Dialog.Container>
        </View>
    );
}

Prompt.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    initialValue: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default Prompt;