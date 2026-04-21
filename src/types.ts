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

/* ------------------------------------------------------------------ */
/* Resume content layer — single source of truth for 3D modals, sr-only
 * HTML, and JSON-LD. See docs/PRD.md §9 for field semantics.          */
/* ------------------------------------------------------------------ */

export interface IResumeContactLinks {
  email: string;
  github: string;
  velog: string;
  tistory: string;
  portfolioLegacy?: string;
  youtube?: string;
}

export interface IResumeProfile {
  name: string;
  roleTagline: string;
  summary: string;
  philosophy: { title: string; body: string }[];
  contact: IResumeContactLinks;
}

export interface IResumeCareerProject {
  title: string;
  summary: string;
  bullets: string[];
  stack?: string[];
}

export type ResumeCareerId =
  | 'miridih'
  | 'aiv'
  | 'fastcampus'
  | 'muhayu'
  | 'archidraw'
  | 'lab724';

export interface IResumeCareer {
  id: ResumeCareerId;
  company: string;
  period: string;
  role: string;
  headline?: string;
  projects: IResumeCareerProject[];
  stack: string[];
  link?: string;
}

export type ResumeAIProjectCategory = 'video' | 'automation' | 'game' | 'tooling';

export interface IResumeAIProject {
  id: string;
  title: string;
  category: ResumeAIProjectCategory;
  summary: string;
  bullets: string[];
  tools: string[];
  links?: { label: string; url: string }[];
}

export type ResumeSkillLevel = 'proficient' | 'familiar' | 'ai-tools' | 'collab-tools';

export interface IResumeSkillItem {
  key: string;
  label: string;
  textureKey?: string;
}

export interface IResumeSkillGroup {
  level: ResumeSkillLevel;
  label: string;
  subgroups: { title: string; items: IResumeSkillItem[] }[];
}

export type ResumeAwardRank = 'gold' | 'silver' | 'bronze';

export interface IResumeAward {
  id: string;
  title: string;
  rank: ResumeAwardRank;
  date: string;
  description: string;
  stack?: string[];
}

export interface IResumeCertification {
  title: string;
  date: string;
}

export interface IResumeEducation {
  school: string;
  major: string;
  period: string;
  gpa?: string;
}
