export function GroundLights() {
  return (
    <>
      <ambientLight name="ambientLight" intensity={5} />
      <directionalLight
        castShadow
        intensity={10}
        position={[0, 50, -50]}
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
