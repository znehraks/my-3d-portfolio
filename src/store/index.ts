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
  /** 놀이터 인트로 간판 — 자기소개 + 개발 철학 */
  INTRO_ABOUT = 'INTRO_ABOUT',
  /** 놀이터 인트로 간판 — 연락처/링크 */
  CONTACTS = 'CONTACTS',
  /** 경력 거리 — 각 회사 */
  CAREER_MIRIDIH = 'CAREER_MIRIDIH',
  CAREER_AIV = 'CAREER_AIV',
  CAREER_FASTCAMPUS = 'CAREER_FASTCAMPUS',
  CAREER_MUHAYU = 'CAREER_MUHAYU',
  CAREER_ARCHIDRAW = 'CAREER_ARCHIDRAW',
  CAREER_LAB724 = 'CAREER_LAB724',
  /** AI 스튜디오 — 각 AI 프로젝트 */
  AI_88IGHT = 'AI_88IGHT',
  AI_NEWSBOT = 'AI_NEWSBOT',
  AI_RAG_BOT = 'AI_RAG_BOT',
  AI_AGENT_TEAM = 'AI_AGENT_TEAM',
  AI_CODE_MEMORY = 'AI_CODE_MEMORY',
  AI_MEME_PUSH = 'AI_MEME_PUSH',
  /** 명예의 전당 — 수상 */
  AWARD_KOPIS = 'AWARD_KOPIS',
  AWARD_INCHEON = 'AWARD_INCHEON',
  AWARD_MYONGJI = 'AWARD_MYONGJI',
  /** 명예의 전당 — 자격증/학력 */
  CERTIFICATIONS = 'CERTIFICATIONS',
  EDUCATION = 'EDUCATION',
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

export type ZoneId = 'intro' | 'skill-tower' | 'career-street' | 'ai-studio' | 'hall-of-fame';

/**
 * 플레이어가 현재 속한 존. 존 밖(사이 공간)이면 null.
 */
export const CurrentZoneAtom = atom<ZoneId | null>(null);
CurrentZoneAtom.debugLabel = 'CurrentZoneAtom';
