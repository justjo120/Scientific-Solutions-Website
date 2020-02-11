export const state = () => ({
  hello: "world"
});

export const mutations = {
  setName(state, name) {
    state.hello = name;
  }
};
