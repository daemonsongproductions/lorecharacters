import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {fetchDate} from './actions/landing'
import LandingContainer from "./components/landing";

let store = configureStore({
  time: Date.now()
})
store.dispatch(fetchDate());


const landing = (
    <Provider store={store}>
      <LandingContainer/>
    </Provider>
);


render(landing, document.getElementById('chargen-application-status'))

