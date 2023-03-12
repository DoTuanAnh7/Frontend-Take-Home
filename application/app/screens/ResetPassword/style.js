import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;


export const styles = StyleSheet.create({

    Image: {
        height: HEIGHT * 0.9,
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
        marginTop: HEIGHT * 0.128,
        shadowColor: '#3AF1C2',
        shadowOffset: { width: 1, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    SingupText: {
        fontSize: 23.5,
        textAlign: 'center',
        marginTop: -HEIGHT * 0.495,
        color: '#000000',
    },

    iconview: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    GFicons: {
        height: 100,
        width: 100,
    },

    secoundtext: {
        fontSize: 15,
        color: '#000000',
        opacity: 0.3,
        fontFamily: "PoppinsMedium",
        textAlign: 'center'
    },

   
   
    Textpassvalidation: {
        marginTop: HEIGHT * 0.015,
        fontSize: 10,
        color: '#000000',
        opacity: 0.5,
        textAlign: 'center',
    },
    GreyButton: {
        height: HEIGHT * 0.075,
        width: WIDTH / 1.16,
        margin: HEIGHT * 0.023,
        borderRadius: 30,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#F8F8F8",
        alignItems: "center",
        marginTop: HEIGHT * 0.075,
        shadowColor: '#000000',
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 7
    },
    TouchableButton: {
        height: HEIGHT * 0.075,
        width: WIDTH / 1.16,
        margin: HEIGHT * 0.023,
        borderRadius: 30,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#3AF1C2",
        alignItems: "center",
        marginTop: HEIGHT * 0.075,
        shadowColor: '#3AF1C2',
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 10
    },
    footertext: {
        alignSelf: 'center',
        fontSize: 12,
        color: '#000000',
        marginTop: HEIGHT * 0.027,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    footertext1: {
        alignSelf: 'center',
        fontSize: 13,
        opacity: 0.3,
        textAlign: 'center',
    },
    footertext2: {
        fontSize: 13,
        color: '#02021D',
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
});