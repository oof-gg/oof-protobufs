import { Session, Session_GameAttribute, Session_GameState } from '@protos/game/session';
import { Player, Player_PlayerStatus, Player_PlayerType } from '@protos/player/player';

const playerType = Player_PlayerType.HUMAN;
const playerStatus = Player_PlayerStatus.ACTIVE;

const samplePlayer: Player = {
  id: 'player1',
  username: 'John Doe',
  email: 'foo@baz.com',
  team: 'red',
  score: 100,
  type: playerType,
  status: playerStatus,
  role: 'admin',
};

console.log(samplePlayer);

const difficultyAttribute: Session_GameAttribute = {
  key: 'difficulty',
  intValue: 1,
};

const maxScoreAttribute: Session_GameAttribute = {
  key: 'max_score',
  intValue: 100,
};

const session: Session = {
  id: 'session1',
  gameId: 'game1',
  players: [samplePlayer],
  state: Session_GameState.CREATED,
  attributes: {
    difficulty: difficultyAttribute,
    max_score: maxScoreAttribute,
  },
}

console.log(session);

const encodedPlayer = Player.encode(samplePlayer).finish();
console.log(encodedPlayer);

const decodedPlayer = Player.decode(encodedPlayer);
console.log(decodedPlayer);

const encodedSession = Session.encode(session).finish();
console.log(encodedSession);

const decodedSession = Session.decode(encodedSession);
console.log(decodedSession);