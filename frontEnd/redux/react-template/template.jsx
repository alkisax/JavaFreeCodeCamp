const reducer2 = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store1 = Redux.createStore(reducer);

//2
const store2 = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
const currentState = store.getState()

//3
const action2 = {
  type: 'LOGIN'
}

//4
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
const actionCreator = () => action

//5
const store3 = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction2 = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store3.dispatch(loginAction());

//6
const defaultState2 = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  if (action.type === "LOGIN") {
    return state = {
      login: true
    } 
  } else {
    return state    
  }
  
  // Change code above this line
};

const store4 = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

//7
const defaultState3 = {
  authenticated: false
};

const authReducer2 = (state = defaultState3, action) => {
  // Change code below this line
  switch (action.type) {
    case 'LOGIN':
      return state = {
        authenticated: true
      }
    case 'LOGOUT':
      return state = {
        authenticated: false
      }
    default:
      return state
  }
  // Change code above this line
};

const store5 = Redux.createStore(authReducer);

const loginUser2 = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser2 = () => {
  return {
    type: 'LOGOUT'
  }
};

//8


const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'LOGIN': 
      return {
        authenticated: true
      }
    case 'LOGOUT': 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
