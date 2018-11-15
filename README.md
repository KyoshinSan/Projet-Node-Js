# Projet-Node-Js - Ask-me-Something

Langage : Node.js

Date : 10/11/2018

Auteur : Jonathan DINH & Theo HERNANDEZ
  
L'ojectif du projet était de faire un quizz interractif. Pour cela nous avons utilisé plusieurs modules, 'Commander', 'Inquirer', 'Axios' et 'FileSystem'.
Dans ce quizz, il y a donc 10 questions à répondre. On peut sélectionner 5 options dont 3 qui servent à modifier le la façon de jouer, ont étaient mis en place :

 * la catégorie (-c) que l'on veut (film, jeux vidéos, cartoon, sport, manga)
 * la difficulté (-d) easy, medium, hard
 * le type (-t) de question vrai ou faux ou avec plusieurs réponses
 * la version (-v)
 * et l'option (-h) pour l'aide pour afficher toutes les options possible

On peut utiliser plusieurs option à la fois.

La partie que vous avez réaliser est enregistrer dans un autre fichier que vous pouvez consulter avec le chemin qui est afficher sur la console (/tmp/quizz.txt)
Il y a aussi marquer votre score directement sur la console pour vous améliorer la fois d'après.

Il ne vous reste plus qu'à le tester

## Installation

    $ npm install -g
	
## Option de la commande
	
Les catégories :

Exemple :

	$ ask-me-something --category sport

	
On peut passer en arguments une catégorie parmi les 5 suivants :
 * sport
 * videogames
 * cartoon
 * film
 * manga
 
La difficulté :

Exemple :

	$ ask-me-something --difficulty easy

	
On peut passer en arguments une catégorie parmi les 3 suivants :
 * easy
 * medium
 * hard
 
Le type de question :

Exemple :

	$ ask-me-something --type boolean

	
On peut passer en arguments une catégorie parmi les 2 suivants :
 * multiple
 * boolean
 
On peut réunir les 3 arguments :

	$ ask-me-something --category viedeogames --difficulty medium --type multiple