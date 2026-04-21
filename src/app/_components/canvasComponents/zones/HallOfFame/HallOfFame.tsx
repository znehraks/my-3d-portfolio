import { IPosition } from '@/types';
import { WoodenSign } from '../../groundObjects/WoodenSign';
import { HALL_OF_FAME_POSITION, HALL_OF_FAME_STOPS } from './hallOfFameLayout';

const TEMPLE_ROOF_Y = 10;
const TEMPLE_WIDTH = 32;
const TEMPLE_DEPTH = 20;
const COLUMN_POSITIONS: IPosition[] = [
  [-TEMPLE_WIDTH / 2 + 1, 4, -TEMPLE_DEPTH / 2 + 1],
  [TEMPLE_WIDTH / 2 - 1, 4, -TEMPLE_DEPTH / 2 + 1],
  [-TEMPLE_WIDTH / 2 + 1, 4, TEMPLE_DEPTH / 2 - 1],
  [TEMPLE_WIDTH / 2 - 1, 4, TEMPLE_DEPTH / 2 - 1],
];

export function HallOfFame() {
  const { x: cx, z: cz } = HALL_OF_FAME_POSITION;

  return (
    <group position={[cx, 0, cz]}>
      {/* 🧩 Placeholder — replace with Meshy asset per docs/meshy-assets.md#hall-temple */}
      <mesh castShadow receiveShadow position={[0, TEMPLE_ROOF_Y, 0]}>
        <boxGeometry args={[TEMPLE_WIDTH, 0.8, TEMPLE_DEPTH]} />
        <meshStandardMaterial color="#f4f1e4" />
      </mesh>
      {COLUMN_POSITIONS.map((p, i) => (
        <mesh key={`hof-col-${i}`} castShadow receiveShadow position={p}>
          <cylinderGeometry args={[0.6, 0.8, 8, 16]} />
          <meshStandardMaterial color="#ece6cf" />
        </mesh>
      ))}

      {HALL_OF_FAME_STOPS.map((stop) => {
        // 좌표는 월드 기준이므로, 그룹 offset 을 역으로 빼서 로컬로 환산한다.
        const localProp: IPosition = [stop.position[0] - cx, stop.position[1], stop.position[2] - cz];
        const localSign: IPosition = [stop.signPosition[0] - cx, stop.signPosition[1], stop.signPosition[2] - cz];
        return (
          <group key={stop.id}>
            {/* 🧩 Placeholder — replace with Meshy asset per docs/meshy-assets.md#<propAnchor>.
                propAnchor 후보: trophy-gold / trophy-silver / trophy-bronze /
                certificate-frame / graduation-cap (hallOfFameLayout.ts 의 stop.propAnchor 참조). */}
            <mesh castShadow receiveShadow position={localProp}>
              <boxGeometry args={stop.boxSize} />
              <meshStandardMaterial color={stop.placeholderColor} />
            </mesh>
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
