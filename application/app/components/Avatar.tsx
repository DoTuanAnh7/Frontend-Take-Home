import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import Icon from './Icon';
import theme from '../includes/styles/theme.style';

const AVATAR_SIZE = 48;
const AVATAR_SIZE_NORMAL = 40;
const AVATAR_SIZE_S = 32;

const BADGE_SIZE = 20;
const BADGE_ICON_SIZE = 18;
const BADGE_TX_ICON_SIZE = 12;
const BADGE_SETTING_ICON_SIZE = 24;

const AVATAR_TYPE_SMALL = 'small';
const AVATAR_TYPE_NORMAL = 'normal';

const FONT_SIZE_16 = 16;

const getStylesForType = (type) => {
    return StyleSheet.create({

        dashboardAvatar: {
            alignItems: 'center',
            justifyContent: 'center',
            width: AVATAR_SIZE_NORMAL,
            height: AVATAR_SIZE_NORMAL,
            borderRadius: AVATAR_SIZE / 2,
            backgroundColor: theme.COLOR_PRIMARY_EMERALD,
        },
        dashboardInitials: {
            color: theme.COLOR_PRIMARY_GREEN,
            fontSize: FONT_SIZE_16
        },

        avatar: {
            alignItems: 'center',
            justifyContent: 'center',
            width: type === AVATAR_TYPE_SMALL ? AVATAR_SIZE_S : AVATAR_SIZE,
            height: type === AVATAR_TYPE_SMALL ? AVATAR_SIZE_S : AVATAR_SIZE,
            borderRadius: type === AVATAR_TYPE_SMALL ? AVATAR_SIZE_S / 2 : AVATAR_SIZE / 2,
            backgroundColor: theme.COLOR_NEUTRAL_500,
        },
        initials: {
            color: theme.COLOR_PRIMARY_EMERALD,
            fontSize: type === AVATAR_TYPE_SMALL ? theme.FONT_SIZE_S : theme.FONT_SIZE_L,
        },
        settingText: {
            color: theme.COLOR_PRIMARY_EMERALD,
            fontSize: theme.FONT_SIZE_26,
        },
        badge: {
            backgroundColor: theme.COLOR_WHITE,
            borderRadius: BADGE_SIZE,
            width: BADGE_SIZE,
            height: BADGE_SIZE,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: -theme.SPACING_XXS,
            right: -theme.SPACING_XXS,
        },
        settingBadge: {
            // backgroundColor: theme.COLOR_WHITE,
            borderRadius: BADGE_SIZE,
            width: BADGE_SIZE,
            height: BADGE_SIZE,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 52,
            right: -theme.SPACING_XS,
        },
        TxHistoryBadge: {
            backgroundColor: theme.COLOR_WHITE,
            borderRadius: BADGE_TX_ICON_SIZE,
            width: BADGE_TX_ICON_SIZE,
            height: BADGE_TX_ICON_SIZE,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: -0.5,
            right: -2
        },
        badgeIcon: {
            width: BADGE_ICON_SIZE,
            height: BADGE_ICON_SIZE,
        },
        badgeTxHistoryIcon: {
            width: BADGE_TX_ICON_SIZE,
            height: BADGE_TX_ICON_SIZE,
        },
        badgeSettingIcon: {
            width: BADGE_SETTING_ICON_SIZE,
            height: BADGE_SETTING_ICON_SIZE,
        }
    });
};

const getInitialsFromName = (name) => {
    if (name !== undefined) {
        const words = name.split(' ');
        return words[0].substring(0, 1) + words[1].substring(0, 1);
    }
}

const Avatar = ({ type, name, showBadge, setting, style, dashboard }) => {
    const styles = getStylesForType(type ? type : AVATAR_TYPE_NORMAL);

    return (
        <>
            {dashboard ?
                <View style={[styles.dashboardAvatar, style]} >
                    <Text style={styles.dashboardInitials}>Info</Text>
                </View >
                :
                <View style={[styles.avatar, style]} >
                    {setting ? <Text style={styles.settingText}>{getInitialsFromName(name)}</Text> : <Text style={styles.initials}>{getInitialsFromName(name)}</Text>}

                    {
                        showBadge ?
                            <View style={styles.badge}>
                                <Icon source={require('../../assets/icons/Bank.png')} style={styles.badgeIcon} />
                            </View>
                            : null
                    }



                    {/* {
                        setting ?
                            <View style={styles.settingBadge}>
                                <Icon source={require('../../assets/icons/Pen.png')} style={styles.badgeSettingIcon} />
                            </View>
                            : null
                    } */}
                </View >
            }
        </>

    );
};

Avatar.propTypes = {
    type: PropTypes.oneOf([
        AVATAR_TYPE_NORMAL,
        AVATAR_TYPE_SMALL,
    ]),
    name: PropTypes.string,
    showBadge: PropTypes.bool,
    style: ViewPropTypes.style,
    setting: PropTypes.bool,
    dashboard: PropTypes.bool,
};

export default Avatar;