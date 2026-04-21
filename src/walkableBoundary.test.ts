import { describe, expect, it } from 'vitest';
import { isInsideWalkableArea, pointInPolygon } from './walkableBoundary';

describe('pointInPolygon', () => {
  const square: [number, number][] = [
    [0, 0],
    [10, 0],
    [10, 10],
    [0, 10],
  ];

  it('returns true for a point inside a simple square', () => {
    expect(pointInPolygon(5, 5, square)).toBe(true);
  });

  it('returns false for a point outside a simple square', () => {
    expect(pointInPolygon(15, 5, square)).toBe(false);
    expect(pointInPolygon(-1, 5, square)).toBe(false);
  });
});

describe('isInsideWalkableArea', () => {
  it('accepts the central plaza origin', () => {
    expect(isInsideWalkableArea(0, 0)).toBe(true);
  });

  it('accepts a point on the plaza edge (within radius 10)', () => {
    expect(isInsideWalkableArea(6, 6)).toBe(true);
  });

  it('rejects the open sea far from any island', () => {
    expect(isInsideWalkableArea(200, 200)).toBe(false);
    expect(isInsideWalkableArea(-300, 50)).toBe(false);
  });

  it('accepts the Tech island centre (north at angle 90°, distance 70)', () => {
    expect(isInsideWalkableArea(0, 70)).toBe(true);
  });

  it('accepts the Content island centre (southwest at 210°, distance 70)', () => {
    const x = 70 * Math.cos((Math.PI / 2) + (2 * Math.PI) / 3);
    const z = 70 * Math.sin((Math.PI / 2) + (2 * Math.PI) / 3);
    expect(isInsideWalkableArea(x, z)).toBe(true);
  });

  it('accepts the Playground island centre (southeast at -30°, distance 70)', () => {
    const x = 70 * Math.cos((Math.PI / 2) - (2 * Math.PI) / 3);
    const z = 70 * Math.sin((Math.PI / 2) - (2 * Math.PI) / 3);
    expect(isInsideWalkableArea(x, z)).toBe(true);
  });

  it('rejects the sea gap between Tech and Playground islands (NE, 30°)', () => {
    // 3 섬은 N / SW / SE 120° 간격이라 NE 방향은 빈 바다.
    const x = 70 * Math.cos(Math.PI / 6); // 30°
    const z = 70 * Math.sin(Math.PI / 6);
    expect(isInsideWalkableArea(x, z)).toBe(false);
  });

  it('accepts the bridge region midway between plaza and Tech island', () => {
    expect(isInsideWalkableArea(0, 20)).toBe(true);
  });
});
