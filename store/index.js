const state = () => ({
    token: null,
    posts: [],
    name: null,
    email: null,
    post: [],
    comments: [],
    userid: null,
    errMsg: null,
    postId: null,



  })

const getters = {}

const mutations = {
    setUser(state, data) {
      state.token = data.token
      state.userid = data.id
      state.email = data.email
      state.name = data.name
    },
    setList(state, data) {
      state.posts = data
    },
    setPost(state, data) {
      state.post = (data)
    },
    setComments(state, data) {
      state.comments = data
    },
    updateName(state, data) {
      state.name = data
    },
    updatePost(state, data){
      state.post.title = data
    },
    setError(state, data){
      state.errMsg = data
    },
    setPostId(state , data){
      state.postId = data

    }



}
const actions = {
    async login({ commit }, data) {
      try{
      const res = await this.$axios.post('user/login', data);
      commit('setUser', res.data)
      this.$axios.setHeader('Authorization', 'Bearer ' + res.data.token)
      }
      catch(error){
        if(error.response.data)
        {
          commit('setError',error.response.data)
        }

      }
    },


    async register({ commit }, data)
    {
      console.log(data)
      const res = await this.$axios.post('user', data)

    },

    async getPosts({ commit, state }) {
        const res = await this.$axios.get('post')
        commit('setList', res.data)
   },

  async getPost({ commit, state },data) {
    console.log(state.postId)
     const res = await this.$axios.get('post/' + state.postId)
     commit('setPost', res.data)
},
  async addPost({ commit }, data) {
        await this.$axios.post('post', {
          title: data,
        })
    },
    async getComments({ commit, state }, data) {
      const res = await this.$axios.get('comment/' + state.post.id)
      commit('setComments', res.data)
  },
  async updateName({ state }, data) {
    const res =await this.$axios.put('user',{name: data});
  },
  async createComment({commit,state}, data){
    const res = await this.$axios.post('comment/'+state.post.id, {commentText: data});
  },
  async deleteComment({}, data){
    const res = await this.$axios.delete('comment/'+data);
  },
  async updatePost({state}, data){
    const res = await this.$axios.put('post/'+state.post.id, {title: data});
  },
  async deletePost({state},data){
    const res = await this.$axios.delete('post/'+data);
  }
}

export default {
    state,
    getters,
    mutations,
    actions,
  }

