import ax from '../../packs/axios'

export const signUserOut = () => (dispatch, getState) => {

  return ax.delete('/users/sign_out.json')
      .then(response => {
        window.location.href="/"
      })

};