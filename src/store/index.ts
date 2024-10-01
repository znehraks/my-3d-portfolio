import { IChat, INotice, IPlayer, IPosition } from '@/types';
import { atom } from 'jotai';

/**
 * 로딩이 완료되었는지 여부
 */
export const IsLoadCompletedAtom = atom(false);

/**
 * 현재 선택된 캐릭터 종류
 */
export const SelectedCharacterGlbNameIndexAtom = atom<number>(0);

/**
 * 캐릭터 선택이 완료되었는지 여부
 */
export const CharacterSelectFinishedAtom = atom(false);

/**
 * socket 넣기 전까지 이동 정보 atom
 */
export const MyPositionAtom = atom<IPosition>([0, 0, 0]);

/**
 * 현재 접속중인 플레이어들
 */
export const PlayersAtom = atom<IPlayer[]>([]);

/**
 * 현재 접속중인 플레이어 중 내 정보
 */
export const MeAtom = atom<IPlayer | null>(null);

/**
 * 모든 채팅 정보
 * */
export const ChatsAtom = atom<IChat[]>([]);

/**
 * 최근 채팅 정보
 */
export const RecentChatsAtom = atom<IChat[]>([]);

/**
 * 이미 최근 채팅 정보로 노출된 채팅들
 */
export const AlreadyDisplayedRecentChatsAtom = atom<IChat[]>([]);

/**
 * 입장 공지 정보
 */
export const EnteredPlayerNoticeAtom = atom<INotice | null>(null);

/**
 * 퇴장 공지 정보
 */
export const ExitedPlayerNoticeAtom = atom<INotice | null>(null);

export enum MODAL_KEY {
  'WOODEN_SIGN' = 'WOODEN_SIGN',
}
/**
 * 모달 노출 여부
 */
export const OpenModalKeyAtom = atom<MODAL_KEY | null>(null);
