'use strict';

(function() {

	var wizardTemplate = document.querySelector('#similar-wizard-template');
	var names = [
		'Иван',
		'Хуан Себастьян',
		'Мария',
		'Кристоф',
		'Виктор',
		'Юлия',
		'Люпита',
		'Вашингтон'
	];
	var surnames = [
		'да Марья',
		'Верон',
		'Мирабелла',
		'Вальц',
		'Онопко',
		'Топольницкая',
		'Нионго',
		'Ирвинг'
	];
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
	var units = [];
	var unitsAmount = 4;

	var onLoadUtits = function(data) {

		for(var i = 0; i < unitsAmount; i++) {
			units[i] = window.utils.getRandomElement(data);
		};

		for (var i = 0; i < unitsAmount; i++) {
			var wizardTemplateCopy = document.querySelector('#similar-wizard-template').content.cloneNode(true);
			wizardTemplateCopy.querySelector('.setup-similar-label').textContent = units[i].name;
			wizardTemplateCopy.querySelector('.wizard-coat').style.fill = units[i].colorCoat;
			wizardTemplateCopy.querySelector('.wizard-eyes').style.fill = units[i].colorEyes;
			document.querySelector('.setup-similar-list').appendChild(wizardTemplateCopy);
			};

		document.querySelector('.setup-similar').classList.remove('hidden');
	};

	var onErrorLoad = function(error) {
		console.log(error);
	}

	window.backend.load(onLoadUtits, onErrorLoad);

})();