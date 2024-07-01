// components/Cube.jsx

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Cube = ({ size }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Calculate aspect ratio for renderer
    const aspectRatio = 1; // Square aspect ratio (1:1)
    const canvasSize = size; // Size of the canvas

    // Scene, camera, renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(canvasSize, canvasSize);

    // Adding ambient light
    const ambientLight = new THREE.AmbientLight(0x2563eb, 1);
    scene.add(ambientLight);

    
    

    // Cube geometry
    const geometry = new THREE.BoxGeometry(4, 4, 4);

    // Texture loading (replace with your image URLs)
    const textureUrls = [
      "/public/image/firebase.png",
      "/public/image/github.png",
      "/public/image/python.png",
      "/public/image/html.png",
      "/public/image/tailwind.png",
      "/public/image/js.png"
    ];
    const textures = textureUrls.map(url => {
      const texture = new THREE.TextureLoader().load(url);
      texture.encoding = THREE.BasicDepthPacking;
 // Ensure proper encoding
      return texture;
    });

    const materials = textures.map(texture => new THREE.MeshBasicMaterial({ map: texture }));

    // Create cube mesh
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Camera position
    camera.position.z = 7;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x -= 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function
    return () => {
      geometry.dispose();
      textures.forEach(texture => texture.dispose());
      materials.forEach(material => material.dispose());
    };
  }, [size]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default Cube;
