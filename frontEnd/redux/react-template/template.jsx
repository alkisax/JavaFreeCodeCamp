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

const reducer3 = (state = defaultState, action) => {
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


const defaultState4 = {
  authenticated: false
};
const LOGIN2 = 'LOGIN'
const LOGOUT2 = 'LOGOUT'

const authReducer3 = (state = defaultState4, action) => {

  switch (action.type) {
    case LOGIN2: 
      return {
        authenticated: true
      }
    case LOGOUT2: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store6 = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};

//9
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store7 = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
const counter = () => {
   count += 1
}
store.subscribe(counter)

// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

//10
const INCREMENT2 = 'INCREMENT';
const DECREMENT2 = 'DECREMENT';

const counterReducer2 = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT2:
      return state + 1;
    case DECREMENT2:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

// state = {
//   count: 0,
//   auth: {
//     authenticated: false
//   }
// }

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
})
// Define the root reducer here

const store8 = Redux.createStore(rootReducer);

//11
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return state = action.text
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note
  }
  // Change code above this line
};

const store9 = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

//12
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    dispatch(requestingData())
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
    dispatch(receivedData(data))
    }, 2500);
  }
};

const defaultState5 = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState5, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store10 = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

//13!!!!!!!!!!!!!!
const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DEREMENT'; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default: 
      return state
  }
}
// Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => ({
  type: INCREMENT
}); // Define an action creator for incrementing

const decAction = () => ({
  type: DECREMENT
}); // Define an action creator for decrementing

const store11 = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers

//14
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer2 = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo2 = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store12 = Redux.createStore(immutableReducer);

//15
const immutableReducer3 = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      return [...state, action.todo];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store13 = Redux.createStore(immutableReducer);

//16
const immutableReducer4 = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      return [...state] - [action.todo];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store14 = Redux.createStore(immutableReducer);

//17
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return 
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);