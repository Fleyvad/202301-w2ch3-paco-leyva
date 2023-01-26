//////PASAPALABRA-PACO LEYVA

class NewLetter {
  letter;
  answer;
  status;
  question;
  constructor(letter, answer, status, question) {
    this.letter = letter;
    this.answer = answer;
    this.status = status;
    this.question = question;
  }
}

const questions = [
  new NewLetter(
    "a",
    "abreviar",
    0,
    "CON LA A. Hacer algo más corto o que dure menos tiempo"
  ),
  new NewLetter(
    "a",
    "acechar",
    0,
    "CON LA A. Vigilar a escondidas y con mucha atención. Tiene un fin determinado"
  ),
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },

  new NewLetter(
    "b",
    "bastón",
    0,
    "CON LA B. Vara o palo con puño que sirve para apoyase al andar"
  ),
  new NewLetter(
    "b",
    "beneficio",
    0,
    "CON LA B. Mejora o provecho que da o recibe una o varias personas"
  ),
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },

  new NewLetter(
    "c",
    "calambre",
    0,
    "CON LA C. Dolor que produce un músculo del cuerpo cuando está contraído"
  ),
  new NewLetter(
    "c",
    "camilla",
    0,
    "CON LA C. Cama portátil estrecha y ligera para transportar personas enfermas o heridas"
  ),
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },

  new NewLetter(
    "d",
    "dátil",
    0,
    "CON LA D. Fruto de la palmera datilera, es pequeño y alargado. Su sabor es dulce"
  ),
  new NewLetter(
    "d",
    "dedal",
    0,
    "CON LA D. Utensilio que sirve para empujar la aguja al coser. Protege el dedo corazón. Suele ser de metal"
  ),
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },

  new NewLetter(
    "e",
    "edema",
    0,
    "CON LA E. Inflamación de una parte del cuerpo que se produce por la acumulación de líquido"
  ),
  new NewLetter(
    "e",
    "emigrante",
    0,
    "CON LA E. Persona que deja el país en el que ha nacido y se va a otro país"
  ),
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },

  new NewLetter(
    "f",
    "facinerosa",
    0,
    "CON LA F. Persona que hace cosas en contra de la ley muy a menudo"
  ),
  new NewLetter(
    "f",
    "fácil",
    0,
    "CON LA F. Que exige poco esfuerzo o poca formación"
  ),
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },

  new NewLetter(
    "g",
    "galeón",
    0,
    "CON LA G. Barco antiguo grande de vela con 3 o 4 palos diseñado por los españoles"
  ),
  new NewLetter(
    "g",
    "ganar",
    0,
    "CON LA G. Obtener dinero o bienes como resultado de un premio o un trabajo"
  ),
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },

  new NewLetter("h", "habano", 0, "CON LA H. Cigarro puro que se hace en Cuba"),
  new NewLetter(
    "h",
    "hocico",
    0,
    "CON LA H. Parte que sobresale de la cabeza de algunos animales"
  ),
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },

  new NewLetter(
    "i",
    "idea",
    0,
    "CON LA I. Imagen o representación de algo o alguien en la mente"
  ),
  new NewLetter(
    "i",
    "ignominia",
    0,
    "CON LA I. Vergüenza que sufre una persona en público por algo que ha dicho o ha hecho"
  ),
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },

  new NewLetter(
    "j",
    "jarana",
    0,
    "CON LA J. Diversión, juerga en la que hay mucho ruido"
  ),
  new NewLetter(
    "j",
    "jardinera",
    0,
    "CON LA J. Macetero grande donde una persona puede poner varias macetas con plantas"
  ),
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },

  new NewLetter(
    "k",
    "karate",
    0,
    "CON LA K. Arte marcial japonés que consiste en dar golpes secos con los pies, los codos y el borde de la mano"
  ),
  new NewLetter("k", "kayak", 0, "CON LA K. Embarcación parecida a una canoa"),
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },

  new NewLetter(
    "l",
    "lameculos",
    0,
    "CON LA L. Que es aduladora y hace la pelota a otras personas para conseguir favores"
  ),
  new NewLetter("l", "lamparón", 0, "CON LA L. Mancha en una prenda de ropa"),
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },

  new NewLetter(
    "m",
    "mampostería",
    0,
    "CON LA M. Obra o construcción que se hace con piedras de diferentes tamaños"
  ),
  new NewLetter(
    "m",
    "manantial",
    0,
    "CON LA M. Lugar donde nace el agua de la tierra o de las rocas de forma natural"
  ),
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },

  new NewLetter(
    "n",
    "nebulosa",
    0,
    "CON LA N. Nube grande formada por materiales que flotan en el espacio, como gases y polvo"
  ),
  new NewLetter(
    "n",
    "neutral",
    0,
    "CON LA N. Que en conflicto no apoya a ninguna de las partes en un enfrentamiento"
  ),
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },

  new NewLetter(
    "ñ",
    "ñora",
    0,
    "CON LA Ñ. Pimiento pequeño, redondo y de color rojo"
  ),
  new NewLetter(
    "ñ",
    "ñu",
    0,
    "CON LA Ñ. Animal mamífero de gran tamaño, con cabeza de toro"
  ),
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },

  new NewLetter(
    "o",
    "objetar",
    0,
    "CON LA O. Expresar una idea contraria a otra, rechazar una propuesta y explicar los motivos"
  ),
  new NewLetter(
    "o",
    "oportunidad",
    0,
    "CON LA O. Momento adecuado que necesitamos para poder hacer algo o, al menos, para poder intentarlo"
  ),
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },

  new NewLetter(
    "p",
    "palet",
    0,
    "CON LA P. Plataforma de madera para colocar y transportar objetos con carretillas elevadoras"
  ),
  new NewLetter(
    "p",
    "parsimonia",
    0,
    "CON LA P. Lentitud o calma excesiva en la forma de hablar o de actuar"
  ),
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },

  new NewLetter(
    "q",
    "quebrantahuesos",
    0,
    "CON LA Q. Animal llamado así por tirar huesos desde muy alto para romperlos contra el suelo y poder comerlos"
  ),
  new NewLetter(
    "q",
    "quimono",
    0,
    "CON LA Q. Vestido que usan las mujeres de Japón"
  ),
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },

  new NewLetter(
    "r",
    "raque",
    0,
    "CON LA R. Acción que consiste en recoger en la playa los objetos de un naufragio"
  ),
  new NewLetter(
    "r",
    "referéndum",
    0,
    "CON LA R. Procedimiento por el que un gobierno hace una consulta pública sobre algo de especial importancia"
  ),
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },

  new NewLetter(
    "s",
    "símbolo",
    0,
    "CON LA S. Signo, dibujo u objeto que sirve para representar una idea"
  ),
  new NewLetter(
    "s",
    "secuela",
    0,
    "CON LA S. Consecuencia de una enfermedad o un accidente"
  ),
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },

  new NewLetter(
    "t",
    "tahona",
    0,
    "CON LA T. Sitio donde los panaderos hacen el pan"
  ),
  new NewLetter(
    "t",
    "tesis",
    0,
    "CON LA T. Trabajo escrito que un estudiante presenta en la universidad para conseguir el título de doctor"
  ),
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },

  new NewLetter(
    "u",
    "urología",
    0,
    "CON LA U. Parte de la medicina que estudia el aparato urinario y el aparato reproductor de los hombres"
  ),
  new NewLetter(
    "u",
    "utilitario",
    0,
    "CON LA U. Coche pequeño, barato y que consume poca gasolina, gasoil o electricidad"
  ),
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },

  new NewLetter(
    "v",
    "vendimia",
    0,
    "CON LA V. Actividad que consiste en cosechar y recolectar uvas"
  ),
  new NewLetter(
    "v",
    "virtud",
    0,
    "CON LA V. Característica buena del comportamiento o de la manera de ser de una persona"
  ),
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },

  new NewLetter(
    "w",
    "windsurf",
    0,
    "CON LA W. Deporte acuático. Consiste en navegar sobre una tabla con una vela"
  ),
  new NewLetter(
    "w",
    "whisky",
    0,
    "CON LA W. Bebida alcohólica fuerte y de color marrón"
  ),

  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },

  new NewLetter(
    "x",
    "xerografía",
    0,
    "CON LA X. Proceso de copia de un texto o una imagen en papel mediante una máquina"
  ),
  new NewLetter(
    "x",
    "xifoides",
    0,
    "CON LA X. Parte blanda que está al final del esternón del ser humano"
  ),
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },

  new NewLetter(
    "y",
    "yodo",
    0,
    "CON LA Y. Sustancia de color oscuro usada para desinfectar heridas"
  ),
  new NewLetter(
    "y",
    "yoga",
    0,
    "CON LA Y. Conjunto de ejercicios de gimnasia y de respiración que ayudan a relajarse y a concentrarse"
  ),
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },

  new NewLetter("z", "zampar", 0, "CON LA Z. Comer mucho y muy deprisa"),
  new NewLetter(
    "z",
    "zoco",
    0,
    "CON LA Z. Mercado al aire libre típico de los países árabes"
  ),
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

let acc = 0;
let acc2 = 0;
let fails = 0;
let success = 0;
let passWord = [];
const question3 = [];
const questionFilterRandom = [];
let userName = "";
let usersArray = [];

class Users {
  name;
  success;
  fails;

  constructor(name, success, fails) {
    this.name = name;
    this.success = success;
    this.fails = fails;
  }
}

usersArray.push(new Users("PEPE", 13, 7));
usersArray.push(new Users("ANA", 17, 3));

const ranking = () => {
  usersArray.push(new Users(userName, success, fails));

  const getRanking = usersArray.map((user) => ({
    posicion: 0,
    user: user.name,
    letras: user.success,
  }));

  for (let i = 1; i < getRanking.length; i++) {
    getRanking[i].letras;
  }

  let orderRanking = [];

  for (let order in getRanking) {
    orderRanking.push([
      getRanking[order].posicion,
      getRanking[order].user,
      getRanking[order].letras,
    ]);
  }

  orderRanking.sort((a, b) => b[2] - a[2]);

  for (let i = 0; i < orderRanking.length; i++) {
    let acc = 0;
    acc = i + 1;
    orderRanking[i].splice(0, 1, acc);
  }

  console.log(`>>>>>>>>>>RANKING<<<<<<<<<<`);
  console.table(orderRanking);
  console.log();
};

const getName = () => {
  let yourName;
  do {
    yourName = prompt(`Hola, Cual es tu nombre?`);
  } while (yourName === null || yourName === "" || !Number.isNaN(+yourName));

  return (userName = yourName.toUpperCase());
};

const createArrayLetters = () => {
  for (let i = 0; i < questions.length; i++) {
    question3.push([questions[i], questions[i + 1], questions[i + 2]]);
    i++;
    i++;
  }
};

const selectArrayLetters = () => {
  for (let i = 0; i < question3.length; i++) {
    const randomNumber = Math.floor(Math.random() * 3);
    questionFilterRandom.push(question3[i][randomNumber]);
  }
};

const wordAnswer = (array, accumulator) => {
  const answerResult = prompt(
    array[accumulator].question,
    "RESPUESTA O PASAPALABRA"
  );
  if (answerResult === "" || answerResult === "PASAPALABRA") {
    return answerResult.toUpperCase();
  } else if (!Number.isNaN(+answerResult) || answerResult === null) {
    return wordAnswer(array, accumulator);
  } else if (answerResult.toUpperCase() === "END") {
    return answerResult.toUpperCase();
  } else {
    return answerResult.toUpperCase();
  }
};

///AQUÍ TENGO EL CONTADOR PERO NO LO HE APLICADO POR LOS PROMPTS,LO PON AL FINAL SOLO CON 5 SEG
const timer = () => {
  let number = 5;
  function time() {
    console.log(`${number}`);
    number--;
    if (number === 0) {
      clearInterval(getTime);
      console.log(`Tiempo!!!!`);
      //console.log(`>>>> Has acertado ${success} y has fallado ${fails} <<<<`)
    }
  }

  let getTime = setInterval(time, 1000);
};

const pasapalabra = (array) => {
  alert(`${userName}, has accedido a PaspabraCODERS! El tiempo comienza, ya!!`);

  do {
    const result = wordAnswer(array, acc);

    if (result === array[acc].answer.toUpperCase()) {
      alert(`¡¡Has acertado!!`);
      array[acc].status = 1;
      acc++;
      success++;
    } else if (result === "END") {
      return;
    } else if (result === "" || result === "PASAPALABRA") {
      alert(`Pasamos palabra`);

      acc++;
    } else {
      alert(
        `Lo siento, has fallado...La palabra correcta era "${array[
          acc
        ].answer.toUpperCase()}"`
      );
      array[acc].status = 1;
      acc++;
      fails++;
    }
  } while (acc < array.length);

  const filterArray = array.filter((element) => element.status === 0);

  //debugger
  do {
    for (let i = 0; i < filterArray.length; i++) {
      if (filterArray[i].status === 0) {
        const result2 = wordAnswer(filterArray, i);
        if (result2 === filterArray[i].answer.toUpperCase()) {
          alert(`¡¡Has acertado!!`);
          filterArray[i].status = 1;
          success++;
        } else if (result2 === "END") {
          // console.log(`>>>> Has acertado ${success} y has fallado ${fails} <<<<`)
          return;
        } else if (result2 === "" || result2 === "PASAPALABRA") {
          alert(`Pasamos palabra`);
        } else {
          alert(
            `Lo siento, has fallado...La palabra correcta era "${filterArray[
              i
            ].answer.toUpperCase()}"`
          );
          filterArray[i].status = 1;
          fails++;
        }
      }
    }
    //debugger
  } while (filterArray.find((element) => element.status < 1));
};

const rankingOrNo = () => {
  if (questionFilterRandom.every((element) => element.status === 1)) {
    ranking();
  } else {
    console.log(`>>>> Has acertado ${success} y has fallado ${fails} <<<<`);
  }
};

const yesOrNo = () => {
  let result = prompt("¿Otra ronda?", "SI o NO");
  if (result === null || result === "") {
    return otherGame();
  } else if (result.toUpperCase() !== "SI" && result.toUpperCase() !== "NO") {
    return otherGame();
  } else {
    return result.toUpperCase();
  }
};

const otherGame = () => {
  do {
    const resultYoN = yesOrNo();
    if (resultYoN === "SI") {
      acc = 0;
      fails = 0;
      success = 0;
      question3.splice(0);
      questionFilterRandom.splice(0);
      userName = "";
      createArrayLetters();
      selectArrayLetters();
      getName();
      pasapalabra(questionFilterRandom);
      rankingOrNo();
      otherGame();
      timer();
    } else {
      return alert(`¡Hasta otra!`);
    }
  } while (resultYoN === "SI");
};

const pasapalabraCoders = () => {
  createArrayLetters();
  selectArrayLetters();
  getName();
  pasapalabra(questionFilterRandom);
  rankingOrNo();
  otherGame();
  timer();
};

pasapalabraCoders();
