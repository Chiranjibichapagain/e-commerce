import React from 'react'

import {OrderItemsProps, Order} from '../../types/componentTypes'
import useStyles from './styles'

const OrderItem = ({data}:OrderItemsProps) => {
    const classes = useStyles()
    return (
        <div>
            {data.map((item:Order) =>
        <div key={item.productId} className={classes.mainDiv}>
          <div className={classes.dateDiv}>
            <span className={classes.heading}>Date</span>   
            <span className={classes.text}>{item.date}</span>   
          </div>
            <div className={classes.pidDiv}>
            <span className={classes.heading}>Product ID</span>   
            <span className={classes.text}>{item.productId}</span> 
          </div>
            <div className={classes.countDiv}>
            <span className={classes.heading}>Count</span>   
            <span className={classes.text}>{item.count}</span> 
          </div>
        </div>
            )}
        </div>
    )
}

export default React.memo(OrderItem)
