import faker from 'faker';

export const state = () => ({
  posts: [],
});

export const mutations = {
  updatePosts(state, posts) {
    if (state.posts.length === 0) {
      state.posts = posts;
    }
  }
}

export const getters = {
  getPostById(state, getters) {
    return (id) => {
      const existing_post = state.posts.find((post) => {
        const result = `${post.id}` === `${id}`;
        return result;
      });
      return existing_post;
    }
  }
};

export const actions = {
  getPosts({commit}) {
    const fake_posts = [0,1,2,3,4].map((id) => {
      const summary = faker.lorem.paragraph(7);
      const rest = faker.lorem.paragraphs(20);
      const title = faker.lorem.words(3);

      const result = {
        id,
        title,
        preview: summary,
        content: `${summary} ${rest}`,
      };

      return result;
    });

    commit('updatePosts', fake_posts);
  }
}