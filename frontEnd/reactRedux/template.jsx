class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitMessage= this.submitMessage.bind(this)
  }

  handleChange(event) {
    this.setState ({
      input: event.target.value,
    })
  }
  submitMessage(event){
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: ""
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input 
          type="text" 
          onChange={this.handleChange}
          value={this.state.input}
          />
        <button onClick={this.submitMessage}>Add Message</button>
        <ul>
          {this.state.messages.map(message => (
            <li key={message}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
};

/**
 * 
 */
const ADD = 'ADD'

const addMessage = (message) => ({
  type: ADD,
  message: message
})

const messageReducer = (state = [], action) => {
  switch(action.type) {
    case ADD:
      return [...state, action.message]
    default:
      return state
  }
};

const store = Redux.createStore(messageReducer)