/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/Hoodie Character.glb -o src/components/Man.jsx -r public 
*/

import { IPlayer, IPosition } from '@/types';
import { ThreeEvent } from '@react-three/fiber';
import { useGroundPlayer } from './usePlayer';

export function GroundPlayer({
  player,
  newPosition,
  modelIndex: mIdx,
}: {
  player: IPlayer;
  newPosition: IPosition;
  modelIndex?: number;
}) {
  const modelIndex = mIdx ?? player?.selectedCharacterGlbNameIndex;
  const { playerRef, memoizedPosition, playerId, nodes, materials } = useGroundPlayer({
    player,
    newPosition,
    modelIndex,
  });

  return (
    <group
      ref={playerRef}
      position={memoizedPosition}
      name={playerId ?? ''}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
      }}
      dispose={null}
    >
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="CharacterArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <skinnedMesh
            castShadow
            receiveShadow
            name="Character"
            geometry={nodes.Character.geometry}
            material={modelIndex === 1 ? materials['Atlas.001'] : materials.Atlas}
            skeleton={nodes.Character.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}
