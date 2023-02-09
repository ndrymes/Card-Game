The task is to build a 2 player card game, the game is played as follows:

- We start with the deck of 52 cards, each uniquely numbered from 1 to 52
- The deck is shuffled
- We deal out those cards between the 2 players. Each player gets half the deck.
- On each turn of the game, both players turn over their top most card and they compare the value of those cards.
- The player with the higher valued card "wins" the round and gets a point. The two cards being compared are discarded.
- Rounds are played until all the cards are discarded.
- At the end of the game the player who has the most points wins

# Get Started

- Clone the repository using git clone https://github.com/ndrymes/Card-Game.git
- Run `npm i` or `npm install` to install all app dependencies
- Make a copy of the sample.env file and rename to .env
- Start the app at the root directory using
  - `npm run start:dev` for development
  - `npm run build`
  - `npm run start` for production

## To run the app via docker

```
docker run build

```

### Sample  Success Response
```
Player 2 won the round 1 
Player 2 won the round 2 
Player 2 won the round 3 
Player 2 won the round 4 
Player 2 won the round 5 
Player 1 won the round 6 

Player 1 scores: 12
Player 2 scores: 14
Player 2 wins!

```

# Libraries Used

- module alias - Create aliases of directories and register custom module paths
- Jest - For testing purpose

# Todo

I had a lot of fun building this but there are some improvements I can still make:

- More tests, especially  unit tests for components
- Add dependency injection for easier extensibility and testing
- Include a makefile to ease the execution of some common tasks

# Testing

- To run the tests, simply type `npm test`
- We can also get code coverage by `npm run coverage`

Thank you 👍
