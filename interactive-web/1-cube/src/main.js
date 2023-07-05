import * as THREE from 'three';

window.addEventListener('load', function(){
  init();
})

function init(){
  const renderer = new THREE.WebGL1Renderer();

  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    1,
    500,
  )

  renderer.render(scene, camera)
}