import { IResumeAIProject } from '@/types';
import { idol88ightProject } from './idol-88ight';
import { aiNewsbotProject } from './ai-newsbot';
import { ragSlackbotProject } from './rag-slackbot';
import { claudeCodeMemoryProject } from './claude-code-memory';
import { agentTeamProject } from './agent-team';
import { memePushProject } from './meme-push';

export const aiProjects: IResumeAIProject[] = [
  idol88ightProject,
  aiNewsbotProject,
  ragSlackbotProject,
  claudeCodeMemoryProject,
  agentTeamProject,
  memePushProject,
];

export {
  idol88ightProject,
  aiNewsbotProject,
  ragSlackbotProject,
  claudeCodeMemoryProject,
  agentTeamProject,
  memePushProject,
};
