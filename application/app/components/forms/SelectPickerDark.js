import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
// import Icon from '../Icon';
import theme from '../../includes/styles/theme.style';
import Body from '../typography/Body';
import {Icon} from '@rneui/themed';

export const PICKER_TYPE_NORMAL = 'normal';
export const PICKER_TYPE_BOLD = 'bold';

const getPickerStyles = (type, inline) => {
  const pickerStyles = {
    // paddingTop: !inline ? theme.SPACING_S : 0,
    // paddingBottom: !inline ? theme.SPACING_S : 0,
    // paddingLeft: 0,
    // marginLeft: 10,
    paddingRight: theme.ICON_SIZE + theme.SPACING_XS,
    color: theme.COLOR_NEUTRAL_BLACK,
    fontFamily:
      type === PICKER_TYPE_BOLD
        ? theme.FONT_FAMILY_MEDIUM
        : theme.FONT_FAMILY_BASE,
    fontSize: theme.FONT_SIZE_HEADLINE_H3,
    letterSpacing: 0,
    color: theme.COLOR_WHITE_LIGHT,
    width: '100%',
    paddingLeft: theme.SPACING_S,
    paddingVertical: 10,
  };

  const pickerContainerStyles = {
    flexDirection: 'row',
    alignItems: 'center',
  };

  return {
    viewContainer: {flexGrow: 1},
    inputIOSContainer: pickerContainerStyles,
    inputIOS: pickerStyles,
    inputAndroidContainer: pickerContainerStyles,
    inputAndroid: pickerStyles,
  };
};

const itemToPickerItem = item => {
  return {
    label: item.toString(),
    value: item,
  };
};

const SelectPickerDark = ({
  type,
  label,
  prefix,
  value,
  items,
  itemRender = itemToPickerItem,
  placeholder,
  onValueChange,
  inline,
}) => {
  const viewStyles = !inline
    ? {
        borderBottomWidth: 1,
        borderBottomColor: theme.COLOR_NEUTRAL_400,
      }
    : {};
  const flexRow = {
    flexDirection: 'row',
    // alignItems: 'center',
  };
  const pickerStyles = getPickerStyles(type, inline);

  return (
    <View style={viewStyles}>
      {label ? <Body type="small">{label}</Body> : null}
      <View style={flexRow}>
        {prefix ? prefix : null}
        <RNPickerSelect
          touchableWrapperProps={{
            style: {
              backgroundColor: theme.COLOR_BINANCE_BLACK,
              borderRadius: 5,
            },
          }}
          value={value}
          items={items.map(item => itemRender(item.name))}
          onValueChange={onValueChange}
          Icon={() => (
            <Icon
              name="down"
              type="antdesign"
              color={theme.COLOR_WHITE_LIGHT}
              size={20}
            />
          )}
          style={pickerStyles}
          useNativeAndroidPickerStyle={false}
          fixAndroidTouchableBug={true}
          placeholder={
            placeholder
              ? placeholder
              : {
                  label: 'Select an item...',
                  value: null,
                }
          }
        />
      </View>
    </View>
  );
};

SelectPickerDark.propTypes = {
  type: PropTypes.oneOf([PICKER_TYPE_NORMAL, PICKER_TYPE_BOLD]),
  label: PropTypes.string,
  prefix: PropTypes.element,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.array.isRequired,
  itemRender: PropTypes.func,
  placeholder: PropTypes.object,
  onValueChange: PropTypes.func.isRequired,
  inline: PropTypes.bool,
};

export default SelectPickerDark;
