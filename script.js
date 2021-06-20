function f(){
}

function checkNeedsVsWants() {
		var score = 0;
		if(document.getElementById('starbucks-want').checked) {
			document.getElementById('starbucks-score').innerHTML = 'Correct';
			score++;
		} else {
			document.getElementById('starbucks-score').innerHTML = 'Incorrect';
		}
		if(!document.getElementById('phone-need').checked) {
			document.getElementById('phone-score').innerHTML = 'Correct';
			score++;
		} else {
			document.getElementById('phone-score').innerHTML = 'Incorrect';

			
		}
		if(document.getElementById('car-want').checked) {
			document.getElementById('car-score').innerHTML = 'Correct';
			score++;
		} else {
			document.getElementById('car-score').innerHTML = 'Incorrect';
		}
		if(document.getElementById('bus-need').checked) {
			document.getElementById('bus-score').innerHTML = 'Correct';
			score++;
		} else {
			document.getElementById('bus-score').innerHTML = 'Incorrect';
			
		}
		if(document.getElementById('paint-want').checked) {
			document.getElementById('paint-score').innerHTML = 'Correct';
			score++;
		} else {
			document.getElementById('paint-score').innerHTML = 'Incorrect';
		}
		if(document.getElementById('restaurants-want').checked) {
			document.getElementById('restaurants-score').innerHTML = 'Correct';
			score++;
		} else {
			document.getElementById('restaurants-score').innerHTML = 'Incorrect';
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