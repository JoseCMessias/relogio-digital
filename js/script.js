const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

setInterval(() => {
   let date = new Date();
   let dhoras = date.getHours();
   let dminutos = date.getMinutes();
   let dsegundos = date.getSeconds();

   horas.innerHTML = `${formatoDeTempo(dhoras)}`;
   minutos.innerHTML = `${formatoDeTempo(dminutos)}`;
   segundos.innerHTML = `${formatoDeTempo(dsegundos)}`;
});

function formatoDeTempo(time)
{
   return time < 10 ? '0' + time : time;
}
