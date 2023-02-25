const countdown = (endDate) => {
  const intervalId = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (distance < 0) {
      clearInterval(intervalId);
      document.getElementById('days').textContent = '0';
      document.getElementById('hours').textContent = '0';
      document.getElementById('minutes').textContent = '0';
      document.getElementById('seconds').textContent = '0';
    }
  }, 1000);
};

const updateCountdown = () => {
  const novaData = document.getElementById('nova-data').value;
  const endDate = new Date(novaData).getTime();

  localStorage.setItem('countdownEndDate', endDate);

  countdown(endDate);
};

const getCachedEndDate = () => {
  const endDate = localStorage.getItem('countdownEndDate');
  return endDate ? Number(endDate) : null;
};

const cachedEndDate = getCachedEndDate();
if (cachedEndDate) {
  countdown(cachedEndDate);
}

document.getElementById('atualizar-data').addEventListener('click', updateCountdown);

document.getElementById('btn-copiar').addEventListener('click', () => {
  const codigo = document.getElementById('codigo');
  codigo.select();
  document.execCommand('copy');
  alert('O código foi copiado para a área de transferência!');
});


