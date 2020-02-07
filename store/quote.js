export const state = () => ({
  isDisplayEnabled: false,
  firstName: '',
  lastName: '',
  email: '',
});

export const mutations = {
  setDisplay(state, value ) {
    state.isDisplayEnabled = value;
  },
  setUserInfo(state, { firstName, lastName, email }) {
    state.firstName = firstName;
    state.lastName = lastName;
    state.email = email;
  },
}