const form=document.querySelector('#reservation-form');
const message=document.querySelector('#form-message');
const seats=document.querySelector('#seats');
if(form){form.addEventListener('submit',event=>{event.preventDefault();message.textContent='No se pudo enviar la reserva. Intenta nuevamente.';message.style.color='#c73955';});}
if(seats){seats.textContent='6';}
