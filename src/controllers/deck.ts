export class Deck {
    deckSize = 52;
    cards: number[];

    constructor() {
        this.cards = [];
        for (let i = 1; i <= this.deckSize; i++) {
            this.cards.push(i);
        }
    }

    shuffle() {
        this.cards.sort(() => Math.random() - 0.5);
    }
}
