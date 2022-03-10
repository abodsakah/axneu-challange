/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  Button,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { LogBox } from 'react-native';
/* ------------------------------ React navigator ------------------------------ */
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

/* --------------------------- React vector icons --------------------------- */
import Ionicons from 'react-native-vector-icons/Ionicons';

/* ------------------------------- Components ------------------------------- */  
import Main from './components/Main';
import Products from './components/Products';
import CartPage from './components/CartComp';

/* ---------------------------------- Mobx ---------------------------------- */
import {makeAutoObservable, action, makeObservable} from 'mobx';
import { observer } from 'mobx-react';

/* --------------------------------- Styles --------------------------------- */
import styles from './components/styles';
class Cart {

  amount = 0;
  items = [];
  total = 0;
  constructor(){
      makeAutoObservable(this);
  }

  /**
   * 
   * @param {*} item The item to be added to the cart 
   */

  checkInCart(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === item.id) {
        return true;
      }
    }
    return false;
  }

  addToCart(item){
    // check if the item is already in the cart
    if(!this.checkInCart(item)){
      this.amount += 1;
      this.items.push(item);
      this.total = +this.total + +item.price;
    }
  }

  /**
   * 
   * @param {*} item The item to be removed from the cart 
   */
  removeFromCart(item){
    this.amount -= 1;
    this.items.splice(this.items.indexOf(item), 1);
    //if there is more then one item in the cart, then the total is updated
    if (this.amount > 0) {
      this.total = +this.total - +item.price;
    }else{
      this.total = 0;
    }
  }
}



const tabs = createBottomTabNavigator();

const App = () => {

  // the screens of the components
  const ProductsScreen = ({navigation}) => (<Products cart={cart} />)
  const MainScreen = ({navigation}) => (<Main />)
  const CartScreen = ({navigation}) => (<CartPage cart={cart} />)
  
  /**
  * The Navigation with a observer on the cart
  */
  const Navigation = observer(({cart}) => ( 
    <>
      <NavigationContainer>
        <tabs.Navigator initialRouteName='home'
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'home') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home';
              } else if (route.name === 'products') {
                iconName = focused
                  ? 'beer'
                  : 'beer-outline';
              } else if (route.name === 'cart') {
                iconName = focused
                  ? 'ios-cart'
                  : 'ios-cart';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            headerShown: false,
          })}



          tabBarOptions={{
            activeTintColor: 'skyblue',
            inactiveTintColor: 'gray',
          }}>
          <tabs.Screen name="home" component={MainScreen} />
          <tabs.Screen name="products" component={ProductsScreen} />
          <tabs.Screen name="cart" component={CartScreen} options={{tabBarBadge: cart.amount}} />
        </tabs.Navigator>
      </NavigationContainer>
    </>
  ))

  let cart = new Cart(); // Create a new cart


  return (
    <Navigation cart={cart} />
  );
}
export default App;
