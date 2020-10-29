import React from 'react'
import Paper from '@material-ui/core/Paper'

import sorry from '../../ASSETS/sorry.png'
import useStyles from './styles'

const Notfound = () => {
    const classes=useStyles()
    return (
        <Paper className={classes.paper} elevation={5}>
            <img alt='nofount clipart' className={classes.image} src={sorry}/>
            <h2 className={classes.text}>Oops!! we could not find any product. </h2>
        </Paper>
    )
}

export default React.memo(Notfound)
