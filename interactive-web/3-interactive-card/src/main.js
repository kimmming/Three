import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import Card from './Card.js'

window.addEventListener('load', function(){
  init();
})

function init(){

  const renderer = new THREE.WebGL1Renderer({
    antialias: true,
    alpha: true,
  });


  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    500,
  );
  
  camera.position.z = 25;

  const controls = new OrbitControls(camera, renderer.domElement);

  const card = new Card({
    width: 10,
    height: 15.8,
    color: '#0077ff',
  });

  scene.add(card.mesh);

  const ambientLight = new THREE.AmbientLight(0xffff, 0.8);
  scene.add(ambientLight);
  

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