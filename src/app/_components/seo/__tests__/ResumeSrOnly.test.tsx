import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ResumeSrOnly } from '../ResumeSrOnly';

describe('ResumeSrOnly', () => {
  it('renders the hero headline with role tagline', () => {
    render(<ResumeSrOnly />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/유정민/);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/AI Creator/);
  });

  it('lists every company covered in the resume', () => {
    render(<ResumeSrOnly />);
    const doc = document.body.textContent ?? '';
    expect(doc).toContain('미리디');
    expect(doc).toContain('AiV');
    expect(doc).toContain('무하유');
    expect(doc).toContain('아키드로우');
    expect(doc).toContain('724랩');
    expect(doc).toContain('패스트캠퍼스');
  });

  it('includes primary award and certification keywords', () => {
    render(<ResumeSrOnly />);
    const doc = document.body.textContent ?? '';
    expect(doc).toContain('KOPIS');
    expect(doc).toContain('빅데이터 분석기사');
    expect(doc).toContain('명지대학교');
  });

  it('exposes the contact email as a mailto link', () => {
    render(<ResumeSrOnly />);
    const mailto = screen.getByRole('link', { name: /znehraks@gmail\.com/ });
    expect(mailto).toHaveAttribute('href', 'mailto:znehraks@gmail.com');
  });

  it('is wrapped in sr-only semantic main landmark', () => {
    render(<ResumeSrOnly />);
    const main = screen.getByRole('main');
    expect(main.className).toContain('sr-only');
    expect(main).toHaveAttribute('aria-label');
  });
});
