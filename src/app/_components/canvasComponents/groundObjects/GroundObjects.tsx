import { Box } from './Box';
import { Floor } from './Floor';
import { JungleGym } from './JungleGym';
import { Paths } from './Path';
import { PineTrees } from './PineTrees';
import { Slide } from './Slide';
import { Swing } from './Swing';
import { Tree } from './Tree';
import { WoodenSign } from './WoodenSign';

export function GroundObjects() {
  return (
    <>
      <Floor />
      <JungleGym />
      <PineTrees position={[-40, 0, -40]} />
      <Slide />
      <Swing />
      <Tree position={[0, 0, -30]} />
      <Tree position={[2, 0, -20]} />
      <Tree position={[-30, 0, 30]} />
      <Tree position={[-30, 0, 40]} />

      <WoodenSign />
      <Paths />

      {/* TODO Errorboundary  */}
      <group position={[45, 0, 45]}>
        <Box position={[-12, 4.1, 30]} scale={8} textureSrc="skill-react" />
        <Box position={[-12, 11.1, 30]} scale={6} textureSrc="skill-next" />
        <Box position={[2, 4.1, 30]} scale={8} textureSrc="skill-javascript" />
        <Box position={[-12, 4.1, 42]} scale={8} textureSrc="skill-typescript" />

        <Box position={[20, 1.6, 30]} scale={3} textureSrc="skill-redux" />
        <Box position={[20, 1.6, 34]} scale={3} textureSrc="skill-recoil" />
        <Box position={[15, 2.1, 33]} scale={4} textureSrc="skill-jotai" />

        <Box position={[8, 2.6, 40]} scale={5} textureSrc="skill-html" />
        <Box position={[18, 2.6, 42]} scale={5} textureSrc="skill-css" />
        <Box position={[10, 2.1, 45]} scale={4} textureSrc="skill-vanilla-extract-css" />

        <Box position={[-5, 1.6, 18]} textureSrc="skill-nodejs" />
        <Box position={[-8, 1.6, 20]} textureSrc="skill-graphql" />

        <Box position={[15, 1.6, 15]} textureSrc="skill-python" />
        <Box position={[18, 1.6, 18]} textureSrc="skill-mysql" />

        <Box position={[10, 3.1, -20]} scale={6} textureSrc="skill-threejs" />
        <Box position={[14, 3.1, -12]} scale={6} textureSrc="skill-pixi" />

        <Box position={[0, 1.6, -5]} textureSrc="skill-aws" />

        <Box position={[14, 1.6, 5]} textureSrc="skill-webpack" />
        <Box position={[10, 1.6, -5]} textureSrc="skill-vite" />
        <Box position={[8, 1.6, -1]} textureSrc="skill-esbuild" />
        <Box position={[6, 1.6, 3]} textureSrc="skill-nx" />
      </group>
    </>
  );
}
