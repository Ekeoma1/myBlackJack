let cards = []
let sum;
let isAlive = false;
let hasBlackjack = false;

let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardEl = document.getElementById('card-el')

let player = {
	name: prompt("Player Name"),
	chips: prompt("How Much are you staking")
}

let playerName = document.getElementById('player-name')
let playerChip = document.getElementById('player-chip')
playerName.textContent = player.name; 
playerChip.textContent = player.chips;


alert("Each game cost 50naira")

function getRandomNo() {

	let randomNo = Math.floor(Math.random()*13) + 1

	if (randomNo === 1) {
		return 11
	}else if(randomNo > 10) {
		return 10
	}else {
		return randomNo
	}
}

function startGame() {

	if (playerChip.textContent < 50) {
		alert("You have just " + playerChip.textContent + " " + "naira " + "left, please top up account")
		let extraMoney = prompt("Enter Deposit")
		playerChip.textContent = Number(playerChip.textContent) + Number(extraMoney)


	}else {
		playerChip.textContent -= 50

		isAlive = true

		let firstCard = getRandomNo();
		let secondCard = getRandomNo();
		cards = [firstCard, secondCard];
		sum = firstCard + secondCard;

		renderGame();
	}
	
	
}

function renderGame() {

	cardEl.textContent = 'Cards: '
	for( let i = 0; i < cards.length; i++) {
		cardEl.textContent += cards[i] + " "
	}

	sumEl.textContent  = "Sum: " + sum 

	if (sum > 21) {
		message = "You're out of the game"
		isAlive = false
	}else if (sum <= 20) {
		message = "Do you need another card"
	} else {
		message = "You've got a blackjack"
		hasBlackjack = true
		playerChip.textContent = Number(playerChip.textContent) + 100
		alert("you just won an extra 100 naira")
 	}



	messageEl.textContent = message
}

function newCard() {
	if (isAlive && !hasBlackjack){
		let card = getRandomNo()

		sum += card

		cards.push(card)

		renderGame()
	}
}

// if (hasBlackjack == true){
// 	playerChip.textContent += 100
// 	alert("You just won 100naira")

// }