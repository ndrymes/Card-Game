import { Player } from 'src/controllers/player';
import { Deck } from 'src/controllers/deck';

export class CardGame {
    players: Player[];
    deck: Deck;

    constructor(firstPlayerName: string, secondPlayerName: string) {
        this.deck = new Deck();
        this.deck.shuffle();

        this.players = [new Player(firstPlayerName), new Player(secondPlayerName)];
    }

    compareCards(card1: number, card2: number): number {
        if (card1 > card2) {
            return 1;
        } else if (card1 < card2) {
            return 2;
        } else {
            return 0;
        }
    }

    playRounds(): number[] {
        const [firstPlayer, secondPlayer] = this.players;

        const halfDeck = this.deck.cards.length / 2;
        const firstPlayerDeck = this.deck.cards.slice(0, halfDeck);
        const secondPlayerDeck = this.deck.cards.slice(halfDeck);
        let roundsPlayed = 0;

        while (firstPlayerDeck.length > 0 && secondPlayerDeck.length > 0) {
            roundsPlayed++;
            const card1 = firstPlayerDeck.shift();
            const card2 = secondPlayerDeck.shift();

            console.log(`Player 1 got a card value of ${card1}, Player 2 got a card value of ${card2}`);

            const result = this.compareCards(card1, card2);
            if (result === 1) {
                console.log(`Player 1 won the round ${roundsPlayed} `);
                firstPlayer.updateScores();
            } else if (result === 2) {
                console.log(`Player 2 won the round ${roundsPlayed} `);
                secondPlayer.updateScores();
            }
        }

        return [firstPlayer.scores, secondPlayer.scores];
    }

    public run() {
        const [firstPlayerScore, secondPlayerScore] = this.playRounds();
        console.log(`Player 1 scores: ${firstPlayerScore}`);
        console.log(`Player 2 scores: ${secondPlayerScore}`);

        if (firstPlayerScore > secondPlayerScore) {
            console.log('Player 1 wins!');
        } else if (firstPlayerScore < secondPlayerScore) {
            console.log('Player 2 wins!');
        } else {
            console.log("It's a draw.");
        }
    }
}
