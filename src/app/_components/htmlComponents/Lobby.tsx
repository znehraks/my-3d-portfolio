/* eslint-disable jsx-a11y/no-autofocus */
import { STEPS } from '@/constants';
import { CharacterSelectFinishedAtom, SelectedCharacterGlbNameIndexAtom } from '@/store/PlayerStore';
import { useAtom, useSetAtom } from 'jotai';
import { useState } from 'react';
import { socket } from '@/clientSocket';
import { isValidText } from '@/utils';
import {
  characterCanvasContainer,
  characterCanvasWrapper,
  characterTuningWrapper,
  inputStyle,
  loginContainerStyle,
  loginTitle,
  nextBtnDisabledStyle,
  nextBtnValidStyle,
  prevBtnStyle,
} from './Lobby.css';
import { MainCanvas } from '../MainCanvas';

export function Lobby() {
  const [currentStep, setCurrentStep] = useState<STEPS>(STEPS.NICK_NAME);
  const [tempNickname, setTempNickname] = useState<string | undefined>();
  const [tempJobPosition, setTempJobPosition] = useState<string | undefined>();
  const [selectedCharacterGlbNameIndex, setSelectedCharacterGlbNameIndex] = useAtom(SelectedCharacterGlbNameIndexAtom);

  const setCharacterSelectFinished = useSetAtom(CharacterSelectFinishedAtom);

  if (!socket) return null;
  return (
    <div className={loginContainerStyle}>
      {currentStep === STEPS.NICK_NAME && (
        <>
          <div className={loginTitle}>패디에서 사용할 내 이름이에요.</div>
          <input
            className={inputStyle}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            placeholder="별명을 입력해주세요."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTempNickname(e.currentTarget.value);
            }}
            onKeyUp={(e) => {
              if (!isValidText(tempNickname)) return;
              if (e.key === 'Enter') {
                setCurrentStep((prev) => prev + 1);
              }
            }}
          />
          <button
            type="button"
            disabled={!isValidText(tempNickname)}
            className={isValidText(tempNickname) ? nextBtnValidStyle : nextBtnDisabledStyle}
            onClick={() => {
              setCurrentStep((prev) => prev + 1);
            }}
          >
            이대로 진행할래요
          </button>
        </>
      )}
      {currentStep === STEPS.JOB_POSITION && (
        <>
          <div className={loginTitle}>패디에서 공유할 내 직군이에요.</div>
          <input
            className={inputStyle}
            autoFocus
            placeholder="개발 직군을 입력해주세요."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTempJobPosition(e.currentTarget.value);
            }}
            onKeyUp={(e) => {
              if (!isValidText(tempJobPosition)) return;
              if (e.key === 'Enter') {
                setCurrentStep((prev) => prev + 1);
              }
            }}
          />
          <button
            type="button"
            disabled={!isValidText(tempJobPosition)}
            className={isValidText(tempJobPosition) ? nextBtnValidStyle : nextBtnDisabledStyle}
            onClick={() => {
              setCurrentStep((prev) => prev + 1);
            }}
          >
            이대로 진행할래요
          </button>
          <button
            type="button"
            className={prevBtnStyle}
            onClick={() => {
              setCurrentStep((prev) => prev - 1);
            }}
          >
            이전으로 돌아갈래요
          </button>
        </>
      )}
      {currentStep === STEPS.CHARACTER && (
        <>
          <div className={loginTitle}>패디에서 사용할 내 아바타를 고를 시간이에요.</div>
          <div className={characterCanvasContainer}>
            <div className={characterTuningWrapper}>
              <div className={characterCanvasWrapper}>
                <MainCanvas />
              </div>
            </div>

            <button
              type="button"
              className={!tempNickname || !tempJobPosition ? nextBtnDisabledStyle : nextBtnValidStyle}
              onClick={() => {
                if (!tempNickname || !tempJobPosition) return;
                socket.emit('initialize', {
                  tempNickname,
                  tempJobPosition,
                  selectedCharacterGlbNameIndex,
                  myRoom: { object: [] },
                });
                setCharacterSelectFinished(true);
              }}
              onKeyUp={(e) => {
                if (!tempNickname || !tempJobPosition) return;
                if (e.key === 'enter') {
                  socket.emit('initialize', {
                    tempNickname,
                    tempJobPosition,
                    selectedCharacterGlbNameIndex,
                    myRoom: { object: [] },
                  });
                  setCharacterSelectFinished(true);
                }
              }}
            >
              {/* 이거 누르면 애니메이션 다른것 재생 */}
              {/* 애니메이션 추가로 필요한 것들 더 담기 */}이 모습으로 진행할래요.
            </button>

            <button
              type="button"
              className={prevBtnStyle}
              onClick={() => {
                setSelectedCharacterGlbNameIndex((prev) => {
                  if (prev === undefined) return 1;
                  if (prev === 2) return 0;
                  return prev + 1;
                });
              }}
            >
              다른 캐릭터도 볼래요
            </button>
            <button
              type="button"
              className={prevBtnStyle}
              onClick={() => {
                setCurrentStep((prev) => prev - 1);
              }}
            >
              이전으로 돌아갈래요
            </button>
          </div>
        </>
      )}
    </div>
  );
}
