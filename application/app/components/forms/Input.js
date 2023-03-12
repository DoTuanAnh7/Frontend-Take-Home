import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import theme from '../../includes/styles/theme.style';
import Body from '../typography/Body';
import Headline from '../typography/Headline';

const styles = StyleSheet.create({
    inputRowBase: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingTop: theme.SPACING_S,
        paddingBottom: Platform.OS === 'ios' ? theme.SPACING_S : 0,
    },
    inputRow: {
        borderColor: theme.COLOR_NEUTRAL_400,
    },
    inputRowFocus: {
        borderColor: theme.COLOR_NEUTRAL_BLACK,
    },
    inputRowDisabled: {
        borderColor: theme.COLOR_NEUTRAL_400,
    },
    inputRowError: {
        borderColor: theme.COLOR_NEGATIVE,
    },
    input: {
        flex: 1,
        fontSize: theme.FONT_SIZE_HEADLINE_H3,
        fontFamily: theme.FONT_FAMILY_MEDIUM,
        color: theme.COLOR_NEUTRAL_BLACK,
        marginTop: Platform.OS === 'android' ? 2 : 0
    },
    inputDisabled: {
        color: theme.COLOR_NEUTRAL_400,
    },
    inputError: {
        color: theme.COLOR_NEGATIVE,
    },
    prefix: {
        paddingRight: theme.SPACING_XS,
    },
    suffix: {
        paddingLeft: theme.SPACING_XS,
        color: theme.COLOR_NEUTRAL_300,
    },
});

const Input = ({
    keyboardType,
    autoCapitalize,
    label,
    value,
    placeholder,
    disabled,
    error,
    errorMessage,
    prefix,
    suffix,
    onChangeText,
    style,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    let inputRowStyle = styles.inputRow;
    let inputStyle = styles.input;

    if (error) {
        inputRowStyle = styles.inputRowError;
    } else if (disabled) {
        inputRowStyle = styles.inputRowDisabled;
    } else if (isFocused) {
        inputRowStyle = styles.inputRowFocus;
    }

    return (
        <View style={style ? style : {}}>
            {label ?
                <Body type="small" style={disabled ? styles.textDisabled : {}}>{label}</Body>
            : null}
            <View style={[styles.inputRowBase, inputRowStyle]}>
                {prefix ? <Headline type="H3" style={styles.prefix}>{prefix}</Headline> : null}
                <TextInput
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    autoCapitalize={autoCapitalize ? autoCapitalize : 'sentences'}
                    placeholder={placeholder}
                    value={value}
                    editable={!disabled}
                    onChangeText={onChangeText}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={inputStyle}
                    placeholderTextColor={theme.COLOR_NEUTRAL_300}
                />
                {suffix ? <Headline type="H3" style={styles.suffix}>{suffix}</Headline> : null}
            </View>
            {error ? <Body type="small" style={{ color: theme.COLOR_NEGATIVE }}>{errorMessage}</Body> : null}
        </View>
    );
};

Input.propTypes = {
    keyboardType: PropTypes.oneOf([
        'default',
        'number-pad',
        'decimal-pad',
        'numeric',
        'email-address',
        'phone-pad',
        'url',
    ]),
    autoCapitalize: PropTypes.oneOf([
        'characters',
        'words',
        'sentences',
        'none',
    ]),
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChangeText: PropTypes.func,
    style: Text.propTypes.style,
};

export default Input;