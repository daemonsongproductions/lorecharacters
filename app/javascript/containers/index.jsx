import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import LandingContainer from "./landing/landingContainer";
import HeaderContainer from "./header/headerContainer";

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


render(header, document.getElementById('lorecharacters-header'))
render(landing, document.getElementById('chargen-application-status'))

