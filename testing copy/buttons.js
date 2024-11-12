document.addEventListener('DOMContentLoaded', () => {
    function toggleElements(ids, duration) {
        ids.forEach((id, index) => {
            const element = document.getElementById(id);
            if (element) {
                // Desactivar el elemento después de un retraso incremental
                setTimeout(() => {
                    element.hidden = true;
                }, duration * index);

                // Volver a activar el elemento después de un segundo retraso
                setTimeout(() => {
                    element.hidden = false;
                }, duration*(3+index)+7000);
            }
        });
    }

    // Selecciona el botón y asigna el evento de clic
    document.getElementById('toggleButton').addEventListener('click', () => {
        const ids = ['capa3', 'capa1', 'capa2']; // Lista de IDs de los elementos a desactivar
        const duration = 1000; // Duración en milisegundos (2 segundos)
        toggleElements(ids, duration);
    });
});
