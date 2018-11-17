# Projet Node.Js - Ask me Something

Language : Node.js

Date : 10/11/2018

Authors : Jonathan DINH & Theo HERNANDEZ
  
The goal of the project was to make an interactive quiz. For this we used several modules, 'Commander', 'Inquirer', 'Axios' and 'FileSystem'.
In this quiz, there are 10 questions to answer. We can select 5 options including 3 which are used to modify the way of playing:
 * the category (-c) that we want
 * difficulty (-d) easy, medium, hard
 * the type (-t) of question true or false or with multiple answers
 * the version (-v)
 * and option (-h) for help to show all possible options

Several options can be used at a time.

The game you just played is save in another file that you can consult with the path that is displayed on the console (/tmp/quizz.txt)
In this file you could see where you had wrong and the correct answer.
There is also show your score directly on the console to improve the next time.

You just have to test it, so Ask me something !

## Installation

    $ npm install -g
	
## Options of the command

	
### The categories:

	$ ask-me-something --category [id]
	
We write in arguments the id of a category.



> **Note:** To see category **id**:

	$ ask-me-something --category list


 
### The difficulty:

	$ ask-me-something --difficulty [difficulty]

	
We pass in argument a difficulty among the following 3:
 * easy
 * medium
 * hard


 
### Type of question:

	$ ask-me-something --type [type]
	
We can choose between these two type of question:
 * multiple
 * boolean
 
> **Note:** We can use these 3 arguments at the same time:

	$ ask-me-something --category videogames --difficulty medium --type multiple


	
### The version:

	$ ask-me-something --version

To obtain the version.



### Help :

	$ ask-me-something --help

To display all possible options