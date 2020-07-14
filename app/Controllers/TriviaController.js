import TriviaService from "../Services/TriviaService.js";
import store from "../store.js";

//Private
function _draw() {
  let template = store.State.trivia[0].Template
  document.getElementById("question").innerHTML = template
  console.log("I drew")
  console.log(store.State.trivia)
}

//Public
export default class TriviaController {
  constructor() {
    store.subscribe("trivia", _draw);
    TriviaService.getTrivia()
  }
  revealAnswer() {
    TriviaService.revealAnswer()
  }

  getTrivia() {
    TriviaService.getTrivia()
  }
}
