import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { COLORS } from './common/consts/colors'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { FONT_SIZE, FONT_WEIGHT } from './common/consts/fonts'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: COLORS.PINK,
        },
        secondary: {
            main: COLORS.BLUE,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 480,
            md: 768,
            lg: 1024,
            xl: 1200,
        },
    },
    typography: {
        h1: {
            fontFamily: 'BebasNeue',
            fontWeight: FONT_WEIGHT.LIGHT,
            fontSize: FONT_SIZE.LARGE,
            marginTop: 16,
            marginBottom: 16,
            paddingLeft: 16,
        },
    },
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
