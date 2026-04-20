/* eslint-disable jsx-a11y/no-autofocus */
import clsx from 'clsx';
import { STEPS } from '@/constants';
import { CharacterSelectFinishedAtom, SelectedCharacterGlbNameIndexAtom } from '@/store';
import { useAtom, useSetAtom } from 'jotai';
import { useState } from 'react';
import { socket } from '@/clientSocket';
import { isValidText } from '@/utils';
import { MainCanvas } from '../MainCanvas';

const loginTitleClassName = 'text-[22px] font-bold';
const inputClassName = 'w-[280px] rounded-lg border-none px-2.5 py-3 text-[18px] outline-none';
const nextButtonBaseClassName =
  'w-[280px] rounded-lg border-none px-2.5 py-2.5 text-[14px] font-semibold outline-none transition-colors duration-200';
const nextButtonValidClassName = `${nextButtonBaseClassName} cursor-pointer bg-[#6731a1] text-white hover:bg-[#340070]`;
const nextButtonDisabledClassName = `${nextButtonBaseClassName} cursor-not-allowed bg-[#8aceff] text-[#ededed]`;
const previousButtonClassName =
  'w-[280px] cursor-pointer rounded-lg border-none px-2.5 py-2.5 text-[14px] font-semibold text-[#666666] outline-none';

export function Lobby() {
  const [currentStep, setCurrentStep] = useState<STEPS>(STEPS.NICK_NAME);
  const [tempNickname, setTempNickname] = useState<string | undefined>();
  const [tempJobPosition, setTempJobPosition] = useState<string | undefined>();
  const [selectedCharacterGlbNameIndex, setSelectedCharacterGlbNameIndex] = useAtom(SelectedCharacterGlbNameIndexAtom);

  const setCharacterSelectFinished = useSetAtom(CharacterSelectFinishedAtom);

  if (!socket) return null;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#85e6ff]">
      {currentStep === STEPS.NICK_NAME && (
        <>
          <div className={loginTitleClassName}>패디에서 사용할 내 이름이에요.</div>
          <input
            className={inputClassName}
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
            className={clsx(isValidText(tempNickname) ? nextButtonValidClassName : nextButtonDisabledClassName)}
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
          <div className={loginTitleClassName}>패디에서 공유할 내 직군이에요.</div>
          <input
            className={inputClassName}
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
            className={clsx(isValidText(tempJobPosition) ? nextButtonValidClassName : nextButtonDisabledClassName)}
            onClick={() => {
              setCurrentStep((prev) => prev + 1);
            }}
          >
            이대로 진행할래요
          </button>
          <button
            type="button"
            className={previousButtonClassName}
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
          <div className={loginTitleClassName}>패디에서 사용할 내 아바타를 고를 시간이에요.</div>
          <div className="flex h-[80%] w-[1200px] flex-col items-center justify-center gap-3">
            <div className="flex h-[80%] w-full flex-row items-center justify-start">
              <div className="flex h-full flex-[2] flex-row items-center justify-between">
                <MainCanvas />
              </div>
            </div>

            <button
              type="button"
              className={clsx(!tempNickname || !tempJobPosition ? nextButtonDisabledClassName : nextButtonValidClassName)}
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
              className={previousButtonClassName}
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
              className={previousButtonClassName}
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
