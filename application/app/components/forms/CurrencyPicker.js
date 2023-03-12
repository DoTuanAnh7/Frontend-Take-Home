import React from 'react';
import PropTypes from 'prop-types';
import SelectPicker, { PICKER_TYPE_NORMAL, PICKER_TYPE_BOLD } from './SelectPicker';
import { USDC, BTC, ETH, getNameForCurrency } from '../../includes/currency_format';
import Icon from '../Icon';
import theme from '../../includes/styles/theme.style';

const currencyToPickerItem = (item) => {
    return {
        label: getNameForCurrency(item.name)
    };
};

const getIconForCurrency = (type) => {
    switch (type) {
        case USDC:
            return require('../../../assets/countries/united_states.png');
        case BTC:
            return require('../../../assets/crypto/btc.png');
        case ETH:
            return require('../../../assets/crypto/eth.png');
        case 'AUD':
            return require('../../../assets/countries/australia.png');
    }
};

const CurrencyPicker = ({ type, label, value, items, onValueChange, inline }) => {
    return (
        <SelectPicker
            type={type}
            label={label}
            prefix={<Icon source={getIconForCurrency(value)} style={{ marginRight: theme.SPACING_XS }} />}
            value={value}
            items={items}
            itemRender={currencyToPickerItem}
            placeholder={{}}
            onValueChange={onValueChange}
            inline={inline}
        />
    );
}

CurrencyPicker.propTypes = {
    type: PropTypes.oneOf([
        PICKER_TYPE_NORMAL,
        PICKER_TYPE_BOLD,
    ]),
    label: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    items: PropTypes.array.isRequired,
    placeholder: PropTypes.object,
    onValueChange: PropTypes.func.isRequired,
    inline: PropTypes.bool,
};

export default CurrencyPicker;
