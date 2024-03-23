import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Neuron(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('../models/neuron/scene-draco4.gltf');

  useFrame(({ clock }) => {
    //   group.current.rotation.y = clock.getElapsedTime() / 10;
    // group.current.rotation.x = clock.getElapsedTime() / 10;
    group.current.rotation.z = clock.getElapsedTime() / 10;
  });
  return (
    <group {...props} dispose={null}>
      <group ref={group} rotation={[-Math.PI / 2, 0, 0]} scale={24.568}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.lysosome_lysosome3_0.geometry}
            material={materials.lysosome3}
          />
          <mesh
            geometry={nodes.lysosome_lysosome3_0_1.geometry}
            material={materials.lysosome3}
          />
          <mesh
            geometry={nodes.lysosome_lysosome3_0_2.geometry}
            material={materials.lysosome3}
          />
          <mesh
            geometry={nodes.lysosome_lysosome3_0_3.geometry}
            material={materials.lysosome3}
          />
          <mesh
            geometry={nodes.lysosome_lysosome3_0_4.geometry}
            material={materials.lysosome3}
          />
          <mesh
            geometry={nodes.lysosome_lysosome3_0_5.geometry}
            material={materials.lysosome3}
          />
          <mesh
            geometry={nodes.lysosome_lysosome3_0_6.geometry}
            material={materials.lysosome3}
          />
          <mesh
            geometry={nodes.lysosome_lysosome3_0_7.geometry}
            material={materials.lysosome3}
          />
          <mesh
            geometry={nodes.lysosome2_lysosome3_0.geometry}
            material={materials.lysosome3}
          />
          <mesh
            geometry={nodes.lysosome1_lysosome3_0.geometry}
            material={materials.lysosome3}
          />
          <mesh
            geometry={nodes.neuron_Neuron_0.geometry}
            material={materials.Neuron}
          />
          <mesh
            geometry={nodes.neuron_Neuron_0_1.geometry}
            material={materials.Neuron}
          />
          <mesh
            geometry={nodes.neuron_Neuron_0_2.geometry}
            material={materials.Neuron}
          />
          <mesh
            geometry={nodes.neuron1_Neuron_0.geometry}
            material={materials.Neuron}
          />
          <mesh
            geometry={nodes.neuron1_Neuron_0_1.geometry}
            material={materials.Neuron}
          />
          <mesh
            geometry={nodes.neuron2_Neuron_0.geometry}
            material={materials.Neuron}
          />
          <mesh
            geometry={nodes.neuron2_Neuron_0_1.geometry}
            material={materials.Neuron}
          />
          <mesh
            geometry={nodes.neuron2_Neuron_0_2.geometry}
            material={materials.Neuron}
          />
          <mesh
            geometry={nodes.pasted__pSphere1_aiStandardSurface2_0.geometry}
            material={materials.aiStandardSurface2}
          />
          <mesh
            geometry={nodes.Nucleus1_Nucleus_0.geometry}
            material={materials.Nucleus}
          />
          <mesh
            geometry={nodes.Nucleolus_nucleolus_0.geometry}
            material={materials.nucleolus}
          />
          <mesh
            geometry={nodes.golgi_golgiapparatus_0.geometry}
            material={materials.golgiapparatus}
          />
          <mesh
            geometry={nodes.pasted__lysosome2_pasted__lysosome3_0.geometry}
            material={materials.pasted__lysosome3}
          />
          <mesh
            geometry={nodes.pCube10_mitochondria2_0.geometry}
            material={materials.mitochondria2}
          />
          <mesh
            geometry={nodes.pasted__pTorus1_mito_0.geometry}
            material={materials.mito}
          />
          <mesh
            geometry={nodes.pCube11_mitochondria2_0.geometry}
            material={materials.mitochondria2}
          />
          <mesh
            geometry={nodes.pasted__pTorus2_mito_0.geometry}
            material={materials.mito}
          />
          <mesh
            geometry={nodes.pCube12_mitochondria2_0.geometry}
            material={materials.mitochondria2}
          />
          <mesh
            geometry={nodes.pasted__pTorus3_mito_0.geometry}
            material={materials.mito}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('../models/neuron/scene-draco4.gltf');
