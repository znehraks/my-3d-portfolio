import { MODAL_KEY } from '@/store';
import { Floor } from './Floor';
import { JungleGym } from './JungleGym';
import { Paths } from './Path';
import { PineTrees } from './PineTrees';
import { Slide } from './Slide';
import { Swing } from './Swing';
import { Tree } from './Tree';
import { WoodenSign } from './WoodenSign';
import { SkillTower } from '../zones/SkillTower/SkillTower';
import { CareerStreet } from '../zones/CareerStreet/CareerStreet';
import { AIStudio } from '../zones/AIStudio/AIStudio';
import { HallOfFame } from '../zones/HallOfFame/HallOfFame';

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

      {/* 인트로(About) 간판 — 자기소개/개발 철학 모달 */}
      <WoodenSign position={[-4, 0, -4]} modalKey={MODAL_KEY.INTRO_ABOUT} />
      {/* 연락처(Contacts) 간판 — 이메일·GitHub·블로그 링크 */}
      <WoodenSign position={[6, 0, -4]} modalKey={MODAL_KEY.CONTACTS} rotationY={-Math.PI / 8} />
      <Paths />

      <SkillTower />
      <CareerStreet />
      <AIStudio />
      <HallOfFame />
    </>
  );
}
