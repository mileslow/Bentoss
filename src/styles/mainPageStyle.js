import { StyleSheet } from "react-native";

const S = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    flex5: {
        flex: 5,
    }, 
    mainButton: {
        backgroundColor: "#d1d1d1",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    mainButtonText: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    buttonSpacer: {
        flex: 1,
    },
    mainButtonContainer: {
        flex: 4
    },
    otherButtonsContainer: {
        flex: 4
    },
    logoContainer: {
        flex: 1
    }


});

export default S;

