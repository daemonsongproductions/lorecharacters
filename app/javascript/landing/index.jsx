import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {fetchDate} from './actions/landing'
import LandingContainer from "./components/landing/landingContainer";

let store = configureStore({
  time: Date.now()
})
store.dispatch(fetchDate());


const index = (
    <Provider store={store}>
      <LandingContainer/>
    </Provider>
);


render(index, document.getElementById('chargen-application-status'))

