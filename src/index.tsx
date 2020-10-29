import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"; 
import { Provider } from 'react-redux'
import { ThemeProvider } from "@material-ui/core";




import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import makeStore from './redux/store'
import MyTheme from "./mui-theme/myTheme";
import {InfoProvider} from './components/contextAPI/context'


const store = makeStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router>
        <InfoProvider>
        <ThemeProvider theme={MyTheme}>
      <App />
        </ThemeProvider>
        </InfoProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
