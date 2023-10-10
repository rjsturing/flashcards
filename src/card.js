function createCard(id, question, answers, correctAnswer) {
 card = {
      id: id,
      question: question,
      answers: answers,
      correctAnswer: correctAnswer
    }
    return card
  }

function evaluateGuess() {

}

  module.exports = {
    createCard,
    evaluateGuess
  }