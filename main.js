const contador = document.querySelector('#contador');
const containerBtn = document.querySelector('#container-btn');

containerBtn.addEventListener('click', modificarContador);

function modificarContador(e) {
  e.preventDefault();
  
  if (e.target.classList.contains("add")) {
    ++contador.textContent
  }else if(e.target.classList.contains("resta")) {
    --contador.textContent
  }else if (e.target.classList.contains("reset")) {
    contador.textContent = 0;
  }
}
