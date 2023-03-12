import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View, ViewPropTypes } from 'react-native';
import Card from './Card';
import Avatar from './Avatar';
import Body from './typography/Body';
import Headline from './typography/Headline';
import Icon from './Icon';
import theme from '../includes/styles/theme.style';

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    marginLeft: {
        marginLeft: theme.SPACING_S,
    },
    greyText: {
        color: theme.COLOR_NEUTRAL_300,
    },
    arrow: {
        marginLeft: theme.SPACING_XS,
        marginRight: -theme.SPACING_XS,
    },
});

const formatBSBNumber = (number) => {
    if (number) {
        return number.replace(/\D+/g, "").replace(/([0-9]{1,3})([0-9]{3})$/gi, "$1-$2"); //mask numbers (xxx) xxx-xxxx
    } else {
        return "";
    }
};

const Account = ({ name, accountName, bsb, accountNo, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={style ? style : {}}>
        <Card>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <View style={styles.flexRow}>
                    <Avatar name={name} showBadge={true} />
                    <View style={styles.marginLeft}>
                        <Headline type="H3">{name}</Headline>
                        <Body type="small" style={styles.greyText}>{accountName}</Body>
                    </View>
                </View>
                <View style={styles.flexRow}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Body type="small" style={styles.greyText}>{formatBSBNumber(bsb)}</Body>
                        <Body type="small" style={styles.greyText}>{accountNo}</Body>
                    </View>
                    <Icon source={require('../../assets/images_assets/Arrow.png')} style={styles.arrow} />
                </View>
            </View>
        </Card>
    </TouchableOpacity>
);

Account.propTypes = {
    name: PropTypes.string.isRequired,
    accountName: PropTypes.string.isRequired,
    bsb: PropTypes.string.isRequired,
    accountNo: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    style: ViewPropTypes.style,
};

export default Account;