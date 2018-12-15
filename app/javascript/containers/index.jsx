import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import LandingContainer from "./landing/landingContainer";
import HeaderContainer from "./header/headerContainer";
import SignInContainer from './signin/signInContainer';

let store = configureStore({});


const landing = (
    <Provider store={store}>
      <LandingContainer/>
    </Provider>
);

const header = (
    <Provider store={store}>
      <HeaderContainer/>
    </Provider>
);

const signin = (
    <Provider store={store}>
      <SignInContainer/>
    </Provider>
);


render(header, document.getElementById('lorecharacters-header'));

if(document.getElementById('chargen-application-status')) {
  render(landing, document.getElementById('chargen-application-status'));
}
if(document.getElementById('lorecharacters-signin-form')) {
  render(signin, document.getElementById('lorecharacters-signin-form'));
}


