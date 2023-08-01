import * as THREE from 'three';

export default function () {
  const renderer = new THREE.WebGL1Renderer({
    alpha: true
  })
  const container = document.querySelector('#container');
}
