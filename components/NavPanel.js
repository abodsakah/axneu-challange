import {observer} from 'mobx-react';
import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, Animated, TouchableNativeFeedbackBase, TouchableNativeFeedback} from 'react-native';
import { Link } from 'react-router-native';

const Badge = ({value}) => {
    return (
        <View style={styles.badge}>
            <Text style={styles.badgeText}>{value}</Text>
        </View>
    );
}

const Spacer = () => {
    return <View style={{height: 100}} />;
};

const NavPanel = observer(({cart}) => (
    <>
        <View style={styles.bottomNav}>
            <Spacer />
            <Link
            underlayColor="rgba(0,0,0,0.1)"
            style={styles.bottomNavItem} to="/" >
                
                <>
                    <Image source={require('./static/images/icons/homeIcon.png')} style={styles.bottomNavIcon} />
                    <Text style={styles.bottomNavText}>Home</Text>
                </>
            </Link>
                
            <Link
                underlayColor="rgba(0,0,0,0.05)"
                style={styles.bottomNavItem} to="/products">
                <>
                    <Image source={require('./static/images/icons/productIcon.png')} style={styles.bottomNavIcon} />
                    <Text style={styles.bottomNavText}>Products</Text>
                </>
            </Link>
            <Link
                underlayColor="rgba(0,0,0,0.05)"
                style={styles.bottomNavItem} to="/cart">
                <>
                    {cart.amount > 0 && <Badge value={cart.amount} />}
                    <Image source={require('./static/images/icons/cartIcon.png')} style={styles.bottomNavIcon} />
                    <Text style={styles.bottomNavText}>Cart</Text>
                </>
            </Link>
        </View>
    </>
));

const styles = StyleSheet.create({
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#fff',
        height: "10%",
        width: Dimensions.get('window').width, // full width
        overflow: 'hidden',
        elevation: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    bottomNavText: {
        fontSize: 20,
        color: '#000',
    },
    bottomNavItem: {
        padding: 10,
        height: "100%",
        width: "20%",
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100,
        borderTopEndRadius: 100,
        borderTopStartRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomNavIcon: {
        width: 30,
        height: 30,
    },
    bottomNavText: {
        fontSize: 14,
        color: '#000',
    },
    badge: {
        position: 'relative',
        zIndex: 1,
        top: 10,
        left: 8,
        backgroundColor: '#c7383a',
        borderRadius: 10,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeText: {
        fontSize: 10,
        color: '#fff',
    },
});

export default NavPanel