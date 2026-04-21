'use client';

import { useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { aiProjects } from '@/content/resume';
import { IResumeAIProject } from '@/types';
import { Modal } from '../../../common/Modal';

const MODAL_TO_PROJECT_ID: Partial<Record<MODAL_KEY, string>> = {
  [MODAL_KEY.AI_88IGHT]: '88ight',
  [MODAL_KEY.AI_NEWSBOT]: 'ai-newsbot',
  [MODAL_KEY.AI_RAG_BOT]: 'rag-slackbot',
  [MODAL_KEY.AI_CODE_MEMORY]: 'claude-code-memory',
  [MODAL_KEY.AI_AGENT_TEAM]: 'agent-team',
  [MODAL_KEY.AI_MEME_PUSH]: 'meme-push',
};

function AIProjectBody({ project }: { project: IResumeAIProject }) {
  return (
    <div className="space-y-4 text-[14px] text-[#3c2910]">
      <p className="text-[13px] text-[#5a3a0e]">{project.summary}</p>

      {project.id === '88ight' ? (
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-black/10">
          <iframe
            title="88ight virtual idol preview"
            className="h-full w-full"
            src="https://www.youtube.com/embed/dVjV8UUJmpU"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : null}

      <ul className="list-disc space-y-1 pl-5 text-[12px]">
        {project.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1">
        {project.tools.map((t) => (
          <span
            key={t}
            className="rounded-full bg-[#c59848]/30 px-2 py-[2px] text-[11px] text-[#3c2910]"
          >
            {t}
          </span>
        ))}
      </div>
      {project.links?.length ? (
        <ul className="space-y-1 text-[12px]">
          {project.links.map((l) => (
            <li key={l.url}>
              <a className="underline" href={l.url} target="_blank" rel="noreferrer">
                {l.label} ↗
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function AIProjectModal() {
  const [openModalKey, setOpenModalKey] = useAtom(OpenModalKeyAtom);
  const handleClose = useCallback(() => setOpenModalKey(null), [setOpenModalKey]);

  const activeProject = useMemo<IResumeAIProject | null>(() => {
    if (!openModalKey) return null;
    const projectId = MODAL_TO_PROJECT_ID[openModalKey];
    if (!projectId) return null;
    return aiProjects.find((p) => p.id === projectId) ?? null;
  }, [openModalKey]);

  return (
    <Modal
      isOpen={Boolean(activeProject)}
      onClose={handleClose}
      title={activeProject?.title}
      ariaLabel={activeProject ? `${activeProject.title} 상세` : 'AI 프로젝트 모달'}
    >
      {activeProject ? <AIProjectBody project={activeProject} /> : null}
    </Modal>
  );
}
