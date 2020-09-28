import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    body: {
        display: "block",
        width: '80vw',
        margin: '20px auto'
    },
    products: {
        display: 'flex',
        flexWrap: 'wrap'

    },

    '@media only screen and (max-width: 768px)': {
        body: {
            width: '100vw',

        },
        products: {
            justifyContent: 'center'
        }

    },

}))

export default useStyles
