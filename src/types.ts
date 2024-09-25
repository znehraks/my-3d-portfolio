/**
 * R3F Position type
 */
export type IPosition = [number, number, number];

/**
 * Player type
 */
export interface IPlayer {
  id: string;
  nickname: string;
  jobPosition: string;
  position: IPosition;
  selectedCharacterGlbNameIndex: number;
}

/**
 * Chat type
 */
export interface IChat {
  senderId: IPlayer['id'];
  senderNickname: IPlayer['nickname'];
  senderJobPosition: IPlayer['jobPosition'];
  text: string;
  timestamp: string;
}

/**
 * Notice type
 */
export interface INotice {
  nickname: IPlayer['nickname'];
  jobPosition: IPlayer['jobPosition'];
}
