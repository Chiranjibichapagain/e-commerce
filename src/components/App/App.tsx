import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getData, addProduct, removeProduct } from '../../redux/actions'
import ProductTile from '../ProductTile'
import UserRegistration from '../UserRegistration';
import UserLogin from "../UserLogin";
import useStyle from './styles'


const App = () => {

  const classes = useStyle()

  const tryItem = [
    {
      id: 1,
      title: "Fjallraven Backpack",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
      id: 2,
      title: "Fjallraven Backpack",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
      id: 3,
      title: "Fjallraven Backpack",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
      id: 4,
      title: "Fjallraven Backpack",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    }
  ]

  return (
    <>
      <div className={classes.body}>
        <UserLogin/>
        {/* <UserRegistration/> */}
        {/* <div className={classes.products} >
          {tryItem && tryItem.map(product => <ProductTile product={product} />)}
        </div> */}
      </div>

    </>
  );
}

export default App;
