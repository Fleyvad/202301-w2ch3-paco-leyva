////////////
//PROYECTO TEMA 4 / FUNCTIONS. BINGO GAME! 🎲 - PACO LEYVA.

const cardBoard = [];
const lines = [];
let userName = "";
let getCardBoard = [];
let userpoints = 0;

const getName = () => {
  let yourName;
  do {
    yourName = prompt(`Hi, What is your name?`);
  } while (yourName === null || yourName === "" || !Number.isNaN(+yourName));

  return (userName = yourName.toUpperCase());
};

const getRandomNumber = (max, min) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + 1);
  return randomNumber;
};

const randomNumbersIntoCardBoard = () => {
  do {
    const randomInto = getRandomNumber(100, 0);

    if (cardBoard.includes(randomInto)) {
      return randomNumbersIntoCardBoard();
    } else {
      cardBoard.push(randomInto);
    }
  } while (cardBoard.length <= 14);
};

const cardBoardNumbers = () => {
  const getCardBoard = cardBoard.map((numberCard) => ({
    number: numberCard,
    intoCard: false,
  }));
  return getCardBoard;
};

const viewCardBoard = () => {
  let selectedNumbers = cardBoard;
  const lineA = selectedNumbers.slice(0, 5);
  const lineB = selectedNumbers.slice(5, 10);
  const lineC = selectedNumbers.slice(10, 15);
  lines.push(lineA, lineB, lineC);
  console.log(`>>>>>>> YOUR CARDBOARD IS <<<<<<<`);
  return console.table(lines);
};

const getNumberBall = (max, min) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + 1);
  return randomNumber;
};

function getRandomNumber2(min, max) {
  let number = Math.floor(Math.random() * (max - min) + 1);
  return number;
}

function arrayOfNumbers(start, end) {
  let myArray = [];

  for (let i = start; i <= end; i++) {
    myArray.push(i);
  }
  return myArray;
}

let numbersBingo = arrayOfNumbers(1, 100);
const numbersBingoAllRuns = arrayOfNumbers(1, 100);
let numbersBingoOriginal = arrayOfNumbers(1, 100);

function runs(array, array2) {
  let runs = array.length - array2.length;
  return runs;
}

const totalRuns = runs(numbersBingoOriginal, numbersBingo);

function scores() {
  if (totalRuns === 15) {
    console.log(`Your score is 1000 points`);
    userpoints = 1000;
    return ranking();
  }
  if (totalRuns <= 20) {
    console.log(`Your score is 500 points`);
    userpoints = 500;
    return ranking();
  }
  if (totalRuns <= 30) {
    console.log(`Your score is 250 points`);
    userpoints = 250;
    return ranking();
  }
  if (totalRuns <= 40) {
    console.log(`Your score is 150 points`);
    userpoints = 150;
    return ranking();
  }
  if (totalRuns <= 50) {
    console.log(`Your score is 50 points`);
    userpoints = 50;
    return ranking();
  }
  if (totalRuns > 50) {
    console.log(`Your score is 0 points`);
    userpoints = 0;
    return ranking();
  }
}

const viewPointsSystem = () => {
  console.log(`>>>>>>WELCOME to BINGO CODERS<<<<<<<`);
  console.log(``);
  console.log(`>>>>>>> THE POINTS SYSTEM IS <<<<<<<`);
  console.log(``);
  console.log(`> > 15 runs | 1000 points < <`);
  console.log(`> > 16 - 20 runs | 500 points < <`);
  console.log(`> > 21- 30 runs 250 points < <`);
  console.log(`> > 31 - 40 | 150 points < <`);
  console.log(`> > 41 - 50 | 50 points < <`);
  console.log(`> > More | 0 points < <`);
};

const ranking = () => {
  const usersNameRanking = ["USER1", "USER2", userName];
  const getRanking = usersNameRanking.map((user) => ({
    position: 0,
    user,
    points: 0,
  }));

  getRanking[0].points = 150;
  getRanking[1].points = 500;
  getRanking[2].points = userpoints;

  let orderRanking = [];

  for (let order in getRanking) {
    orderRanking.push([
      getRanking[order].position,
      getRanking[order].user,
      getRanking[order].points,
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

let accLineA = 0;
let accLineB = 0;
let accLineC = 0;

const linesSelectOrBingo = () => {
  if (lines.flat().every((elements) => elements === "x")) {
    alert(`BINGO!!!`);
    console.log("BINGO!!");
    console.log(`Your cardboard has been complete in ${totalRuns} runs.`);
    return scores();
  }

  if (accLineA === 0 && lines[0].every((elements) => elements === "x")) {
    alert("LINE!!");
    accLineA += 1;
    return;
  }
  if (accLineB === 0 && lines[1].every((elements) => elements === "x")) {
    alert("LINE!!");
    accLineB += 1;
    return;
  }
  if (accLineC === 0 && lines[2].every((elements) => elements === "x")) {
    alert("LINE!!");
    accLineC += 1;
    return;
  }
};

/*
/////EN LA SIGUIENTE FUNCIÓN ESTÁ EL ATRANQUE. AUNQUE HE CREADO EL Nº RANDOM 
PARA QUE EN TEORÍA NO SE REPITA, LOS NÚMEROS QUE SALEN, EN RARA OCASIÓN 
COINCIDEN PARA MARCAR UNA VEZ EL CARTÓN. LO DEMÁS DEBERÍA FUNCIONAR SI LOS NÚMEROS
SALIESEN COMO DEBEN. Y EL TEMA DE LOS BUCLES PUES SE ARREGLARÍA TRAS ELLO.
DEJO ALGÚN DEBUGGER PARA QUE CORTE.

TAMBIÉN HE MAPEADO PARA CREAR UN ARRAY DE OBJETOS A PARTE Y CAMBIAR DE FALSE A TRUE.
AUNQUE NO LO HE UTILIZADO AL FINAL, LO HE DEJADO PARA PROBAR.

GRACIAS DE ANTEMANO.
*/

const returnXOnCardBoard = () => {
  while (lines.flat().every((elements) => elements !== "x")) {
    let randomIndex = getRandomNumber2(0, numbersBingo.length - 1);
    let finalRandomNumber = numbersBingo[randomIndex];
    numbersBingo.splice(randomIndex, 1);

    alert(`For this run the number is ${finalRandomNumber}`);

    for (let i = 0; i < lines.length; i++) {
      for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] === finalRandomNumber) {
          lines[i][j] = "x";
          alert(`The number ${finalRandomNumber} is on your cardboard!`);

          getCardBoard.forEach((element) => {
            if (element.number === finalRandomNumber) {
              element.intoCard = true;
            }
          });
          linesSelectOrBingo();
          console.table(lines);

          return;
        } else {
          debugger;
          alert(`Sorry, no luck in this run.`);
          returnXOnCardBoard();
          return;
        }
      }
    }
  }
};

const electionYesOrNo = () => {
  let result = prompt("Do you want another cardboard?", "YES or NO");
  if (result === null || result === "") {
    return electionYesOrNo();
  } else if (result.toUpperCase() !== "YES" && result.toUpperCase() !== "NO") {
    return electionYesOrNo();
  } else {
    return result.toUpperCase();
  }
};

const cardBoardYesOrNot = () => {
  const election = electionYesOrNo();
  if (election === "NO") {
    getCardBoard = cardBoard.map((numberCard) => ({
      number: numberCard,
      intoCard: false,
    }));

    returnXOnCardBoard();
  } else {
    cardBoard.splice(0);
    lines.splice(0);

    randomNumbersIntoCardBoard();
    viewCardBoard();
    cardBoardYesOrNot();
  }
};

const electionYesOrNoOtherBingoGame = () => {
  let result = prompt("Do you want tu keep playing?", "YES or NO");
  if (result === null || result === "") {
    return electionYesOrNoOtherBingoGame();
  } else if (result.toUpperCase() !== "YES" && result.toUpperCase() !== "NO") {
    return electionYesOrNoOtherBingoGame();
  } else {
    return result.toUpperCase();
  }
};

const keepToPlayYesOrNot = () => {
  const election = electionYesOrNoOtherBingoGame();
  if (election === "NO") {
    alert(`Goodbye ${userName}, see you leter!`);
  } else {
    cardBoard.splice(0);
    lines.splice(0);

    randomNumbersIntoCardBoard();
    viewCardBoard();
    cardBoardYesOrNot();
  }
};

const bingoCoders = () => {
  getName();
  viewPointsSystem();
  alert(`Hi ${userName}! Welcome to BINGO CODERS!`);
  randomNumbersIntoCardBoard();
  viewCardBoard();

  cardBoardYesOrNot();
  keepToPlayYesOrNot();
};

bingoCoders();
