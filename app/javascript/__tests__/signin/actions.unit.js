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
        response: {
          shipments: [{id: 12345}]
        }
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

        let signInRequest = moxios.requests.first();
        expect(signInRequest.url).toEqual(`/users/sign_in.json`);
        expect(signInRequest.config.method).toEqual('post');
        expect(decodeURIComponent(window.location.href)).toBe('http://localhost/')
      });
    });

    it('redirects back to home on success', function() {

      return store.dispatch(actions.signIn()).then(() => {
        expect(decodeURIComponent(window.location.href)).toBe('http://localhost/')
      });
    });

  });

});