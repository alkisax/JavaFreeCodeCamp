const initialState = { text: "" };

const INPUT = "INPUT";

const changeInput = (text) => ({
  type: INPUT,
  text,
});

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT:
      return { text: action.text };
    default:
      return state;
  }
};

const store = Redux.createStore(inputReducer);
store.subscribe(() => console.log("Store state updated:", store.getState()));

const { Provider, connect } = ReactRedux;

class InputComponent extends React.Component {
  handleChange = (event) => {
    this.props.changeInput(event.target.value);
  };

  render() {
    return (
      <textarea
        id="editor"
        className="form-control"
        onChange={this.handleChange}
      />
    );
  }
}

class OutputComponent extends React.Component {
  render() {
    return (
      <div id="preview">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeInput: (text) => dispatch(changeInput(text)),
});

const mapStateToProps = (state) => ({
  text: state.text,
});

const ConnectedInputComponent = connect(null, mapDispatchToProps)(InputComponent);
const ConnectedOutputComponent = connect(mapStateToProps)(OutputComponent);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ConnectedInputComponent />
      <ConnectedOutputComponent />
    </div>
  </Provider>,
  document.getElementById("root") // Use a single root container
);
