import { useGLTF } from '@react-three/drei';
import { useShadow } from './useShadow';
import { useSetAtom } from 'jotai';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';

export function WoodenSign() {
  const { scene } = useGLTF('/models/Wooden Sign.glb');
  const setOpenModalKey = useSetAtom(OpenModalKeyAtom);

  useShadow({ scene });

  return (
    <primitive
      object={scene}
      scale={8}
      position={[-4, 0, -4]}
      onClick={() => {
        setOpenModalKey(MODAL_KEY.WOODEN_SIGN);
      }}
    />
  );
}
