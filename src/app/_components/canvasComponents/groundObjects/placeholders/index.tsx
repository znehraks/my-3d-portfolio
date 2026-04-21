/**
 * 🧩 Tier 1 Placeholders — 3-city redesign
 *
 * 15개의 에셋(도시 게이트 3, 광장 구조물 2, Content City 3, AI 부스 4, 바닥 텍스처 3)을
 * Higgsfield → Meshy 파이프라인으로 납품받기 전까지의 임시 메시 렌더러.
 *
 * 납품된 GLB 는 `public/models/<name>.glb` 로 저장하고, 여기 컴포넌트를
 * `<primitive object={scene} ... />` 기반 실제 렌더러로 1:1 교체한다.
 *
 * 프롬프트 원본: docs/higgsfield-3city-tier1-prompts.md
 * 설계 문서: docs/plans/2026-04-21-3city-redesign-design.md
 */

import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { IPosition } from '@/types';
import { useSetAtom } from 'jotai';
import { ReactNode } from 'react';

// =============================================================================
// 공통: 모달 트리거가 있는 플레이스홀더 래퍼
// =============================================================================
function ClickablePlaceholder({
  position,
  modalKey,
  children,
}: {
  position: IPosition;
  modalKey?: MODAL_KEY;
  children: ReactNode;
}) {
  const setOpenModalKey = useSetAtom(OpenModalKeyAtom);
  return (
    <group
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        if (modalKey) setOpenModalKey(modalKey);
      }}
    >
      {children}
    </group>
  );
}

// =============================================================================
// 1. 도시 게이트 (3종)
// =============================================================================

/** 🧩 replace with gate_tech.glb — (0, 0, 25) / 시안 LED 아치 */
export function GateTech() {
  return (
    <group position={[0, 0, 25]}>
      {/* 좌측 기둥 */}
      <mesh castShadow receiveShadow position={[-6, 4, 0]}>
        <boxGeometry args={[1.5, 8, 1.5]} />
        <meshStandardMaterial color="#1a2a4f" />
      </mesh>
      {/* 우측 기둥 */}
      <mesh castShadow receiveShadow position={[6, 4, 0]}>
        <boxGeometry args={[1.5, 8, 1.5]} />
        <meshStandardMaterial color="#1a2a4f" />
      </mesh>
      {/* 상단 아치 — 시안 발광 */}
      <mesh castShadow position={[0, 8.5, 0]}>
        <boxGeometry args={[13.5, 1, 1.5]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00b8d4" emissiveIntensity={0.6} />
      </mesh>
    </group>
  );
}

/** 🧩 replace with gate_content.glb — (-50, 0, 0) / 마젠타 극장 마키 */
export function GateContent() {
  return (
    <group position={[-50, 0, 0]} rotation-y={Math.PI / 2}>
      <mesh castShadow receiveShadow position={[-5, 3.5, 0]}>
        <boxGeometry args={[1.5, 7, 1.5]} />
        <meshStandardMaterial color="#4a0e3a" />
      </mesh>
      <mesh castShadow receiveShadow position={[5, 3.5, 0]}>
        <boxGeometry args={[1.5, 7, 1.5]} />
        <meshStandardMaterial color="#4a0e3a" />
      </mesh>
      <mesh castShadow position={[0, 7.5, 0]}>
        <boxGeometry args={[11.5, 1.2, 1.5]} />
        <meshStandardMaterial color="#ff2aa8" emissive="#ff6bd8" emissiveIntensity={0.7} />
      </mesh>
    </group>
  );
}

/** 🧩 replace with gate_playground.glb — (50, 0, 0) / 레인보우 원목 아치 */
export function GatePlayground() {
  return (
    <group position={[50, 0, 0]} rotation-y={-Math.PI / 2}>
      <mesh castShadow receiveShadow position={[-4.5, 3, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 6, 8]} />
        <meshStandardMaterial color="#c48a3e" />
      </mesh>
      <mesh castShadow receiveShadow position={[4.5, 3, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 6, 8]} />
        <meshStandardMaterial color="#c48a3e" />
      </mesh>
      <mesh castShadow position={[0, 6.5, 0]}>
        <boxGeometry args={[10.5, 1, 1.2]} />
        <meshStandardMaterial color="#ff7676" />
      </mesh>
    </group>
  );
}

// =============================================================================
// 2. 중앙 광장 (2종)
// =============================================================================

/** 🧩 replace with central_fountain.glb — (0, 0, 0) / 랜드마크 분수 */
export function CentralFountain() {
  return (
    <group position={[0, 0, 0]}>
      <mesh castShadow receiveShadow position={[0, 0.6, 0]}>
        <cylinderGeometry args={[4, 4.5, 1.2, 32]} />
        <meshStandardMaterial color="#d9d4c5" />
      </mesh>
      <mesh position={[0, 1.4, 0]}>
        <cylinderGeometry args={[3.5, 3.5, 0.4, 32]} />
        <meshStandardMaterial color="#7fcfe5" emissive="#4ab0cc" emissiveIntensity={0.2} />
      </mesh>
      <mesh castShadow position={[0, 3, 0]}>
        <coneGeometry args={[1, 3, 16]} />
        <meshStandardMaterial color="#e6eaf0" />
      </mesh>
    </group>
  );
}

/** 🧩 replace with direction_signpost.glb — (0, 0, 18) / 3방향 이정표 */
export function DirectionSignpost() {
  return (
    <group position={[0, 0, 18]}>
      <mesh castShadow receiveShadow position={[0, 2, 0]}>
        <cylinderGeometry args={[0.25, 0.3, 4, 8]} />
        <meshStandardMaterial color="#6b4a1a" />
      </mesh>
      {/* TECH → 북 */}
      <mesh castShadow position={[0, 3.2, 1.2]}>
        <boxGeometry args={[3, 0.8, 0.2]} />
        <meshStandardMaterial color="#00b8d4" />
      </mesh>
      {/* CONTENT → 남서 */}
      <mesh castShadow position={[-1.2, 2.6, -0.8]} rotation-y={Math.PI / 4}>
        <boxGeometry args={[3, 0.8, 0.2]} />
        <meshStandardMaterial color="#ff2aa8" />
      </mesh>
      {/* PLAY → 남동 */}
      <mesh castShadow position={[1.2, 2, -0.8]} rotation-y={-Math.PI / 4}>
        <boxGeometry args={[3, 0.8, 0.2]} />
        <meshStandardMaterial color="#ff7676" />
      </mesh>
    </group>
  );
}

// =============================================================================
// 3. Content City (3종)
// =============================================================================

/** 🧩 replace with stage_88ight.glb — (-85, 0, -25) / 버추얼 아이돌 무대 */
export function Stage88ight() {
  return (
    <ClickablePlaceholder position={[-85, 0, -25]} modalKey={MODAL_KEY.AI_88IGHT}>
      {/* 무대 바닥 */}
      <mesh castShadow receiveShadow position={[0, 0.3, 0]}>
        <boxGeometry args={[8, 0.6, 5]} />
        <meshStandardMaterial color="#2b1730" />
      </mesh>
      {/* LED 백드롭 */}
      <mesh castShadow position={[0, 3.5, -2]}>
        <boxGeometry args={[7, 5, 0.3]} />
        <meshStandardMaterial color="#ff2aa8" emissive="#ff6bd8" emissiveIntensity={0.8} />
      </mesh>
      {/* "88" 네온 사인 */}
      <mesh position={[0, 6.5, -1.9]}>
        <boxGeometry args={[2.5, 1.2, 0.1]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1.2} />
      </mesh>
    </ClickablePlaceholder>
  );
}

/** 🧩 replace with arcade_memepush.glb — (-85, 0, -55) / 아케이드 캐비넷 3대 */
export function ArcadeMemepush() {
  return (
    <ClickablePlaceholder position={[-85, 0, -55]} modalKey={MODAL_KEY.AI_MEME_PUSH}>
      {/* 3 arcade cabinets */}
      {[-2.5, 0, 2.5].map((dx) => (
        <mesh key={dx} castShadow receiveShadow position={[dx, 1.5, 0]}>
          <boxGeometry args={[2, 3, 1.5]} />
          <meshStandardMaterial color="#1e2352" />
        </mesh>
      ))}
      {/* 상단 네온 아치 */}
      <mesh position={[0, 4, 0]}>
        <boxGeometry args={[8, 0.6, 0.3]} />
        <meshStandardMaterial color="#ff00a0" emissive="#ff00a0" emissiveIntensity={0.8} />
      </mesh>
    </ClickablePlaceholder>
  );
}

/** 🧩 replace with booth_coming_soon.glb — (-85, 0, -85) / Tier 2 확장 슬롯 */
export function BoothComingSoon() {
  return (
    <group position={[-85, 0, -85]}>
      {/* 가림막 */}
      <mesh castShadow receiveShadow position={[0, 2, 0]}>
        <boxGeometry args={[5, 4, 3]} />
        <meshStandardMaterial color="#888888" />
      </mesh>
      {/* Coming Soon 플래카드 */}
      <mesh position={[0, 4.5, 1.6]}>
        <boxGeometry args={[4.5, 1, 0.1]} />
        <meshStandardMaterial color="#fff3a8" />
      </mesh>
    </group>
  );
}

// =============================================================================
// 4. AI 툴링 부스 (4종) — Tech City 동측 x=35
// =============================================================================

function AIBooth({
  position,
  color,
  accentColor,
  modalKey,
}: {
  position: IPosition;
  color: string;
  accentColor: string;
  modalKey: MODAL_KEY;
}) {
  return (
    <ClickablePlaceholder position={position} modalKey={modalKey}>
      {/* 부스 본체 */}
      <mesh castShadow receiveShadow position={[0, 1.5, 0]}>
        <boxGeometry args={[4, 3, 3]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* 상단 액센트 */}
      <mesh position={[0, 3.3, 0]}>
        <boxGeometry args={[4.2, 0.5, 3.2]} />
        <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.4} />
      </mesh>
    </ClickablePlaceholder>
  );
}

/** 🧩 replace with booth_agent_team.glb — (35, 0, 45) / 7 마시멜로 로봇 */
export function BoothAgentTeam() {
  return (
    <AIBooth
      position={[35, 0, 45]}
      color="#f0c3a3"
      accentColor="#ffa54f"
      modalKey={MODAL_KEY.AI_AGENT_TEAM}
    />
  );
}

/** 🧩 replace with booth_cc_memory.glb — (35, 0, 60) / 분홍 뇌 + 메모리 카드 */
export function BoothCCMemory() {
  return (
    <AIBooth
      position={[35, 0, 60]}
      color="#f7b8d8"
      accentColor="#ff6bb5"
      modalKey={MODAL_KEY.AI_CODE_MEMORY}
    />
  );
}

/** 🧩 replace with booth_ai_newsbot.glb — (35, 0, 75) / "AI호외요" 신문 부스 */
export function BoothAINewsbot() {
  return (
    <AIBooth
      position={[35, 0, 75]}
      color="#ffe4b5"
      accentColor="#d4a052"
      modalKey={MODAL_KEY.AI_NEWSBOT}
    />
  );
}

/** 🧩 replace with booth_rag_slackbot.glb — (35, 0, 90) / 벡터 큐브 + Slack 아이콘 */
export function BoothRAGSlackbot() {
  return (
    <AIBooth
      position={[35, 0, 90]}
      color="#c7d2ff"
      accentColor="#6b7eff"
      modalKey={MODAL_KEY.AI_RAG_BOT}
    />
  );
}
