//12
const Citrus = () => {
  const JSX5 = (
    <div>
      <h2>Citrus Fruits</h2>
      <ul>
        <li>Orange</li>
        <li>Lemon</li>
        <li>Lime</li>
      </ul>
    </div>
  );
  return JSX5;
}

class NonCitrus extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    const JSX6 = (
      <div>
      <h2>Non Citrus Fruits</h2>
      <ul>
        <li>Banana</li>
        <li>Apple</li>
        <li>Pear</li>
      </ul>
    </div>
    );
    return JSX6
  }
}

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
        <NonCitrus />
        <Citrus />
        { /* Change code above this line */ }
      </div>
    );
  }
};
class Vegetables extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const JSX7 = (
      <div>
        <h2>Vegetables:</h2>
        <ul>
          <li>Carrot</li>
          <li>Broccoli</li>
          <li>Spinach</li>
        </ul>
      </div>
    );
    return JSX7;
  }
}


class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        <Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"))


//13
class MyComponent extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}
ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"))

//14
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date={Date()} />
        { /* Change code above this line */ }
      </div>
    );
  }
};
ReactDOM.render(<Calendar />,document.getElementById("challenge-node"))

//15
const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(", ")}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks={["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "workout", "learn Reract"]}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};
