import { Fragment } from 'react';
import { Box } from '../../groundObjects/Box';
import { IPosition } from '@/types';
import { SKILL_TOWER_LEVELS, SKILL_TOWER_POSITION, ISkillTowerLevel } from './skillLayout';

const TOWER_HEIGHT = 22;

function polarPosition(cx: number, cz: number, radius: number, y: number, index: number, total: number): IPosition {
  const angle = (index / total) * Math.PI * 2;
  return [cx + Math.cos(angle) * radius, y, cz + Math.sin(angle) * radius];
}

function TowerLevel({ level }: { level: ISkillTowerLevel }) {
  const { x: cx, z: cz } = SKILL_TOWER_POSITION;
  return (
    <Fragment>
      {/* 🧩 Placeholder — replace with Meshy asset per docs/meshy-assets.md#tower-base */}
      <mesh castShadow receiveShadow position={[cx, level.y - level.boxScale / 2, cz]}>
        <cylinderGeometry args={[level.radius + 1.5, level.radius + 1.5, 0.5, 32]} />
        <meshStandardMaterial color="#d7b98b" />
      </mesh>
      {level.items.map((item, idx) => {
        const pos = polarPosition(cx, cz, level.radius, level.y, idx, level.items.length);
        if (item.textureKey) {
          return (
            <Box
              key={`${level.name}-${item.label}`}
              position={pos}
              scale={level.boxScale}
              textureSrc={item.textureKey}
            />
          );
        }
        // 텍스처 미준비 항목: 단색 큐브 플레이스홀더.
        // TODO(meshy-assets): 로고 텍스처 확보 후 textureKey 연결.
        return (
          <mesh key={`${level.name}-${item.label}`} castShadow receiveShadow position={pos}>
            <boxGeometry args={[level.boxScale, level.boxScale, level.boxScale]} />
            <meshLambertMaterial color="#a88b54" />
          </mesh>
        );
      })}
    </Fragment>
  );
}

export function SkillTower() {
  const { x: cx, z: cz } = SKILL_TOWER_POSITION;

  return (
    <group>
      {/* 🧩 Placeholder — replace with Meshy asset per docs/meshy-assets.md#tower-base
          실제 Meshy 타워 모델 납품 전까지는 아래 기둥 + 층 플랫폼 조합으로 대체한다. */}
      <mesh castShadow receiveShadow position={[cx, TOWER_HEIGHT / 2, cz]}>
        <cylinderGeometry args={[1.2, 1.6, TOWER_HEIGHT, 16]} />
        <meshStandardMaterial color="#8c6a3b" />
      </mesh>

      {SKILL_TOWER_LEVELS.map((level) => (
        <TowerLevel key={level.name} level={level} />
      ))}

      {/* 🧩 Placeholder — replace with Meshy asset per docs/meshy-assets.md#flag-top */}
      <group position={[cx, TOWER_HEIGHT + 1.5, cz]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.1, 0.1, 3, 8]} />
          <meshStandardMaterial color="#3c2910" />
        </mesh>
        <mesh castShadow position={[0.9, 0.8, 0]}>
          <boxGeometry args={[1.8, 1.2, 0.1]} />
          <meshStandardMaterial color="#e87a5a" />
        </mesh>
      </group>
    </group>
  );
}
