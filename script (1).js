const preguntas = [
    {
        pregunta: "¿Qué mascota tengo?",
        svg: `<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="29" r="10" fill="#D9C4FF" stroke="#7E57C2" stroke-width="2.5"/><circle cx="12" cy="18" r="4.5" fill="#F6B8DF" stroke="#7E57C2" stroke-width="2.5"/><circle cx="20" cy="12" r="4.5" fill="#F6B8DF" stroke="#7E57C2" stroke-width="2.5"/><circle cx="28" cy="12" r="4.5" fill="#F6B8DF" stroke="#7E57C2" stroke-width="2.5"/><circle cx="36" cy="18" r="4.5" fill="#F6B8DF" stroke="#7E57C2" stroke-width="2.5"/></svg>`,
        opciones: [
            { letra: "a", texto: "Perro" },
            { letra: "b", texto: "Gato" },
            { letra: "c", texto: "Hámster" },
            { letra: "d", texto: "Conejo" }
        ],
        correcta: "b"
    },
    {
        pregunta: "¿Cuántos hermanos tengo?",
        svg: `<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><path d="M24 40C24 40 8 29 8 18C8 13 12 9 17 9C20.5 9 23 11 24 13.5C25 11 27.5 9 31 9C36 9 40 13 40 18C40 29 24 40 24 40Z" fill="#F7B2DC" stroke="#7E57C2" stroke-width="2.5" stroke-linejoin="round"/></svg>`,
        opciones: [
            { letra: "a", texto: "Ocho" },
            { letra: "b", texto: "Tres" },
            { letra: "c", texto: "Seis" }
        ],
        correcta: "c"
    },
    {
        pregunta: "¿Cuál es mi jugo favorito?",
        svg: `<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><path d="M15 16H33L30 40H18L15 16Z" fill="#E3D2FF" stroke="#7E57C2" stroke-width="2.5" stroke-linejoin="round"/><path d="M26 16L31 7H36" stroke="#7E57C2" stroke-width="2.5" stroke-linecap="round"/><circle cx="24" cy="28" r="4" fill="#F7B2DC"/></svg>`,
        opciones: [
            { letra: "a", texto: "Maracuyá" },
            { letra: "b", texto: "Mango" },
            { letra: "c", texto: "Guanábana" }
        ],
        correcta: "c"
    },
    {
        pregunta: "¿Qué instrumento sé tocar?",
        svg: `<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><path d="M18 34V13L36 9V30" stroke="#7E57C2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="14" cy="34" r="5" fill="#D9C4FF" stroke="#7E57C2" stroke-width="2.5"/><circle cx="32" cy="30" r="5" fill="#F7B2DC" stroke="#7E57C2" stroke-width="2.5"/></svg>`,
        opciones: [
            { letra: "a", texto: "Piano" },
            { letra: "b", texto: "Flauta" },
            { letra: "c", texto: "Guitarra" },
            { letra: "d", texto: "Todas las anteriores" }
        ],
        correcta: "d"
    },
    {
        pregunta: "¿Cuál es mi fruta favorita?",
        svg: `<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><path d="M24 14C32 14 38 20 38 28C38 35 31 40 24 40C17 40 10 35 10 28C10 20 16 14 24 14Z" fill="#FFE3A3" stroke="#7E57C2" stroke-width="2.5"/><path d="M24 14C24 10 28 7 32 8C31 12 27 14 24 14Z" fill="#A5E6C3" stroke="#7E57C2" stroke-width="2"/></svg>`,
        opciones: [
            { letra: "a", texto: "Mango" },
            { letra: "b", texto: "Naranja" },
            { letra: "c", texto: "Fresa" }
        ],
        correcta: "a"
    },
    {
        pregunta: "¿De dónde soy?",
        svg: `<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><path d="M10 24L24 11L38 24" stroke="#7E57C2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 21V38H34V21" fill="#E9DCFF" stroke="#7E57C2" stroke-width="2.5" stroke-linejoin="round"/><rect x="21" y="28" width="6" height="10" rx="2" fill="#F7B2DC" stroke="#7E57C2" stroke-width="2"/></svg>`,
        opciones: [
            { letra: "a", texto: "Ciudad" },
            { letra: "b", texto: "Pueblo" },
            { letra: "c", texto: "No sé" }
        ],
        correcta: "b"
    },
    {
        pregunta: "¿Cuál es mi plan favorito?",
        svg: `<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><rect x="9" y="14" width="30" height="22" rx="5" fill="#E3D2FF" stroke="#7E57C2" stroke-width="2.5"/><path d="M21 21L29 25L21 29V21Z" fill="#FFFFFF" stroke="#7E57C2" stroke-width="2" stroke-linejoin="round"/></svg>`,
        opciones: [
            { letra: "a", texto: "Salir a fiestas" },
            { letra: "b", texto: "Ver pelis en casa" },
            { letra: "c", texto: "Salir de compras" }
        ],
        correcta: "b"
    },
    {
        pregunta: "¿Cuál es mi género musical favorito?",
        svg: `<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><path d="M12 28V23C12 16.3726 17.3726 11 24 11C30.6274 11 36 16.3726 36 23V28" stroke="#7E57C2" stroke-width="2.5" stroke-linecap="round"/><rect x="9" y="25" width="6" height="11" rx="3" fill="#F7B2DC" stroke="#7E57C2" stroke-width="2.5"/><rect x="33" y="25" width="6" height="11" rx="3" fill="#D9C4FF" stroke="#7E57C2" stroke-width="2.5"/></svg>`,
        opciones: [
            { letra: "a", texto: "Salsa" },
            { letra: "b", texto: "Reggaetón" },
            { letra: "c", texto: "Bachata" }
        ],
        correcta: "c"
    },
    {
        pregunta: "¿Cuál es mi hobbie?",
        svg: `<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><path d="M24 10C15.5 10 9 16.2 9 24C9 31.8 15.5 38 23 38C25.5 38 27 36.2 27 34C27 32.8 26.5 31.8 26.5 30.8C26.5 29.2 27.8 28 29.5 28H33C36.8 28 39 25.2 39 21.5C39 14.8 32.2 10 24 10Z" fill="#F4EBFF" stroke="#7E57C2" stroke-width="2.5"/><circle cx="17" cy="21" r="2.5" fill="#F7B2DC"/><circle cx="24" cy="17" r="2.5" fill="#B592FF"/><circle cx="31" cy="21" r="2.5" fill="#9EE3C0"/></svg>`,
        opciones: [
            { letra: "a", texto: "Pintar" },
            { letra: "b", texto: "Bordar" },
            { letra: "c", texto: "Manualidad" },
            { letra: "d", texto: "Todas las anteriores" }
        ],
        correcta: "d"
    },
    {
        pregunta: "¿Cuántos tatuajes tengo?",
        svg: `<svg width="42" height="42" viewBox="0 0 48 48" fill="none"><path d="M24 8L28.5 19.5L40 24L28.5 28.5L24 40L19.5 28.5L8 24L19.5 19.5L24 8Z" fill="#E3D2FF" stroke="#7E57C2" stroke-width="2.5" stroke-linejoin="round"/></svg>`,
        opciones: [
            { letra: "a", texto: "Cinco" },
            { letra: "b", texto: "Uno" },
            { letra: "c", texto: "Dos" }
        ],
        correcta: "c"
    }
];

let usuario = { nombre: "", parentesco: "", tiempo: "" };
let indiceActual = 0;
let puntos = 0;
let inpuntos = 0;

const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaQuiz = document.getElementById("pantalla-quiz");
const pantallaResultados = document.getElementById("pantalla-resultados");

const formRegistro = document.getElementById("form-registro");
const saludoJugador = document.getElementById("saludo-jugador");
const progresoTexto = document.getElementById("progreso");
const barraRelleno = document.getElementById("barra-relleno");
const dibujoPregunta = document.getElementById("dibujo-pregunta");
const textoPregunta = document.getElementById("texto-pregunta");
const contenedorOpciones = document.getElementById("contenedor-opciones");
const feedback = document.getElementById("feedback");
const btnSiguiente = document.getElementById("btn-siguiente");

formRegistro.addEventListener("submit", (e) => {
    e.preventDefault();
    usuario.nombre = document.getElementById("nombre").value.trim();
    usuario.parentesco = document.getElementById("parentesco").value.trim();
    usuario.tiempo = document.getElementById("tiempo").value.trim();

    saludoJugador.textContent = `💜 Jugando: ${usuario.nombre}`;
    
    cambiarPantalla(pantallaInicio, pantallaQuiz);
    cargarPregunta();
});

function cargarPregunta() {
    feedback.classList.add("oculto");
    btnSiguiente.classList.add("oculto");
    contenedorOpciones.innerHTML = "";

    const actual = preguntas[indiceActual];
    
    // Reiniciar animación del dibujo
    dibujoPregunta.style.animation = "none";
    dibujoPregunta.offsetHeight; 
    dibujoPregunta.style.animation = null;
    dibujoPregunta.innerHTML = actual.svg;

    textoPregunta.textContent = `${indiceActual + 1}. ${actual.pregunta}`;
    progresoTexto.textContent = `${indiceActual + 1} / ${preguntas.length}`;
    barraRelleno.style.width = `${((indiceActual + 1) / preguntas.length) * 100}%`;

    actual.opciones.forEach((opcion) => {
        const boton = document.createElement("button");
        boton.classList.add("opcion-btn");
        boton.dataset.letra = opcion.letra;
        boton.innerHTML = `<span class="letra-pill">${opcion.letra}</span> <span>${opcion.texto}</span>`;
        boton.onclick = () => verificarRespuesta(opcion.letra, boton);
        contenedorOpciones.appendChild(boton);
    });
}

function verificarRespuesta(letraElegida, botonSeleccionado) {
    const actual = preguntas[indiceActual];
    const botones = contenedorOpciones.querySelectorAll(".opcion-btn");

    botones.forEach((btn) => {
        btn.disabled = true;
        if (btn.dataset.letra === actual.correcta) {
            btn.classList.add("correcta");
        }
    });

    if (letraElegida === actual.correcta) {
        puntos++;
        feedback.textContent = "✨ ¡Súper bien! Respuesta correcta ✨";
        feedback.className = "feedback ok";
    } else {
        inpuntos++;
        botonSeleccionado.classList.add("incorrecta");
        feedback.textContent = "🌸 ¡Ups! Esa no era...";
        feedback.className = "feedback error";
    }

    feedback.classList.remove("oculto");
    btnSiguiente.querySelector("span").textContent = indiceActual === preguntas.length - 1 ? "Ver mi resultado final" : "Siguiente pregunta";
    btnSiguiente.classList.remove("oculto");
}

btnSiguiente.addEventListener("click", () => {
    indiceActual++;
    if (indiceActual < preguntas.length) {
        cargarPregunta();
    } else {
        mostrarResultados();
    }
});

function mostrarResultados() {
    cambiarPantalla(pantallaQuiz, pantallaResultados);

    document.getElementById("resumen-usuario").innerHTML = 
        `Hola <strong>${usuario.nombre}</strong>, eres mi <strong>${usuario.parentesco}</strong> y me conoces hace <strong>${usuario.tiempo}</strong>.`;

    document.getElementById("total-correctas").textContent = puntos;
    document.getElementById("total-incorrectas").textContent = inpuntos;

    const veredicto = document.getElementById("veredicto");
    if (puntos <= 1) {
        veredicto.textContent = "🙈 ¿Tú quién eres? ¡Tenemos que hablar más!";
    } else if (puntos <= 5) {
        veredicto.textContent = "🌷 Apenas vas conociéndome, ahí la llevas";
    } else if (puntos <= 7) {
        veredicto.textContent = "💜 ¡Muy bien! Ya sabes bastantes cosas de mí";
    } else {
        veredicto.textContent = "👑 ¡Me conoces bastante bien! Eres VIP";
    }

    // Lanzar confeti en colores morado pastel y rosa
    if (typeof confetti === "function") {
        confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#B592FF', '#F2A6D8', '#D9C4FF', '#9EE3C0']
        });
    }
}

document.getElementById("btn-reiniciar").addEventListener("click", () => {
    indiceActual = 0;
    puntos = 0;
    inpuntos = 0;
    formRegistro.reset();
    cambiarPantalla(pantallaResultados, pantallaInicio);
});

function cambiarPantalla(ocultar, mostrar) {
    ocultar.classList.remove("activa");
    mostrar.classList.add("activa");
}