const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');

describe("deck", () => {
  let card1, card2, card3, deck;
  beforeEach(() => {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
     deck = createDeck([card1, card2, card3])
})

it("should be a function", () => {
    expect(createDeck).to.be.a("function")
  });

it("should create a deck of cards", () => {
    const deck = createDeck([card1, card2, card3])
    expect(deck).to.deep.equal([card1, card2, card3])
});

it("should know how many cards are in the deck", () => {
    const deckLength = countCards(deck)
    expect(deckLength).to.deep.equal(3)
});

})

