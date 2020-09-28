import React from 'react'

import useStyle from './styles'
import { CardProps } from '../../types/componentTypes'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite'

const ProductTile = ({ product }: CardProps) => {
    const classes = useStyle()
    return (
        <Paper elevation={3} className={classes.root}>
            <div className={classes.imageBox} >
                <img className={classes.image} src={product.image} alt={`image of ${product.title}`} />
            </div>
            <div className={classes.info}  >
                <div className={classes.name} >
                    {product.title}
                </div>
                <div className={classes.price} >
                    {`${product.price}$`}
                </div>
            </div>
            <div className={classes.description} >
                <Typography>{product.description}</Typography>
            </div>
            <div className={classes.actions}  >
                <FavoriteIcon className={classes.fav} />
                <button className={classes.button}>Add to Cart</button>
            </div>

        </Paper>
    )
}

export default ProductTile
