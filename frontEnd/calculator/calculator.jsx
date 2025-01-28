
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
    super(props);
    this.state = {
      showResult: false, // Track whether to show the result or the expression
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.expression !== prevProps.expression) {
      this.setState({
        showResult: false, // Show expression when input changes
      });
    }
    if (this.props.result !== prevProps.result) {
      this.setState({
        showResult: true, // Show result when "=" is pressed
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.showResult ? (
          // Result Box (shown only when "=" is pressed)
          <div id="display" className="card p-3 mb-3 bg-light">
            <p className="text-end fs-3 mb-0 font-monospace text-dark">
              {this.props.result}
            </p>
          </div>
        ) : (
          // Expression Box (shown for input)
          <div id="display" className="card p-3 mb-1 bg-light">
            <p className="text-end fs-4 mb-0 font-monospace text-muted">
              {this.props.expression.trim()}
            </p>
          </div>
        )}
      </div>
    );
  }
}

class Displayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expression: "",
      result: 0
    }
  }

  formater = (value) => {
    return String(value).replace(/\n/g, '').trim();
  }

  handleButtonClick = (value) => {
    console.log("Button received in Displayer:", value);
    
    value = this.formater(value)

    const { expression } = this.state;

    switch(value) {
      case "AC":
        this.setState({
          expression: "",
          result: 0
        });
        break;
        
      case "=":
        try {
          const result = eval(this.state.expression);
          if (!isNaN(result)) {
            this.setState({ 
              result: parseFloat(result),
              expression: String(parseFloat(result)) 
          });
          }

        } catch (error) {
          console.log("Invalid expression", error);
        }
        break;
        
      default:
        // Prevent multiple decimal points in a number
        if (value === ".") {
          const lastNumber = expression.split(/[\+\-\*\/]/).pop();
          if (lastNumber.includes(".")) {
            return;
          }
        }

        // Handle consecutive operators, keeping only the last one (excluding the negative sign)
        if (["+", "-", "*", "/"].includes(value)) {
          const lastChar = expression.slice(-1);

          // Allow "-" if it's part of a negative number
          if (value === "-" && ["+", "-", "*", "/"].includes(lastChar)) {
            if (expression.length > 1 && ["+", "*", "/"].includes(expression.slice(-2, -1))) {
              // Replace the last operator with the negative sign
              this.setState(prevState => ({
                expression: prevState.expression.slice(0, -1) + value
              }));
            } else {
              // Append "-" if it's valid
              this.setState(prevState => ({
                expression: prevState.expression + value
              }));
            }
            return;
          }

          // For other operators, replace the last operator with the new one
          if (["+", "-", "*", "/"].includes(lastChar)) {
            this.setState(prevState => ({
              expression: prevState.expression.slice(0, -1) + value
            }));
            return;
          }
        }


        // Prevent invalid starting characters
        if (expression === "" && ["+", "*", "/"].includes(value)) {
          return;
        }

        // Prevent invalid characters (though the keypad should already restrict this)
        if (!/[0-9+\-*\/.]/.test(value)) {
          return;
        }

        // Prevent a number from starting with multiple zeros
        const lastNumber = expression.split(/[\+\-\*\/]/).pop();
        if (lastNumber === "0" && value === "0") {
          return;
        }

        this.setState(prevState => ({
          expression: prevState.expression + String(value)
        }));
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <Display 
                expression={this.state.expression}
                result={this.state.result}
              />
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




// class Display extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       expression: "",
//       result: 0
//     }
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.expression !== prevProps.expression) {
//       this.setState({ 
//         expression: this.props.expression 
//       });
//     }
//     if (this.props.result !== prevProps.result) {
//       this.setState({ 
//         result: this.props.result 
//       });
//     }
//   }

//   render() {
//     return (
//       <div>
//         {/* Expression Box */}
//         <div className="card p-3 mb-1 bg-light">
//           <p className="text-end fs-4 mb-0 font-monospace text-muted">
//             {this.state.expression.trim()}
//           </p>
//         </div>
        
//         {/* Result Box */}
//         <div id="display" className="card p-3 mb-3 bg-light">
//           <p className="text-end fs-3 mb-0 font-monospace text-dark">
//             {this.state.result}
//           </p>
//         </div>
//       </div>
//     );
//   }
// }