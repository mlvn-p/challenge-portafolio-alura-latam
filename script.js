document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Deja de observar una vez animada
                }
            });
        },
        {
            threshold: 0.6, // Activa cuando el 20% del elemento es visible
        }
    );

    const elementosAnimados = document.querySelectorAll(".animado");
    elementosAnimados.forEach((elemento) => observer.observe(elemento));
});
