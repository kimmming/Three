export default function () {
  // WebGL 시작하기
  const container = document.querySelector('#container');
  const canvas = document.createElement('canvas');
  canvas.width = 300;
  canvas.height = 300;

  container.appendChild(canvas);

  const gl = canvas.getContext('webgl');
  
}
