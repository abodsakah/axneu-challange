import { View, Text, ScrollView, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import styles from './styles';
const Products = ({cart}) => {

    const products = [
        {
            id: 1,
            name: 'Cold Drink #1',
            price: '10',
            image: require('./static/images/products/prod1.jpg'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam erat, eget tincidunt nunc nisl eget consectetur tempor, nisi nisl aliquam erat, eget tincidunt nunc nisi nisl aliquam erat, eget tincidunt nunc.'
        },
        {
            id: 2,
            name: 'Cold Drink #2',
            price: '20',
            image: require('./static/images/products/prod2.jpg'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam erat, eget tincidunt nunc nisl eget consectetur tempor, nisi nisl aliquam erat, eget tincidunt nunc nisi nisl aliquam erat, eget tincidunt nunc.'
        },
        {
            id: 3,
            name: 'Cold Drink #3',
            price: '30',
            image: require('./static/images/products/prod3.jpg'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam erat, eget tincidunt nunc nisl eget consectetur tempor, nisi nisl aliquam erat, eget tincidunt nunc nisi nisl aliquam erat, eget tincidunt nunc.'
        },
        {
            id: 4,
            name: 'Cold Drink #4',
            price: '40',
            image: require('./static/images/products/prod4.jpg'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam erat, eget tincidunt nunc nisl eget consectetur tempor, nisi nisl aliquam erat, eget tincidunt nunc nisi nisl aliquam erat, eget tincidunt nunc.'
        },
        {
            id: 5,
            name: 'Cold Drink #5',
            price: '50',
            image: require('./static/images/products/prod5.jpg'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam erat, eget tincidunt nunc nisl eget consectetur tempor, nisi nisl aliquam erat, eget tincidunt nunc nisi nisl aliquam erat, eget tincidunt nunc.'
        }
    ];

    const Spacer = () => {
        return <View style={{height: 100}} />;
    };
    
    return (
        <ScrollView>
            {products.map(product => (
            <View style={styles.card} key={product.id}>
                    <View style={styles.cardImage}>
                        <Image source={product.image} style={styles.cardImage} />
                    </View>
                    <Text style={styles.cardTitle}>
                        {product.name}
                    </Text>
                    <Text style={styles.cardText}>
                        {product.description}
                    </Text>
                    <View style={styles.cardFotter}>
                        <Text style={styles.productPrice}>
                            {product.price} Sek
                    </Text>
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.1)', true)}
                            onPress={() => {
                                cart.addToCart(product);
                        }}>
                            <View style={styles.cardButton}>
                                <Image source={require('./static/images/icons/cartIcon.png')} style={styles.cartIcon} />
                            </View>
                    </TouchableNativeFeedback>
                    </View>
                </View>
            ))}
            <Spacer />
        </ScrollView>
    )
}

export default Products