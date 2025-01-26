
class Keypad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons:  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "=", "+", "-", "*", "/", ".", "AC"]
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
      <div className="container">
        <div className="row"> 
          {this.state.buttons.map((button, index) => (
            <div
            key={index} 
            className="col-3 p-2"
            >
              <div 
              className="btn btn-secondary w-100 text-center p-3" 
              id={button} 
              onClick={() => {
                this.handdleChange(button)
                }}>
                {button}
              </div>
            </div> 
          ))}
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
    console.log(`endstate button id ${buttonId}`)
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

