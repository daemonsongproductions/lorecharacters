import moxios from 'moxios'
import ax from '../../packs/axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../containers/signin/actions'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

beforeEach(function () {
  moxios.install(ax)
});

afterEach(function () {
  moxios.uninstall(ax)
});


describe('signIn', function() {

  let store = mockStore(
      {
        signInState: {
          signingIn: null,
          formData: {
            email: 'test@test.com',
            password: 'password'
          }
        }
      });

  describe('success', function(){

    beforeEach(function () {
      moxios.stubRequest(`/users/sign_in.json`, {
        status: 200,
        response: {}
      });
    });

    it('submits a sign on request to the server', function() {

      const expectedActions = [
        { type: "SIGNING_IN", signingIn: true },
        { type: "SIGNED_IN" },
        { type: "SIGNING_IN", signingIn: false }
      ];
      return store.dispatch(actions.signIn()).then(() => {

        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);

        let request = moxios.requests.first();
        expect(request.url).toEqual(`/users/sign_in.json`);
        expect(request.config.method).toEqual('post');
        expect(JSON.parse(request.config.data).user.email).toEqual("test@test.com");
        expect(JSON.parse(request.config.data).user.password).toEqual("password");
      });
    });

    it('redirects back to home on success', function() {

      return store.dispatch(actions.signIn()).then(() => {
        expect(decodeURIComponent(window.location.href)).toBe('http://localhost/')
      });
    });

  });

});


describe('submitRegistration', function() {

  let store = mockStore(
      {
        signInState: {
          signingIn: null,
          formData: {
            email: 'test@test.com',
            password: 'password',
            confirmPassword: 'password'
          }
        }
      });

  describe('success', function(){

    beforeEach(function () {
      moxios.stubRequest(`/users.json`, {
        status: 200,
        response: {
          user_id: '1',
          errorMessage: null
        }
      });
    });

    it('submits a registration request to the server', function() {

      const expectedActions = [
        { type: "REGISTERING", registering: true },
        { type: "REGISTERED", userId: '1', errorMessage: null },
        { type: "REGISTERING", registering: false }
      ];
      return store.dispatch(actions.submitRegistration()).then(() => {

        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);

        let request = moxios.requests.first();
        expect(request.url).toEqual(`/users.json`);
        expect(request.config.method).toEqual('post');
        expect(JSON.parse(request.config.data).user.email).toEqual("test@test.com");
        expect(JSON.parse(request.config.data).user.password).toEqual("password");
        expect(JSON.parse(request.config.data).user.password_confirmation).toEqual("password");
      });
    });

    it('redirects back to home on success', function() {

      return store.dispatch(actions.submitRegistration()).then(() => {
        expect(decodeURIComponent(window.location.href)).toBe('http://localhost/')
      });
    });

  });

});