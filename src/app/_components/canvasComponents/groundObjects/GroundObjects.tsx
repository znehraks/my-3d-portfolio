import { MODAL_KEY } from '@/store';
import { JungleGym } from './JungleGym';
import { Paths } from './Path';
import { PineTrees } from './PineTrees';
import { Slide } from './Slide';
import { Swing } from './Swing';
import { Tree } from './Tree';
import { WoodenSign } from './WoodenSign';
import { SkillTower } from '../zones/SkillTower/SkillTower';
import { CareerStreet } from '../zones/CareerStreet/CareerStreet';
import { HallOfFame } from '../zones/HallOfFame/HallOfFame';
import { HubProps } from '../zones/Hub/HubProps';
import { ContentCityProps } from '../zones/ContentCity/ContentCityProps';
import { PlaygroundProps } from '../zones/Playground/PlaygroundProps';
import { IslandGlow } from '../lighting/IslandGlow';
import {
  TechIsland,
  ContentIsland,
  PlaygroundIsland,
} from './ground/Islands';
import { CentralPlaza } from './ground/CentralPlaza';
import { Ambience } from './ground/Ambience';
import { AmbientDetails } from './ground/AmbientDetails';
import {
  GateTech,
  GateContent,
  GatePlayground,
  CentralFountain,
  DirectionSignpost,
  Stage88ight,
  ArcadeMemepush,
  BoothComingSoon,
  BoothAgentTeam,
  BoothCCMemory,
  BoothAINewsbot,
  BoothRAGSlackbot,
} from './placeholders';

/**
 * 3-city 월드 루트.
 *
 * 레이아웃: 북쪽(Tech) / 남서(Content) / 남동(Playground) + 중앙 허브(Fountain).
 * 기존 `Floor` / `AIStudio` 는 제거됨 — 각각 4개 바닥 + 4개 개별 부스로 대체.
 * 설계 문서: docs/plans/2026-04-21-3city-redesign-design.md
 */
export function GroundObjects() {
  return (
    <>
      {/* === 환경 배경 (바다 + 구름 + 덩굴 + 부속 바위 + 폭포) === */}
      <Ambience />
      <AmbientDetails />

      {/* === 섬별 야경 앰비언트 조명 (은은한 색조) === */}
      <IslandGlow />

      {/* === 바닥 (자유형 섬 3 + 허브 광장). 허브↔섬 연결은 Path 의 돌 타일이 담당 === */}
      <TechIsland />
      <ContentIsland />
      <PlaygroundIsland />
      <CentralPlaza />

      {/* === 중앙 허브 === */}
      <CentralFountain />
      <DirectionSignpost />
      <HubProps />

      {/* === 도시 게이트 === */}
      <GateTech />
      <GateContent />
      <GatePlayground />

      {/* === Tech City === */}
      <CareerStreet />
      <SkillTower />
      <HallOfFame />
      <BoothAgentTeam />
      <BoothCCMemory />
      <BoothAINewsbot />
      <BoothRAGSlackbot />

      {/* === Content City === */}
      <Stage88ight />
      <ArcadeMemepush />
      <BoothComingSoon />
      <ContentCityProps />

      {/* === Playground (0.45x 재배치) === */}
      <JungleGym />
      <Slide />
      <Swing />
      <PlaygroundProps />
      <PineTrees position={[80, 0, -80]} />
      <Tree position={[25, 0, -20]} />
      <Tree position={[70, 0, -35]} />
      <Tree position={[35, 0, -75]} />
      <Tree position={[55, 0, -15]} />

      {/* === 인트로 간판 — 중앙 광장 근처 === */}
      <WoodenSign position={[-3, 0, 8]} modalKey={MODAL_KEY.INTRO_ABOUT} />
      <WoodenSign position={[3, 0, 8]} modalKey={MODAL_KEY.CONTACTS} rotationY={-Math.PI / 8} />
      <Paths />
    </>
  );
}
