import type { Metadata } from 'next';
import './globals.css';
import { layoutWrapperStyle } from './layout.css';

export const metadata: Metadata = {
  title: 'znehraks portfolio',
  description: '프론트엔드 개발자 znehraks(DesginC)의 포트폴리오',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className={layoutWrapperStyle}>{children}</div>
      </body>
    </html>
  );
}
