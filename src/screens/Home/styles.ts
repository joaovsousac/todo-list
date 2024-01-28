import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262626',
        height: '100%'
    },
    header: {
        backgroundColor: '#0D0D0D',
        width: '100%',
        height: 173,
        alignItems: 'center',
        justifyContent: 'center'
    },

    body: {
        paddingHorizontal: 24,
    },

    form: {
        flexDirection: 'row',
        height: 54,
        gap: 7,
        top: -27
    },

    textInput: {
        width: 271,
        backgroundColor: '#262626',
        borderRadius: 7,
        color: '#FFF',
        padding: 16,
        borderWidth: 1,
    },
    
    button: {
        flex: 1,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },

    status: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
 
    eachStatus: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },

    texts: {
        fontSize: 14,
        fontWeight: 'bold'
    },

    number: {
        backgroundColor: '#333',
        borderRadius: 30,
        fontWeight: 'bold',
        color: '#D9D9D9',
        width: 25,
        textAlign: 'center',
        lineHeight: 25, 
    },

    tasks: {
        marginTop: 19
    },

    emptyList: {
        alignItems: 'center'
    },

    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#333'
    }
})