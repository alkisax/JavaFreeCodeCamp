
class Keypad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons:  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "=", "+", "-", "*", "/", "AC"]
    }
  }
  handdleChange = (ButtonId) => {

/*
Here, this.props.onButtonClick is a callback function passed down from the parent (Displayer). It is not setting props directly; instead, it is calling the function provided by the parent. later:         
<Keypad onButtonClick={this.handleButtonClick} />
*/
    this.props.onButtonClick(ButtonId)
  }

  render() {
    return (
      <div>

      

        <div className="btn btn-secondary" id="1" onClick={() => {this.handdleChange("1")}}>
          1
        </div>

      </div>
    )
  }
}

class Displayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentButtonId: ""
    }
  }
  handleButtonClick = (buttonId) => {
    this.setState({
      currentButtonId: buttonId
    })
  }
  render() {
    return (
      <div>
        <Keypad onButtonClick={this.handleButtonClick} />
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

