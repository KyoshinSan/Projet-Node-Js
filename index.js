#!/usr/bin/env node

const axios = require('axios')
const inquirer = require('inquirer')
const program = require('commander')

program
 .version('1.0.0')
 .description('Pose une question')
 .option('-c, --category [theme]', 'Choose a category')
 .option('-d, --difficulty [difficulty]', 'Choose your difficulty')
 .option('-t, --type [type]', 'Multiple or True/False')
 
program.parse(process.argv)

function optionCmd() {
	if (program.category) {
		if (program.category == 'film') {
			return 'https://opentdb.com/api.php?amount=1&category=11'
		}
		
		else if (program.category == 'jeuxvideo') {
			return 'https://opentdb.com/api.php?amount=1&category=15'
		}
		
		else if (program.category == 'sport') {
			return 'https://opentdb.com/api.php?amount=1&category=21'
		}
		
		else if (program.category == 'manga') {
			return 'https://opentdb.com/api.php?amount=1&category=31'
		}
		
		else if (program.category == 'cartoon') {
			return 'https://opentdb.com/api.php?amount=1&category=32'
		}
		
		else {
			return 'Veuillez taper film/jeuxvideo/sport/manga/cartoon'
		}
	}
	
	else if (program.difficulty) {
		if (program.difficulty == 'easy') {
			return 'https://opentdb.com/api.php?amount=1&difficulty=easy'
		}
		
		else if (program.difficulty == 'medium') {
			return 'https://opentdb.com/api.php?amount=1&difficulty=medium'
		}
		
		else if (program.difficulty == 'hard') {
			return 'https://opentdb.com/api.php?amount=1&difficulty=hard'
		}
		
		else {
			return 'Veuillez taper esay/medium/hard'
		}
	}
	
	else if (program.type) {
		if (program.type == 'multiple') {
			return 'https://opentdb.com/api.php?amount=1&type=multiple'
		}
		
		else if (program.type == 'boolean') {
			return 'https://opentdb.com/api.php?amount=10&type=boolean'
		}
		
		else {
			return 'Veuillez taper multiple/boolean'
		}
	}
	
	else {
		program.help()
	}
}

let quizz = {}

axios.get(optionCmd())
	.then(response =>  quizz = response.data.results[0])
	.then(() => input(quizz.question, quizz.correct_answer, quizz.incorrect_answers))
	.catch(err => console.log(optionCmd()))
	
function input(question, correct_answer, incorrect_answers) {
let la_reponse_bonne = correct_answer
let les_reponse_mauvaise = incorrect_answers
let random = Math.floor(Math.random() * (4))
let choice_answer = incorrect_answers
choice_answer.splice(random, 0, correct_answer);
inquirer.prompt(
{
	type: 'list',
	message: question,
	name: 'reponse',
	choices: choice_answer
}).then((answers) => {
	answers.reponse
	if(answers.reponse == la_reponse_bonne) {
		console.log('Bien joué')
	} else {
		console.log('Té nul !')
		console.log(la_reponse_bonne)
	}
})	
}