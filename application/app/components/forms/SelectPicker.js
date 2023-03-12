import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Icon } from '@rneui/themed';
import theme from '../../includes/styles/theme.style';
import Body from '../typography/Body';

export const PICKER_TYPE_NORMAL = 'normal';
export const PICKER_TYPE_BOLD = 'bold';

const getPickerStyles = (type, inline) => {
    const pickerStyles = {
        flex : 1,
        alignItems: 'center',
        textAlign: 'center',
        color: theme.COLOR_WHITE,
        fontFamily:  theme.FONT_FAMILY_MEDIUM,
        fontSize: theme.FONT_SIZE_HEADLINE_H2,
    };

    const pickerContainerStyles = {
        flexDirection: 'row', alignItems: 'center',
    };

    return {
        viewContainer: { flexGrow: 1 },
        inputIOSContainer: pickerContainerStyles,
        inputIOS: pickerStyles,
        inputAndroidContainer: pickerContainerStyles,
        inputAndroid: pickerStyles,
    };
};

const itemToPickerItem = (item) => {
    return {
        label: item.toString(), value: item,
    };
};

const SelectPicker = ({
    type,
    label,
    prefix,
    value,
    items,
    itemRender = itemToPickerItem,
    placeholder,
    onValueChange,
    inline,
    navHeader
}) => {
    const viewStyles = !inline ? {
        borderBottomWidth: 1, borderBottomColor: theme.COLOR_NEUTRAL_400,
    } : {};
    const flexRow = {
        flexDirection: 'row', alignItems: 'center',padding : 10
    };
    const pickerStyles = getPickerStyles(type, inline);

    return (<View style={viewStyles}>
        {label ? <Body type="small">{label}</Body> : null}
        <View style={flexRow}>
            {prefix ? prefix : null}
            <RNPickerSelect
                value={value}
                items={items.map(item =>  itemRender(navHeader ? item.symbol : item.name))}
                onValueChange={onValueChange}
                Icon={() => <Icon
                    name={'chevron-down'}
                    size={18}
                    color={theme.COLOR_WHITE}
                    type='font-awesome-5'
                // onPress={() => setHidePass(!hidePass)}
                />}
                style={pickerStyles}
                useNativeAndroidPickerStyle={false}
                fixAndroidTouchableBug={true}
            />
        </View>
    </View>);
}

SelectPicker.propTypes = {
    type: PropTypes.oneOf([PICKER_TYPE_NORMAL, PICKER_TYPE_BOLD,]),
    label: PropTypes.string,
    prefix: PropTypes.element,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number,]),
    items: PropTypes.array.isRequired,
    itemRender: PropTypes.func,
    placeholder: PropTypes.object,
    onValueChange: PropTypes.func.isRequired,
    inline: PropTypes.bool,
    navHeader : PropTypes.bool,
};

export default SelectPicker;
