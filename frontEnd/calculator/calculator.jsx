
class Keypad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons:  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "=", "+", "-", "*", "/", ".", "AC"]
    }
  }
  handdleChange = (value) => {
/*
Here, this.props.onButtonClick is a callback function passed down from the parent (Displayer). It is not setting props directly; instead, it is calling the function provided by the parent. later:         
<Keypad onButtonClick={this.handleButtonClick} />
*/
    console.log("Button pressed in Keypad:", value); 
    this.props.onButtonClick(value)
  }

  render() {
    return (
      <div className="container">
        {/* First Row: / * - */}
        <div className="row">
          <div className="col-3 p-2">
            <div
              className="btn btn-warning w-100 text-center p-3"
              id="divide"
              onClick={() => this.handdleChange("/")}
            >
              {this.state.buttons[14]}
            </div>
          </div>
          <div className="col-3 p-2">
            <div
              className="btn btn-warning w-100 text-center p-3"
              id="multiply"
              onClick={() => this.handdleChange("*")}
            >
              {this.state.buttons[13]}
            </div>
          </div>
          <div className="col-3 p-2">
            <div
              className="btn btn-warning w-100 text-center p-3"
              id="subtract"
              onClick={() => this.handdleChange("-")}
            >
              {this.state.buttons[12]}
            </div>
          </div>
        </div>
  
        {/* Second Row: + AC (2 positions) */}
        <div className="row">
          <div className="col-3 p-2">
            <div
              className="btn btn-warning w-100 text-center p-3"
              id="add"
              onClick={() => this.handdleChange("+")}
            >
              {this.state.buttons[11]}
            </div>
          </div>
          <div className="col-6 p-2">
            <div
              className="btn btn-danger w-100 text-center p-3"
              id="clear"
              onClick={() => this.handdleChange("AC")}
            >
              {this.state.buttons[16]}
            </div>
          </div>
        </div>
  
        {/* Third Row: 7 8 9 */}
        <div className="row">
          <div className="col-3 p-2">
            <div
              className="btn btn-secondary w-100 text-center p-3"
              id="seven"
              onClick={() => this.handdleChange(7)}
            >
              {this.state.buttons[7]}
            </div>
          </div>
          <div className="col-3 p-2">
            <div
              className="btn btn-secondary w-100 text-center p-3"
              id="eight"
              onClick={() => this.handdleChange(8)}
            >
              {this.state.buttons[8]}
            </div>
          </div>
          <div className="col-3 p-2">
            <div
              className="btn btn-secondary w-100 text-center p-3"
              id="nine"
              onClick={() => this.handdleChange(9)}
            >
              {this.state.buttons[9]}
            </div>
          </div>
        </div>
  
        {/* Fourth Row: 4 5 6 */}
        <div className="row">
          <div className="col-3 p-2">
            <div
              className="btn btn-secondary w-100 text-center p-3"
              id="four"
              onClick={() => this.handdleChange(4)}
            >
              {this.state.buttons[4]}
            </div>
          </div>
          <div className="col-3 p-2">
            <div
              className="btn btn-secondary w-100 text-center p-3"
              id="five"
              onClick={() => this.handdleChange(5)}
            >
              {this.state.buttons[5]}
            </div>
          </div>
          <div className="col-3 p-2">
            <div
              className="btn btn-secondary w-100 text-center p-3"
              id="six"
              onClick={() => this.handdleChange(6)}
            >
              {this.state.buttons[6]}
            </div>
          </div>
        </div>
  
        {/* Fifth Row: 1 2 3 */}
        <div className="row">
          <div className="col-3 p-2">
            <div
              className="btn btn-secondary w-100 text-center p-3"
              id="one"
              onClick={() => this.handdleChange(1)}
            >
              {this.state.buttons[1]}
            </div>
          </div>
          <div className="col-3 p-2">
            <div
              className="btn btn-secondary w-100 text-center p-3"
              id="two"
              onClick={() => this.handdleChange(2)}
            >
              {this.state.buttons[2]}
            </div>
          </div>
          <div className="col-3 p-2">
            <div
              className="btn btn-secondary w-100 text-center p-3"
              id="three"
              onClick={() => this.handdleChange(3)}
            >
              {this.state.buttons[3]}
            </div>
          </div>
        </div>
  
        {/* Sixth Row: . 0 (2 positions) */}
        <div className="row">
          <div className="col-3 p-2">
            <div
              className="btn btn-secondary w-100 text-center p-3"
              id="decimal"
              onClick={() => this.handdleChange(".")}
            >
              {this.state.buttons[15]}
            </div>
          </div>
          <div className="col-6 p-2">
            <div
              className="btn btn-secondary w-100 text-center p-3"
              id="zero"
              onClick={() => this.handdleChange(0)}
            >
              {this.state.buttons[0]}
            </div>
          </div>
        </div>
  
        {/* Seventh Row: = (3 positions) */}
        <div className="row">
          <div className="col-9 p-2">
            <div
              className="btn btn-success w-100 text-center p-3"
              id="equals"
              onClick={() => this.handdleChange("=", this.state.buttons[10])}
            >
              {this.state.buttons[10]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      function: "test function 2+3",
      result: 5
    }
  }
  handleButtonDisplayChange = (event) => {
    console.log("Button value in Display:", this.props.value);
    switch (this.props.value){
      case "AC":
        this.state.function = ""
        this.state.result = 0
        break
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case "+":
        case "-":
        case "*":
        case "/":
        case ".":
            this.functionCreator(this.props.value);
            break;
          case "=":
            TODO
            break;
      default:
        console.log("ERROR")
    }
  }
  functionCreator = (buttonId) => {
    this.state.function = this.state.function + buttonId
  }
  render() {
    // when props is changed it has to be called
    this.handleButtonDisplayChange(this.props.currentButtonId);
    return (
      <div>
        <div id="display" className="card p-3 mb-3 bg-light">
          <p id="displayEquotation" className="text-end fs-3 mb-0 font-monospace text-muted">
            {this.state.function}
          </p>
          <p id="displayResult" className="text-end display-4 fw-bold mb-0 font-monospace ">
            {this.state.result}
          </p>
        </div>
      </div>
    )
  }
}

class Displayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }
  handleButtonClick = (value) => {
    console.log("Button received in Displayer:", value);
    this.setState({
      value: value
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-9">
            <Display value={this.state.value} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
            <Keypad onButtonClick={this.handleButtonClick} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <Displayer />
  </div>,
  document.getElementById("calculator")
)

class BoilerPlate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  handleChange = (event) => {

  }
  render() {
    return (
      <div>

      </div>
    )
  }
}

      // <div className="container">
      //   <div className="row"> 
      //     {this.state.buttons.map((button, index) => (
      //       <div
      //       key={index} 
      //       className="col-3 p-2"
      //       >
      //         <div 
      //         className="btn btn-secondary w-100 text-center p-3" 
      //         id={button} 
      //         onClick={() => {
      //           this.handdleChange(button)
      //           }}>
      //           {button}
      //         </div>
      //       </div> 
      //     ))}
      //   </div>
      // </div>