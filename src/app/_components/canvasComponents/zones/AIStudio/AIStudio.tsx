import { IPosition } from '@/types';
import { WoodenSign } from '../../groundObjects/WoodenSign';
import {
  AI_STUDIO_POSITION,
  AI_STUDIO_RADIUS,
  AI_STUDIO_STOPS,
} from './aiStudioLayout';

const STUDIO_DOME_HEIGHT = 10;

export function AIStudio() {
  const { x: cx, z: cz } = AI_STUDIO_POSITION;

  return (
    <group>
      {/* 🧩 Placeholder — replace with Meshy asset per docs/meshy-assets.md#ai-studio-building */}
      <mesh castShadow receiveShadow position={[cx, STUDIO_DOME_HEIGHT / 2, cz]}>
        <cylinderGeometry args={[5, 7, STUDIO_DOME_HEIGHT, 24]} />
        <meshStandardMaterial color="#e5e0f5" />
      </mesh>
      {/* 🧩 Placeholder — replace with Meshy asset per docs/meshy-assets.md#neon-sign-ai */}
      <mesh position={[cx, STUDIO_DOME_HEIGHT + 1.5, cz]}>
        <boxGeometry args={[6, 1.2, 0.4]} />
        <meshStandardMaterial color="#ff6bd8" emissive="#ff2aa8" emissiveIntensity={0.9} />
      </mesh>

      {AI_STUDIO_STOPS.map((stop, idx) => {
        const angle = (idx / AI_STUDIO_STOPS.length) * Math.PI * 2;
        const dx = Math.cos(angle) * AI_STUDIO_RADIUS;
        const dz = Math.sin(angle) * AI_STUDIO_RADIUS;
        const propPos: IPosition = [cx + dx, stop.boxHeight / 2, cz + dz];
        const signPos: IPosition = [cx + dx * 0.65, 0, cz + dz * 0.65];
        // 간판이 중심(스튜디오)을 바라보도록 회전
        const signRotationY = Math.atan2(dx, dz) + Math.PI;

        return (
          <group key={stop.projectId}>
            {/* 🧩 Placeholder — replace with Meshy asset per docs/meshy-assets.md#<propAnchor>.
                propAnchor 는 hologram-screen | server-rack | robot-npc | mic-studio | film-camera
                중 하나 — aiStudioLayout.ts 의 stop.propAnchor 에 따라 교체 대상이 다름. */}
            <mesh castShadow receiveShadow position={propPos}>
              <boxGeometry args={[3, stop.boxHeight, 3]} />
              <meshStandardMaterial color={stop.placeholderColor} />
            </mesh>
            <WoodenSign
              position={signPos}
              modalKey={stop.modalKey}
              rotationY={signRotationY}
              scale={5}
            />
          </group>
        );
      })}
    </group>
  );
}
