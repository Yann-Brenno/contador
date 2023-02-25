let contador = parseInt(localStorage.getItem('contador')) || 0;
document.getElementById('contador').textContent = contador;

function incrementar() {
  contador++;
  localStorage.setItem('contador', contador);
  document.getElementById('contador').textContent = contador;
}
