import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {fetchAccountInfo} from './actions/header'
import HeaderContainer from "./components/headerContainer";

let store = configureStore({
  email: null,
  username: null
});
store.dispatch(fetchAccountInfo());


const index = (
    <Provider store={store}>
      <HeaderContainer/>
    </Provider>
);


render(index, document.getElementById('lorecharacters-header'))

