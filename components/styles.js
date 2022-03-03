import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardText: {
        color: '#000',
        fontSize: 16,
        // text overflow
        overflow: 'scroll',
    },
    cardImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    cardFotter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    productPrice: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },
    cartIcon: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
    cardButton: {
        paddingRight: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyCart: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
    emptyCartText: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    },
    MainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#000',
        padding: 10,
    },
    total: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    headerImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    postInfo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,

    },
    lightText: {
        color: '#706f6f',
        fontSize: 16,
    },
    title: {
        fontSize: 30,
        color: '#000',
        marginBottom: 10,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 150,
        width: '90%',
        alignSelf: 'center',
        elevation: 5,
    },
    cartImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
});

export default styles;