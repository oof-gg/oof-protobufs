import { Session, Session_GameAttribute, Session_GameState } from '@oof.gg/protobuf-ts/game/session';
import { Player, Player_PlayerStatus, Player_PlayerType } from '@oof.gg/protobuf-ts/player/player';
import { Action, Action_ActionType, Action_PlayerAction } from '@oof.gg/protobuf-ts/player/action';

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

const difficultyAttribute: Session_GameAttribute = {
  intValue: 1,
};

const maxScoreAttribute: Session_GameAttribute = {
  intValue: 100,
};

const session: Session = {
  id: 'session1',
  gameId: 'game1',
  playerIds: ['player1'],
  state: Session_GameState.CREATED,
  attributes: {
    difficultyAttribute,
    maxScoreAttribute,
  },
}

const encodedPlayer = Player.encode(samplePlayer).finish();
console.log(encodedPlayer);

const decodedPlayer = Player.decode(encodedPlayer);
console.log(decodedPlayer);

const encodedSession = Session.encode(session).finish();
console.log(encodedSession);

const decodedSession = Session.decode(encodedSession);
console.log(decodedSession);

const playerAction: Action_PlayerAction = {
  stringValue: 'high',
};

const action: Action = {
  playerId: 'player1',
  sessionId: 'session1',
  gameId: 'game1',
  type: Action_ActionType.CUSTOM,
  action: {
    playerAction: playerAction,
  },
  // send NTP timestamp provided by the server
  timestamp: Date.now(),
};

const encodedAction = Action.encode(action).finish();
console.log(encodedAction);

const decodedAction = Action.decode(encodedAction);
console.log(decodedAction);