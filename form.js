document.getElementById("flecha_forward").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("prueba");

  let respuestas = [];

  if (document.querySelector('input[name="question1"]:checked')) {
    let valores = document.querySelector(
      'input[name="question1"]:checked'
    ).value;
    console.log(valores);
    respuestas.push(valores);
  }

  if (document.querySelector('input[name="question2"]:checked')) {
    let desafios = document.querySelector(
      'input[name="question2"]:checked'
    ).value;
    console.log(desafios);
    respuestas.push(desafios);
  }

  if (document.querySelector('input[name="question3"]:checked')) {
    let jugador = document.querySelector(
      'input[name="question3"]:checked'
    ).value;
    console.log(jugador);
    respuestas.push(jugador);
  }

  if (document.querySelector('input[name="question4"]:checked')) {
    let fortaleza = document.querySelector(
      'input[name="question4"]:checked'
    ).value;
    console.log(fortaleza);
    respuestas.push(fortaleza);
  }

  console.log(respuestas);

  let chosen = getRandom(respuestas);

  let team = teams[chosen];

  document.getElementById("title_fin").textContent = team.title;
  document.getElementById("text_fin").textContent = team.text;
  document.getElementById("img_fin").src = team.img;
});

let teams = {
  A: {
    title: "¡Perteneces a Karasuno!",
    text: "Eres dedicado, apasionado y siempre dispuesto a darlo todo por el equipo. Valorando el trabajo en equipo y el esfuerzo constante, eres la columna vertebral del espíritu luchador de tu grupo.",
    img: "./img/Karasuno_Team.webp",
  },

  B: {
    title: "¡Perteneces a Nekoma!",
    text: "Eres analítico, estratégico y siempre piensas un paso adelante. Tu enfoque en la inteligencia y la lectura del juego te hace un jugador clave en cualquier equipo.",
    img: "./img/Nekoma.png",
  },

  C: {
    title: "¡Perteneces a Shiratorizawa!",
    text: "Eres fuerte, competitivo y confías en tus habilidades individuales. Tu poder y técnica son impresionantes, y siempre estás listo para dominar en la cancha.",
    img: "/img/Shiratorizawa.png",
  },

  D: {
    title: "¡Perteneces a Fukurodani!",
    text: "Eres innovador, adaptable y siempre encuentras formas creativas de enfrentar los desafíos. Tu capacidad para sorprender y tu flexibilidad te hacen un jugador valioso y versátil.",
    img: "./img/Fukurodani_.png",
  },
};

function getRandom(array) {
  if (array.length == 0) return null;
  var modeMap = {},
    maxCount = 1,
    modes = [];

  for (var i = 0; i < array.length; i++) {
    var el = array[i];

    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;

    if (modeMap[el] > maxCount) {
      modes = [el];
      maxCount = modeMap[el];
    } else if (modeMap[el] == maxCount) {
      modes.push(el);
      maxCount = modeMap[el];
    }
  }
  console.log(modes);
  return modes[Math.floor(Math.random() * modes.length)];
}
