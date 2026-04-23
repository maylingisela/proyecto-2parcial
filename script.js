// 1. Seleccionamos TODOS los elementos necesarios
const redBtn = document.querySelector('.red-btn');
const grayBtn = document.querySelector('.gray-btn'); // Añadimos esta línea
const cartButton = document.getElementById('cartButton');
const imageCard = document.querySelector('.image-card');


redBtn.addEventListener('click', function() {
    cartButton.style.backgroundColor = 'red';
    // Imagen del Mercedes rojo
    imageCard.style.backgroundImage = "url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=500')"; 
});


grayBtn.addEventListener('click', function() {
    cartButton.style.backgroundColor = '#333'; // Volvemos al color oscuro o gris
    // Imagen del Mercedes gris
    imageCard.style.backgroundImage = "url('https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=500')"; 
});