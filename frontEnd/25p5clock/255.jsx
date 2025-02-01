class Displayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakLength: 4,
      sessionLength: 24,
      sessionTime: "24:00",
      timerRun: false
    }
  }

  startTimer = () => {
    console.log("startTimer called")
    if (this.state.timerRun){
      //what to do with multiple starts
      return
    }

    this.setState ({
      timerRun: true
    })

    // countdown logic
    let secsTime = this.timeFormaterStringToSecs(this.state.sessionTime)

    const countdown = () => {
      if (secsTime >= 0 ) {
       secsTime -= 1
       let stringTime = this.timeFormaterSecsToString(secsTime)
       this.parentStateHandler("sessionTime", stringTime)
      } else {
        console.log("times over")
        this.parentStateHandler("timerRun", false)
      }
      
      if (secsTime >= 0) {
        setTimeout(countdown, 1000)
      }
    }

    // εχω μια συνάρτηση μέσα στην συνάρτηση. αλλή αυτή εδώ είναι η πρώτη φορά που καλέιτε. αυτή μου μειώνει τον χρόνο κατα ένα δευτερόλεπτο κάνει render και μετα στο τέλος με το if ξανακαλεί τον εαυτό της με ενα δευτερόλεπτο καθηστέρηση. Ετσι δεν κανω while σε αυγχρονη εφαρμογή
    countdown()
  }

  timeFormaterStringToSecs = (stringTime) => {
    // ισως να μην θέλει this.state.sessionTime και να βάλω κατι γενικό για να την καλεί
    const time = stringTime.split(":")
    const secsTime = time[1] + (time[0] * 60)
    return secsTime
  }

  timeFormaterSecsToString = (secsTime) => {
    const mins = Math.floor(secsTime / 60)
    const secs = secsTime % 60
    let stringTime = ""
    if (mins > 9){
      stringTime += mins
    } else {
      stringTime += "0" + mins
    }
    stringTime += ":"
    if (secs > 9){
      stringTime += secs
    } else {
      stringTime += "0" + secs
    }
    return stringTime
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sessionLength !== this.state.sessionLength){
      const stringTime = this.timeFormaterSecsToString(this.state.sessionLength * 60)
      this.parentStateHandler("sessionTime", stringTime)
    }
  }

  parentStateHandler = (property, value) => {
    this.setState ({
      [property] : value
    })
  }
  render() {
    return (
      <div className="container col-10">
        <h1 className="text-light text-center">24+5 Clock</h1>
        <div className="row text-light d-flex justify-content-center">
          <div className="col-4">
            <BreakLength
              breakLength={this.state.breakLength}
              parentStateHandler={this.parentStateHandler}
            />
          </div>
          <div className="col-4">
            <SessionLength 
              sessionLength={this.state.sessionLength}
              parentStateHandler={this.parentStateHandler}
            />
          </div>
        </div>
        <div>
          <Session 
            sessionLength={this.state.sessionLength}
            breakLength={this.state.breakLength}
            sessionTime={this.state.sessionTime}
            parentStateHandler={this.parentStateHandler}
            startTimer={this.startTimer}
          />
        </div>
      </div>
    )
  }
}

class BreakLength extends React.Component {
  constructor(props) {
    super(props)
  }
  incrementBreak = () => {
    this.props.parentStateHandler("breakLength", this.props.breakLength + 1)
  }
  decrementBreak = () => {
    if (this.props.breakLength > 1){
      this.props.parentStateHandler("breakLength", this.props.breakLength - 1)
    }
  }
  render() {
    return (
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h5>Break Length</h5>
        <span className="d-flex align-items-center">
          <i className="fas fa-arrow-up " 
            style={{ cursor: 'pointer' }} 
            onClick={this.incrementBreak}></i>
          <p className="p-2 m-0 mx-2">
            {this.props.breakLength}
          </p>
          <i className="fas fa-arrow-down" 
            style={{ cursor: 'pointer' }} 
            onClick={this.decrementBreak}></i>
        </span>
      </div>
    )
  }
}

class SessionLength extends React.Component {
  constructor(props) {
    super(props)
  }
  incrementSessionLength = () => {
    this.props.parentStateHandler("sessionLength", this.props.sessionLength + 1)
  }
  decrementSessionLength = () => {
    if (this.props.sessionLength > 1){
      this.props.parentStateHandler("sessionLength", this.props.sessionLength - 1)
    }
  }
  render() {
    return (
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h5>Session Length</h5>
        <span className="d-flex align-items-center">
          <i className="fas fa-arrow-up " style={{ cursor: 'pointer' }} onClick={this.incrementSessionLength}></i>
          <p className="p-2 m-0 mx-2">
            {this.props.sessionLength}
          </p>
          <i className="fas fa-arrow-down" style={{ cursor: 'pointer' }} onClick={this.decrementSessionLength}></i>
        </span>
      </div>
    )
  }
}

class Session extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="container border border-danger-subtle border-radius-15 text-light text-center">
            <h3>Session</h3>
            <p className="fs-1 font-weight-bold">
              {this.props.sessionTime}
            </p>
          </div>
        </div>

        {/* Play, Pause, and Restart Buttons */}
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row">
            <Buttons 
              sessionLength={this.props.sessionLength}
              breakLength={this.props.breakLength}
              sessionTime={this.props.sessionTime}
              parentStateHandler={this.props.parentStateHandler}
              startTimer={this.props.startTimer}
            />
          </div>
        </div>
      </div>      
    )
  }
}

class Buttons extends React.Component {
  constructor(props) {
    super(props)
  }
  playHandler = () => {
    console.log("play pressed")
    this.props.startTimer()
  }
  render() {
    return (
      <div>
        <button 
        className="btn btn-success m-2 col-3" 
        style={{ fontSize: '1rem' }} 
        onClick={this.playHandler}>
        <i className="fas fa-play"></i> Play
      </button>

      <button 
        className=" col-3 btn btn-warning m-2" 
        style={{ fontSize: '1rem' }} 
        onClick={this.pauseHandler}>
        <i className="fas fa-pause"></i> Pause
      </button>

      <button 
        className=" col-3 btn btn-danger m-2" 
        style={{ fontSize: '1rem' }} 
        onClick={this.restartHandler}>
        <i className="fas fa-redo"></i> Restart
      </button>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <Displayer />
  </div>,
  document.getElementById("clock")
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