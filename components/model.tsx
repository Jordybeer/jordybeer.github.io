import React, { useEffect, useRef } from "react";
import { Box, Divider } from "@chakra-ui/react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment";


const Model3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const clock = new THREE.Clock();
    const container = containerRef.current;

    // Step 1: Create a new instance of the WebGLRenderer and set its pixel ratio and size.
    const width = 800; // Set the width of the window
    const height = 200; // Set the height of the window
    const aspectRatio = width / height; // Calculate the aspect ratio
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // Set alpha to true for transparent background
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Step 2: Create a new instance of the PMREMGenerator and set the scene's background and environment.
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const scene = new THREE.Scene();
    scene.background = null; // Set background to null for transparent background
    scene.environment = pmremGenerator.fromScene(
      new RoomEnvironment(),
      0.04
    ).texture;

    // Step 3: Create a new instance of the PerspectiveCamera and set its position and aspect ratio.
    const camera = new THREE.PerspectiveCamera(40, aspectRatio, 1, 100);
    camera.position.set(0, 0, 10); // Change the camera's position to (0, 0, 10) to move it closer to the origin

    // Step 4: Create a new instance of the OrbitControls and set its target, update, and enable properties.
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enablePan = true;
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.rotateSpeed = 1;
    controls.autoRotateSpeed = 1;
    controls.update();

    // Step 5: Create a new instance of the DRACOLoader and set its decoder path.
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("jsm/libs/draco/gltf/");

    // Step 6: Create a new instance of the GLTFLoader and set its DRACOLoader.
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    // Step 7: Load the 3D model using the GLTFLoader and add it to the scene.
    loader.load(
      "/models/scene.gltf",
      (gltf: any) => {
        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());

        camera.lookAt(center);

        // Step 8: Set the position and scale of the model and add it to the scene.
        model.position.set(0, 0, 0);
        model.scale.set(3, 3, 3);
        scene.add(model);

        // Step 9: Create a new instance of the AnimationMixer and play the first animation clip, if any.
        mixerRef.current = new THREE.AnimationMixer(model);
        if (gltf.animations.length > 0) {
          mixerRef.current.clipAction(gltf.animations[0]).play();
        }
      },
      undefined,
      (e: any) => {
        console.error(e);
      }
    );

    // Step 11: Define an animate function that updates the scene and renderer on each frame.
    const animate = () => {
      requestAnimationFrame(animate);

      // Step 12: Rotate the model.

      const delta = clock.getDelta();

      // Step 13: Update the mixer and controls.
      if (mixerRef.current) {
        mixerRef.current.update(delta);
      }
      controls.update();

      // Step 14: Render the scene.
      renderer.render(scene, camera);
    };

    // Step 15: Add an event listener for the window resize event and update the camera and renderer accordingly.
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Step 16: Call the animate function.
    animate();

    // Step 17: Remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    };
  }, []);

  return (
    <Box
      bg="transparent"
      position="relative"
      maxW='md'
      maxH='md'
      height="100%"
      width="100%"
      overflow="hidden"
      display="flex"
      pt={10}
      pb={10}
      pl={2}
      pr={2}
      border="2px solid white"
      borderRadius="lg"
      justifyContent="center"
      alignContent="stretch"
      m={2}

    >
            <div ref={containerRef} 
      />
    </Box>
  );
};

export default Model3D;