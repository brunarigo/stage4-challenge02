/*Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, 
deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso 
        ou não em entrar no concurso e mostre uma mensagem na tela.

Dica: para quebrar uma linha no alert() basta usar um \n na mensagem.         */

const students = [
  {
    name: "Bruna",
    testOne: 10,
    testTwo: 9,
  },
  {
    name: "Fernando",
    testOne: 9,
    testTwo: 10,
  },
  {
    name: "Janete",
    testOne: 6,
    testTwo: 4,
  },
  {
    name: "Denise",
    testOne: 2,
    testTwo: 4,
  }
]

function average (testOne, testTwo) {
  return((testOne + testTwo) / 2)
}

for (let student of students) {
  let result = average(student.testOne, student.testTwo)
  if (result >= 7) {
    alert(`A média de ${student.name} foi ${result}.\nParabéns! Você passou no concurso! Já pode comemorar!`)
  } else {
    alert(`A média de ${student.name} foi ${result}.\nInfelizmente você não alcançou a nota mínima para passar no concurso.\nSe dedique aos estudos e tente numa próxima.`)
  }
}
