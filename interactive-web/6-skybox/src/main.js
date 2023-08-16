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

  /* 큐브맵 텍스처 이용*/
  // const control = new OrbitControls(camera, renderer.domElement);
  // control.minDistance = 5;
  // control.maxDistance = 100;
    
  // const textureLoader = new THREE.TextureLoader().setPath('assets/textures/Yokohama/');

  // const images = [
  //   'posx.jpg', 'negx.jpg',
  //   'posy.jpg', 'negy.jpg',
  //   'posz.jpg', 'negz.jpg',
  // ];


  // const geometry = new THREE.BoxGeometry(5000,5000,5000);
  // const materials = images.map(image => new THREE.MeshBasicMaterial({
  //   map: textureLoader.load(image),
  //   side: THREE.BackSide,
  // }))

  // const skybox = new THREE.Mesh(geometry, materials);
  // scene.add(skybox);
 /* 큐브맵 텍스처 이용 */
 new OrbitControls(camera, renderer.domElement);
  const cubeTexureLoader = new THREE.CubeTextureLoader().setPath('assets/textures/Yokohama/');
    
  const images = [
    'posx.jpg', 'negx.jpg',
    'posy.jpg', 'negy.jpg',
    'posz.jpg', 'negz.jpg',
  ];

  const cubeTexture = cubeTexureLoader.load(images);
  scene.background = cubeTexture;

  
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