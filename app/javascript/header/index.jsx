import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {fetchDate} from './actions/header'
import HeaderContainer from "./components/headerContainer";

let store = configureStore({
  time: Date.now()
})
store.dispatch(fetchDate());


const index = (
    <Provider store={store}>
      <HeaderContainer/>
    </Provider>
);


render(index, document.getElementById('lorecharacters-header'))

