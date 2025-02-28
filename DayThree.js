//variaveis iniciais
const firstChoice = prompt('Que área você ira seguir? Front-end ou Back-end?');
let secondChoice = '';

if (firstChoice === 'Front-end') {
    secondChoice = prompt('Você ira aprender React ou Vue?');
    if (secondChoice === 'React') {
        console.log('Então você ira aprender React');
    }
    else if (secondChoice) {
        console.log('Então você ira aprender Vue');
    }
} else if (firstChoice === 'Back-end') {
    secondChoice = prompt('você prefere aprender C# ou Java?')
    if (secondChoice === 'C#') {
        console.log('Então prefere C#');
    }
    else if (secondChoice) {
        console.log('Então prefere Java');
    }
}

const thirdChoice = prompt('Ótimas escolhas! você ira se especiliazar nessa àrea ou planeja se desenvolver até fullstack?');
let fourthChoice = [];
let i = 0;
while (i <= 0){
  let newChoice = prompt('Mais alguma tecnologia que você gostaria de se especilizar ou aprender?');
  if (newChoice === ''|| newChoice === null|| newChoice === undefined){
    i++;
  } else {
    fourthChoice.push(newChoice);
    alert('Ótimo!,' + newChoice + ' É bem interessante!');
    console.log(fourthChoice);
  }
}
const completionMessage = alert(`Parabéns! Você escolheu seguir ${firstChoice} e aprender ${secondChoice}. Você deseja se especializar em ${thirdChoice} e ainda quer aprender ${fourthChoice}`);