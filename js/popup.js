'use strict';

(function() {

	var OVERLAY_TOP = '80px';
	var OVERLAY_LEFT = '50%';
	var coatColors = [
		'rgb(101, 137, 164)',
		'rgb(241, 43, 107)',
		'rgb(146, 100, 161)',
		'rgb(56, 159, 117)',
		'rgb(215, 210, 55)',
		'rgb(0, 0, 0)'
	];
	var eyesColors = [
		'black',
		'red',
		'blue',
		'yellow',
		'green'
	];
	 var ballColors = [
	    '#ee4830',
	    '#30a8ee',
	    '#5ce6c0',
	    '#e848d5',
	    '#e6e848'
  	];
	var KEY_ESC = 27;
	var openButtonIcon = document.querySelector('.setup-open-icon');
	var setupPopup = document.querySelector('.setup');
	var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
	var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
	var wizardFireBall = document.querySelector('.setup-fireball-wrap');

	var onPopupEsc = function (evt) {
	if (evt.target !== document.querySelector('.setup-user-name')) {
		closePopup();
		};
	};

	var openPopup = function () {
		setupPopup.classList.remove('hidden');
		document.addEventListener('keydown', function(evt) {
			if (evt.keyCode === KEY_ESC) {
				onPopupEsc (evt);
			};
		});
	};

	var closePopup =function () {
		setupPopup.classList.add('hidden');
		setupPopup.style.top = OVERLAY_TOP;
		setupPopup.style.left = OVERLAY_LEFT;
		document.removeEventListener('keydown', function(evt) {
			onPopupEsc(evt);
		});
	};

	wizardCoat.addEventListener('click', function() {
		wizardCoat.style.fill = window.utils.getRandomElement(coatColors);
	});

	wizardEyes.addEventListener('click', function() {
		wizardEyes.style.fill = window.utils.getRandomElement(eyesColors);
	});

	wizardFireBall.addEventListener('click', function() {
		wizardFireBall.style.background = window.utils.getRandomElement(ballColors);
	});

	window.popup = {
		openPopup: openPopup,
		closePopup: closePopup
	};

})();