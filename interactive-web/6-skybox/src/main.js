import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

window.addEventListener('load', function(){
  init();
})

function init(){

  const renderer = new THREE.WebGL1Renderer({
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    1,
    500,
  );
  camera.position.set(0,0,5);

  new OrbitControls(camera, renderer.domElement);

  const textureLoader = new THREE.TextureLoader(
    
  );

  const geometry = new THREE.BoxGeometry(3,3,3);
  const material = new THREE.MeshPhongMaterial({
    color:0xaaccee,
    side: THREE.BackSide,
  });

  const skybox = new THREE.Mesh(geometry, material);
  scene.add(skybox);

  const pointLight = new THREE.PointLight(0xffffff,0.8);
  scene.add(pointLight);

  render();

  function render(){
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };

  function handleResize(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  };
  window.addEventListener('resize', handleResize);
};