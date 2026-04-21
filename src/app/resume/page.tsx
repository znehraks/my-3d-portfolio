import type { Metadata } from 'next';
import Link from 'next/link';
import {
  profile,
  careers,
  aiProjects,
  skillGroups,
  awards,
  certifications,
  education,
} from '@/content/resume';

export const metadata: Metadata = {
  title: `${profile.name} 이력서 (텍스트 버전)`,
  description: profile.summary,
  alternates: { canonical: '/resume' },
  robots: { index: true, follow: true },
};

const sectionHeadingClass = 'mt-10 border-b border-black/10 pb-1 text-xl font-bold text-[#222]';
const articleClass = 'mt-4 rounded-lg bg-white/70 p-4 shadow-sm';

export default function ResumeTextPage() {
  return (
    <article className="mx-auto max-w-3xl bg-[#fffaf0] px-6 py-10 text-[15px] leading-relaxed text-[#222]">
      <header className="space-y-2">
        <p className="text-xs text-[#666]">
          <Link className="underline" href="/">
            ← 3D 포트폴리오로 돌아가기
          </Link>
        </p>
        <h1 className="text-3xl font-bold">{profile.name}</h1>
        <p className="text-base text-[#555]">{profile.roleTagline}</p>
        <p className="text-[15px] leading-7 text-[#333]">{profile.summary}</p>
      </header>

      <section>
        <h2 className={sectionHeadingClass}>개발 철학</h2>
        <ul className="mt-4 space-y-3">
          {profile.philosophy.map((p) => (
            <li key={p.title} className="rounded-md bg-white/70 p-3 shadow-sm">
              <strong className="text-[15px]">{p.title}</strong>
              <p className="mt-1 text-[14px] leading-6 text-[#444]">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className={sectionHeadingClass}>경력</h2>
        {careers.map((career) => (
          <article key={career.id} className={articleClass}>
            <h3 className="text-lg font-semibold">
              {career.company} — {career.role}
            </h3>
            <p className="text-sm text-[#666]">
              <time>{career.period}</time>
            </p>
            {career.headline ? <p className="mt-1 text-[14px] text-[#333]">{career.headline}</p> : null}
            {career.projects.map((project) => (
              <section key={project.title} className="mt-3 rounded-md bg-[#fff7dc] p-3">
                <h4 className="text-[15px] font-semibold">{project.title}</h4>
                <p className="mt-1 text-[13px] text-[#555]">{project.summary}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[13px]">
                  {project.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {project.stack?.length ? (
                  <p className="mt-2 text-[12px] text-[#6b4a1a]">스택: {project.stack.join(', ')}</p>
                ) : null}
              </section>
            ))}
            <p className="mt-3 text-[12px] text-[#666]">사용 기술 요약: {career.stack.join(', ')}</p>
            {career.link ? (
              <p className="mt-1 text-[12px]">
                <a className="underline" href={career.link} target="_blank" rel="noreferrer">
                  관련 사이트 ↗
                </a>
              </p>
            ) : null}
          </article>
        ))}
      </section>

      <section>
        <h2 className={sectionHeadingClass}>AI 프로젝트</h2>
        {aiProjects.map((p) => (
          <article key={p.id} className={articleClass}>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-1 text-[13px] text-[#555]">{p.summary}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[13px]">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="mt-2 text-[12px] text-[#6b4a1a]">도구: {p.tools.join(', ')}</p>
            {p.links?.length ? (
              <ul className="mt-2 space-y-1 text-[12px]">
                {p.links.map((l) => (
                  <li key={l.url}>
                    <a className="underline" href={l.url} target="_blank" rel="noreferrer">
                      {l.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </section>

      <section>
        <h2 className={sectionHeadingClass}>기술 스택</h2>
        {skillGroups.map((group) => (
          <section key={group.level} className={articleClass}>
            <h3 className="text-[15px] font-semibold">{group.label}</h3>
            <div className="mt-2 space-y-2">
              {group.subgroups.map((sub) => (
                <section key={sub.title}>
                  <h4 className="text-[13px] font-semibold text-[#6b4a1a]">{sub.title}</h4>
                  <p className="mt-1 text-[13px]">{sub.items.map((item) => item.label).join(' · ')}</p>
                </section>
              ))}
            </div>
          </section>
        ))}
      </section>

      <section>
        <h2 className={sectionHeadingClass}>수상</h2>
        <ul className="mt-4 space-y-3">
          {awards.map((award) => (
            <li key={award.id} className={articleClass}>
              <strong className="text-[15px]">{award.title}</strong>
              <p className="text-[12px] text-[#666]"><time>{award.date}</time></p>
              <p className="mt-1 text-[13px] text-[#333]">{award.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className={sectionHeadingClass}>자격증</h2>
        <ul className="mt-4 space-y-1 text-[13px]">
          {certifications.map((c) => (
            <li key={c.title}>
              {c.title} — <time>{c.date}</time>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className={sectionHeadingClass}>학력</h2>
        <ul className="mt-4 space-y-1 text-[13px]">
          {education.map((edu) => (
            <li key={edu.school}>
              <strong>{edu.school}</strong> — {edu.major} ({edu.period})
              {edu.gpa ? <span> · 학점 {edu.gpa}</span> : null}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className={sectionHeadingClass}>연락처</h2>
        <ul className="mt-4 space-y-1 text-[13px]">
          <li>
            <a className="underline" href={`mailto:${profile.contact.email}`}>
              {profile.contact.email}
            </a>
          </li>
          <li>
            <a className="underline" href={profile.contact.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a className="underline" href={profile.contact.velog} target="_blank" rel="noreferrer">
              velog
            </a>
          </li>
          <li>
            <a className="underline" href={profile.contact.tistory} target="_blank" rel="noreferrer">
              tistory
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
