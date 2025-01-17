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
ReactDOM.render(<ToDo />, document.getElementById("challenge-node"))

//16
const ShoppingCart1 = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
ShoppingCart1.defaultProps = {
  items: 0 
};

//17
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity={10} />
    { /* Change code above this line */ }
  }
};
ReactDOM.render(<ShoppingCart />, document.getElementById("challenge-node"));

/**
 * 18
 */

// const Items = (props) => {
//   return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
// };

// // Change code below this line
// Items.propTypes = {
//   quantity: PropTypes.number.isRequired
// }
// // Change code above this line

// Items.defaultProps = {
//   quantity: 0
// };

// class ShoppingCart extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <Items />
//   }
// };

/**
 * 19
 */
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Cthulhu"/>
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};

/**
 * 20
 */

import PropTypes from 'prop-types';
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line
class Camper extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <p>
        {this.props.name}
      </p>
    );
  }
}

Camper.defaultProps = {
  name:'CamperBot'
}

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(<CampSite />, document.getElementById("challenge-node"));

