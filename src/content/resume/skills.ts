import { IResumeSkillGroup } from '@/types';

export const skillGroups: IResumeSkillGroup[] = [
  {
    level: 'proficient',
    label: '익숙해요',
    subgroups: [
      {
        title: 'Frontend',
        items: [
          { key: 'html', label: 'HTML5', textureKey: 'skill-html' },
          { key: 'css', label: 'CSS3', textureKey: 'skill-css' },
          { key: 'vanilla-extract-css', label: 'vanilla-extract-css', textureKey: 'skill-vanilla-extract-css' },
          { key: 'javascript', label: 'JavaScript (ES6+)', textureKey: 'skill-javascript' },
          { key: 'typescript', label: 'TypeScript', textureKey: 'skill-typescript' },
          { key: 'react', label: 'React', textureKey: 'skill-react' },
          { key: 'next', label: 'Next.js', textureKey: 'skill-next' },
          { key: 'threejs', label: 'Three.js', textureKey: 'skill-threejs' },
          { key: 'r3f', label: '@react-three/fiber' },
          { key: 'drei', label: '@react-three/drei' },
          { key: 'pixi', label: 'Pixi.js', textureKey: 'skill-pixi' },
          { key: 'tanstack-query', label: '@tanstack/react-query', textureKey: 'skill-tanstack-query' },
          { key: 'motion', label: 'motion.dev', textureKey: 'skill-motion' },
          { key: 'storybook', label: 'Storybook', textureKey: 'skill-storybook' },
          { key: 'react-aria', label: 'React Aria', textureKey: 'skill-react-aria' },
          { key: 'redux', label: 'Redux', textureKey: 'skill-redux' },
          { key: 'recoil', label: 'Recoil', textureKey: 'skill-recoil' },
          { key: 'jotai', label: 'Jotai', textureKey: 'skill-jotai' },
        ],
      },
      {
        title: 'Backend & DB',
        items: [
          { key: 'express', label: 'Express', textureKey: 'skill-express' },
          { key: 'mysql', label: 'MySQL', textureKey: 'skill-mysql' },
        ],
      },
      {
        title: 'Data / Lang',
        items: [
          { key: 'python', label: 'Python', textureKey: 'skill-python' },
        ],
      },
      {
        title: 'Management',
        items: [
          { key: 'git', label: 'Git' },
          { key: 'npm', label: 'npm' },
          { key: 'pnpm', label: 'pnpm', textureKey: 'skill-pnpm' },
          { key: 'chromatic', label: 'Chromatic', textureKey: 'skill-chromatic' },
        ],
      },
    ],
  },
  {
    level: 'familiar',
    label: '약간은 알아요',
    subgroups: [
      {
        title: 'Backend & DB',
        items: [
          { key: 'graphql', label: 'GraphQL', textureKey: 'skill-graphql' },
          { key: 'nest', label: 'NestJS (Nestia)', textureKey: 'skill-nest' },
          { key: 'socket-io', label: 'Socket.IO', textureKey: 'skill-socket-io' },
        ],
      },
      {
        title: 'Mobile',
        items: [
          { key: 'flutter', label: 'Flutter', textureKey: 'skill-flutter' },
          { key: 'react-native', label: 'React Native', textureKey: 'skill-react-native' },
        ],
      },
      {
        title: 'Monorepo',
        items: [
          { key: 'nx', label: 'Nx', textureKey: 'skill-nx' },
          { key: 'turborepo', label: 'Turborepo', textureKey: 'skill-turborepo' },
        ],
      },
      {
        title: 'DevOps & Infra',
        items: [
          { key: 'docker', label: 'Docker', textureKey: 'skill-docker' },
          { key: 'aws-ec2', label: 'AWS EC2', textureKey: 'skill-aws' },
          { key: 'aws-rds', label: 'AWS RDS', textureKey: 'skill-aws' },
          { key: 'aws-s3', label: 'AWS S3', textureKey: 'skill-aws' },
        ],
      },
      {
        title: 'Bundler',
        items: [
          { key: 'webpack', label: 'Webpack', textureKey: 'skill-webpack' },
          { key: 'vite', label: 'Vite', textureKey: 'skill-vite' },
          { key: 'esbuild', label: 'esbuild', textureKey: 'skill-esbuild' },
        ],
      },
    ],
  },
  {
    level: 'ai-tools',
    label: 'AI 도구',
    subgroups: [
      {
        title: '생성형 AI',
        items: [
          { key: 'midjourney', label: 'Midjourney', textureKey: 'skill-midjourney' },
          { key: 'kling', label: 'Kling', textureKey: 'skill-kling' },
          { key: 'veo3', label: 'Veo3', textureKey: 'skill-veo3' },
          { key: 'luma', label: 'Luma', textureKey: 'skill-luma' },
          { key: 'runway', label: 'Runway', textureKey: 'skill-runway' },
          { key: 'higgsfield', label: 'HiggsField AI', textureKey: 'skill-higgsfield' },
          { key: 'suno', label: 'Suno', textureKey: 'skill-suno' },
          { key: 'elevenlabs', label: 'ElevenLabs', textureKey: 'skill-elevenlabs' },
          { key: 'topaz', label: 'Topaz AI', textureKey: 'skill-topaz' },
        ],
      },
      {
        title: 'AI 코딩 & 에이전트',
        items: [
          { key: 'claude', label: 'Claude Code', textureKey: 'skill-claude' },
          { key: 'cursor', label: 'Cursor AI', textureKey: 'skill-cursor' },
          { key: 'codex', label: 'ChatGPT Codex', textureKey: 'skill-codex' },
        ],
      },
      {
        title: 'AI 자동화 & 데이터',
        items: [
          { key: 'n8n', label: 'n8n', textureKey: 'skill-n8n' },
          { key: 'rag', label: 'RAG (Pinecone + OpenAI)', textureKey: 'skill-pinecone' },
          { key: 'openai', label: 'OpenAI', textureKey: 'skill-openai' },
        ],
      },
      {
        title: '3D 에셋 AI',
        items: [
          { key: 'meshy', label: 'Meshy AI', textureKey: 'skill-meshy' },
          { key: 'sloyd', label: 'Sloyd AI', textureKey: 'skill-sloyd' },
        ],
      },
    ],
  },
  {
    level: 'collab-tools',
    label: '협업/도구',
    subgroups: [
      {
        title: '개발',
        items: [
          { key: 'github', label: 'GitHub' },
          { key: 'vscode', label: 'VS Code' },
          { key: 'webstorm', label: 'WebStorm' },
        ],
      },
      {
        title: '협업',
        items: [
          { key: 'slack', label: 'Slack' },
          { key: 'notion', label: 'Notion' },
          { key: 'jira', label: 'Jira' },
          { key: 'confluence', label: 'Confluence' },
        ],
      },
    ],
  },
];
