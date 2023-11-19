'use client';

import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Dance(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    '../models/dance/scene.gltf'
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions[Object.keys(actions)[0]];
    action.play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group
            name="00542494ef2a4a879be9478603bd912bfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="dancer1"
                  position={[-14.95, 87.697, 19.893]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_5">
                    <group
                      name="Lights"
                      position={[-14.779, 3.058, -57.217]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethDown"
                      position={[-14.798, 11.424, 70.994]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethUp"
                      position={[-14.783, 12.762, 71.622]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_gland"
                      position={[-12.855, 8.903, 78.43]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_eye"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_gland"
                      position={[-16.682, 8.851, 78.454]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_eye"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="H_DDS_LowRes"
                      position={[-14.779, 19.893, -87.697]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_7" position={[0, 0, -2.856]} />
                    <group name="Object_9" position={[0, 0, -2.856]} />
                    <group name="Object_11" position={[0, 0, -2.856]} />
                    <group name="Object_13" position={[0, 0, -2.856]} />
                    <group name="Object_15" position={[0, 0, -2.856]} />
                    <group name="Object_17" position={[0, 0, -2.856]} />
                    <group name="Object_19" position={[0, 0, -2.856]} />
                    <skinnedMesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_8.skeleton}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_10.skeleton}
                    />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <skinnedMesh
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_14.skeleton}
                    />
                    <skinnedMesh
                      name="Object_16"
                      geometry={nodes.Object_16.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_16.skeleton}
                    />
                    <skinnedMesh
                      name="Object_18"
                      geometry={nodes.Object_18.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_18.skeleton}
                    />
                    <skinnedMesh
                      name="Object_20"
                      geometry={nodes.Object_20.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_20.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="dancer002"
                  position={[181.801, 87.697, 19.893]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_100">
                    <group
                      name="H_DDS_LowRes001"
                      position={[-14.779, 19.893, -87.697]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_eye001"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_gland001"
                      position={[-12.855, 8.903, 78.43]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_eye001"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_gland001"
                      position={[-16.682, 8.851, 78.454]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethDown001"
                      position={[-14.798, 11.424, 70.994]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethUp001"
                      position={[-14.783, 12.762, 71.622]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Lights001"
                      position={[-14.779, 3.058, -57.217]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <primitive object={nodes._rootJoint_1} />
                    <group name="Object_102" position={[0, 0, -2.856]} />
                    <group name="Object_104" position={[0, 0, -2.856]} />
                    <group name="Object_106" position={[0, 0, -2.856]} />
                    <group name="Object_108" position={[0, 0, -2.856]} />
                    <group name="Object_110" position={[0, 0, -2.856]} />
                    <group name="Object_112" position={[0, 0, -2.856]} />
                    <group name="Object_114" position={[0, 0, -2.856]} />
                    <skinnedMesh
                      name="Object_103"
                      geometry={nodes.Object_103.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_103.skeleton}
                    />
                    <skinnedMesh
                      name="Object_105"
                      geometry={nodes.Object_105.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_105.skeleton}
                    />
                    <skinnedMesh
                      name="Object_107"
                      geometry={nodes.Object_107.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_107.skeleton}
                    />
                    <skinnedMesh
                      name="Object_109"
                      geometry={nodes.Object_109.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_109.skeleton}
                    />
                    <skinnedMesh
                      name="Object_111"
                      geometry={nodes.Object_111.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_111.skeleton}
                    />
                    <skinnedMesh
                      name="Object_113"
                      geometry={nodes.Object_113.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_113.skeleton}
                    />
                    <skinnedMesh
                      name="Object_115"
                      geometry={nodes.Object_115.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_115.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="dancer003"
                  position={[378.553, 87.697, 19.893]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_195">
                    <group
                      name="H_DDS_LowRes002"
                      position={[-14.779, 19.893, -87.697]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_eye002"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_gland002"
                      position={[-12.855, 8.903, 78.43]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_eye002"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_gland002"
                      position={[-16.682, 8.851, 78.454]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethDown002"
                      position={[-14.798, 11.424, 70.994]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethUp002"
                      position={[-14.783, 12.762, 71.622]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Lights002"
                      position={[-14.779, 3.058, -57.217]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <primitive object={nodes._rootJoint_2} />
                    <group name="Object_197" position={[0, 0, -2.856]} />
                    <group name="Object_199" position={[0, 0, -2.856]} />
                    <group name="Object_201" position={[0, 0, -2.856]} />
                    <group name="Object_203" position={[0, 0, -2.856]} />
                    <group name="Object_205" position={[0, 0, -2.856]} />
                    <group name="Object_207" position={[0, 0, -2.856]} />
                    <group name="Object_209" position={[0, 0, -2.856]} />
                    <skinnedMesh
                      name="Object_198"
                      geometry={nodes.Object_198.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_198.skeleton}
                    />
                    <skinnedMesh
                      name="Object_200"
                      geometry={nodes.Object_200.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_200.skeleton}
                    />
                    <skinnedMesh
                      name="Object_202"
                      geometry={nodes.Object_202.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_202.skeleton}
                    />
                    <skinnedMesh
                      name="Object_204"
                      geometry={nodes.Object_204.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_204.skeleton}
                    />
                    <skinnedMesh
                      name="Object_206"
                      geometry={nodes.Object_206.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_206.skeleton}
                    />
                    <skinnedMesh
                      name="Object_208"
                      geometry={nodes.Object_208.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_208.skeleton}
                    />
                    <skinnedMesh
                      name="Object_210"
                      geometry={nodes.Object_210.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_210.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="dancer004"
                  position={[575.305, 87.697, 19.893]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_290">
                    <group
                      name="H_DDS_LowRes003"
                      position={[-14.779, 19.893, -87.697]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_eye003"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_gland003"
                      position={[-12.855, 8.903, 78.43]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_eye003"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_gland003"
                      position={[-16.682, 8.851, 78.454]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethDown003"
                      position={[-14.798, 11.424, 70.994]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethUp003"
                      position={[-14.783, 12.762, 71.622]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Lights003"
                      position={[-14.779, 3.058, -57.217]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <primitive object={nodes._rootJoint_3} />
                    <group name="Object_292" position={[0, 0, -2.856]} />
                    <group name="Object_294" position={[0, 0, -2.856]} />
                    <group name="Object_296" position={[0, 0, -2.856]} />
                    <group name="Object_298" position={[0, 0, -2.856]} />
                    <group name="Object_300" position={[0, 0, -2.856]} />
                    <group name="Object_302" position={[0, 0, -2.856]} />
                    <group name="Object_304" position={[0, 0, -2.856]} />
                    <skinnedMesh
                      name="Object_293"
                      geometry={nodes.Object_293.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_293.skeleton}
                    />
                    <skinnedMesh
                      name="Object_295"
                      geometry={nodes.Object_295.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_295.skeleton}
                    />
                    <skinnedMesh
                      name="Object_297"
                      geometry={nodes.Object_297.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_297.skeleton}
                    />
                    <skinnedMesh
                      name="Object_299"
                      geometry={nodes.Object_299.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_299.skeleton}
                    />
                    <skinnedMesh
                      name="Object_301"
                      geometry={nodes.Object_301.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_301.skeleton}
                    />
                    <skinnedMesh
                      name="Object_303"
                      geometry={nodes.Object_303.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_303.skeleton}
                    />
                    <skinnedMesh
                      name="Object_305"
                      geometry={nodes.Object_305.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_305.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="dancer005"
                  position={[772.057, 87.697, 19.893]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_385">
                    <group
                      name="H_DDS_LowRes004"
                      position={[-14.779, 19.893, -87.697]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_eye004"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_gland004"
                      position={[-12.855, 8.903, 78.43]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_eye004"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_gland004"
                      position={[-16.682, 8.851, 78.454]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethDown004"
                      position={[-14.798, 11.424, 70.994]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethUp004"
                      position={[-14.783, 12.762, 71.622]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Lights004"
                      position={[-14.779, 3.058, -57.217]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <primitive object={nodes._rootJoint_4} />
                    <group name="Object_387" position={[0, 0, -2.856]} />
                    <group name="Object_389" position={[0, 0, -2.856]} />
                    <group name="Object_391" position={[0, 0, -2.856]} />
                    <group name="Object_393" position={[0, 0, -2.856]} />
                    <group name="Object_395" position={[0, 0, -2.856]} />
                    <group name="Object_397" position={[0, 0, -2.856]} />
                    <group name="Object_399" position={[0, 0, -2.856]} />
                    <skinnedMesh
                      name="Object_388"
                      geometry={nodes.Object_388.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_388.skeleton}
                    />
                    <skinnedMesh
                      name="Object_390"
                      geometry={nodes.Object_390.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_390.skeleton}
                    />
                    <skinnedMesh
                      name="Object_392"
                      geometry={nodes.Object_392.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_392.skeleton}
                    />
                    <skinnedMesh
                      name="Object_394"
                      geometry={nodes.Object_394.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_394.skeleton}
                    />
                    <skinnedMesh
                      name="Object_396"
                      geometry={nodes.Object_396.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_396.skeleton}
                    />
                    <skinnedMesh
                      name="Object_398"
                      geometry={nodes.Object_398.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_398.skeleton}
                    />
                    <skinnedMesh
                      name="Object_400"
                      geometry={nodes.Object_400.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_400.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="dancersgroup2"
                  position={[415.011, 90.065, 2.46]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group
                    name="dancer006"
                    position={[393.729, 0.419, -2.368]}
                    rotation={[0, 0, Math.PI]}
                  >
                    <group name="Object_481">
                      <group
                        name="l_TeethDown005"
                        position={[-14.798, 11.424, 70.994]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethUp005"
                        position={[-14.783, 12.762, 71.622]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_gland005"
                        position={[-12.855, 8.903, 78.43]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_eye005"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_gland005"
                        position={[-16.682, 8.851, 78.454]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_eye005"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="H_DDS_LowRes005"
                        position={[-14.779, 19.893, -87.697]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="Lights009"
                        position={[-14.779, 3.058, -57.217]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <primitive object={nodes._rootJoint_10} />
                      <group name="Object_483" position={[0, 0, -2.856]} />
                      <group name="Object_485" position={[0, 0, -2.856]} />
                      <group name="Object_487" position={[0, 0, -2.856]} />
                      <group name="Object_489" position={[0, 0, -2.856]} />
                      <group name="Object_491" position={[0, 0, -2.856]} />
                      <group name="Object_493" position={[0, 0, -2.856]} />
                      <group name="Object_495" position={[0, 0, -2.856]} />
                      <skinnedMesh
                        name="Object_484"
                        geometry={nodes.Object_484.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_484.skeleton}
                      />
                      <skinnedMesh
                        name="Object_486"
                        geometry={nodes.Object_486.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_486.skeleton}
                      />
                      <skinnedMesh
                        name="Object_488"
                        geometry={nodes.Object_488.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_488.skeleton}
                      />
                      <skinnedMesh
                        name="Object_490"
                        geometry={nodes.Object_490.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_490.skeleton}
                      />
                      <skinnedMesh
                        name="Object_492"
                        geometry={nodes.Object_492.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_492.skeleton}
                      />
                      <skinnedMesh
                        name="Object_494"
                        geometry={nodes.Object_494.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_494.skeleton}
                      />
                      <skinnedMesh
                        name="Object_496"
                        geometry={nodes.Object_496.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_496.skeleton}
                      />
                    </group>
                  </group>
                  <group
                    name="dancer007"
                    position={[196.977, 0.419, -2.368]}
                    rotation={[0, 0, Math.PI]}
                  >
                    <group name="Object_576">
                      <group
                        name="H_DDS_LowRes006"
                        position={[-14.779, 19.893, -87.697]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_eye006"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_gland006"
                        position={[-12.855, 8.903, 78.43]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_eye006"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_gland006"
                        position={[-16.682, 8.851, 78.454]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethDown006"
                        position={[-14.798, 11.424, 70.994]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethUp006"
                        position={[-14.783, 12.762, 71.622]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="Lights005"
                        position={[-14.779, 3.058, -57.217]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <primitive object={nodes._rootJoint_11} />
                      <group name="Object_578" position={[0, 0, -2.856]} />
                      <group name="Object_580" position={[0, 0, -2.856]} />
                      <group name="Object_582" position={[0, 0, -2.856]} />
                      <group name="Object_584" position={[0, 0, -2.856]} />
                      <group name="Object_586" position={[0, 0, -2.856]} />
                      <group name="Object_588" position={[0, 0, -2.856]} />
                      <group name="Object_590" position={[0, 0, -2.856]} />
                      <skinnedMesh
                        name="Object_579"
                        geometry={nodes.Object_579.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_579.skeleton}
                      />
                      <skinnedMesh
                        name="Object_581"
                        geometry={nodes.Object_581.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_581.skeleton}
                      />
                      <skinnedMesh
                        name="Object_583"
                        geometry={nodes.Object_583.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_583.skeleton}
                      />
                      <skinnedMesh
                        name="Object_585"
                        geometry={nodes.Object_585.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_585.skeleton}
                      />
                      <skinnedMesh
                        name="Object_587"
                        geometry={nodes.Object_587.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_587.skeleton}
                      />
                      <skinnedMesh
                        name="Object_589"
                        geometry={nodes.Object_589.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_589.skeleton}
                      />
                      <skinnedMesh
                        name="Object_591"
                        geometry={nodes.Object_591.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_591.skeleton}
                      />
                    </group>
                  </group>
                  <group
                    name="dancer008"
                    position={[0.226, 0.419, -2.368]}
                    rotation={[0, 0, Math.PI]}
                  >
                    <group name="Object_671">
                      <group
                        name="l_L_eye007"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethUp007"
                        position={[-14.783, 12.762, 71.622]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_eye007"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="H_DDS_LowRes007"
                        position={[-14.779, 19.893, -87.697]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_gland007"
                        position={[-12.855, 8.903, 78.43]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethDown007"
                        position={[-14.798, 11.424, 70.994]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_gland007"
                        position={[-16.682, 8.851, 78.454]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="Lights006"
                        position={[-14.779, 3.058, -57.217]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <primitive object={nodes._rootJoint_12} />
                      <group name="Object_673" position={[0, 0, -2.856]} />
                      <group name="Object_675" position={[0, 0, -2.856]} />
                      <group name="Object_677" position={[0, 0, -2.856]} />
                      <group name="Object_679" position={[0, 0, -2.856]} />
                      <group name="Object_681" position={[0, 0, -2.856]} />
                      <group name="Object_683" position={[0, 0, -2.856]} />
                      <group name="Object_685" position={[0, 0, -2.856]} />
                      <skinnedMesh
                        name="Object_674"
                        geometry={nodes.Object_674.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_674.skeleton}
                      />
                      <skinnedMesh
                        name="Object_676"
                        geometry={nodes.Object_676.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_676.skeleton}
                      />
                      <skinnedMesh
                        name="Object_678"
                        geometry={nodes.Object_678.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_678.skeleton}
                      />
                      <skinnedMesh
                        name="Object_680"
                        geometry={nodes.Object_680.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_680.skeleton}
                      />
                      <skinnedMesh
                        name="Object_682"
                        geometry={nodes.Object_682.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_682.skeleton}
                      />
                      <skinnedMesh
                        name="Object_684"
                        geometry={nodes.Object_684.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_684.skeleton}
                      />
                      <skinnedMesh
                        name="Object_686"
                        geometry={nodes.Object_686.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_686.skeleton}
                      />
                    </group>
                  </group>
                  <group
                    name="dancer009"
                    position={[-196.526, 0.419, -2.368]}
                    rotation={[0, 0, Math.PI]}
                  >
                    <group name="Object_766">
                      <group
                        name="H_DDS_LowRes008"
                        position={[-14.779, 19.893, -87.697]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_eye008"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_gland008"
                        position={[-12.855, 8.903, 78.43]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_eye008"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_gland008"
                        position={[-16.682, 8.851, 78.454]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethDown008"
                        position={[-14.798, 11.424, 70.994]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethUp008"
                        position={[-14.783, 12.762, 71.622]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="Lights007"
                        position={[-14.779, 3.058, -57.217]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <primitive object={nodes._rootJoint_13} />
                      <group name="Object_768" position={[0, 0, -2.856]} />
                      <group name="Object_770" position={[0, 0, -2.856]} />
                      <group name="Object_772" position={[0, 0, -2.856]} />
                      <group name="Object_774" position={[0, 0, -2.856]} />
                      <group name="Object_776" position={[0, 0, -2.856]} />
                      <group name="Object_778" position={[0, 0, -2.856]} />
                      <group name="Object_780" position={[0, 0, -2.856]} />
                      <skinnedMesh
                        name="Object_769"
                        geometry={nodes.Object_769.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_769.skeleton}
                      />
                      <skinnedMesh
                        name="Object_771"
                        geometry={nodes.Object_771.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_771.skeleton}
                      />
                      <skinnedMesh
                        name="Object_773"
                        geometry={nodes.Object_773.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_773.skeleton}
                      />
                      <skinnedMesh
                        name="Object_775"
                        geometry={nodes.Object_775.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_775.skeleton}
                      />
                      <skinnedMesh
                        name="Object_777"
                        geometry={nodes.Object_777.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_777.skeleton}
                      />
                      <skinnedMesh
                        name="Object_779"
                        geometry={nodes.Object_779.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_779.skeleton}
                      />
                      <skinnedMesh
                        name="Object_781"
                        geometry={nodes.Object_781.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_781.skeleton}
                      />
                    </group>
                  </group>
                  <group
                    name="dancer010"
                    position={[-393.278, 0.419, -2.368]}
                    rotation={[0, 0, Math.PI]}
                  >
                    <group name="Object_861">
                      <group
                        name="H_DDS_LowRes009"
                        position={[-14.779, 19.893, -87.697]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_eye009"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_gland009"
                        position={[-12.855, 8.903, 78.43]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_eye009"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_gland009"
                        position={[-16.682, 8.851, 78.454]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethDown009"
                        position={[-14.798, 11.424, 70.994]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethUp009"
                        position={[-14.783, 12.762, 71.622]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="Lights008"
                        position={[-14.779, 3.058, -57.217]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <primitive object={nodes._rootJoint_14} />
                      <group name="Object_863" position={[0, 0, -2.856]} />
                      <group name="Object_865" position={[0, 0, -2.856]} />
                      <group name="Object_867" position={[0, 0, -2.856]} />
                      <group name="Object_869" position={[0, 0, -2.856]} />
                      <group name="Object_871" position={[0, 0, -2.856]} />
                      <group name="Object_873" position={[0, 0, -2.856]} />
                      <group name="Object_875" position={[0, 0, -2.856]} />
                      <skinnedMesh
                        name="Object_864"
                        geometry={nodes.Object_864.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_864.skeleton}
                      />
                      <skinnedMesh
                        name="Object_866"
                        geometry={nodes.Object_866.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_866.skeleton}
                      />
                      <skinnedMesh
                        name="Object_868"
                        geometry={nodes.Object_868.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_868.skeleton}
                      />
                      <skinnedMesh
                        name="Object_870"
                        geometry={nodes.Object_870.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_870.skeleton}
                      />
                      <skinnedMesh
                        name="Object_872"
                        geometry={nodes.Object_872.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_872.skeleton}
                      />
                      <skinnedMesh
                        name="Object_874"
                        geometry={nodes.Object_874.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_874.skeleton}
                      />
                      <skinnedMesh
                        name="Object_876"
                        geometry={nodes.Object_876.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_876.skeleton}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="dancersgroup003"
                  position={[415.011, 90.065, -533.213]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group
                    name="dancer011"
                    position={[393.729, 0.419, -2.368]}
                    rotation={[0, 0, Math.PI]}
                  >
                    <group name="Object_957">
                      <group
                        name="l_TeethDown010"
                        position={[-14.798, 11.424, 70.994]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethUp010"
                        position={[-14.783, 12.762, 71.622]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_gland010"
                        position={[-12.855, 8.903, 78.43]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_eye010"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_gland010"
                        position={[-16.682, 8.851, 78.454]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_eye010"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="H_DDS_LowRes010"
                        position={[-14.779, 19.893, -87.697]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="Lights010"
                        position={[-14.779, 3.058, -57.217]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <primitive object={nodes._rootJoint_15} />
                      <group name="Object_959" position={[0, 0, -2.856]} />
                      <group name="Object_961" position={[0, 0, -2.856]} />
                      <group name="Object_963" position={[0, 0, -2.856]} />
                      <group name="Object_965" position={[0, 0, -2.856]} />
                      <group name="Object_967" position={[0, 0, -2.856]} />
                      <group name="Object_969" position={[0, 0, -2.856]} />
                      <group name="Object_971" position={[0, 0, -2.856]} />
                      <skinnedMesh
                        name="Object_960"
                        geometry={nodes.Object_960.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_960.skeleton}
                      />
                      <skinnedMesh
                        name="Object_962"
                        geometry={nodes.Object_962.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_962.skeleton}
                      />
                      <skinnedMesh
                        name="Object_964"
                        geometry={nodes.Object_964.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_964.skeleton}
                      />
                      <skinnedMesh
                        name="Object_966"
                        geometry={nodes.Object_966.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_966.skeleton}
                      />
                      <skinnedMesh
                        name="Object_968"
                        geometry={nodes.Object_968.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_968.skeleton}
                      />
                      <skinnedMesh
                        name="Object_970"
                        geometry={nodes.Object_970.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_970.skeleton}
                      />
                      <skinnedMesh
                        name="Object_972"
                        geometry={nodes.Object_972.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_972.skeleton}
                      />
                    </group>
                  </group>
                  <group
                    name="dancer012"
                    position={[196.977, 0.419, -2.368]}
                    rotation={[0, 0, Math.PI]}
                  >
                    <group name="Object_1052">
                      <group
                        name="H_DDS_LowRes011"
                        position={[-14.779, 19.893, -87.697]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_eye011"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_gland011"
                        position={[-12.855, 8.903, 78.43]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_eye011"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_gland011"
                        position={[-16.682, 8.851, 78.454]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethDown011"
                        position={[-14.798, 11.424, 70.994]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethUp011"
                        position={[-14.783, 12.762, 71.622]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="Lights011"
                        position={[-14.779, 3.058, -57.217]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <primitive object={nodes._rootJoint_16} />
                      <group name="Object_1054" position={[0, 0, -2.856]} />
                      <group name="Object_1056" position={[0, 0, -2.856]} />
                      <group name="Object_1058" position={[0, 0, -2.856]} />
                      <group name="Object_1060" position={[0, 0, -2.856]} />
                      <group name="Object_1062" position={[0, 0, -2.856]} />
                      <group name="Object_1064" position={[0, 0, -2.856]} />
                      <group name="Object_1066" position={[0, 0, -2.856]} />
                      <skinnedMesh
                        name="Object_1055"
                        geometry={nodes.Object_1055.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1055.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1057"
                        geometry={nodes.Object_1057.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1057.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1059"
                        geometry={nodes.Object_1059.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1059.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1061"
                        geometry={nodes.Object_1061.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1061.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1063"
                        geometry={nodes.Object_1063.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1063.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1065"
                        geometry={nodes.Object_1065.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1065.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1067"
                        geometry={nodes.Object_1067.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1067.skeleton}
                      />
                    </group>
                  </group>
                  <group
                    name="dancer013"
                    position={[0.226, 0.419, -2.368]}
                    rotation={[0, 0, Math.PI]}
                  >
                    <group name="Object_1147">
                      <group
                        name="l_L_eye012"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethUp012"
                        position={[-14.783, 12.762, 71.622]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_eye012"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="H_DDS_LowRes012"
                        position={[-14.779, 19.893, -87.697]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_gland012"
                        position={[-12.855, 8.903, 78.43]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethDown012"
                        position={[-14.798, 11.424, 70.994]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_gland012"
                        position={[-16.682, 8.851, 78.454]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="Lights012"
                        position={[-14.779, 3.058, -57.217]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <primitive object={nodes._rootJoint_17} />
                      <group name="Object_1149" position={[0, 0, -2.856]} />
                      <group name="Object_1151" position={[0, 0, -2.856]} />
                      <group name="Object_1153" position={[0, 0, -2.856]} />
                      <group name="Object_1155" position={[0, 0, -2.856]} />
                      <group name="Object_1157" position={[0, 0, -2.856]} />
                      <group name="Object_1159" position={[0, 0, -2.856]} />
                      <group name="Object_1161" position={[0, 0, -2.856]} />
                      <skinnedMesh
                        name="Object_1150"
                        geometry={nodes.Object_1150.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1150.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1152"
                        geometry={nodes.Object_1152.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1152.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1154"
                        geometry={nodes.Object_1154.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1154.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1156"
                        geometry={nodes.Object_1156.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1156.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1158"
                        geometry={nodes.Object_1158.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1158.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1160"
                        geometry={nodes.Object_1160.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1160.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1162"
                        geometry={nodes.Object_1162.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1162.skeleton}
                      />
                    </group>
                  </group>
                  <group
                    name="dancer014"
                    position={[-196.526, 0.419, -2.368]}
                    rotation={[0, 0, Math.PI]}
                  >
                    <group name="Object_1242">
                      <group
                        name="H_DDS_LowRes013"
                        position={[-14.779, 19.893, -87.697]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_eye013"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_gland013"
                        position={[-12.855, 8.903, 78.43]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_eye013"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_gland013"
                        position={[-16.682, 8.851, 78.454]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethDown013"
                        position={[-14.798, 11.424, 70.994]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethUp013"
                        position={[-14.783, 12.762, 71.622]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="Lights013"
                        position={[-14.779, 3.058, -57.217]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <primitive object={nodes._rootJoint_18} />
                      <group name="Object_1244" position={[0, 0, -2.856]} />
                      <group name="Object_1246" position={[0, 0, -2.856]} />
                      <group name="Object_1248" position={[0, 0, -2.856]} />
                      <group name="Object_1250" position={[0, 0, -2.856]} />
                      <group name="Object_1252" position={[0, 0, -2.856]} />
                      <group name="Object_1254" position={[0, 0, -2.856]} />
                      <group name="Object_1256" position={[0, 0, -2.856]} />
                      <skinnedMesh
                        name="Object_1245"
                        geometry={nodes.Object_1245.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1245.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1247"
                        geometry={nodes.Object_1247.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1247.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1249"
                        geometry={nodes.Object_1249.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1249.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1251"
                        geometry={nodes.Object_1251.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1251.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1253"
                        geometry={nodes.Object_1253.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1253.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1255"
                        geometry={nodes.Object_1255.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1255.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1257"
                        geometry={nodes.Object_1257.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1257.skeleton}
                      />
                    </group>
                  </group>
                  <group
                    name="dancer015"
                    position={[-393.278, 0.419, -2.368]}
                    rotation={[0, 0, Math.PI]}
                  >
                    <group name="Object_1337">
                      <group
                        name="H_DDS_LowRes014"
                        position={[-14.779, 19.893, -87.697]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_eye014"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_L_gland014"
                        position={[-12.855, 8.903, 78.43]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_eye014"
                        position={[-17.992, 9.96, 78.728]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_R_gland014"
                        position={[-16.682, 8.851, 78.454]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethDown014"
                        position={[-14.798, 11.424, 70.994]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="l_TeethUp014"
                        position={[-14.783, 12.762, 71.622]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <group
                        name="Lights014"
                        position={[-14.779, 3.058, -57.217]}
                        rotation={[Math.PI / 2, 0, 0]}
                      />
                      <primitive object={nodes._rootJoint_19} />
                      <group name="Object_1339" position={[0, 0, -2.856]} />
                      <group name="Object_1341" position={[0, 0, -2.856]} />
                      <group name="Object_1343" position={[0, 0, -2.856]} />
                      <group name="Object_1345" position={[0, 0, -2.856]} />
                      <group name="Object_1347" position={[0, 0, -2.856]} />
                      <group name="Object_1349" position={[0, 0, -2.856]} />
                      <group name="Object_1351" position={[0, 0, -2.856]} />
                      <skinnedMesh
                        name="Object_1340"
                        geometry={nodes.Object_1340.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1340.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1342"
                        geometry={nodes.Object_1342.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1342.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1344"
                        geometry={nodes.Object_1344.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1344.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1346"
                        geometry={nodes.Object_1346.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1346.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1348"
                        geometry={nodes.Object_1348.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1348.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1350"
                        geometry={nodes.Object_1350.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1350.skeleton}
                      />
                      <skinnedMesh
                        name="Object_1352"
                        geometry={nodes.Object_1352.geometry}
                        material={materials.Body_Low}
                        skeleton={nodes.Object_1352.skeleton}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="dancer016"
                  position={[181.801, 87.697, 558.314]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_1432">
                    <group
                      name="H_DDS_LowRes016"
                      position={[-14.779, 19.893, -87.697]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_eye016"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_gland016"
                      position={[-12.855, 8.903, 78.43]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_eye016"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_gland016"
                      position={[-16.682, 8.851, 78.454]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethDown016"
                      position={[-14.798, 11.424, 70.994]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethUp016"
                      position={[-14.783, 12.762, 71.622]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Lights015"
                      position={[-14.779, 3.058, -57.217]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <primitive object={nodes._rootJoint_5} />
                    <group name="Object_1434" position={[0, 0, -2.856]} />
                    <group name="Object_1436" position={[0, 0, -2.856]} />
                    <group name="Object_1438" position={[0, 0, -2.856]} />
                    <group name="Object_1440" position={[0, 0, -2.856]} />
                    <group name="Object_1442" position={[0, 0, -2.856]} />
                    <group name="Object_1444" position={[0, 0, -2.856]} />
                    <group name="Object_1446" position={[0, 0, -2.856]} />
                    <skinnedMesh
                      name="Object_1435"
                      geometry={nodes.Object_1435.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1435.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1437"
                      geometry={nodes.Object_1437.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1437.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1439"
                      geometry={nodes.Object_1439.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1439.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1441"
                      geometry={nodes.Object_1441.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1441.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1443"
                      geometry={nodes.Object_1443.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1443.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1445"
                      geometry={nodes.Object_1445.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1445.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1447"
                      geometry={nodes.Object_1447.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1447.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="dancer017"
                  position={[378.553, 87.697, 558.314]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_1527">
                    <group
                      name="l_L_eye017"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethUp017"
                      position={[-14.783, 12.762, 71.622]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_eye017"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="H_DDS_LowRes017"
                      position={[-14.779, 19.893, -87.697]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_gland017"
                      position={[-12.855, 8.903, 78.43]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethDown017"
                      position={[-14.798, 11.424, 70.994]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_gland017"
                      position={[-16.682, 8.851, 78.454]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Lights016"
                      position={[-14.779, 3.058, -57.217]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <primitive object={nodes._rootJoint_6} />
                    <group name="Object_1529" position={[0, 0, -2.856]} />
                    <group name="Object_1531" position={[0, 0, -2.856]} />
                    <group name="Object_1533" position={[0, 0, -2.856]} />
                    <group name="Object_1535" position={[0, 0, -2.856]} />
                    <group name="Object_1537" position={[0, 0, -2.856]} />
                    <group name="Object_1539" position={[0, 0, -2.856]} />
                    <group name="Object_1541" position={[0, 0, -2.856]} />
                    <skinnedMesh
                      name="Object_1530"
                      geometry={nodes.Object_1530.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1530.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1532"
                      geometry={nodes.Object_1532.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1532.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1534"
                      geometry={nodes.Object_1534.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1534.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1536"
                      geometry={nodes.Object_1536.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1536.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1538"
                      geometry={nodes.Object_1538.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1538.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1540"
                      geometry={nodes.Object_1540.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1540.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1542"
                      geometry={nodes.Object_1542.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1542.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="dancer018"
                  position={[-14.95, 87.697, 558.314]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_1622">
                    <group
                      name="l_TeethDown015"
                      position={[-14.798, 11.424, 70.994]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethUp015"
                      position={[-14.783, 12.762, 71.622]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_gland015"
                      position={[-12.855, 8.903, 78.43]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_eye015"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_gland015"
                      position={[-16.682, 8.851, 78.454]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_eye015"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="H_DDS_LowRes015"
                      position={[-14.779, 19.893, -87.697]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Lights017"
                      position={[-14.779, 3.058, -57.217]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <primitive object={nodes._rootJoint_7} />
                    <group name="Object_1624" position={[0, 0, -2.856]} />
                    <group name="Object_1626" position={[0, 0, -2.856]} />
                    <group name="Object_1628" position={[0, 0, -2.856]} />
                    <group name="Object_1630" position={[0, 0, -2.856]} />
                    <group name="Object_1632" position={[0, 0, -2.856]} />
                    <group name="Object_1634" position={[0, 0, -2.856]} />
                    <group name="Object_1636" position={[0, 0, -2.856]} />
                    <skinnedMesh
                      name="Object_1625"
                      geometry={nodes.Object_1625.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1625.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1627"
                      geometry={nodes.Object_1627.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1627.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1629"
                      geometry={nodes.Object_1629.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1629.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1631"
                      geometry={nodes.Object_1631.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1631.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1633"
                      geometry={nodes.Object_1633.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1633.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1635"
                      geometry={nodes.Object_1635.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1635.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1637"
                      geometry={nodes.Object_1637.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1637.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="dancer019"
                  position={[575.305, 87.697, 558.314]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_1717">
                    <group
                      name="H_DDS_LowRes018"
                      position={[-14.779, 19.893, -87.697]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_eye018"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_gland018"
                      position={[-12.855, 8.903, 78.43]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_eye018"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_gland018"
                      position={[-16.682, 8.851, 78.454]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethDown018"
                      position={[-14.798, 11.424, 70.994]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethUp018"
                      position={[-14.783, 12.762, 71.622]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Lights018"
                      position={[-14.779, 3.058, -57.217]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <primitive object={nodes._rootJoint_8} />
                    <group name="Object_1719" position={[0, 0, -2.856]} />
                    <group name="Object_1721" position={[0, 0, -2.856]} />
                    <group name="Object_1723" position={[0, 0, -2.856]} />
                    <group name="Object_1725" position={[0, 0, -2.856]} />
                    <group name="Object_1727" position={[0, 0, -2.856]} />
                    <group name="Object_1729" position={[0, 0, -2.856]} />
                    <group name="Object_1731" position={[0, 0, -2.856]} />
                    <skinnedMesh
                      name="Object_1720"
                      geometry={nodes.Object_1720.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1720.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1722"
                      geometry={nodes.Object_1722.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1722.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1724"
                      geometry={nodes.Object_1724.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1724.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1726"
                      geometry={nodes.Object_1726.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1726.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1728"
                      geometry={nodes.Object_1728.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1728.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1730"
                      geometry={nodes.Object_1730.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1730.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1732"
                      geometry={nodes.Object_1732.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1732.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="dancer020"
                  position={[772.057, 87.697, 558.314]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_1812">
                    <group
                      name="H_DDS_LowRes019"
                      position={[-14.779, 19.893, -87.697]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_eye019"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_L_gland019"
                      position={[-12.855, 8.903, 78.43]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_eye019"
                      position={[-17.992, 9.96, 78.728]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_R_gland019"
                      position={[-16.682, 8.851, 78.454]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethDown019"
                      position={[-14.798, 11.424, 70.994]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="l_TeethUp019"
                      position={[-14.783, 12.762, 71.622]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="Lights019"
                      position={[-14.779, 3.058, -57.217]}
                      rotation={[Math.PI / 2, 0, 0]}
                    />
                    <primitive object={nodes._rootJoint_9} />
                    <group name="Object_1814" position={[0, 0, -2.856]} />
                    <group name="Object_1816" position={[0, 0, -2.856]} />
                    <group name="Object_1818" position={[0, 0, -2.856]} />
                    <group name="Object_1820" position={[0, 0, -2.856]} />
                    <group name="Object_1822" position={[0, 0, -2.856]} />
                    <group name="Object_1824" position={[0, 0, -2.856]} />
                    <group name="Object_1826" position={[0, 0, -2.856]} />
                    <skinnedMesh
                      name="Object_1815"
                      geometry={nodes.Object_1815.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1815.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1817"
                      geometry={nodes.Object_1817.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1817.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1819"
                      geometry={nodes.Object_1819.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1819.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1821"
                      geometry={nodes.Object_1821.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1821.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1823"
                      geometry={nodes.Object_1823.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1823.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1825"
                      geometry={nodes.Object_1825.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1825.skeleton}
                    />
                    <skinnedMesh
                      name="Object_1827"
                      geometry={nodes.Object_1827.geometry}
                      material={materials.Body_Low}
                      skeleton={nodes.Object_1827.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('../models/dance/scene.gltf');
