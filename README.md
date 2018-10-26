# Crystal-Collector-Game
----------
## Table of Contents 
1. [Overview](#overview)
2. [Pseudo Code](#pseudocode)
2. [Technologies](#technologies)
3. [Methods](#methods)
4. [Local Installation](#installation)
5. [App Display](#display)

<a name="overview"></a>
## Overview 
Crystal-Collector-Game is a Javascript Jquery app that uses the Math.floor(Math.random()) function to generate a random target number between 19 and 120. There are 4 crystals displayed on the screen. For each round, the user will receive a new target number, and each crystal will be assigned a new value. The user does not know the crsyal value until clicking on it. The goal for the user is to click on different crystals so that the sum adds up to the target number for that round. 

<a name="pseudocode"></a>
## Pseudo Code 

![Crystal Collector](/assets/images/game.png)

1. [Watch the demo](https://youtu.be/yNI0l2FMeCk).

2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

3. Here's how the app works:

   * There will be four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

##### Game design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each crystal should have a random hidden value between 1 - 12.


<a name="technologies"></a>
## Technologies

 - JavaScript
 - Jquery
 - HTML
 - CSS
 - Bootstrap 

<a name="methods"></a>
## Methods

 - Math.floor()
 - Math.random()
 - setTimeout() 
 - .click()
 - .text()

<a name="installation"></a>
## Local Installation

### Step 1: Git Clone

Clone Crystal-Collector-Game to your local git repo like the following:

> git clone https://markpython86.github.io/unit-4-game-crystals/

The Crystal-Collector-Game project and its files should now be in your project folder.

### Step 2: Launch app 

Open index.html file in browser (Chrome Preferred)

Or visit https://markpython86.github.io/unit-4-game-crystals/

<a name="display"></a>
## App Display

### Demo
![Demo](/assets/images/demo.gif)