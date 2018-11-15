# Projet-Node-Js - Ask-me-Something

Langage : Node.js

Date : 10/11/2018

Auteur : Jonathan DINH & Theo HERNANDEZ
  
L'ojectif du projet �tait de faire un quizz interractif. Pour cela nous avons utilis� plusieurs modules, 'Commander', 'Inquirer', 'Axios' et 'FileSystem'.
Dans ce quizz, il y a donc 10 questions � r�pondre. On peut s�lectionner 5 options dont 3 qui servent � modifier le la fa�on de jouer, ont �taient mis en place :

 * la cat�gorie (-c) que l'on veut (film, jeux vid�os, cartoon, sport, manga)
 * la difficult� (-d) easy, medium, hard
 * le type (-t) de question vrai ou faux ou avec plusieurs r�ponses
 * la version (-v)
 * et l'option (-h) pour l'aide pour afficher toutes les options possible

On peut utiliser plusieurs option � la fois.

La partie que vous avez r�aliser est enregistrer dans un autre fichier que vous pouvez consulter avec le chemin qui est afficher sur la console (/tmp/quizz.txt)
Il y a aussi marquer votre score directement sur la console pour vous am�liorer la fois d'apr�s.

Il ne vous reste plus qu'� le tester

## Installation

    $ npm install -g
	
## Option de la commande
	
Les cat�gories :

Exemple :

	$ ask-me-something --category sport

	
On peut passer en arguments une cat�gorie parmi les 5 suivants :
 * sport
 * videogames
 * cartoon
 * film
 * manga
 
La difficult� :

Exemple :

	$ ask-me-something --difficulty easy

	
On peut passer en arguments une cat�gorie parmi les 3 suivants :
 * easy
 * medium
 * hard
 
Le type de question :

Exemple :

	$ ask-me-something --type boolean

	
On peut passer en arguments une cat�gorie parmi les 2 suivants :
 * multiple
 * boolean
 
On peut r�unir les 3 arguments :

	$ ask-me-something --category viedeogames --difficulty medium --type multiple