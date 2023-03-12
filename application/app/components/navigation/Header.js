import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import theme from '../../includes/styles/theme.style';
import Icon from '../Icon';

const Header = ({leftComponent, rightComponent, showBack, ...props}) => {
  const {canGoBack, goBack, navigate} = useNavigation();
  return (
    <SafeAreaView>
      <View style={[styles.container, {...props}]}>
        {showBack && leftComponent ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => (canGoBack() ? goBack() : navigate('Dashboard'))}>
              <Icon
                source={require('../../../assets/icons/Arrow-Left-white.png')}
              />
            </TouchableOpacity>
            <View style={{paddingLeft: theme.SPACING_L}}>{leftComponent}</View>
          </View>
        ) : (
          <></>
        )}

        {rightComponent ? rightComponent : <></>}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Header;
