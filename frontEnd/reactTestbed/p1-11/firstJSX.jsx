const JSX1 = (
  <div>
    {/* test */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

const root = document.getElementById('root');
ReactDOM.render(JSX1, root);

const JSX2 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Add your code below this line
// ReactDOM.render(componentToRender, targetNode)
ReactDOM.render(JSX2, document.getElementById("challenge-node"))

// 5
const JSX3 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

// 6
const JSX4 = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

// 7
const MyComponent1 = function() {
  // Change code below this line
  const JSX = (
    <div>
      <br></br>
      test string!
    </div>
  );
  return JSX
  // Change code above this line
}
ReactDOM.render(<MyComponent1 />, document.getElementById("first-component"));

// 8
class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>
          Hello React!
        </h1>
      </div>
    );
    // Change code above this line
  }
};
ReactDOM.render(<MyComponent2 />, document.getElementById("second-component"))

// 9
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }

          <ChildComponent />

        { /* Change code above this line */ }
      </div>
    );
  }
};

ReactDOM.render(<ParentComponent />, document.getElementById("parent-component"))


//10
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits1 = () => {
  return (
    <div>
      { /* Change code below this line */ }
      <TypesOfFruit />
      { /* Change code above this line */ }
    </div>
  );
};

class TypesOfFood1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
          <Fruits1 />
        { /* Change code above this line */ }
      </div>
    );
  }
};
ReactDOM.render(<TypesOfFood1 />, document.getElementById("types-of-food1"))

//11
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
        { /* Change code below this line */ }
        <Fruits />
        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood/>, document.getElementById("types-of-food"));

//12

