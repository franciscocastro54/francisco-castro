// Seleccionar el elemento del checkbox
const themeToggle = document.getElementById("theme-toggle");

// Evento de cambio de tema
themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
});


// Selecciona todos los elementos con la clase "tilt"
const tiltElements = document.querySelectorAll(".tilt");

// Función para actualizar la inclinación de cada elemento con clase "tilt"
function updateTilt(x, y) {
    tiltElements.forEach((element) => {
        element.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });
}      

// Detectar si es un dispositivo móvil
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    // Manejo de inclinación con giroscopio en dispositivos móviles
    window.addEventListener("deviceorientation", (event) => {
        const tiltX = event.gamma / 8000;  // Inclinar horizontalmente
        const tiltY = event.beta / 8000;    // Inclinar verticalmente
        updateTilt(tiltX, tiltY);
    });
} else {
    // Manejo de inclinación con mouse en escritorio
    window.addEventListener("mousemove", (event) => {
        const centerX = window.innerWidth / 10;
        const centerY = window.innerHeight /10;

        // Calcular inclinación basada en la posición del mouse
        const tiltX = ((event.clientX - centerX) / centerX) * 10; // Multiplicador para ajustar inclinación
        const tiltY = ((event.clientY - centerY) / centerY) * -10; // Invertir para inclinar hacia arriba/abajo
        updateTilt(tiltX, tiltY);
    });
}