const form=document.querySelector('#reservation-form');
const message=document.querySelector('#form-message');
const seats=document.querySelector('#seats');
if(form){form.addEventListener('submit',event=>{event.preventDefault();message.textContent='Reserva confirmada. Te escribiremos pronto.';message.style.color='#12805c';form.reset();});}
if(seats){seats.textContent='6';}
