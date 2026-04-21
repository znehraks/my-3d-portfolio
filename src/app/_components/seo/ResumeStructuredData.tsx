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
 * schema.org Person + ProfilePage JSON-LD.
 *
 * 검색엔진이 이력서 데이터를 정형으로 읽어들여 지식 그래프/Rich Results에 반영할 수 있게 함.
 * 데이터는 content 레이어에서 1:1로 가져오므로 이력서가 바뀌면 자동으로 반영된다.
 */
export function ResumeStructuredData() {
  const knowsAbout = Array.from(
    new Set(
      skillGroups.flatMap((group) => group.subgroups.flatMap((sub) => sub.items.map((i) => i.label))),
    ),
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateModified: new Date().toISOString(),
    mainEntity: {
      '@type': 'Person',
      name: profile.name,
      alternateName: ['znehraks', 'Design.C', 'DesignC'],
      jobTitle: profile.roleTagline,
      description: profile.summary,
      email: `mailto:${profile.contact.email}`,
      url: 'https://designc-portfolio.netlify.app/',
      sameAs: [
        profile.contact.github,
        profile.contact.velog,
        profile.contact.tistory,
        profile.contact.youtube,
      ].filter(Boolean),
      worksFor: careers[0] && {
        '@type': 'Organization',
        name: careers[0].company,
      },
      alumniOf: education.map((edu) => ({
        '@type': 'CollegeOrUniversity',
        name: edu.school,
        department: edu.major,
      })),
      hasOccupation: careers.map((career) => ({
        '@type': 'Occupation',
        name: career.role,
        occupationLocation: { '@type': 'Organization', name: career.company },
        description: career.headline ?? career.projects[0]?.summary,
        skills: career.stack.join(', '),
      })),
      award: awards.map((a) => `${a.title} (${a.date})`),
      hasCredential: certifications.map((c) => ({
        '@type': 'EducationalOccupationalCredential',
        name: c.title,
        dateCreated: c.date,
      })),
      knowsAbout,
      makesOffer: aiProjects.map((p) => ({
        '@type': 'Offer',
        name: p.title,
        description: p.summary,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // Next.js 권고 패턴: JSON-LD 삽입 시 dangerouslySetInnerHTML 사용
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
