import type { Metadata } from 'next';
import './globals.css';
import { Footer } from './_components/htmlComponents/Footer';
import { ResumeStructuredData } from './_components/seo/ResumeStructuredData';
import { ResumeSrOnly } from './_components/seo/ResumeSrOnly';
import { profile } from '@/content/resume';

const siteUrl = 'https://designc-portfolio.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.roleTagline}`,
    template: `%s · ${profile.name} 포트폴리오`,
  },
  description: profile.summary,
  keywords: [
    '유정민',
    'znehraks',
    'DesignC',
    'Design.C',
    '프론트엔드 포트폴리오',
    'AI Creator',
    'Technical Artist',
    'React',
    'Next.js',
    'Three.js',
    '미리디',
    '디자인시스템',
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: siteUrl,
    title: `${profile.name} — ${profile.roleTagline}`,
    description: profile.summary,
    siteName: `${profile.name} 포트폴리오`,
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.roleTagline}`,
    description: profile.summary,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ResumeStructuredData />
        <ResumeSrOnly />
        <div className="h-dvh w-dvw bg-[aliceblue]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
