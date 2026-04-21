import {
  TECH_ISLAND_POINTS,
  CONTENT_ISLAND_POINTS,
  PLAYGROUND_ISLAND_POINTS,
  TECH_BRIDGE,
  CONTENT_BRIDGE,
  PLAYGROUND_BRIDGE,
} from '@/app/_components/canvasComponents/groundObjects/ground/Islands';
import { PLAZA_RADIUS } from '@/app/_components/canvasComponents/groundObjects/ground/CentralPlaza';

/**
 * 플레이어 이동 가능 영역 판정.
 *
 * 걷기 허용: 중앙 광장(원) + 3개 섬 폴리곤 + 3개 브리지 폴리곤의 합집합.
 * 그 외(= 바다) 는 usePlayer useFrame 에서 롤백 대상.
 *
 * 성능: 프레임당 최대 67회 비교 (원 1 + 섬 54 + 브리지 12). 60 FPS 여유.
 *
 * 정확도: Islands 의 splineThru 곡선 보간 대비 원본 18점만 보므로 시각 경계와
 * 최대 ~0.5 유닛 오차. 실사용 무해.
 */

type Polygon = readonly (readonly [number, number])[];

export function pointInPolygon(x: number, z: number, poly: Polygon): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, zi] = poly[i];
    const [xj, zj] = poly[j];
    const intersect =
      zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

const POLYGONS: Polygon[] = [
  TECH_ISLAND_POINTS,
  CONTENT_ISLAND_POINTS,
  PLAYGROUND_ISLAND_POINTS,
  TECH_BRIDGE,
  CONTENT_BRIDGE,
  PLAYGROUND_BRIDGE,
];

const PLAZA_R2 = PLAZA_RADIUS * PLAZA_RADIUS;

export function isInsideWalkableArea(x: number, z: number): boolean {
  if (x * x + z * z <= PLAZA_R2) return true;
  for (const poly of POLYGONS) {
    if (pointInPolygon(x, z, poly)) return true;
  }
  return false;
}
