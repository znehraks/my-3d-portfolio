import { useGLTF, Instances, Instance } from '@react-three/drei';
import { useMemo } from 'react';
import { Mesh } from 'three';
import { WoodenSign } from '../../groundObjects/WoodenSign';
import { IPosition } from '@/types';
import {
  CAREER_STOPS,
  CAREER_STREET_END_Z,
  CAREER_STREET_START_Z,
  ICareerStop,
} from './careerLayout';

const BUILDING_SCALE: IPosition = [10, 12, 10];

function CareerBuilding({ stop }: { stop: ICareerStop }) {
  const [x, , z] = stop.position;
  return (
    <group position={[x, BUILDING_SCALE[1] / 2, z]}>
      {/* 🧩 Placeholder — replace with Meshy asset per docs/meshy-assets.md#${anchor}
          실제 Meshy 건물 모델 교체 시 이 박스 전체를 `<primitive object={scene} ... />` 로 바꾼다. */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={BUILDING_SCALE} />
        <meshStandardMaterial color={stop.placeholderColor} />
      </mesh>
      {/* 색깔만으로 구분이 어려우므로 회사명 라벨 역할의 작은 보조 박스 */}
      <mesh position={[0, BUILDING_SCALE[1] / 2 + 1, 0]}>
        <boxGeometry args={[6, 1.5, 0.3]} />
        <meshStandardMaterial color="#fffcea" />
      </mesh>
    </group>
  );
}

function TimelineArrowSign() {
  // 🧩 Placeholder — replace with Meshy asset per docs/meshy-assets.md#sign-timeline-arrow
  return (
    <group position={[0, 2, CAREER_STREET_START_Z - 8]}>
      <mesh castShadow>
        <boxGeometry args={[6, 1.2, 0.4]} />
        <meshStandardMaterial color="#a6702f" />
      </mesh>
      <mesh position={[3.4, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <coneGeometry args={[0.8, 1.6, 4]} />
        <meshStandardMaterial color="#a6702f" />
      </mesh>
      <mesh position={[0, -1.6, 0]}>
        <cylinderGeometry args={[0.2, 0.25, 3, 8]} />
        <meshStandardMaterial color="#6b4a1a" />
      </mesh>
    </group>
  );
}

function StreetPath() {
  const gltf = useGLTF('/models/Rock Path Round Wide.glb');
  const mesh = useMemo(() => {
    let found: Mesh | null = null;
    gltf.scene.traverse((child) => {
      if (child instanceof Mesh && child.isMesh) {
        found = child;
      }
    });
    if (!found) throw new Error('Career street: path mesh missing');
    return found as Mesh;
  }, [gltf.scene]);

  // 놀이터 중앙(0,0,0) → 경력 거리 끝(0,0,CAREER_STREET_END_Z) 까지 8 간격으로 길 인스턴스를 깐다.
  const positions = useMemo<IPosition[]>(() => {
    const out: IPosition[] = [];
    for (let z = 0; z <= CAREER_STREET_END_Z; z += 8) {
      out.push([0, 0, z]);
    }
    return out;
  }, []);

  return (
    <Instances geometry={mesh.geometry} material={mesh.material}>
      {positions.map((position, index) => (
        <Instance key={`career-path-${index}-${position[2]}`} position={position} scale={4} />
      ))}
    </Instances>
  );
}

export function CareerStreet() {
  return (
    <group>
      <StreetPath />
      <TimelineArrowSign />
      {CAREER_STOPS.map((stop) => (
        <group key={stop.id}>
          <CareerBuilding stop={stop} />
          <WoodenSign
            position={stop.signPosition}
            modalKey={stop.modalKey}
            rotationY={stop.signRotationY}
            scale={6}
          />
        </group>
      ))}
    </group>
  );
}

useGLTF.preload('/models/Rock Path Round Wide.glb');
