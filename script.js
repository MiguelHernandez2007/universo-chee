/* =========================
   ESTRELLAS
========================= */

const estrellas =
    document.getElementById("estrellas");


for (let i = 0; i < 180; i++) {

    const estrella =
        document.createElement("div");

    estrella.classList.add(
        "estrella-fondo"
    );

    estrella.style.left =
        Math.random() * 100 + "%";

    estrella.style.top =
        Math.random() * 100 + "%";

    const tamaño =
        Math.random() * 3 + 1;

    estrella.style.width =
        tamaño + "px";

    estrella.style.height =
        tamaño + "px";

    estrella.style.animationDelay =
        Math.random() * 4 + "s";

    estrellas.appendChild(
        estrella
    );

}


/* =========================
   ABRIR SORPRESA
========================= */

function abrirSorpresa() {

    const sorpresa =
        document.getElementById("sorpresa");

    sorpresa.style.display = "flex";

}


/* =========================
   CERRAR SORPRESA
========================= */

function cerrarSorpresa() {

    const sorpresa =
        document.getElementById("sorpresa");

    sorpresa.style.display = "none";

}


/* =========================
   MOVIMIENTO DEL MOUSE
========================= */

document.addEventListener(
    "mousemove",
    function(event) {

        const x =
            (event.clientX /
            window.innerWidth - .5) * 12;

        const y =
            (event.clientY /
            window.innerHeight - .5) * 12;

        const universo =
            document.getElementById(
                "universo"
            );

        universo.style.transform =
            `rotateX(${-y}deg)
             rotateY(${x}deg)`;

    }
);


/* =========================
   MOVIMIENTO CON CELULAR
========================= */

document.addEventListener(
    "touchmove",
    function(event) {

        const dedo =
            event.touches[0];

        const x =
            (dedo.clientX /
            window.innerWidth - .5) * 10;

        const y =
            (dedo.clientY /
            window.innerHeight - .5) * 10;

        const universo =
            document.getElementById(
                "universo"
            );

        universo.style.transform =
            `rotateX(${-y}deg)
             rotateY(${x}deg)`;

    }
);


/* =========================
   LLUVIA DE FLORES
========================= */

function lluviaFlores() {

    for (let i = 0; i < 60; i++) {

        const petalo =
            document.createElement("div");

        petalo.classList.add(
            "petalo"
        );

        petalo.textContent = "🌻";

        petalo.style.left =
            Math.random() * 100 + "vw";

        petalo.style.fontSize =
            Math.random() * 20 + 15 + "px";

        petalo.style.animationDuration =
            Math.random() * 3 + 3 + "s";

        petalo.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(
            petalo
        );

        setTimeout(() => {

            petalo.remove();

        }, 7000);

    }

}
/* =========================
   UNIVERSO PROFUNDO
========================= */

const universoProfundo =
    document.getElementById(
        "universo-profundo"
    );


for (let i = 0; i < 70; i++) {

    const particula =
        document.createElement("div");

    particula.classList.add(
        "particula"
    );


    // Posición inicial

    particula.style.left =
        Math.random() * 100 + "vw";

    particula.style.top =
        Math.random() * 100 + "vh";


    // Tamaño

    const tamaño =
        Math.random() * 3 + 1;

    particula.style.width =
        tamaño + "px";

    particula.style.height =
        tamaño + "px";


    // Dirección aleatoria

    particula.style.setProperty(
        "--mov-x",
        (Math.random() * 600 - 300) + "px"
    );

    particula.style.setProperty(
        "--mov-y",
        (Math.random() * 600 - 300) + "px"
    );


    // Velocidad aleatoria

    particula.style.animationDuration =
        (4 + Math.random() * 8) + "s";


    // Inicio aleatorio

    particula.style.animationDelay =
        (Math.random() * 8) + "s";


    universoProfundo.appendChild(
        particula
    );

}
/* =========================
   MENSAJES SECRETOS CHEE
========================= */

const mensajesOcultos = [

    {
        texto: "No somos emos, solo somos raros 🌻🖤",
        icono: "🌻"
    },

    {
        texto: "Ánimo, no te rindas, lo estás haciendo bieeeen, mensaaaaa 💛",
        icono: "✨"
    },

    {
        texto: "Te quiero 3♾️ babosaaa 😂💛",
        icono: "♾️"
    },

    {
        texto: "Sé que no hablamos en persona, pero siempre me sacas una sonrisa en el chat 💬",
        icono: "💬"
    },

    {
        texto: "Eres mi ídolo, Chee ⭐",
        icono: "⭐"
    },

    {
        texto: "Gracias por aguantar todas mis tonterías JAJAJA 😂",
        icono: "🌻"
    },

    {
        texto: "Podemos hablar todo el día y todavía encontramos otro tema JAJA 💬",
        icono: "💫"
    },

    {
        texto: "Nunca dejes de ser tú, mensaaaaa 💛",
        icono: "🌼"
    },

    {
        texto: "Este universo necesitaba una Estrella ⭐",
        icono: "⭐"
    },

    {
        texto: "Aunque sea por chat, nuestras pláticas ya tienen su propio universo 🌌",
        icono: "🌌"
    }

];


/* =========================
   CREAR ESTRELLAS SECRETAS
========================= */

const zonaMensajes =
    document.getElementById(
        "mensajes-secretos"
    );


if (zonaMensajes) {

    mensajesOcultos.forEach(
        function(mensaje, indice) {

            const estrellaSecreta =
                document.createElement("div");

            estrellaSecreta.className =
                "mensaje-secreto";

            estrellaSecreta.textContent =
                "✦";

            /*
             Posición aleatoria
            */

            estrellaSecreta.style.left =
                (5 + Math.random() * 90) + "%";

            estrellaSecreta.style.top =
                (12 + Math.random() * 75) + "%";


            /*
             Cada una parpadea
             diferente
            */

            estrellaSecreta.style.animationDelay =
                (Math.random() * 2) + "s";


            /*
             Al tocarla
            */

            estrellaSecreta.onclick =
                function() {

                    mostrarMensajeNuevo(
                        mensaje
                    );

                };


            zonaMensajes.appendChild(
                estrellaSecreta
            );

        }
    );

}


/* =========================
   MOSTRAR MENSAJE
========================= */

function mostrarMensajeNuevo(mensaje) {

    const ventana =
        document.createElement("div");

    ventana.className =
        "ventana-mensaje-nueva";


    ventana.innerHTML = `

        <div class="contenido-mensaje-nuevo">

            <div class="icono-nuevo">
                ${mensaje.icono}
            </div>

            <p>
                ${mensaje.texto}
            </p>

            <button>
                ✦ Seguir explorando ✦
            </button>

        </div>

    `;


    document.body.appendChild(
        ventana
    );


    ventana
        .querySelector("button")
        .onclick = function() {

            ventana.remove();

        };

}
/* =========================
   PLANETA CHEE
========================= */

function abrirPlaneta() {

    const ventana =
        document.getElementById(
            "ventana-planeta"
        );

    ventana.style.display =
        "flex";

}


function cerrarPlaneta() {

    const ventana =
        document.getElementById(
            "ventana-planeta"
        );

    ventana.style.display =
        "none";

}
/* =========================
   MINI MUNDOS DE CHEE
========================= */

const mundosChee = {

    durazno: {

        icono: "🍑",

        titulo: "Planeta Durazno",

        texto:
        "El famoso juguito de durazno 🍑. Una pequeña parte del universo de Chee.",

        decoracion:
        "🍑 ✨ 🍑 ✨ 🍑"

    },


    coco: {

        icono: "🥥",

        titulo: "Isla del Coco",

        texto:
        "Un pequeño rincón tropical perdido entre las estrellas. Aquí reina el coco 🥥.",

        decoracion:
        "🌴 🥥 🌴 🥥 🌴"

    },


    dinamitas: {

        icono: "🌶️",

        titulo: "Zona Dinamitas",

        texto:
        "⚠️ Zona de riesgo. Aquí viven las famosas Sabritas Dinamitas. Entrar bajo tu propio riesgo 😂.",

        decoracion:
        "🌶️ 🔥 🌶️ 🔥 🌶️"

    },


    zanahoria: {

        icono: "🥕",

        titulo: "Jardín de Zanahorias",

        texto:
        "Un pequeño planeta naranja lleno de zanahorias flotando entre las estrellas 🥕.",

        decoracion:
        "🥕 🌱 🥕 🌱 🥕"

    },


    brocoli: {

        icono: "🥦",

        titulo: "Bosque del Brócoli",

        texto:
        "Un extraño bosque espacial donde cada árbol parece un brócoli gigante 🥦😂.",

        decoracion:
        "🥦 🌳 🥦 🌳 🥦"

    },
    frase: {

        icono: "?",

        titulo: "Frase especial de la mensaaaa, yo te preguntee HAHAH",

        texto:
        "Si no trabajo, no hay mony😂.",

        decoracion:
        "😂😂😂😂😂😂😂😂😂😂😂😂😂"

    }

};


/* =========================
   ABRIR MINI MUNDO
========================= */

function mostrarGusto(nombre) {

    const mundo =
        mundosChee[nombre];

    if (!mundo) return;


    document.getElementById(
        "mini-icono"
    ).textContent =
        mundo.icono;


    document.getElementById(
        "mini-titulo"
    ).textContent =
        mundo.titulo;


    document.getElementById(
        "mini-texto"
    ).textContent =
        mundo.texto;


    document.getElementById(
        "mini-decoracion"
    ).textContent =
        mundo.decoracion;


    document.getElementById(
        "mini-mundo"
    ).style.display =
        "flex";

}


/* =========================
   CERRAR MINI MUNDO
========================= */

function cerrarGusto() {

    document.getElementById(
        "mini-mundo"
    ).style.display =
        "none";

}