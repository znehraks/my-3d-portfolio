export type IPosition = [number, number, number];

export interface IPlayer {
  id: string;
  nickname: string;
  jobPosition: string;
  position: IPosition;
  selectedCharacterGlbNameIndex: number;
}
