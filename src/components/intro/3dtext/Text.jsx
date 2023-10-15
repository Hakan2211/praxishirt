'use client';

import { Text3D, Float, useMatcapTexture } from '@react-three/drei';

export default function HeadlineText3D() {
  const [matcapTexture, url] = useMatcapTexture(
    '624541_FCD0C6_E4A19A_FCBCB4',
    256
  );

  return (
    <>
      <Float floatIntensity={0.4} speed={3}>
        <Text3D
          font="../../fonts/Aoboshi One_Regular.json"
          size={0.2}
          height={0.05}
          position={[0.2, 0.2, 0]}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.01}
          bevelOffset={0}
          bevelSegments={5}
        >
          Praxis Hirt
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Float>
    </>
  );
}
//  Included in Intro/Models into the Canvas
