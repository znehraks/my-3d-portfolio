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
      <PineTrees position={[-20, 0, -30]} />
      <PineTrees position={[-30, 0, -20]} />
      <PineTrees position={[-20, 0, -20]} />
      <Slide />
      <Swing />
      <Tree position={[-9, 0, -8]} />
      <Tree position={[2, 0, -10]} />
      <Tree position={[-3, 0, 20]} />
      <Tree position={[-8, 0, 22]} />
    </>
  );
}
