import { IsLoadCompletedAtom } from '@/store/PlayerStore';
import { Html, useProgress } from '@react-three/drei';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

export function Loader() {
  const { progress } = useProgress();
  const setIsLoadCompleted = useSetAtom(IsLoadCompletedAtom);

  useEffect(() => {
    setIsLoadCompleted(progress === 100);
  }, [progress, setIsLoadCompleted]);

  return (
    <Html center>
      <progress value={progress} />
    </Html>
  );
}
