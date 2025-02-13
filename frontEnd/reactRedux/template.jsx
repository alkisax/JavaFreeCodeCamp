// Redux:
// δίνουμε ένα όνομα μεταβλητής σε αυτό που θα είναι το όνομα της "αλλαγής" μας.
const ADD = 'ADD';

// αυτο είναι μια συνάρτηση που ορίζει την αλλαγή μας. έχει ένα obj με διαφορα πεδία. το πρωτο θα χρησιμοποιηθεί για τον έλεγχο του τι είδος αλλαγής είναι. Λεγετε "".
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

//Αυτός είναι ο reducer. παίρνει δύο παραμέτρους. την κατάσταση και την δράση (εδώ το addMessage) και συνήθως με switch ελέγχει αν είναι μια απο τις επιτρεπόμενες δράσεις. Aν είναι επιστρέφει τις αλλαγές. Ο reducer μπένει σαν παράμετρος στο store
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

//δημιουργώ το μοναδικό store
const store = Redux.createStore(messageReducer);

// React:
//αυτά χρησιμοποιούντε στην έννωση React/Rerdux (gpt add more)
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

//Εδω φτιάχνετε η βασική React κλασή. Στο τέλος θα προβληθεί με ReactDOM.render(<class />, document.getElementById("container"))
// Έχει extends, props, state, μεθόδους αλλαγής (Events handler) και στο τέλος render(){} που κάνει return html
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: '', 
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};

// // Redux:
// const ADD = 'ADD';

// const addMessage = (message) => {
//   return {
//     type: ADD,
//     message: message
//   }
// };

// const messageReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [
//         ...state,
//         action.message
//       ];
//     default:
//       return state;
//   }
// };

// const store = Redux.createStore(messageReducer);

// // React:
// class Presentational extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: '',
//       messages: []
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.submitMessage = this.submitMessage.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       input: event.target.value
//     });
//   }
//   submitMessage() {
//     this.setState((state) => {
//       const currentMessage = state.input;
//       return {
//         input: '',
//         messages: state.messages.concat(currentMessage)
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h2>Type in a new Message:</h2>
//         <input
//           value={this.state.input}
//           onChange={this.handleChange}/><br/>
//         <button onClick={this.submitMessage}>Submit</button>
//         <ul>
//           {this.state.messages.map( (message, idx) => {
//               return (
//                  <li key={idx}>{message}</li>
//               )
//             })
//           }
//         </ul>
//       </div>
//     );
//   }
// };

// // React-Redux:
// const mapStateToProps = (state) => {
//   return { messages: state }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     submitNewMessage: (newMessage) => {
//        dispatch(addMessage(newMessage))
//     }
//   }
// };

// const Provider = ReactRedux.Provider;
// const connect = ReactRedux.connect;

// // Define the Container component here:
// const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

// class AppWrapper extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     // Complete the return statement:
//     return (
//       <Provider store={store}>
//         <Container />
//       </Provider>
//     );
//   }
// };

