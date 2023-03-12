import { StyleSheet, Dimensions, Platform } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const styles = StyleSheet.create({

    Image: {
        height: HEIGHT * 1.48,
        width: '100%',
        alignSelf: 'center',
        position: 'relative',
        bottom: HEIGHT * 0.58
    },
    BrandText: {
        fontSize: HEIGHT * 0.083,
        color: '#3AF1C2',
        alignSelf: 'center',
        position: 'absolute',
        fontFamily: "Comfortaa-Regular",
        marginTop: HEIGHT * 0.71,
        shadowColor: '#3AF1C2',
        shadowOffset: { width: 1, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    SingupText: {
        fontSize: 23,
        textAlign: 'center',
        marginTop: HEIGHT * 0.95,
        color: '#082E31',
    },
    iconview: {
        flex: 0.50,
    },

    GFicons: {
        height: 120,
        width: 82,
    },

    secoundtext: {
        // marginTop: HEIGHT * 0.01,
        marginTop: -HEIGHT * .01,

        fontSize: 13.552714,
        color: '#111413',
        opacity: 0.3,
        textAlign: 'center',
    },
    Textpassvalidation: {
        marginTop: HEIGHT * 0.015,
        fontSize: 8.5,
        color: '#111413',
        opacity: 0.3,
        textAlign: 'center',
    },
    Textinputview: {
        flexDirection: 'row',
        height: HEIGHT * 0.078,
        width: WIDTH / 1.16,
        margin: HEIGHT * 0.013,
        marginTop: HEIGHT * 0.01,
        alignSelf: 'center',
        textAlign: 'left',
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        color: "black",
        shadowColor: '#D8D8D8',
        shadowOpacity: 2,
        shadowRadius: 5,
    },
    Textinputview1: {
        flexDirection: 'row',
        height: HEIGHT * 0.078,
        width: WIDTH / 1.16,
        margin: HEIGHT * 0.013,
        marginTop: HEIGHT * 0.017,
        alignSelf: 'center',
        textAlign: 'left',
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        color: "black",
        shadowColor: '#D8D8D8',
        shadowOpacity: 2,
        shadowRadius: 5,
        alignItems : 'center'
    },
    Textinputicons: {
        padding: HEIGHT * 0.01,
        height: 22,
        width: 25,
        margin: HEIGHT * 0.028
    },
    Textinputicons1: {
        padding: HEIGHT * 0.01,
        height: 20,
        width: 25,
        margin: HEIGHT * 0.028

    },
    TouchableButton: {
        height: HEIGHT * 0.075,
        width: WIDTH / 1.16,
        marginTop: HEIGHT * 0.03,
        borderRadius: 30,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#3AF1C2",
        alignItems: "center",
        ...Platform.select({
            ios: {
                shadowColor: '#3AF1C2',
                shadowOffset: { width: 4, height: 6 },
                shadowOpacity: 0.4,
                shadowRadius: 5,
            },
            android: {
                shadowColor: '#000',
                elevation: 4
            }
        })

    },

    RegisterButtonText: {
        color: "#082E31",
        fontSize: 13.5,
    },
    footertext: {
        fontSize: 13,
        color: '#000000',
        opacity: 0.3,
        textAlign: 'center'
    },
    footertext2: {
        fontSize: 12,
        color: '#02021D',
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
});