/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
/* ------------------------------ React Native ------------------------------ */
import {NativeRouter, Route, Routes, Animated} from 'react-router-native';

/* ------------------------------- Components ------------------------------- */
import Main from './components/Main';
import NavPanel from './components/NavPanel';
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

const App = () => {
  
  let cart = new Cart(); // Create a new cart

  return (
    <>
      <NativeRouter>
        <SafeAreaView style={styles.MainContainer}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<Products cart={cart} />} />
            <Route path="/cart" element={<CartPage cart={cart} />} />
          </Routes>
          {/* The navigition panel */}
          <NavPanel cart={cart}/> 
          
        </SafeAreaView>    
      </NativeRouter>
    </>
  );
};
export default App;
