#!/usr/bin/env node


/** IMPORTS **/

const axios = require('axios')
const inquirer = require('inquirer')
const program = require('commander')
const fs = require('fs')

/** VARIABLES **/

let hyperlink = 'https://opentdb.com/api.php?amount=10'
let quizz = []

/** MODULE: COMMANDER **/

program
    .version('1.0.0')
    .description('ask you 10 questions as a quizz !')
    .option('-c, --category [theme]', 'Choose a category (videogames/film/sport/manga/cartoon)')
    .option('-d, --difficulty [difficulty]', 'Choose your difficulty (easy/medium/hard)')
    .option('-t, --type [type]', 'multiple or boolean')
    .action(function(args) {
        if (args.category == 'film') {
            hyperlink += '&category=11'
        } else if (args.category == 'videogames') {
            hyperlink += '&category=15'
        } else if (args.category == 'sport') {
            hyperlink += '&category=21'
        } else if (args.category == 'manga') {
            hyperlink += '&category=31'
        } else if (args.category == 'cartoon') {
            hyperlink += '&category=32'
        } else if (args.category != undefined || args.category != null) {
			console.log('Invalid argument : \'' + args.category + '\'')
			process.exit()
		}

        if (args.difficulty == 'easy') {
            hyperlink += '&difficulty=easy'
        } else if (args.difficulty == 'medium') {
            hyperlink += '&difficulty=medium'
        } else if (args.difficulty == 'hard') {
            hyperlink += '&difficulty=hard'
        } else if (args.difficulty != undefined || args.difficulty != null) {
			console.log('Invalid argument : \'' + args.difficuty + '\'')
			process.exit()
		}

        if (args.type == 'multiple') {
            hyperlink += '&type=easy'
        } else if (args.type == 'boolean') {
            hyperlink += '&type=boolean'
        } else if (args.type != undefined || args.type != null) {
			console.log('Invalid argument : \'' + args.type + '\'')
			process.exit()
		}
    })

program.parse(process.argv)

/** SCRIPT **/

axios.get(hyperlink)
	.then(response => {
		quizz = response.data.response_code
		if (quizz == 1) {
			throw new Error('Could not return results. The API doesn\'t have enough questions for you ! Please change arguments')
		}
		return response
	})
	.then(response => quizz = response.data.results)
	.then(() => {
		// this function remake the object, it transform the data on question and answer to inquirer
		quizz.forEach(function(question, i) {
			// use random to make a random spot to the answer
			let random = Math.floor(Math.random() * (4))
			let choice_answer = question.incorrect_answers
			choice_answer.splice(random, 0, question.correct_answer)
			question.message = question.question
			question.type = 'list'
			question.name = 'reponse' + i
			question.choices = choice_answer
			delete question.category
			delete question.difficulty
			delete question.question
			delete question.incorrect_answers
		})
	})
	.then(() => {
		inquirer
			.prompt(quizz)
			.then((answers) => {
				// in this function we count points and write in the file log
				let score = 0
				let final_text = 'Ask-me-something.log\n\n---------------------------\n\n'
				for (let i = 0; i < 10; i++) {
					if (answers.reponse0 == quizz[i].correct_answer) {
						score++
						final_text += 'Question : ' + quizz[i].message + '\n' + 'Good Answer : ' + quizz[i].correct_answer + '\nYou succeed this question !\n\n'
					} else if (answers.reponse1 == quizz[i].correct_answer) {
						score++
						final_text += 'Question : ' + quizz[i].message + '\n' + 'Good Answer : ' + quizz[i].correct_answer + '\nYou succeed this question !\n\n'
					} else if (answers.reponse2 == quizz[i].correct_answer) {
						score++
						final_text += 'Question : ' + quizz[i].message + '\n' + 'Good Answer : ' + quizz[i].correct_answer + '\nYou succeed this question !\n\n'
					} else if (answers.reponse3 == quizz[i].correct_answer) {
						score++
						final_text += 'Question : ' + quizz[i].message + '\n' + 'Good Answer : ' + quizz[i].correct_answer + '\nYou succeed this question !\n\n'
					} else if (answers.reponse4 == quizz[i].correct_answer) {
						score++
						final_text += 'Question : ' + quizz[i].message + '\n' + 'Good Answer : ' + quizz[i].correct_answer + '\nYou succeed this question !\n\n'
					} else if (answers.reponse5 == quizz[i].correct_answer) {
						score++
						final_text += 'Question : ' + quizz[i].message + '\n' + 'Good Answer : ' + quizz[i].correct_answer + '\nYou succeed this question !\n\n'
					} else if (answers.reponse6 == quizz[i].correct_answer) {
						score++
						final_text += 'Question : ' + quizz[i].message + '\n' + 'Good Answer : ' + quizz[i].correct_answer + '\nYou succeed this question !\n\n'
					} else if (answers.reponse7 == quizz[i].correct_answer) {
						score++
						final_text += 'Question : ' + quizz[i].message + '\n' + 'Good Answer : ' + quizz[i].correct_answer + '\nYou succeed this question !\n\n'
					} else if (answers.reponse8 == quizz[i].correct_answer) {
						score++
						final_text += 'Question : ' + quizz[i].message + '\n' + 'Good Answer : ' + quizz[i].correct_answer + '\nYou succeed this question !\n\n'
					} else if (answers.reponse9 == quizz[i].correct_answer) {
						score++
						final_text += 'Question : ' + quizz[i].message + '\n' + 'Good Answer : ' + quizz[i].correct_answer + '\nYou succeed this question !\n\n'
					} else {
						final_text += 'Question : ' + quizz[i].message + '\n' + 'Good Answer : ' + quizz[i].correct_answer + '\nYou failed this question !\n\n'
					}
				}
				final_text += 'Your score : ' + score + '\n'
				try {
					// Write the question and the good answers
					fs.writeFile('/tmp/quizz.txt', final_text, (err) => {
						if (err) console.log(err)
					})
				} catch (err) {
					console.error('ERR > ', err)
				}
				console.log('Your score : ' + score)
				console.log('You can look your score in details in /tmp/quizz.txt')
			})
	})
	.catch(err => console.log(err.message))