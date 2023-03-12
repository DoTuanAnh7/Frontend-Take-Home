import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Platform, TouchableOpacity, ViewPropTypes } from 'react-native';
import theme from '../../includes/styles/theme.style';
import Body from '../typography/Body';
import Headline from '../typography/Headline';
import Icon from '../Icon';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { getDateFormat } from '../../includes/date_format';

const getStylesForDatePicker = (inline, disabled, error) => {
    return styles = StyleSheet.create({
        inputRow: {
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: inline ? 0 : 1,
            paddingTop: inline ? 0 : theme.SPACING_S,
            paddingBottom: inline ? 0 : theme.SPACING_S,
            borderColor: error ? theme.COLOR_NEGATIVE : theme.COLOR_NEUTRAL_400,
        },
        input: {
            fontSize: theme.FONT_SIZE_HEADLINE_H3,
            fontFamily: theme.FONT_FAMILY_BASE,
            color: disabled ? theme.COLOR_NEUTRAL_400 : theme.COLOR_NEUTRAL_BLACK,
        },
        inputPlaceholder: {
            fontSize: theme.FONT_SIZE_HEADLINE_H3,
            fontFamily: theme.FONT_FAMILY_BASE,
            color: theme.COLOR_NEUTRAL_300,
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
        flexRow: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: theme.SPACING_XXS
        },
        iconText: {
            flex: inline ? 0 : 1,
            flexDirection: 'row',
        },
        icon: {
            marginLeft: theme.SPACING_XS,
        },
    });
};

const DatePicker = ({
    label,
    value,
    minimumDate,
    setDate,
    disabled,
    error,
    suffix,
    inline,
    style,
}) => {
    const [dateModalVisible, setDateModalVisible] = useState(false);
    const datePickerDisplay = Platform.OS === 'ios' ? 'inline' : 'calendar';
    const styles = getStylesForDatePicker(inline, disabled, error);

    let inputRowStyle = styles.inputRow;
    let inputStyle = styles.input;

    return (
        <View style={style ? style : {}}>
            {label ? <Body type="small" style={disabled ? styles.textDisabled : {}}>{label}</Body> : null}
            <View style={inputRowStyle}>
                <TouchableOpacity onPress={() => setDateModalVisible(true)} style={styles.flexRow}>
                    <View style={styles.iconText}>
                        <Body style={value ? inputStyle : styles.inputPlaceholder}>{value ? getDateFormat(value) : 'dd/mm/yyyy'}</Body>
                    </View>
                    <Icon source={require('../../../assets/icons/Calendar.png')} style={styles.icon} />
                </TouchableOpacity>

                <DateTimePickerModal
                    isVisible={dateModalVisible}
                    mode="date"
                    date={value}
                    minimumDate={minimumDate}
                    display={datePickerDisplay}
                    onConfirm={(date) => {
                        setDate(date);
                        setDateModalVisible(false);
                    }}
                    onCancel={() => setDateModalVisible(false)}
                />
                {suffix ? <Headline type="H3" style={styles.suffix}>{suffix}</Headline> : null}
            </View>
            {error ? <Body type="small" style={{ color: theme.COLOR_NEGATIVE }}>Error</Body> : null}
        </View>
    );
};

DatePicker.propTypes = {
    label: PropTypes.string,
    value: PropTypes.instanceOf(Date).isRequired,
    minimumDate: PropTypes.instanceOf(Date),
    setDate: PropTypes.func.isRequired,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    inline: PropTypes.bool,
    style: ViewPropTypes.style,
};

export default DatePicker;