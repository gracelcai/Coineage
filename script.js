function f(){
}

function checkNeedsVsWants() {
		var score = 0;
		if(document.getElementById('starbucks-need').checked) {
			document.getElementById('starbucks-score').innerHTML = 'Incorrect';
		} else {
			document.getElementById('starbucks-score').innerHTML = 'Correct';
			score++;
		}
		if(document.getElementById('phone-want').checked) {
			document.getElementById('phone-score').innerHTML = 'Incorrect';
		} else {
			document.getElementById('phone-score').innerHTML = 'Correct';

			score++;
		}
		if(document.getElementById('car-need').checked) {
			document.getElementById('car-score').innerHTML = 'Incorrect';
		} else {
			document.getElementById('car-score').innerHTML = 'Correct';
			score++;
		}
		if(document.getElementById('bus-need').checked) {
			document.getElementById('bus-score').innerHTML = 'Correct';
			score++;
		} else {
			document.getElementById('bus-score').innerHTML = 'Incorrect';
			
		}
		if(document.getElementById('paint-need').checked) {
			document.getElementById('paint-score').innerHTML = 'Incorrect';
		} else {
			document.getElementById('paint-score').innerHTML = 'Correct';
			score++;
		}
		if(document.getElementById('restaurants-need').checked) {
			document.getElementById('restaurants-score').innerHTML = 'Incorrect';
		} else {
			document.getElementById('restaurants-score').innerHTML = 'Correct';
			score++;
		}
		document.getElementById('total-score').innerHTML = 'Score: ' + score + '/6';
		return score;
	}
function checkScore() {
	if(checkNeedsVsWants() == 6) {
		document.location='budgeting.html';
	} else {
		alert ("Correct your answers before proceeding.");
	}
}