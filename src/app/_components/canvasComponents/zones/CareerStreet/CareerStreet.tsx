import { useGLTF, Instances, Instance } from '@react-three/drei';
import { useMemo } from 'react';
import { Mesh } from 'three';
import { WoodenSign } from '../../groundObjects/WoodenSign';
import { GLBProp } from '../../glb/GLBProp';
import { StreetLamp } from '../../lighting/StreetLamp';
import { IPosition } from '@/types';
import {
  CAREER_STOPS,
  CAREER_STREET_END_Z,
  CareerBuildingAnchor,
  ICareerStop,
} from './careerLayout';

const BUILDING_GLB: Partial<Record<CareerBuildingAnchor, string>> = {
  'building-muhayu': '/models/building_muhayu.glb',
  'building-lab724': '/models/building_lab724.glb',
  'building-aiv': '/models/building_aiv.glb',
  'building-archidraw': '/models/building_archisketch.glb',
};
const BUILDING_GLB_SCALE = 8;

// 거리를 따라 3개 가로등 (stop 사이 중간 지점, 좌우 교차)
const CAREER_STREET_LAMPS: IPosition[] = [
  [4, 0, 40],
  [-4, 0, 56],
  [4, 0, 72],
];

function CareerBuilding({ stop }: { stop: ICareerStop }) {
  const [x, , z] = stop.position;
  const glb = BUILDING_GLB[stop.meshyAnchor];
  if (!glb) return null;
  return <GLBProp src={glb} position={[x, 0, z]} scale={BUILDING_GLB_SCALE} />;
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
      {CAREER_STREET_LAMPS.map((pos, i) => (
        <StreetLamp key={`career-lamp-${i}`} position={pos} />
      ))}
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
