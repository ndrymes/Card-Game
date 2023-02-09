import './module-alias';

import { CardGame } from 'src/controllers/cardGame';

const game = new CardGame('Foo', 'Bar');

game.run();
