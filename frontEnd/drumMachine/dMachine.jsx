class Buttons extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {

    // }
    // this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (event, buttonID) => {
    console.log(event)
    const audioElement = document.getElementById(event)
    if (audioElement){
      audioElement.play()
    } else {
      console.log("ERROR: unknown key")
    }

    // Call the onButtonClick function passed as a prop
    this.props.onButtonClick(buttonID);
  }

  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      const key = event.key.toUpperCase();
      switch (key) {
        case "Q":
          this.handleChange("Q", "Heater1");
          break;
        case "W":
          this.handleChange("W","Heater2");
          break;
        case "E":
          this.handleChange("E", "Heater3");
          break;
        case "A":
          this.handleChange("A", "Heater4");
          break;
        case "S":
          this.handleChange("S", "Clap");
          break;
        case "D":
          this.handleChange("D", "Open-HH");
          break;
        case "Z":
          this.handleChange("Z", "Kick-n-Hat");
          break;
        case "X":
          this.handleChange("X", "Kick");
          break;
        case "C":
          this.handleChange("C", "Closed-HH");
          break;
        default:
          console.log("ERROR: Unknown key");
          return;
      }
    })
  }

  render() {
    return (
      <div className="container text-center">
        <div className="row">
          {/* Row 1 */}
          <div className="col-4 p-2">
            <div
              className="drum-pad bg-primary text-white p-5 rounded"
              id="Heater1"
              onClick={() => this.handleChange("Q", "Heater1")}
            >
              Q
              <audio id="Q" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>
            </div>
          </div>

          <div className="col-4 p-2">
            <div
              className="drum-pad bg-success text-white p-5 rounded"
              id="Heater2"
              onClick={() => this.handleChange("W", "Heater2")}
            >
              W
              <audio id="W" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio>
            </div>
          </div>

          <div className="col-4 p-2">
            <div
              className="drum-pad bg-danger text-white p-5 rounded"
              id="Heater3"
              onClick={() => this.handleChange("E", "Heater3")}
            >
              E
              <audio id="E" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>
            </div>
          </div>
        </div>
  
        <div className="row">
          {/* Row 2 */}
          <div className="col-4 p-2">
            <div
              className="drum-pad bg-warning text-dark p-5 rounded"
              id="Heater4"
              onClick={() => this.handleChange("A", "Heater4")}
            >
              A
              <audio id="A" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio>
            </div>
          </div>

          <div className="col-4 p-2">
            <div
              className="drum-pad bg-info text-white p-5 rounded"
              id="Clap"
              onClick={() => this.handleChange("S", "Clap")}
            >
              S
              <audio id="S" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio>
            </div>
          </div>

          <div className="col-4 p-2">
            <div
              className="drum-pad bg-dark text-white p-5 rounded"
              id="Open-HH"
              onClick={() => this.handleChange("D", "Open-HH")}
            >
              D
              <audio id="D" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio>
            </div>
          </div>
        </div>
  
        <div className="row">
          {/* Row 3 */}
          <div className="col-4 p-2">
            <div
              className="drum-pad bg-secondary text-white p-5 rounded"
              id="Kick-n-Hat"
              onClick={() => this.handleChange("Z", "Kick-n-Hat")}
            >
              Z
              <audio id="Z" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio>
            </div>
          </div>

          <div className="col-4 p-2">
            <div
              className="drum-pad bg-light text-dark p-5 rounded"
              id="Kick"
              onClick={() => this.handleChange("X", "Kick")}
            >
              X
              <audio id="X" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio>
            </div>
          </div>

          <div className="col-4 p-2">
            <div
              className="drum-pad bg-success text-white p-5 rounded"
              id="Closed-HH"
              onClick={() => this.handleChange("C", "Closed-HH")}
            >
              C
              <audio id="C" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Displayer extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div id="display" className="bg-dark text-white text-center p-5 rounded ">
        <p>
          {this.props.currentButtonID}
        </p>
      </div>
    )
  }
}

class DMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentButtonID: ""
    }
  }
  handleButtonClick = (buttonID) => {
    this.setState ({
      currentButtonID: buttonID
    })
  }
  render() {
    return (
      <div>
        <Buttons onButtonClick={this.handleButtonClick} />
        <Displayer currentButtonID={this.state.currentButtonID} />
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <DMachine />
  </div>,
  document.getElementById("drum-machine")
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