import {
  profile,
  careers,
  aiProjects,
  skillGroups,
  awards,
  certifications,
  education,
} from '@/content/resume';

/**
 * Screen-reader / 크롤러 전용 이력서 전문.
 *
 * 시각적으로는 숨기되(`sr-only`), DOM 에는 시맨틱 HTML 로 존재한다.
 * content 레이어 단일 소스에서 렌더하므로 3D 모달과 자동 동기화.
 */
export function ResumeSrOnly() {
  return (
    <main className="sr-only" aria-label="이력서 텍스트 버전">
      <h1>
        {profile.name} — {profile.roleTagline}
      </h1>
      <p>{profile.summary}</p>

      <section aria-labelledby="resume-philosophy">
        <h2 id="resume-philosophy">개발 철학</h2>
        <ul>
          {profile.philosophy.map((p) => (
            <li key={p.title}>
              <strong>{p.title}</strong>
              <span>: {p.body}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="resume-careers">
        <h2 id="resume-careers">경력</h2>
        {careers.map((career) => (
          <article key={career.id}>
            <h3>
              {career.company} — {career.role}
            </h3>
            <p>
              <time>{career.period}</time>
            </p>
            {career.headline ? <p>{career.headline}</p> : null}
            {career.projects.map((project, idx) => (
              <section key={`${career.id}-${idx}`}>
                <h4>{project.title}</h4>
                <p>{project.summary}</p>
                <ul>
                  {project.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {project.stack?.length ? <p>스택: {project.stack.join(', ')}</p> : null}
              </section>
            ))}
            <p>사용 기술: {career.stack.join(', ')}</p>
          </article>
        ))}
      </section>

      <section aria-labelledby="resume-ai">
        <h2 id="resume-ai">AI 프로젝트 & 포트폴리오</h2>
        {aiProjects.map((p) => (
          <article key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <ul>
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p>도구: {p.tools.join(', ')}</p>
            {p.links?.length ? (
              <ul>
                {p.links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </section>

      <section aria-labelledby="resume-skills">
        <h2 id="resume-skills">기술 스택</h2>
        {skillGroups.map((group) => (
          <section key={group.level}>
            <h3>{group.label}</h3>
            {group.subgroups.map((sub) => (
              <section key={sub.title}>
                <h4>{sub.title}</h4>
                <ul>
                  {sub.items.map((item) => (
                    <li key={item.key}>{item.label}</li>
                  ))}
                </ul>
              </section>
            ))}
          </section>
        ))}
      </section>

      <section aria-labelledby="resume-awards">
        <h2 id="resume-awards">수상 경력</h2>
        <ul>
          {awards.map((award) => (
            <li key={award.id}>
              <strong>{award.title}</strong>
              <span> ({award.date})</span>
              <p>{award.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="resume-certs">
        <h2 id="resume-certs">자격증</h2>
        <ul>
          {certifications.map((c) => (
            <li key={c.title}>
              {c.title} — <time>{c.date}</time>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="resume-education">
        <h2 id="resume-education">학력</h2>
        <ul>
          {education.map((edu) => (
            <li key={edu.school}>
              <strong>{edu.school}</strong>
              <span>
                {' '}
                — {edu.major} ({edu.period})
              </span>
              {edu.gpa ? <span> · 학점 {edu.gpa}</span> : null}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="resume-contact">
        <h2 id="resume-contact">연락처</h2>
        <ul>
          <li>
            <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
          </li>
          <li>
            <a href={profile.contact.github}>GitHub</a>
          </li>
          <li>
            <a href={profile.contact.velog}>velog</a>
          </li>
          <li>
            <a href={profile.contact.tistory}>tistory</a>
          </li>
          {profile.contact.portfolioLegacy ? (
            <li>
              <a href={profile.contact.portfolioLegacy}>구 포트폴리오</a>
            </li>
          ) : null}
        </ul>
      </section>
    </main>
  );
}
