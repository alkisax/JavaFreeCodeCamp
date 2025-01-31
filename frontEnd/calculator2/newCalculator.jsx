

class Keypad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  expressionComponentSpliter = (expression) => {
    const testExpression = "-12 *+ 3 /*+ -4 -5"
    let expressionComponents = []
    let expComponent = ""

    let isNumRegex = /^[0-9]$/
    let isOperatorRegex = /^[-+*/]$/;

    const charENUM = ["Num", "NaN", "none"]
    let previousCharType = charENUM[2]
    let thisCharType = charENUM[2]

    for (const char of testExpression) {
      if (isNumRegex.test(char)) {
        thisCharType = charENUM[0]
      } else {
        thisCharType = charENUM[1]
      } 

      if (thisCharType === previousCharType) {
        expComponent += char
      } else {
        if (expComponent.length !== 0) {
          expressionComponents.push(expComponent)
        }
        expComponent = char
        previousCharType = thisCharType
      }
    }
    expressionComponents.push(expComponent); //add last
    console.log(expressionComponents)

  // this.props.updateTestExpression(testExpression)
  const unaryExpComponents = this.expressionUnaryFixer(expressionComponents)
  this.props.updateTestExpression(unaryExpComponents)
  return expressionComponents
  }

  expressionUnaryFixer = (expressionComponents) => {
    //trim expression components
    expressionComponents = expressionComponents.map(component => component.replaceAll(" ", ""));
    console.log("after trim : ", expressionComponents)


    const isNumRegex = /^[0-9]$/
    const isOperatorRegex = /^[+\-*/]+$/;
    for (let i = 0; i < expressionComponents.length; i++){
      console.log("checking component: ", expressionComponents[i])
      //if is an oparator component
      if (isOperatorRegex.test(expressionComponents[i])) {
        console.log("its indeed operator component: ",expressionComponents[i])
        // if oparator component has only one oparator
        if (expressionComponents[i].length === 1) {
          // if has only one but its the first then its a - and convert it to unary oparator
          if (i === 0 && expressionComponents[i][0] == "-"){
            expressionComponents[i+1] = "-" + expressionComponents[i+1] // add - to next(i+1)  number set
            expressionComponents.splice(0,1) // remove the first element
            i--; // Adjust index after splicing
          } else if (i !== 0 && expressionComponents[i][0] == "-") {
            continue //leave it as it is
          }
        // now check if its a bunch of oparators if it finishes in - like +-*/*-+-
        } else if (expressionComponents[i].length !== 1){
          console.log("found banch of operators ", expressionComponents[i])
          // checks the i-th componenents last oparator
          if (expressionComponents[i][expressionComponents[i].length - 1] === "-") {
            // Ensure next element exists
            // if (i + 1 < expressionComponents.length){
            //   TODO
            // }
            console.log("expressionComponents[i+1] ",expressionComponents[i+1])
            expressionComponents[i+1] = "-" + expressionComponents[i+1]
            // Remove the last character from the operator sequence
            console.log("expressionComponents[i] ",expressionComponents[i])
            expressionComponents[i] = expressionComponents[i].slice(0, -1);
            // expressionComponents[i] = expressionComponents[i].slice(0,expressionComponents[i].length - 1)
          } else {
            continue
          }
        }
      }
      // console.log(i)
    }
    const unaryExpComponents = expressionComponents
    console.log(unaryExpComponents)
    return unaryExpComponents
  }

  expressionFormater = (expression) => {
    this.expressionComponentSpliter(expression)
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