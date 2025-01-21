// Import React and ReactDOM libraries
// These libraries are necessary to use React components and render them to the DOM
import React from 'react';
import ReactDOM from 'react-dom';

// Define the main App component
class App extends React.Component {
  constructor(props) {
    super(props); // Pass props to the parent class (React.Component)

    // Initialize the state with default values
    this.state = {
      task: '', // Stores the current value of the input field (used for adding tasks)
      tasks: [], // An array that will hold the list of tasks
      showText: true, // A boolean to determine whether a message is shown or hidden
    };

    // Bind event handler methods to the class instance
    // This ensures `this` refers to the App component inside these methods
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.toggleText = this.toggleText.bind(this);
  }

  // Method to update the `task` in state when the input field changes
  handleInputChange(event) {
    this.setState({ task: event.target.value }); // Update state with the input field's current value
  }

  // Method to add a new task to the task list
  addTask() {
    if (this.state.task.trim()) {
      // Check if the task is not just empty spaces
      this.setState((state) => ({
        tasks: [...state.tasks, state.task], // Add the new task to the `tasks` array
        task: '', // Clear the input field after adding
      }));
    }
  }

  // Method to toggle the visibility of the message
  toggleText() {
    this.setState((state) => ({
      showText: !state.showText, // Reverse the current `showText` value (true -> false or false -> true)
    }));
  }

  // The `render` method defines what gets displayed on the screen
  render() {
    // Destructure state variables for cleaner usage in JSX
    const { task, tasks, showText } = this.state;

    // Return the JSX structure
    return (
      <div
        style={{
          fontFamily: 'Arial, sans-serif', // Apply a basic font family
          padding: '20px', // Add padding around the content
        }}
      >
        {/* Title of the app */}
        <h1>React Showcase</h1>

        {/* Section 1: To-Do List */}
        <section>
          <h2>To-Do List</h2>
          {/* Input field for entering tasks */}
          <input
            type="text" // Text input
            value={task} // Controlled component: the input value comes from state
            onChange={this.handleInputChange} // Call handleInputChange on input changes
            placeholder="Add a new task" // Placeholder text when the input is empty
            style={{ marginRight: '10px' }} // Add spacing to the right of the input
          />
          {/* Button to add the current task */}
          <button onClick={this.addTask}>Add</button>

          {/* Unordered list to display all tasks */}
          <ul>
            {tasks.map((item, index) => (
              <li key={index}>{item}</li> // Render each task as a list item
              // Use `index` as the key since tasks may not be unique
            ))}
          </ul>
        </section>

        {/* Horizontal rule to separate sections */}
        <hr />

        {/* Section 2: Toggle Message */}
        <section>
          <h2>Toggle Message</h2>
          {/* Button to toggle the message */}
          <button onClick={this.toggleText}>
            {/* Display "Hide" or "Show" based on the current state */}
            {showText ? 'Hide' : 'Show'} Message
          </button>
          {/* Conditionally render the message if `showText` is true */}
          {showText && <p>This is a toggled message!</p>}
        </section>
      </div>
    );
  }
}

// Get the root element from the HTML where the app will be rendered
const container = document.getElementById('root');

// Render the App component inside the root element
ReactDOM.render(<App />, container);



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