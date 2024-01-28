import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 64,
        backgroundColor: '#333',
        marginBottom: 8,
        borderRadius: 10,
        width: '100%',
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    check: {
        backgroundColor: '#333',
        borderColor: '#4EA8DE',
        borderWidth: 2,
        borderRadius: 99,
        width: 21,
        height: 21,
        alignItems: 'center',
        justifyContent: 'center'
    },

    description: {
        fontSize: 14,
        color: '#F2F2F2',
        width: 250,
    },

    delete: {
        width: 21,
        height: 21,

    }
})