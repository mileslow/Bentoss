import { StyleSheet } from "react-native";

const S = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    listContainer: {

    },
    listItemBlock: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        margin: 2
    },
    backgroundWhite: {
        backgroundColor: '#fff',
    },
    listItemText: {
        fontSize: 30,
        color: '#000',
        padding: 40
    },
    itemSeperator: {
        height: 20,
        width: '100%'
    }
})

export default S;

