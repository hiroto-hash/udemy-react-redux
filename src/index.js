import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import reducer from './reducers';
import EventsIndex from "./components/event_index";
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from 'redux-devtools-extension'

const enhancer = process.env.NODE_ENV === 'development' ?
 composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk) 
//thunk->アクションの代わりに関数返せる
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* MVCのroute */}
        <Route path ='/events/new' component={EventsNew} />
        <Route path ='/events/:id' component={EventsShow} />
        <Route path ='/' component={EventsIndex} />
        <Route path ='/events' component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
