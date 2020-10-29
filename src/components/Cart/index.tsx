import React, {useState, useEffect} from "react";
import { useSelector} from 'react-redux'

import CartItem from '../CartItem'
import { checkout } from '../../services/checkoutService'
import {CartProps} from '../../types/componentTypes'
import useStyles from "./styles";

const Cart = ({ setOpen, token }:CartProps) => {
  const classes = useStyles();
  const products = useSelector((state: any) => state.product.inCart);
  const [data, setData] = useState<object[]>([])

  useEffect(() => {
    createData(products)
  }, [products])

  const total = data.reduce((acc:number, val:any) => {
    return acc + (parseInt(val.price)*val.count);
  }, 0);

  const handleCheckout = () => {
    const info = {
      token,
      products:data
    }
    checkout(info)
    setOpen(false)
  }

  const createData = (products: any) => {
    const today= new Date()
    let newData:object[] = []
    products.map((product: any) => {
      const newObj = {
        productId: product._id,
        price:product.price,
        count: 1,
        date:today.getFullYear()+'-'+today.getMonth()+'-'+today.getDate()+'/'+today.getHours()+':'+today.getMinutes()
      }
      newData.push(newObj)
      return newObj
    })
    setData(newData)
  }
  
  const updateCounts = (id: string, cnt: number) => {
    const newdata = data.map((product: any) => product.productId === id ? { ...product, count: cnt } : product)
    setData(newdata)
  }

  return (
    <div className={classes.root}>
      <div className={classes.pTop}>
        <h4 className={classes.close} onClick={()=>setOpen(false)} >X</h4>
        <h1 className={classes.heading}>Your Cart</h1>
      </div>
      {products && products.length === 0 ? <h4 className={classes.info} >Your Cart is empty, Nothing to checkout</h4> :
        products.map((product: any) => (
          <CartItem key={product._id} product={product} updateCount={updateCounts} />
        ))
      }
      {products.length > 0 &&
        <div className={classes.actions}>
        <button onClick={handleCheckout} className={classes.checkout}>Checkout</button>
        <span className={classes.total}>{`Total=> ${total}$`}</span>
      </div>
      }
    </div>
  );
};

export default React.memo(Cart);
