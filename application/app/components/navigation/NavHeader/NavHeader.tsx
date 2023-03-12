import {NavigationContext} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import PropTypes from 'prop-types';
import React, {useContext, useRef} from 'react';
import {StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import theme from '../../../includes/styles/theme.style';
import Avatar from '../../Avatar';
import HelpModal from '../../HelpModal';
import IconComponent from '../../Icon';
import Headline from '../../typography/Headline';

const NAVHEADER_TYPE_DARK = 'dark';
const NAVHEADER_TYPE_LIGHT = 'light';

// Height of the StatusBar on Android
const statusBarHeight = StatusBar.currentHeight;

const getStylesForType = type => {
  return StyleSheet.create({
    header: {
      // justifyContent: 'flex-end',
      paddingLeft: theme.SPACING_MS,
      paddingRight: theme.SPACING_MS,
      // Minus the height of the StatusBar on Android
      //   ? 108 - statusBarHeight
      //   : 100 - statusBarHeight,
      marginBottom: theme.SPACING_S,
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: theme.SPACING_XS,
      paddingBottom: theme.SPACING_S,
    },
    flex: {
      flex: 1,
      flexDirection: 'row',
    },
    icon: {
      marginRight: theme.SPACING_XS,
    },
    text: {
      color:
        type === NAVHEADER_TYPE_LIGHT
          ? theme.COLOR_GOLDEN_YELLOW
          : theme.COLOR_GOLDEN_YELLOW,
    },
  });
};

const NavHeader = ({
  type,
  showBack,
  showAvatar,
  user,
  icon,
  helpModalHeading,
  helpModalContent,
  children,
  setting,
  search,
  data,
  symbol,
  isMyAccount,
}) => {
  const navigation = useContext(NavigationContext);
  const styles = getStylesForType(type ? type : NAVHEADER_TYPE_DARK);

  const openFilter = () => ref.current?.snapTo(0);
  const ref = useRef(null);

  return (
    <>
      <View style={styles.header}>
        <View style={styles.flexRow}>
          <View style={styles.flex}>
            {showBack ? (
              <TouchableOpacity
                style={{marginLeft: theme.SPACING_XS}}
                onPress={() =>
                  navigation.canGoBack()
                    ? navigation.goBack()
                    : navigation.navigate('Dashboard')
                }>
                {type === NAVHEADER_TYPE_LIGHT ? (
                  <IconComponent
                    source={require('../../../../assets/icons/Arrow-Left-white.png')}
                  />
                ) : (
                  <IconComponent
                    source={require('../../../../assets/icons/Arrow-Left.png')}
                  />
                )}
              </TouchableOpacity>
            ) : null}
            {setting ? (
              <TouchableOpacity
                style={{marginLeft: theme.SPACING_XS}}
                onPress={() => navigation.goBack()}>
                <IconComponent
                  source={require('../../../../assets/icons/Close.png')}
                />
              </TouchableOpacity>
            ) : null}
            {showAvatar && user ? (
              <TouchableOpacity
                style={{marginLeft: 10}}
                onPress={() =>
                  navigation.navigate('Setting', {
                    firstname: user.firstName,
                    lastName: user.lastName,
                    userFullName: `${user.firstName} ${user.lastName}`,
                    email: user.email,
                    phoneno: user.mobile.number,
                    referralCode: user.code,
                  })
                }>
                <Avatar
                  dashboard
                  type="small"
                  name={`${user.firstName} ${user.lastName}`}
                />
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={styles.icon}>{icon ? icon : null}</View>
          <Headline type="H2" align="center" style={[styles.text]}>
            {children}
          </Headline>
          <View style={[styles.flex, {justifyContent: 'flex-end'}]}>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <IconComponent
                source={require('../../../../assets/icons/logouticonnew.png')}
              />
            </TouchableOpacity>

            {search && (
              <TouchableOpacity onPress={openFilter}>
                <Icon name="search" size={28} color="white" type="EvilIcons" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default NavHeader;
