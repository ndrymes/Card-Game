export class Player {
    name: string;
    cards: number[];
    scores: number;

    constructor(name: string) {
        this.name = name;
        this.cards = [];
        this.scores = 0;
    }

    updateScores() {
        this.scores++;
    }
}
