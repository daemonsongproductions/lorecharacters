import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import LandingContainer from "./landing/landingContainer";
import HeaderContainer from "./header/headerContainer";
import SignInContainer from './signin/signInContainer';
import PlayerContainer from './player/playerContainer';

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

const player = (
    <Provider store={store}>
      <PlayerContainer/>
    </Provider>
);


render(header, document.getElementById('lorecharacters-header'));

if(document.getElementById('chargen-application-status')) {
  render(landing, document.getElementById('chargen-application-status'));
}
if(document.getElementById('lorecharacters-signin-form')) {
  render(signin, document.getElementById('lorecharacters-signin-form'));
}

if(document.getElementById('lorecharacters-player')) {
  render(player, document.getElementById('lorecharacters-player'));
}


