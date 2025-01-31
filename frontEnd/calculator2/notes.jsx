/*
Keypad (Child) → Displayer (Parent)

Keypad calls this.props.updateTestExpression(testExpression), passing a new expression.
updateTestExpression is a function from Displayer, which updates state.testExpression.
Displayer (State Management)

testExpression is stored as state in Displayer.
When updateTestExpression is called, it updates this state.
Displayer → TestResulter (Child)

testExpression is passed to TestResulter as a prop (testExpression={this.state.testExpression}).
TestResulter simply displays it.


---


 if testExpression = "-12 *+ 3 /*+ -4 -5" im trying to populate testResult = [ "-","12","*+","3","/*+-","4","-","5"

im doing a for loop to every char
if expcomponent is empty 
  im adding the char to expcomponent and seeting previousCharType to the char type
if excomponent is not empty
  im finding new chars type
  im checking if new chars type is the same with previous and if it is im adding it to the expcompnent
else
  im adding excomponent to testResult and then emptying the excomponent to start a new one by adding the char as first char
*/
