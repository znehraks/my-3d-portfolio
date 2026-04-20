import { Vector3 } from 'three';
import { describe, expect, it } from 'vitest';
import { calculateMinimapPosition, isValidText } from './utils';

describe('utils', () => {
  it('maps a 3D position into minimap coordinates', () => {
    expect(calculateMinimapPosition(new Vector3(10, 0, -4))).toEqual({
      x: 35,
      y: -21,
    });
  });

  it('treats trimmed text as valid input only when it contains content', () => {
    expect(isValidText(' DesignC ')).toBe(true);
    expect(isValidText('   ')).toBe(false);
    expect(isValidText(undefined)).toBe(false);
  });
});
