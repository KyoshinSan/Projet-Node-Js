#!/usr/bin/env node

const axios = require('axios')
const inquirer = require('inquirer')

let quizz = {}


axios.get("https://opentdb.com/api.php?amount=10&category=15&difficulty=medium")
	.then(response =>  quizz = response.data.results[0])
	.then(() => console.log(quizz))
	.then(() => console.log(quizz.question))
	.then(() => input(quizz.question, quizz.correct_answer, quizz.incorrect_answers))
	.catch(err => console.log("err"))
	
function input(question, correct_answer, incorrect_answers) {
let la_reponse_bonne = correct_answer
let les_reponse_mauvaise = incorrect_answers
inquirer.prompt(
{
	type: 'list',
	message: question,
	name: 'reponse',
	choices: [
	correct_answer,
	incorrect_answers[0],
	incorrect_answers[1],
	incorrect_answers[2]
	]
}).then((answers) => {
	answers.reponse
	if(answers.reponse == la_reponse_bonne) {
		console.log('Bien joué')
	} else {
		console.log('Té nul !')
	}
})	
}


	// Pour changer la position de la reponse
	// randomNum  = math
	// choices.slice(randomNum, 0, correct_answer)