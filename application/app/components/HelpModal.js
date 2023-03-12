import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Headline from './typography/Headline';
import theme from '../includes/styles/theme.style';
import {Icon as IconRNE} from '@rneui/themed';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(82, 103, 115, 0.3)',
    },
    modalContent: {
        borderRadius: theme.BORDER_RADIUS_CARD_M,
        backgroundColor: theme.COLOR_BINANCE_BLACK,
        padding: theme.SPACING_M,
        width: 343
    },
    modalHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.SPACING_MS,
    },
    flexStyle: {
        flex: 1,
    },
});

const HELP_ICON_SIZE = 30;

const HelpModal = ({ heading, children, dashboard, height, whiteIcon, greenIcon }) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <TouchableOpacity onPress={() => setVisible(true)}>
                {dashboard && <Icon
                    source={require('../../assets/icons/Bell.png')}
                    style={{ width: HELP_ICON_SIZE, height: HELP_ICON_SIZE }}
                />
                }
                {greenIcon &&
                    <Icon
                        source={require('../../assets/icons/Question-alt.png')}
                        style={{ width: HELP_ICON_SIZE, height: HELP_ICON_SIZE }}
                    />
                }

                {whiteIcon && <Icon
                    source={require('../../assets/icons/Question-White.png')}
                    style={{ width: HELP_ICON_SIZE, height: HELP_ICON_SIZE }}
                />}

            </TouchableOpacity>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(!visible)}
            >
                <View style={styles.centeredView}>
                    <View style={[styles.modalContent, { height: height }]}>
                        <View style={styles.modalHeading}>
                            <View style={styles.flexStyle}>
                            </View>
                            <View
                                style={{ justifyContent: 'center', marginRight: theme.SPACING_XXS }}
                            >
                                <Headline type="H2">{heading}</Headline>
                            </View>
                        </View>
                        {children}
                    </View>
                </View>
            </Modal>
        </>
    );
};

HelpModal.propTypes = {
    heading: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]).isRequired,
    children: PropTypes.element.isRequired,
    dashboard: PropTypes.bool,
    height: PropTypes.number,
    whiteIcon: PropTypes.bool,
    greenIcon: PropTypes.bool,
};

export default HelpModal;
