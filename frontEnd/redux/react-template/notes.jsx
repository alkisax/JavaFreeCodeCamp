// Basic Redux Example: Counter App
// This example demonstrates:

// Store - Centralized state.
// Action - Describes changes to the state.
// Reducer - Specifies how the state is updated based on actions.
// Dispatch - Sends actions to update the state.
 
// 1. Define Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// 2. Define Action Creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// 3. Define the Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// 4. Create the Store
const store = Redux.createStore(counterReducer);

// 5. Subscribe to Store Updates
store.subscribe(() => console.log('Current State:', store.getState()));

// 6. Dispatch Actions
store.dispatch(increment()); // Current State: 1
store.dispatch(increment()); // Current State: 2
store.dispatch(decrement()); // Current State: 1