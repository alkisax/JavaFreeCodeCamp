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