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
  //Μεσα στον constructor props και state
  constructor(props) {
    super(props);
    // το state είναι ένα obj {}
    this.state = {
      input: '',
    }
    //πρεπει να γίνει bind το this σε όλες τις μεθόδους
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  //μέθοδοι, με setState μου αλλάζουν το state (Gpt: δεν θα έπρεπε αυτό να γίνετε μόνο στην Redux;)
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

//αυτα χρησιμοποιούντε στην έννωση react-redux (gpt: did not understand this part)
//mapStateToProps(state): Λέει στο React component ποια κομμάτια του Redux state θέλει να χρησιμοποιήσει. Στην περίπτωσή σου, όλο το state (ο πίνακας μηνυμάτων) μεταφέρεται ως prop (messages).

const mapStateToProps = (state) => {
  return {messages: state}
};

//mapDispatchToProps(dispatch): Συνδέει τις action creators με το React component. Δημιουργεί props, που όταν καλούνται, dispatch τα αντίστοιχα actions.
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

/*
1 Ο χρήστης πληκτρολογεί ένα μήνυμα στο input → αλλάζει το τοπικό state μέσω του handleChange.
2 Πατάει το κουμπί "Submit" → καλείται το submitMessage, που:
  Παίρνει το μήνυμα από το τοπικό state.
  Καλεί το submitNewMessage από τα props.
  Το submitNewMessage dispatch το action addMessage στο Redux store.
3 Ο reducer (messageReducer) προσθέτει το νέο μήνυμα στο state.
4 Το React ανανεώνεται με τα νέα props από το Redux store και εμφανίζει το μήνυμα στη λίστα.
*/