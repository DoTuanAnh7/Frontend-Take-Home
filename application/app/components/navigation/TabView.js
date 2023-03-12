import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, ScrollView, StatusBar, ViewPropTypes } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const HEIGHT = Dimensions.get('window').height;

const TabView = ({ children, style }) => {
    // Height of the StatusBar on Android
    const statusBarHeight = StatusBar.currentHeight;
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
            }}
            style={[
                { maxHeight: HEIGHT - (statusBarHeight + tabBarHeight) },
                style,
            ]}
        >
            {children}
        </ScrollView>
    );
}

TabView.propTypes = {
    children: PropTypes.any.isRequired,
    style: ViewPropTypes.style,
};

export default TabView;
