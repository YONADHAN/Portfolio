import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

const FullereneVisualization = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Set up scene, camera, renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Aspect ratio 1:1 for square canvas
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(500, 500);
        renderer.setClearColor(0x000000, 0);
        canvasRef.current.appendChild(renderer.domElement);

        // Create geodesic dome (icosahedron)
        const geometry = new THREE.IcosahedronGeometry(5, 1);
        const edges = new THREE.EdgesGeometry(geometry);
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
        const lines = new THREE.LineSegments(edges, lineMaterial);
        scene.add(lines);

        // Create gradient material for the hemisphere effect
        const vertexShader = `
            varying vec3 vPos;
            void main() {
                vPos = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;

        const fragmentShader = `
            varying vec3 vPos;
            void main() {
                float mixValue = (vPos.y + 4.0) / 10.0;
                vec3 color = mix(vec3(0, 0, 0), vec3(0.029, 0.188, 0.500), mixValue);
                gl_FragColor = vec4(color, 1.0);
            }
        `;

        const shaderMaterial = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            side: THREE.DoubleSide,
        });

        const mesh = new THREE.Mesh(geometry, shaderMaterial);
        scene.add(mesh);

        // Position the camera
        camera.position.z = 10;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            mesh.rotation.y += 0.01;
            lines.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        // Start the animation loop
        animate();

        // Cleanup on unmount
        return () => {
            renderer.dispose();
        };
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <>
          <div className='w-[450px] h-[450px] overflow-hidden rounded-full '>
             <div  ref={canvasRef} />
          </div>
        </>
    );
};

export default FullereneVisualization;
