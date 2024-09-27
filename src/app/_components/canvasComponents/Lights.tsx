import { IPosition } from '@/types';
import React, { useEffect, useState } from 'react';
import { Color } from 'three';

export function GroundLights() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const getTimeBasedSettings = (): {
    ambientIntensity: number;
    directionalIntensity: number;
    color: Color;
    position: IPosition;
  } => {
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const time = hour + minute / 60;

    // 색상 보간 함수
    const lerpColor = (color1: number, color2: number, alpha: number) => {
      return new Color(color1).lerp(new Color(color2), alpha);
    };

    if (time >= 5 && time < 8) {
      // 새벽 (5:00-8:00)
      const alpha = (time - 5) / 3;
      return {
        ambientIntensity: 1 + alpha * 2,
        directionalIntensity: 2 + alpha * 3,
        color: lerpColor(0x4b5cc4, 0xffffff, alpha),
        position: [-50 + alpha * 50, 10 + alpha * 40, -50 + alpha * 50],
      };
    }
    if (time >= 8 && time < 16) {
      // 낮 (8:00-16:00)
      return {
        ambientIntensity: 3,
        directionalIntensity: 5,
        color: new Color(0xfffaf0),
        position: [0, 50, 0],
      };
    }
    if (time >= 16 && time < 20) {
      // 해질무렵 (16:00-20:00)
      const alpha = (time - 16) / 4;
      const sunsetColor = lerpColor(0xffa07a, 0xe85d04, alpha);
      return {
        ambientIntensity: 3 - alpha,
        directionalIntensity: 5 - alpha * 2,
        color: sunsetColor,
        position: [50 - alpha * 30, 50 - alpha * 40, alpha * 50],
      };
    }
    // 밤 시간대 (20:00-5:00)
    return {
      ambientIntensity: 0.8,
      directionalIntensity: 1,
      color: new Color(0x4b5cc4),
      position: [20, 30, -20],
    };
  };

  const { ambientIntensity, directionalIntensity, color, position } = getTimeBasedSettings();

  return (
    <>
      <ambientLight name="ambientLight" intensity={ambientIntensity} color={color} />
      <directionalLight
        castShadow
        intensity={directionalIntensity}
        position={position}
        color={color}
        shadow-normalBias={0.1}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
        shadow-camera-near={0.1}
        shadow-camera-far={200}
      />
    </>
  );
}
