import { IChat, INotice, IPlayer, IPosition } from '@/types';
import { atom } from 'jotai';

/**
 * 로딩이 완료되었는지 여부
 */
export const IsLoadCompletedAtom = atom(false);
IsLoadCompletedAtom.debugLabel = 'IsLoadCompletedAtom';

/**
 * 현재 선택된 캐릭터 종류
 */
export const SelectedCharacterGlbNameIndexAtom = atom<number>(0);
SelectedCharacterGlbNameIndexAtom.debugLabel = 'SelectedCharacterGlbNameIndexAtom';

/**
 * 캐릭터 선택이 완료되었는지 여부
 */
export const CharacterSelectFinishedAtom = atom(false);
CharacterSelectFinishedAtom.debugLabel = 'CharacterSelectFinishedAtom';

/**
 * socket 넣기 전까지 이동 정보 atom
 */
export const MyPositionAtom = atom<IPosition>([0, 0, 0]);
MyPositionAtom.debugLabel = 'MyPositionAtom';

/**
 * 현재 접속중인 플레이어들
 */
export const PlayersAtom = atom<IPlayer[]>([]);
PlayersAtom.debugLabel = 'PlayersAtom';

/**
 * 현재 접속중인 플레이어 중 내 정보
 */
export const MeAtom = atom<IPlayer | null>(null);
MeAtom.debugLabel = 'MeAtom';

/**
 * 모든 채팅 정보
 * */
export const ChatsAtom = atom<IChat[]>([]);
ChatsAtom.debugLabel = 'ChatsAtom';

/**
 * 최근 채팅 정보
 */
export const RecentChatsAtom = atom<IChat[]>([]);
RecentChatsAtom.debugLabel = 'RecentChatsAtom';

/**
 * 이미 최근 채팅 정보로 노출된 채팅들
 */
export const AlreadyDisplayedRecentChatsAtom = atom<IChat[]>([]);
AlreadyDisplayedRecentChatsAtom.debugLabel = 'AlreadyDisplayedRecentChatsAtom';

/**
 * 입장 공지 정보
 */
export const EnteredPlayerNoticeAtom = atom<INotice | null>(null);
EnteredPlayerNoticeAtom.debugLabel = 'EnteredPlayerNoticeAtom';

/**
 * 퇴장 공지 정보
 */
export const ExitedPlayerNoticeAtom = atom<INotice | null>(null);
ExitedPlayerNoticeAtom.debugLabel = 'ExitedPlayerNoticeAtom';

export enum MODAL_KEY {
  'WOODEN_SIGN' = 'WOODEN_SIGN',
}
/**
 * 모달 노출 여부
 */
export const OpenModalKeyAtom = atom<MODAL_KEY | null>(null);
OpenModalKeyAtom.debugLabel = 'OpenModalKeyAtom';

/**
 * 현재 클릭 도움말이 보이는지 여부
 */
export const IsHelpTooltipVisibleAtom = atom(true);
IsHelpTooltipVisibleAtom.debugLabel = 'IsHelpTooltipVisibleAtom';
