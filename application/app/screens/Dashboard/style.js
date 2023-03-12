import { Dimensions, StyleSheet } from 'react-native';
import * as commonStyle from '../../includes/main-style';
import theme from '../../includes/styles/theme.style';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.45)',
    },
    modalView: {
        backgroundColor: 'white',
        shadowColor: 'gray',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 40,
        padding: 20,
        width: commonStyle.getResponsiveScreenWidth(85),
    },
    modalLabel: {
        fontFamily: 'Poppins-SemiBold',
        color: '#082E31'
    },
    modalSubLabel: {
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    helpButtonLight: {
        marginLeft: 'auto',
        marginRight: commonStyle.getResponsiveScreenWidth(2.7),
        marginTop: 12
    },
    helpTextLight: {
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regular',
    },
    helpButtonDark: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(23, 23, 77, 0.07)',
        borderRadius: 10,
        width: 20,
        height: 20,
        marginLeft: 5,
        overflow: 'hidden',
    },
    helpTextDark: {
        color: '#17174D',
        fontFamily: 'Arial',
        opacity: 0.85,
    },
    button: {
        height: HEIGHT * 0.06,
        width: WIDTH / 4.5,
        borderRadius: 30,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#3AF1C2",
        alignItems: "center",
        shadowColor: '#3AF1C2',
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },
    buttonTextStyle: {
        color: '#082E31',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 20,
        color: '#082E31',
        fontFamily: 'Poppins-Regular',
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },

    shadowPropInvite: {
        height: "100%",
        width: 315,
        shadowColor: '#DEDFE3',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        borderRadius: 28,
    },

    shadowPropEarned: {
        justifyContent: 'center',
        width: 150,
        height: 160,
        backgroundColor: '#105157',
        borderRadius: theme.BORDER_RADIUS_CARD_M
    },

    shadowPropEarnedMonth: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        height: HEIGHT * 0.099,
        width: WIDTH / 2.5,
        backgroundColor: '#fff',
        borderRadius: 28
    },

    homeTextTitle: {
        color: '#111315',
        fontSize: theme.FONT_SIZE_S,
        alignItems: 'center',
        paddingBottom: 8,
        paddingTop: 4,
        marginLeft: 4

    },
    currencyLabel: {
        fontSize: theme.FONT_SIZE_20,
        lineHeight: theme.FONT_SIZE_20 * 1.2,
    },
    whiteText: {
        color: theme.COLOR_WHITE,
    },
    cents: {
        fontSize: theme.FONT_SIZE_20,
        lineHeight: theme.FONT_SIZE_20 * 1.2,
        marginTop: 12,
    },


    textNotification: {
        color: theme.COLOR_WHITE_LIGHT,
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        marginTop : -95

    },

    headerTextNotification: {
        color: theme.COLOR_GOLDEN_YELLOW,
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
    },
});
