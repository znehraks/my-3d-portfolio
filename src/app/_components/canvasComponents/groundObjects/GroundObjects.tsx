import { Box } from './Box';
import { Floor } from './Floor';
import { JungleGym } from './JungleGym';
import { PineTrees } from './PineTrees';
import { Slide } from './Slide';
import { Swing } from './Swing';
import { Tree } from './Tree';

export function GroundObjects() {
  return (
    <>
      <Floor />
      <JungleGym />
      <PineTrees position={[-30, 0, -30]} />
      <Slide />
      <Swing />
      <Tree position={[-9, 0, -8]} />
      <Tree position={[2, 0, -10]} />
      <Tree position={[-3, 0, 20]} />
      <Tree position={[-8, 0, 22]} />

      {/* TODO Errorboundary  */}
      <Box position={[-20, 1.1, -15]} textureSrc="skill-react" />
      <Box position={[-18, 1.1, -17]} textureSrc="skill-next" />
      <Box position={[-22, 1.1, -18]} textureSrc="skill-redux" />
      <Box position={[-16, 1.1, -14]} textureSrc="skill-recoil" />
      <Box position={[-19, 1.1, -12]} textureSrc="skill-jotai" />

      <Box position={[5, 1.1, -20]} textureSrc="skill-javascript" />
      <Box position={[8, 1.1, -22]} textureSrc="skill-typescript" />

      <Box position={[20, 1.1, -10]} textureSrc="skill-html" />
      <Box position={[22, 1.1, -13]} textureSrc="skill-css" />
      <Box position={[18, 1.1, -15]} textureSrc="skill-vanilla-extract-css" />

      <Box position={[-5, 1.1, 18]} textureSrc="skill-nodejs" />
      <Box position={[-8, 1.1, 20]} textureSrc="skill-graphql" />

      <Box position={[15, 1.1, 15]} textureSrc="skill-python" />
      <Box position={[18, 1.1, 18]} textureSrc="skill-mysql" />

      <Box position={[-15, 1.1, 0]} textureSrc="skill-threejs" />
      <Box position={[-18, 1.1, 3]} textureSrc="skill-pixi" />

      <Box position={[0, 1.1, -5]} textureSrc="skill-aws" />

      <Box position={[10, 1.1, 5]} textureSrc="skill-webpack" />
      <Box position={[12, 1.1, 8]} textureSrc="skill-vite" />
      <Box position={[8, 1.1, 7]} textureSrc="skill-esbuild" />
      <Box position={[6, 1.1, 3]} textureSrc="skill-nx" />
    </>
  );
}
