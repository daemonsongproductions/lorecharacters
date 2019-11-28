import React from 'react'
import { render } from 'react-dom'
import LandingContainer from "./landing/landingContainer";
import HeaderContainer from "./header/headerContainer";
import SignInContainer from './signin/signInContainer';
import PlayerContainer from './player/playerContainer';
import AdminContainer from './admin/adminContainer';


const landing = (
      <LandingContainer/>
);

const header = (
      <HeaderContainer/>
);

const signin = (
      <SignInContainer/>
);

const player = (
      <PlayerContainer/>
);

const admin = (
    <AdminContainer/>
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

if(document.getElementById('lorecharacters-admin')) {
  render(admin, document.getElementById('lorecharacters-admin'));
}


