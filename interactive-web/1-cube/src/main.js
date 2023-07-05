import * as THREE from 'three';

window.addEventListener('load', function(){
  init();
})

function init(){
  const renderer = new THREE.WebGL1Renderer({
    // alpha: true,
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

  const geometry = new THREE.BoxGeometry(2,2,2);
  const material = new THREE.MeshStandardMaterial({
    color:'skyblue',
    // transparent: true,
    // opacity:0.5,
    // visible:false,
    // wireframe: true,
    // side: THREE.BackSide
  })

  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);
  
  // camera.position.z =5;
  camera.position.set(3,4,5);

  camera.lookAt(cube.position);

  const directionalLight = new THREE.DirectionalLight(0xf0f0f0, 1);
  directionalLight.position.set(-1,2,3);
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0xffffff,0.1);
  ambientLight.position.set(3,2,1);
  scene.add(ambientLight)

  const clock = new THREE.Clock();

  render();

  function render(){
    cube.rotation.x = clock.getDelta();
    // cube.position.y = Math.sin(cube.rotation.x);
    // cube.scale.x = Math.cos(cube.rotation.x);
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