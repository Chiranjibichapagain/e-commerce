import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "350px",
        boxShadow: "0px 0px 6px #848383",
        borderRadius: "8px",
        margin: "20px",
    },


    imageBox: {
        display: "flex",
        justifyContent: "center",
        marginButton: "5px"

    },
    image: {
        maxWidth: "350px",
        maxHeight: "150px"
    },

    info: {
        margin: '30px 10px 10px 10px',
        borderTop: "1.5px solid grey",
        padding: '15px 10px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: '18px'
    },

    price: {
        fontWeight: 'bold'
    },

    description: {
        padding: '10px 15px'
    },


    actions: {
        borderRadius: '0px 0px 6px 6px',
        backgroundColor: 'grey',
        position: 'relative',
        top: '28px',
        padding: '10px',
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    fav: {
        fontSize: "40px",
        color: 'red',
        '&:hover': {
            color: 'green',
        }
    },

    button: {
        backgroundColor: "orangered",
        border: 'none',
        padding: '10px',
        borderRadius: '4px',
        fontWeight: 'bold',

    },

    '@media only screen and (max-width: 768px)': {
        root: {
            width: '80vw',
        },

    },


}))

export default useStyles
