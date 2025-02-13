/*
redux part
first i declare empty initial text
then i declare a type of change "INPUT"
then i create a change funtion that has the inputed.text (this is send here from the react part)
i create the reducer that takes an (initial state and an action (from the change function)). It has a switch and if change is type INPUT it updates the store tex

react part
two classes. 
first class has a handle change takes change from html and passes it to redux store change function
on render has an onChange atribute that triggers and sends the change to redux

second class renders the changed text from redux

then some code to conect react and redux and to render to "editor" and "preview"
*/
/*
InputComponent:
When the user types in the input field, handleChange dispatches the changeInput action to update the Redux store with the new text.

Redux Store:
The inputReducer processes the dispatched action and updates the text in the store.

OutputComponent:
The OutputComponent retrieves the updated text from the Redux store (via mapStateToProps) and displays it.
*/
/*
User Input (textarea) --> handleChange (React) --> Dispatch action (Redux)
--> Action handled by reducer --> Store updated --> Re-render OutputComponent (React)
--> Display updated text (preview)
*/

function Editor({ markdown, setMarkdown }) {
  return (
    <textarea
      value={markdown}              
      onChange={(e) => setMarkdown(e.target.value)}  
      placeholder="Enter Markdown here..."
    />
  );
}

const defaultMarkdown = `
# Welcome to my Markdown Previewer!
## This is a sub-header...
[Link to FreeCodeCamp](https://www.freecodecamp.org)
\`Inline code example\`

\`\`\`
// This is a code block
function greet() {
  console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

**Bold text example**
`;


const initialState = {
  text: defaultMarkdown,
  html: marked.parse(defaultMarkdown),
};


const INPUT = "INPUT"

const changeInput = (input) => {  // 3. απο εδώ πάει στο inputReducer
  return {
    type: INPUT,
    text: input.text,
    html: marked.parse(input.text),
  }
}

//4. εδω (reducer/redux) ερχεται απο το changeInput (redux) <- handleChange (react)<- InputComponent (html)
const inputReducer = (state = initialState, action) => { 
  console.log("Reducer called with action:", action); // Log the action
  switch(action.type) {
    case INPUT:
      console.log("Updated state:", { text: action.text }); // Log the new state
      return {
        text: action.text,
        html: action.html,
      }
    default:
      return state
  }
}
const store = Redux.createStore(inputReducer)

store.subscribe(() => {
  console.log("Store state updated:", store.getState());
});

const Provider = ReactRedux.Provider
const connect = ReactRedux.connect

class InputComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  //  η αλλαγή στέλνετε στην μέθοδο του redux
  // παρακάτω θα κάνω το input να στέλνει κατευθείαν την αλλαγή εδώ
  // την αλλαγή στο markdown την έκανα εδώ γιατί αυτό είναι το κομμάτι του κωδικα που είναι υπεύθυνο για την αλλαγή
  handleChange = (event) => {
    console.log("Input value:", event.target.value); // Log the input value
    const markdownText = event.target.value;
    const htmlContent = marked.parse(markdownText);
    this.props.changeInput({ text: markdownText })    //2. απο εδώ πάει στο changeInput
  }
  // 1. απο εδώ πάει στο handleChange 
  render() {
    return (
      <div>
        <textarea id="editor" className="form-control" onChange={this.handleChange} value={this.props.text} /> 
      </div>      
    )
  }
}
class OutputComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="preview" className="bg-white border p-3" 
        dangerouslySetInnerHTML={{ __html: this.props.html }}>
      </div>
    );
  }
}

const editor = document.getElementById("editor")
const preview = document.getElementById("preview")

//connetion
const mapStateToPropsInput = (state) => ({
  text: state.text,
});

const mapDispatchToPropsInput = (dispatch) => ({
  changeInput: (input) => dispatch(changeInput(input)),
});

const ConnectedInputComponent = connect(mapStateToPropsInput, mapDispatchToPropsInput)(InputComponent);



const mapStateToPropsOutput = (state) => ({
  html: state.html,
})

const ConnectedOutputComponent = connect(mapStateToPropsOutput)(OutputComponent);

ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <ConnectedInputComponent />
      <ConnectedOutputComponent />
    </div>
  </Provider>,
  document.getElementById("root")
);

/*
*/
// class OutputComponent extends React.Component {
//   constructor(props) {
//     super(props)
//   }
  // αυτη η αλλαγή μου επετρεψε να περάσω τα βήματα 3 και 4
  // render() {
    
  //   console.log("OutputComponent render, props.text:", this.props.text); // Log props.text
  //   return (
  //     <div id="preview" className="bg-white border p-3">
  //       <p style={{ whiteSpace: 'pre-wrap' }}>
  //         {this.props.text}
  //       </p>
  //     </div>
  //   )
  // }


// render *2
// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedInputComponent />
//   </Provider>,
//   document.getElementById("editor")
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedOutputComponent />
//   </Provider>,
//   document.getElementById("preview")
// );