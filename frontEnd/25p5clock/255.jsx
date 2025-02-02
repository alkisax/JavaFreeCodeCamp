class Displayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      sessionTime: "25:00",
      timerRun: false,
      isInSession: true,
      isInBreak: false,
    }
  }

  startTimer = () => {
    let round = 0
    console.log("startTimer called")
    if (this.state.timerRun){
      //what to do with multiple starts
      return
    }

    const initialSessionTime = this.timeFormaterSecsToString(this.state.sessionLength * 60);

    // this.setState ({
    //   timerRun: true
    // })
    // πριν είχα αυτή ^^ αλλα επειδή η setState είναι ασύγχρονη και οταν συνταγε το if παρακάτω δεν πέρναγε παρότι το είχαμε ορίσει την αλλάξαμε να γίνει εξίσωση και βάλαμε ολη την λογικη μες στην εξίσωση. αυτό μου εξασφαλίζει οτι δεν θα προχωρήσει πριν να έχει το τελικό state
    this.setState ({
      sessionTime: initialSessionTime, // Set sessionTime correctly
      timerRun:true,
      isInSession: true,
      isInBreak: false,
    }, () => {
      // countdown logic
      // asynch problem same as the above setState. Its converted to function

      // function in function this is main loop logic
      const countdown = () => {
        let secsTime = this.timeFormaterStringToSecs(this.state.sessionTime)

        // main countdown loop (restarts by recalling it self every sec setTimeout(countdown, 1000))  
        if (secsTime >= 0 && this.state.timerRun) {
          setTimeout(() => {
            if (secsTime > 0 && this.state.timerRun) {
              setTimeout(countdown, 1000) //VERY IMPORTAND

            // when time over toggles between break/session and restarts
            } else if (secsTime === 0) {
              round += 1
              console.log("round: ", round)
              console.log("entered next break/session toggler")
              console.log("before changing, isInSession: ", this.state.isInSession)

              console.log("Timer reached 00:00, playing beep...");
              const audio = document.getElementById("beep");
              if (audio) {
                audio.currentTime = 0; // Reset in case it was already playing
                setTimeout(() => {
                  audio.play().catch(error => console.error("Audio play error:", error));
                }, 100);
              }
              /*
                // We use prevState to ensure we're using the previous state values to update isInSession and isInBreak correctly
                // React batches state updates, so if we used this.state directly, we might end up with stale state
              */
              this.setState(prevState =>({
                isInSession: !prevState.isInSession,
                isInBreak: !prevState.isInBreak
              }), () => {
                console.log("after changing, isInSession: ", this.state.isInSession)
                const toggledStatelength = 
                  this.state.isInSession ?
                  this.state.sessionLength :
                  this.state.breakLength ;
                  let stringTime = this.timeFormaterSecsToString(toggledStatelength * 60)
                  console.log("stringTime to be added: ", stringTime)

                this.setState ({
                  sessionTime : stringTime
                }, () => {
                  console.log("just before starting loop again: ", this.state)
                  const secsTime = this.timeFormaterStringToSecs(this.state.sessionTime)
                  console.log("just before starting loop again new secs: ", secsTime)
                  countdown()
                })
              }) 
            } else {
              console.log("Countdown stopped.");
            }  
          },1000) // Delay the first decrement
          // secsTime -= 1
          // let stringTime = this.timeFormaterSecsToString(secsTime)
          // this.parentStateHandler("sessionTime", stringTime)
          /************/
          this.setState((prevState) => {
            let secsTime = this.timeFormaterStringToSecs(prevState.sessionTime) - 1;
            
            // Prevent negative seconds
            if (secsTime < 0) secsTime = 0;
          
            return { sessionTime: this.timeFormaterSecsToString(secsTime) };
          });
          
          } else {
            console.log("time is over or pause is pressed")
            this.parentStateHandler("timerRun", false)
          }
          
          // calls indefinately added && this.state.timerRun

        }
      /* 
      εχω μια συνάρτηση μέσα στην συνάρτηση. αλλή αυτή εδώ είναι η πρώτη φορά που καλέιτε. αυτή μου μειώνει τον χρόνο κατα ένα δευτερόλεπτο κάνει render και μετα στο τέλος με το if ξανακαλεί τον εαυτό της με ενα δευτερόλεπτο καθηστέρηση. Ετσι δεν κανω while σε αυγχρονη εφαρμογή
      */
      countdown()
    })
  }

  timeFormaterStringToSecs = (stringTime) => {
    // ισως να μην θέλει this.state.sessionTime και να βάλω κατι γενικό για να την καλεί
    const time = stringTime.split(":")
    // αυτό έκανε λάθος πρόσθεση ως string πχ "50" + 240 = 50240
    // const secsTime = time[1] + (time[0] * 60)
    const mins = parseInt(time[0])
    const secs = parseInt(time[1])
    const secsTime = (mins * 60) + secs
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

  //αυτο έχει να κάνει με την αυτοματη αλλαγή απο τις ρυθμήσεις στο συνολικό χρόνο
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
        <h1 className="text-light text-center">25+5 Clock</h1>
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
            timeFormaterSecsToString={this.timeFormaterSecsToString}
            timeFormaterStringToSecs={this.timeFormaterStringToSecs}
            isInSession={this.state.isInSession}
          />
        </div>

        {/* Audio element for alarm */}
        <audio id="beep" src="https://actions.google.com/sounds/v1/alarms/beep_short.ogg"></audio>


      </div>
    )
  }
}

class BreakLength extends React.Component {
  constructor(props) {
    super(props)
  }
  incrementBreak = () => {
    if (this.props.breakLength < 60){
      this.props.parentStateHandler("breakLength", this.props.breakLength + 1)
    }
  }
  decrementBreak = () => {
    if (this.props.breakLength > 1){
      this.props.parentStateHandler("breakLength", this.props.breakLength - 1)
    }
  }
  render() {
    return (
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h5 id="break-label">Break Length</h5>
        <span className="d-flex align-items-center">
          <i id="break-increment" className="fas fa-arrow-up " 
            style={{ cursor: 'pointer' }} 
            onClick={this.incrementBreak}></i>
          <p id="break-length" className="p-2 m-0 mx-2" >
            {this.props.breakLength}
          </p>
          <i id="break-decrement" className="fas fa-arrow-down" 
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
    if (this.props.sessionLength < 60){
      this.props.parentStateHandler("sessionLength", this.props.sessionLength + 1)
    }
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
          <i id="session-increment" className="fas fa-arrow-up " style={{ cursor: 'pointer' }} onClick={this.incrementSessionLength}></i>
          <p  id="session-label" className="p-2 m-0 mx-2">
            {this.props.sessionLength}
          </p>
          <i id="session-decrement" className="fas fa-arrow-down" style={{ cursor: 'pointer' }} onClick={this.decrementSessionLength}></i>
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
    // Determine the timer label based on the isInSession state
    const timerLabel = this.props.isInSession ? "Session" : "Break";

    return (
      <div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="container border border-danger-subtle border-radius-15 text-light text-center">
            <h3 id="timer-label">{timerLabel}</h3>
            <p  id="session-length" className="fs-1 font-weight-bold">
            {this.props.sessionLength}               
            </p>
            <p id="time-left" className="fs-1 font-weight-bold">
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
              timeFormaterSecsToString={this.props.timeFormaterSecsToString}
              timeFormaterStringToSecs={this.props.timeFormaterStringToSecs}
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
    this.state = {
      isPaused: false
    }
  }
  playHandler = () => {
    console.log("play pressed")
    this.props.startTimer()
  }
  /*
    my logic
      in start timer i format the stringTime to seconds and then the inner method is called
      it checks if there is time >=0 and if timerun is true and then decrements time by one and updates the state
              secsTime -= 1
              let stringTime = this.timeFormaterSecsToString(secsTime)
              this.parentStateHandler("sessionTime", stringTime)
      if not it sets timerun to false so as to stop the loop (even if there is still time)
      in the end it recursivly calls it self with countdown to work as a loop

      when the pause button is pressed
      it sets inner state to ispaused to true and sets parent state to timerun false

      this should stop the loop of the parent
          this.props.parentStateHandler("timerRun", false)
      whne play is pressed again it should call parent startTimer and SHOULD (or not?) continue from where the state was already when paused
    if (!this.state.isPaused) {
      this.props.startTimer()
    }
  */
  pauseHandler = () => {
    console.log("pause pressed")
    this.setState ({
      isPaused: true
    })
    this.props.parentStateHandler("timerRun", false)
  }

  restartHandler = () => {
    console.log("restart pressed")

    // Stop the sound
    const audio = document.getElementById("beep");
    if (audio) {
      audio.pause();
      audio.currentTime = 0; // Reset sound
    }

    // Clear any running timers
    clearTimeout(this.timer);

    this.props.parentStateHandler("sessionLength", 25)
    this.props.parentStateHandler("breakLength", 5)
    this.props.parentStateHandler("timerRun", false)
    this.props.parentStateHandler("isInSession", true);
    this.props.parentStateHandler("isInBreak", false);
  // Use a callback to ensure state is updated before resetting sessionTime
  setTimeout(() => {
    const stringTime = this.props.timeFormaterSecsToString(25 * 60);
    this.props.parentStateHandler("sessionTime", stringTime);
  }, 0);
  }

  render() {
    return (
      <div>
        <button 
        id="start_stop"
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
        id="reset"
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