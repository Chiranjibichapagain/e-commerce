import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import DeleteIcon from "@material-ui/icons/Delete";

import { removeProduct } from '../../redux/actions'
import {CartItemsProps} from '../../types/componentTypes'
import useStyles from './styles'

const CartItem = ({ product, updateCount}: CartItemsProps) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)

    const handleDelete = (product: any) => {
        dispatch(removeProduct(product))
    }

    const handleCount = (value:any) => {
        setCount(value)
        updateCount(product._id, value)
    }

    return (
        <div className={classes.itemList}>
            <img alt={product.name} className={classes.image} src={product.image} />
            <h5 className={classes.name}>{product.name}</h5>
            <div className={classes.countDiv}>
            <p>Count</p>
            <input onChange={({target}:any)=>handleCount(target.value)} value={count} className={classes.count} type='number' min='1' />
            </div>
            <h4 className={classes.price}>{`${product.price*count}$`}</h4>
            <DeleteIcon onClick={()=>handleDelete(product)} className={classes.delete}/>
        </div>
    )
}

export default React.memo(CartItem)
