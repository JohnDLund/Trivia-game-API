import _store from "../store.js";
import Trivia from "../Models/Trivia.js";


// @ts-ignore
const _api = axios.create({
  baseURL: "http://jservice.io/api/", //default route
  timeout: 3000
})


class TriviaService {
  constructor() {

  }

  getTrivia() {
    _api.get("random/").then(res => {
      let trivia = res.data.map(rawTriviaData => new Trivia(rawTriviaData))
      _store.commit("trivia", trivia)
    }).catch(err => console.error(err))
  }
  revealAnswer() {
    let template = _store.State.trivia[0].Template2
    document.getElementById("question").innerHTML = template
  }
}

const service = new TriviaService();
export default service;
