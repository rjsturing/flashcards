const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('turns', function() {

  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should determine whether a guess is correct', function() {
    const guess = evaluateGuess('string', 'string');
    expect(guess).to.equal('correct!')
  })

  it('should determine whether a guess is incorrect', function() {
    const guess = evaluateGuess('correct guess', 'incorrect guess');
    expect(guess).to.equal('incorrect!')
  })

});