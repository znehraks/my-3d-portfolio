import { IChat, INotice, IPlayer } from '@/types';
import { atom } from 'jotai';

/**
 * 현재 선택된 캐릭터 종류
 */
export const SelectedCharacterGlbNameIndexAtom = atom<number>(0);

/**
 * 캐릭터 선택이 완료되었는지 여부
 */
export const CharacterSelectFinishedAtom = atom(false);

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
