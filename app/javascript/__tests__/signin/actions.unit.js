// import moxios from 'moxios'
// import ax from '../../packs/axios'
// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import * as actions from '../../containers/signin/actions'
//
// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
//
// beforeEach(function () {
//   moxios.install(ax)
// });
//
// afterEach(function () {
//   moxios.uninstall(ax)
// });

describe('useless', function(){
  test('placeholder', function() {
    expect(1).toBe(1)
  })
});


// describe('signIn', function() {
//
//   let store = mockStore(
//       {
//         signInState: {
//           signingIn: null,
//           formData: {
//             email: 'test@test.com',
//             password: 'password'
//           }
//         }
//       });
//
//   describe('success', function(){
//
//     beforeEach(function () {
//       moxios.stubRequest(`/users/sign_in.json`, {
//         status: 200,
//         response: {}
//       });
//     });
//
//     test('submits a sign on request to the server', function() {
//
//       const expectedActions = [
//         { type: "SIGNING_IN", signingIn: true },
//         { type: "SIGNED_IN" },
//         { type: "SIGNING_IN", signingIn: false }
//       ];
//
//       moxios.wait(function() {
//         return store.dispatch(actions.signIn()).then(() => {
//           // return of async actions
//           expect(store.getActions()).toEqual(expectedActions);
//
//           let request = moxios.requests.first();
//           expect(request.url).toEqual(`/users/sign_in.json`);
//           expect(request.config.method).toEqual('post');
//           expect(JSON.parse(request.config.data).user.email).toEqual("test@test.com");
//           expect(JSON.parse(request.config.data).user.password).toEqual("password");
//           done();
//         });
//       });
//     });
//
//
//     test('redirects back to home on success', function() {
//
//       moxios.wait(function() {
//         return store.dispatch(actions.signIn()).then(() => {
//           expect(decodeURIComponent(window.location.href)).toBe('http://localhost/')
//           done()
//         });
//       });
//     });
//   });
//
//   describe('failure', function(){
//
//     beforeEach(function () {
//       moxios.stubRequest(`/users/sign_in.json`, {
//         status: 401,
//         response: {error: "Nope"}
//       });
//     });
//
//     test('passes the error message into the reducer', function() {
//
//       const expectedActions = [
//         { type: "SIGNING_IN", signingIn: true },
//         { type: "SIGN_IN_FAILURE", errorMessage: "Nope" },
//         { type: "SIGNING_IN", signingIn: false }
//       ];
//
//       moxios.wait(function() {
//         return store.dispatch(actions.signIn()).then(() => {
//           expect(store.getActions()).toEqual(expectedActions);
//           done();
//         });
//       });
//
//     });
//   });
// });
//
//
// describe('submitRegistration', function() {
//
//   let store = mockStore(
//       {
//         signInState: {
//           signingIn: null,
//           formData: {
//             email: 'test@test.com',
//             password: 'password',
//             confirmPassword: 'password'
//           }
//         }
//       });
//
//   describe('success', function(){
//
//     beforeEach(function () {
//       moxios.stubRequest(`/users.json`, {
//         status: 200,
//         response: {
//           user_id: '1',
//           errorMessage: null
//         }
//       });
//     });
//
//     test('submits a registration request to the server', function() {
//
//       const expectedActions = [
//         { type: "REGISTERING", registering: true },
//         { type: "REGISTERED", userId: '1', errorMessage: null },
//         { type: "REGISTERING", registering: false }
//       ];
//
//       moxios.wait(function() {
//         return store.dispatch(actions.submitRegistration()).then(() => {
//
//           // return of async actions
//           expect(store.getActions()).toEqual(expectedActions);
//
//           let request = moxios.requests.first();
//           expect(request.url).toEqual(`/users.json`);
//           expect(request.config.method).toEqual('post');
//           expect(JSON.parse(request.config.data).user.email).toEqual("test@test.com");
//           expect(JSON.parse(request.config.data).user.password).toEqual("password");
//           expect(JSON.parse(request.config.data).user.password_confirmation).toEqual("password");
//           done();
//         });
//       });
//
//     });
//
//     test('redirects back to home on success', function() {
//
//       moxios.wait(function() {
//         return store.dispatch(actions.submitRegistration()).then(() => {
//           expect(decodeURIComponent(window.location.href)).toBe('http://localhost/')
//           done();
//         });
//       });
//
//     });
//
//   });
//
//   describe('failure', function(){
//
//     beforeEach(function () {
//       moxios.stubRequest(`/users.json`, {
//         status: 401,
//         response: {message: "Nope"}
//       });
//     });
//
//     it('passes the error message into the reducer', function() {
//
//       const expectedActions = [
//         { type: "REGISTERING", signingIn: true },
//         { type: "REGISTRATION_FAILURE", errorMessage: "Nope" },
//         { type: "REGISTERING", signingIn: false }
//       ];
//
//       moxios.wait(function() {
//         return store.dispatch(actions.submitRegistration()).then(() => {
//           expect(store.getActions()).toEqual(expectedActions);
//           done();
//         });
//       });
//
//     });
//   });
//
//});