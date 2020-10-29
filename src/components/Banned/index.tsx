import React from 'react'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';


import badboy from '../../ASSETS/badboy.png'
import useStyles from './styles'

const Banned = () => {
    const classes=useStyles()
    return (
        <div>
        <Link to='/'>
            <ArrowBackRoundedIcon className={classes.backArrow}/>
        </Link>
        <Paper className={classes.paper} elevation={0}>
            <img alt='bad boy cap' className={classes.image} src={badboy}/>
            <h3 className={classes.text}>You are banned! sorry about that!</h3>
        </Paper>
        </div>
    )
}

export default React.memo(Banned)
