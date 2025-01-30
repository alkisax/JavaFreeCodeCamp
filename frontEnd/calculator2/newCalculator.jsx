

class Keypad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  expressionFormater = (expression) => {
    let part = ""
    let indexOfPart = 1
    const arrayOfParts = []
    const arrayOfOperators = []
    for (let char of expression) {
      for (let partChar of)
      if (char !== "-" && !/\d/.test(char) && indexOfPart){
        console.log("ERROR wrong expression")
      } else {
        part += char
      }
    }
  }
  render() {
    return (
      <div className="container col-4">
        <div className="btn col-3 bg-primary rounded-pill border-black w-100 text-center p-3" id="1">1</div>
        <div className="btn col-3 bg-primary rounded-pill border-black w-100 text-center p-3" id="2">2</div>
        <div className="btn col-3 bg-primary rounded-pill border-black w-100 text-center p-3" id="3">3</div>
        <div className="btn col-3 bg-primary rounded-pill border-black w-100 text-center p-3" id="4">4</div>
        <div className="btn col-3 bg-primary rounded-pill border-black w-100 text-center p-3" id="5">5</div>
        <div className="btn col-3 bg-primary rounded-pill border-black w-100 text-center p-3" id="6">6</div>
        <div className="btn col-3 bg-primary rounded-pill border-black w-100 text-center p-3" id="7">7</div>
        <div className="btn col-3 bg-primary rounded-pill border-black w-100 text-center p-3" id="8">8</div>
        <div className="btn col-3 bg-primary rounded-pill border-black w-100 text-center p-3" id="9">9</div>
        <div className="btn col-3 bg-primary rounded-pill border-black w-100 text-center p-3" id="0">0</div>
        <div className="btn col-3 bg-primary rounded-pill border-black w-100 text-center p-3" id="+">+</div>
        <div className="btn col-3 bg-primary rounded-pill border-black w-100 text-center p-3" id="-">-</div>
        <div className="btn col-3 bg-primary rounded-pill border-black w-100 text-center p-3" id="*">*</div>
        <div className="btn col-3 bg-primary rounded-pill border-black w-100 text-center p-3" id="/">/</div>
        <div className="btn col-3 bg-primary rounded-pill border-black w-100 text-center p-3" id="=">=</div>
        <div className="btn col-3 bg-primary rounded-pill border-black w-100 text-center p-3" id="AC">AC</div>
      </div>
    )
  }
}

class Displayer extends React.Component {
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
        <Keypad />
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