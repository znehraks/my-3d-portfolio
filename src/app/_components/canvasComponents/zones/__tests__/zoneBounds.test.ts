import { describe, expect, it } from 'vitest';
import { detectZone } from '../zoneBounds';

describe('detectZone', () => {
  it('maps central plaza coordinates to intro', () => {
    expect(detectZone(0, 0)).toBe('intro');
    expect(detectZone(10, -10)).toBe('intro');
  });

  it('detects skill tower at (-35, 55)', () => {
    expect(detectZone(-35, 55)).toBe('skill-tower');
    expect(detectZone(-40, 60)).toBe('skill-tower');
  });

  it('detects career street down the timeline avenue', () => {
    expect(detectZone(0, 40)).toBe('career-street');
    expect(detectZone(8, 68)).toBe('career-street');
  });

  it('detects hall of fame at the north end', () => {
    expect(detectZone(0, 95)).toBe('hall-of-fame');
    expect(detectZone(-10, 100)).toBe('hall-of-fame');
  });

  it('detects tech-city broad area outside inner zones', () => {
    expect(detectZone(35, 45)).toBe('tech-city');
    expect(detectZone(35, 75)).toBe('tech-city');
  });

  it('detects content city in the southwest', () => {
    expect(detectZone(-85, -25)).toBe('content-city');
    expect(detectZone(-50, -50)).toBe('content-city');
  });

  it('detects playground in the southeast', () => {
    expect(detectZone(40, -30)).toBe('playground');
    expect(detectZone(60, -50)).toBe('playground');
  });

  it('returns null for coordinates outside all zones', () => {
    expect(detectZone(0, -200)).toBeNull();
    expect(detectZone(200, 200)).toBeNull();
  });
});
