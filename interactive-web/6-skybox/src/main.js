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
    10000,
  );
  camera.position.set(0,0,5);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 5;
  controls.maxDistance = 100;
    
  const textureLoader = new THREE.TextureLoader().setPath('assets/textures/Yokohama/');

  const images = [
    'posx.jpg', 'negx.jpg',
    'posy.jpg', 'negy.jpg',
    'posz.jpg', 'negz.jpg',
  ];

  const geometry = new THREE.BoxGeometry(5000,5000,5000);
  const materials = images.map(image => new THREE.MeshBasicMaterial({
    map: textureLoader.load(image),
    side: THREE.BackSide,
  }))

  const skybox = new THREE.Mesh(geometry, materials);
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