import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, Switch } from 'react-router'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

//import Home from './components/Home';


//import rootReducer from './reducers/rootReducer'

injectTapEventPlugin();

//const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//<Provider store={store}>
//    <BrowserRouter>
//        <Switch>
//            <Route path="/index.html" component={Home} />
//            <Route path="/" component={Home} />
//        </Switch>
//    </BrowserRouter>
//</Provider>

ReactDOM.render(
    <MuiThemeProvider>
        <div>APPLICATION </div>
    </MuiThemeProvider>
    ,document.getElementById('react-app')
);