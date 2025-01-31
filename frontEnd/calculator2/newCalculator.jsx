

class Keypad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  expressionFormater = (expression) => {
    const testExpression = "-12 *+ 3 /*+ -4 -5"
      let testResult = []
      let expComponent = ""

      let isNumRegex = /^[0-9]$/
      const charENUM = ["Num", "NaN"]
      let previousCharType = charENUM[1]
      let thisCharType = charENUM[1]

      for (const char of testExpression) {
        if (expComponent.length !== 0) {

          if (isNumRegex.test(char)) {
            thisCharType = charENUM[0]
          }

          if (thisCharType === previousCharType) {
            expComponent += char
          } else {
            testResult.push(expComponent)
            expComponent = char
            previousCharType = thisCharType
          }
        }

        if (isNumRegex.test(char)) {
          expComponent += char
          previousCharType = charENUM[0]
        } else {
          expComponent += char
          previousCharType = charENUM[1]
        }
      }
      testResult.push(expComponent); //add last component

    this.props.updateTestExpression(testExpression)
    return testExpression
  }
  componentDidMount(){
    this.expressionFormater()
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

class TestResulter extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container col-4">
        <div className="card shadow-sm border-0 rounded-3 p-3 text-center bg-light ">
          {this.props.testExpression}
        </div>
      </div>
    )
  }
}

class Displayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      testExpression: "",
    }
  }
  updateTestExpression = (newExpression) => {
    this.setState ({
      testExpression: newExpression
    })
  }
  handleChange = (event) => {

  }
  render() {
    return (
      <div>
        <TestResulter
          testExpression={this.state.testExpression}
        />
        <Keypad 
          testExpression={this.state.testExpression}
          updateTestExpression={this.updateTestExpression}
        />
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