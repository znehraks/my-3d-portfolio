import { describe, expect, it } from 'vitest';
import {
  profile,
  contactLinks,
  careers,
  aiProjects,
  skillGroups,
  awards,
  certifications,
  education,
} from '..';

describe('resume content — integrity', () => {
  it('profile exposes name, tagline, summary, philosophy, and contact', () => {
    expect(profile.name).toBe('유정민');
    expect(profile.roleTagline).toMatch(/AI Creator/);
    expect(profile.summary.length).toBeGreaterThan(20);
    expect(profile.philosophy.length).toBeGreaterThanOrEqual(3);
    expect(profile.contact.email).toBe('znehraks@gmail.com');
  });

  it('contact links include email, github, velog, tistory', () => {
    expect(contactLinks.email).toContain('@');
    expect(contactLinks.github).toMatch(/github\.com/);
    expect(contactLinks.velog).toMatch(/velog\.io/);
    expect(contactLinks.tistory).toMatch(/tistory\.com/);
  });

  it('careers list covers all six companies in chronological newest-first order', () => {
    const ids = careers.map((c) => c.id);
    expect(ids).toEqual(['miridih', 'aiv', 'fastcampus', 'muhayu', 'archidraw', 'lab724']);
    careers.forEach((career) => {
      expect(career.company.length).toBeGreaterThan(0);
      expect(career.period).toMatch(/\d{4}\.\d{2}/);
      expect(career.projects.length).toBeGreaterThan(0);
      career.projects.forEach((project) => {
        expect(project.title.length).toBeGreaterThan(0);
        expect(project.bullets.length).toBeGreaterThan(0);
      });
    });
  });

  it('ai projects cover each primary category', () => {
    const cats = new Set(aiProjects.map((p) => p.category));
    expect(cats.has('video')).toBe(true);
    expect(cats.has('automation')).toBe(true);
    expect(cats.has('tooling')).toBe(true);
    expect(cats.has('game')).toBe(true);
  });

  it('skill groups map every tower level we plan to render', () => {
    const levels = skillGroups.map((g) => g.level);
    expect(levels).toEqual(['proficient', 'familiar', 'ai-tools', 'collab-tools']);
    skillGroups.forEach((group) => {
      expect(group.subgroups.length).toBeGreaterThan(0);
      group.subgroups.forEach((sub) => {
        expect(sub.items.length).toBeGreaterThan(0);
      });
    });
  });

  it('awards include three recognized competitions with distinct ranks', () => {
    expect(awards).toHaveLength(3);
    awards.forEach((a) => {
      expect(['gold', 'silver', 'bronze']).toContain(a.rank);
    });
  });

  it('certifications list contains investment and data credentials', () => {
    const titles = certifications.map((c) => c.title).join(' ');
    expect(titles).toMatch(/투자자산운용사/);
    expect(titles).toMatch(/빅데이터/);
  });

  it('education records Myongji university', () => {
    expect(education[0].school).toBe('명지대학교');
  });
});
