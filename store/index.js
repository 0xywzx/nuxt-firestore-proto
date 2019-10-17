import firebase from '~/plugins/firebase'
const db = firebase.firestore();

const todoRef = db.collection('todos')


export const state = () => ({
  userUid: '',
  userName: '',
todos: []
})

export const mutations = {
  setUserUid(state,userUid) {
    state.userUid = userUid
  },
  setUserName(state,userName) {
    state.userName = userName
  },
addTodo(state, todo) {
  state.todos.push(todo)
}
}

export const actions = {
  login({ commit }) {
    console.log('login action')
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      const user = result.user;
      console.log('success : ' + user.uid + ' : ' + user.displayName)
      commit('setUserUid', user.uid)
      commit('setUserName', user.displayName)
    }).catch(function(error) {
      var errorCode = error.code;
      console.log('error : ' + errorCode)
    });
  },
 fetchTodos({ commit }) {
   todoRef
   .get()
   .then(res => {
     res.forEach((doc) => {
       console.log('success : ' + `${doc.id} => ${doc.data()}`);
       commit('addTodo', doc.data())
     })
   })
   .catch(error => {
     console.log('error : ' + error)
   })
 }
}

export const getters = {
  getUserUid(state) {
    return state.userUid
  },
  getUserName(state) {
    return state.userName
  },
 getTodos(state) {
   return state.todos
 }
}