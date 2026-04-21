import { IResumeAIProject } from '@/types';

export const memePushProject: IResumeAIProject = {
  id: 'meme-push',
  title: 'meme-push.xyz — 실시간 3D 웹 배틀게임',
  category: 'game',
  summary: 'Vite + TypeScript + Colyseus + Three.js 기반 실시간 3D 웹 배틀게임. 운영 중.',
  bullets: [
    'Meshy AI + Blender로 3D 에셋 생성, 게임화 시도',
    'Colyseus 기반 실시간 룸 관리',
  ],
  tools: ['Vite', 'TypeScript', 'Colyseus', 'Three.js', 'Meshy AI', 'Blender'],
  links: [{ label: 'meme-push.xyz', url: 'http://meme-push.xyz' }],
};
