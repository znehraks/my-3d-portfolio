import { IPosition } from '@/types';
import { WoodenSign } from '../../groundObjects/WoodenSign';
import { GLBProp } from '../../glb/GLBProp';
import { StreetLamp } from '../../lighting/StreetLamp';
import { HALL_OF_FAME_POSITION, HALL_OF_FAME_STOPS, HallOfFameAnchor } from './hallOfFameLayout';

// 전시 오브젝트(트로피 3개) 전방을 비추는 가로등 2개.
// 좌표는 HallOfFame 그룹 로컬 기준 (허브→HOF 중심 오프셋 제외).
const HOF_LAMP_LOCAL: IPosition[] = [
  [-10, 0, -7],
  [10, 0, -7],
];

const ANCHOR_GLB: Partial<Record<HallOfFameAnchor, string>> = {
  'trophy-gold': '/models/trophy_gold.glb',
  'trophy-silver': '/models/trophy_silver.glb',
  'certificate-frame': '/models/certificate_frame.glb',
};

const ANCHOR_SCALE: Partial<Record<HallOfFameAnchor, number>> = {
  'trophy-gold': 4.5,
  'trophy-silver': 4,
  'certificate-frame': 3.5,
};

export function HallOfFame() {
  const { x: cx, z: cz } = HALL_OF_FAME_POSITION;

  return (
    <group position={[cx, 0, cz]}>
      {HOF_LAMP_LOCAL.map((pos, i) => (
        <StreetLamp key={`hof-lamp-${i}`} position={pos} color="#ffe6a8" />
      ))}

      {HALL_OF_FAME_STOPS.map((stop) => {
        const localProp: IPosition = [stop.position[0] - cx, 0, stop.position[2] - cz];
        const localSign: IPosition = [stop.signPosition[0] - cx, stop.signPosition[1], stop.signPosition[2] - cz];
        const glb = ANCHOR_GLB[stop.propAnchor];
        const glbScale = ANCHOR_SCALE[stop.propAnchor] ?? 1;
        return (
          <group key={stop.id}>
            {glb && <GLBProp src={glb} position={localProp} scale={glbScale} />}
            <WoodenSign
              position={localSign}
              modalKey={stop.modalKey}
              rotationY={stop.signRotationY}
              scale={5}
            />
          </group>
        );
      })}
    </group>
  );
}
