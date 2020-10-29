import { createMuiTheme } from '@material-ui/core/styles'

const MyTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#5DFF77',
            main: '#44B200',
            dark: '#006610',
            contrastText: '#fff',
        },
        secondary: {
            main: '#014DFF',
        },
        error: {
            main: '#E1CC00',
        },
        success: {
            main: '#AF00E1',
        },
        warning: {
            main: '#E10E00',
        },
        text: {
            primary: '#0055E3',
            secondary: '#E3007C',
        },
        
    },
    
    
})

export default MyTheme