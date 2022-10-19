import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeScene = ({ selectedColor }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer();
    const controls = new OrbitControls(camera, renderer.domElement);

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    var geometry = new THREE.CylinderGeometry(1, 1, 4, 8);
    var material = new THREE.MeshBasicMaterial({
      color: selectedColor,
      wireframe: true,
    });
    var cylinder = new THREE.Mesh(geometry, material);

    scene.add(cylinder);
    camera.position.z = 5;
    controls.update();

    // if (shoot) {
    //   var bullet = new THREE.Mesh(
    //     new THREE.SphereGeometry(0.5, 8, 8),
    //     new THREE.MeshBasicMaterial({ color: 0xffffff })
    //   );
    //   bullet.alive = true;
    //   setTimeout(function () {
    //     bullet.alive = false;
    //     scene.remove(bullet);
    //   }, 1000);
    //   scene.add(bullet);
    // }

    var animate = function () {
      requestAnimationFrame(animate);
      cylinder.rotation.x += 0.01;
      cylinder.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    let onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize, false);

    animate();
    controls.update();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, [selectedColor]);

  return <div ref={mountRef} />;
};
export default ThreeScene;
