'use client';

import { useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { careers } from '@/content/resume';
import { IResumeCareer, ResumeCareerId } from '@/types';
import { Modal } from '../../../common/Modal';

const CAREER_KEY_BY_ID: Record<ResumeCareerId, MODAL_KEY> = {
  miridih: MODAL_KEY.CAREER_MIRIDIH,
  aiv: MODAL_KEY.CAREER_AIV,
  fastcampus: MODAL_KEY.CAREER_FASTCAMPUS,
  muhayu: MODAL_KEY.CAREER_MUHAYU,
  archidraw: MODAL_KEY.CAREER_ARCHIDRAW,
  lab724: MODAL_KEY.CAREER_LAB724,
};

export const CAREER_MODAL_KEY: Record<ResumeCareerId, MODAL_KEY> = CAREER_KEY_BY_ID;

function CareerBody({ career }: { career: IResumeCareer }) {
  return (
    <div className="space-y-4 text-[14px] text-[#3c2910]">
      <header className="space-y-1">
        <h3 className="text-[15px] font-semibold">
          {career.role} · <span className="text-[#6b4a1a]">{career.period}</span>
        </h3>
        {career.headline ? <p className="text-[13px] text-[#5a3a0e]">{career.headline}</p> : null}
        {career.link ? (
          <p className="text-[12px]">
            <a className="underline" href={career.link} target="_blank" rel="noreferrer">
              사이트 바로가기 ↗
            </a>
          </p>
        ) : null}
      </header>

      <section className="space-y-3">
        {career.projects.map((project) => (
          <article key={project.title} className="rounded-md bg-white/40 px-3 py-2">
            <h4 className="text-[14px] font-semibold">{project.title}</h4>
            <p className="mt-1 text-[12px] text-[#5a3a0e]">{project.summary}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[12px]">
              {project.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            {project.stack?.length ? (
              <div className="mt-2 flex flex-wrap gap-1">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[#c59848] px-2 py-[2px] text-[11px] text-[#6b4a1a]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </section>

      <footer>
        <h4 className="text-[13px] font-semibold text-[#5a3a0e]">주요 기술 스택</h4>
        <div className="mt-1 flex flex-wrap gap-1">
          {career.stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-[#c59848]/30 px-2 py-[2px] text-[11px] text-[#3c2910]"
            >
              {s}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
}

export function CareerModal() {
  const [openModalKey, setOpenModalKey] = useAtom(OpenModalKeyAtom);
  const handleClose = useCallback(() => setOpenModalKey(null), [setOpenModalKey]);

  const activeCareer = useMemo<IResumeCareer | null>(() => {
    if (!openModalKey) return null;
    const match = careers.find((c) => CAREER_KEY_BY_ID[c.id] === openModalKey);
    return match ?? null;
  }, [openModalKey]);

  return (
    <Modal
      isOpen={Boolean(activeCareer)}
      onClose={handleClose}
      title={activeCareer ? activeCareer.company : undefined}
      ariaLabel={activeCareer ? `${activeCareer.company} 경력 상세` : '경력 모달'}
    >
      {activeCareer ? <CareerBody career={activeCareer} /> : null}
    </Modal>
  );
}
