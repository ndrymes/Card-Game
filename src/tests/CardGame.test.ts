/* eslint-disable no-undef */
import { CardGame } from 'src/controllers/cardGame';
import { Deck } from 'src/controllers/deck';

jest.mock('../controllers/deck');
const DeckMock = Deck as jest.Mock<Deck>;

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    DeckMock.mockClear();
    DeckMock.mockImplementation(() => ({
        deckSize: 8,
        cards: [1, 2, 3, 4, 5, 6, 7, 8],
        shuffle: () => {}
    }));
});

describe('CardGame', () => {

  
    it('should not return incorrect values when comparing cards', () => {
        const game = new CardGame('foo', 'bar');

        expect(game.compareCards(4, 2)).not.toBe(2);
        expect(game.compareCards(1, 4)).not.toBe(1);
        
    });

  it('should compare cards correctly', () => {
    const game = new CardGame('foo', 'bar');

    expect(game.compareCards(3, 5)).toBe(2);
    expect(game.compareCards(0, 1)).toBe(2);
    expect(game.compareCards(4, 2)).toBe(1);
  });

    it('calculate scores correctly', () => {
        const game = new CardGame('foo', 'bar');

        expect(DeckMock).toHaveBeenCalled();
        expect(DeckMock).toHaveBeenCalledTimes(1);

        expect(game.playRounds()).toEqual([0, 4]);
    });
});
