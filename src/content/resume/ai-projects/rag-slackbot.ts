import { IResumeAIProject } from '@/types';

export const ragSlackbotProject: IResumeAIProject = {
  id: 'rag-slackbot',
  title: '디자인시스템 RAG Slack Q&A Bot',
  category: 'automation',
  summary: 'Pinecone + OpenAI 기반 RAG 봇. 디자인시스템 문의 응대를 자동화해 팀 몰입도 향상. GraphRAG 전환 작업 중.',
  bullets: [
    '디자인시스템 문서 청크 임베딩 → Pinecone 인덱싱',
    'Slack 봇 인터페이스로 질문 답변 자동화',
    '운영 중 수집된 질의 로그 기반 GraphRAG 전환',
  ],
  tools: ['Pinecone', 'OpenAI', 'Slack', 'GraphRAG'],
};
