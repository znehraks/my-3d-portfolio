import { describe, expect, it } from 'vitest';
import { detectZone } from '../zoneBounds';

describe('detectZone', () => {
  it('maps intro playground coordinates', () => {
    expect(detectZone(0, 0)).toBe('intro');
    expect(detectZone(-50, 30)).toBe('intro');
  });

  it('detects skill tower around its center position', () => {
    expect(detectZone(85, 85)).toBe('skill-tower');
    expect(detectZone(80, 90)).toBe('skill-tower');
  });

  it('detects career street down the timeline avenue', () => {
    expect(detectZone(0, 100)).toBe('career-street');
    expect(detectZone(10, 170)).toBe('career-street');
  });

  it('detects ai studio around its dome', () => {
    expect(detectZone(-85, 85)).toBe('ai-studio');
    expect(detectZone(-80, 90)).toBe('ai-studio');
  });

  it('detects hall of fame inside the temple footprint', () => {
    expect(detectZone(0, -110)).toBe('hall-of-fame');
    expect(detectZone(-10, -116)).toBe('hall-of-fame');
  });

  it('returns null for coordinates between zones', () => {
    expect(detectZone(65, 65)).toBeNull();
    expect(detectZone(0, -80)).toBeNull();
    expect(detectZone(-65, -65)).toBeNull();
  });
});
