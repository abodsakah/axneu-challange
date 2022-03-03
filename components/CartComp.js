import {observer} from 'mobx-react';
import React from 'react'
import { View, Text, ScrollView, Image, TouchableNativeFeedback } from 'react-native'
import styles from './styles'

const Spacer = () => {
    return <View style={{height: 100}} />;
};

const Cart = observer(({cart}) => (
    <ScrollView>
        {cart.items.length > 0 ? cart.items.map(product => (
                <View  style={styles.cartItem} key={product.id}>
                    <View style={styles.cartImage}>
                        <Image source={product.image} style={styles.cartImage} />
                    </View>
                    <View style={styles.cartInfo}>
                        <Text style={styles.cardTitle}>
                            {product.name}
                        </Text>
                        <View style={styles.cardFotter}>
                            <Text style={styles.productPrice}>
                                {product.price} Sek
                            </Text>
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.1)', true)}
                                onPress={() => {
                                    cart.removeFromCart(product);
                                }}>
                                <View style={styles.cardButton}>
                                    <Image source={require('./static/images/icons/trashIcon.png')} style={styles.cartIcon} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
        )) : (
            <View style={styles.emptyCart}>
                <Text style={styles.emptyCartText}>
                    Your cart is empty
                </Text>
                </View>

        )}
        {cart.items.length > 0 && (
            <>
                <Text style={styles.total}>
                    Your total: {cart.total} Sek
                </Text>
                <Spacer />
            </>
            
        )}
    </ScrollView>
));

const CartPage = ({cart}) => {
    return (
        <>
            <Cart cart={cart} />
            {cart.items.length > 0 && (
                <>
                    
                </>
            )}    
        </>
    )
}

export default CartPage