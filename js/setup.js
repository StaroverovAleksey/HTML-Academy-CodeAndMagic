var wizardTemplate = document.querySelector('#similar-wizard-template');
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var ballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var units = [];
var unitsAmount = 4;
var KEY_ENTER = 13;
var KEY_ESC = 27;
var openButton = document.querySelector('.setup-open');
var openButtonIcon = document.querySelector('.setup-open-icon');
var closeButton = document.querySelector('.setup-close');
var setupPopup = document.querySelector('.setup');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireBall = document.querySelector('.setup-fireball-wrap');

var randomElement = function (array) {
	return array[Math.floor(Math.random() * array.length)];
};

for (var i = 0; i < unitsAmount; i++) {
	units[i] = {};
	units[i].name = randomElement(names) + ' ' + randomElement(surnames);
	units[i].coatColor = randomElement(coatColors);
	units[i].eyesColor = randomElement(eyesColors);
};

for (var i = 0; i < unitsAmount; i++) {
var wizardTemplateCopy = document.querySelector('#similar-wizard-template').content.cloneNode(true);
wizardTemplateCopy.querySelector('.setup-similar-label').textContent = units[i].name;
wizardTemplateCopy.querySelector('.wizard-coat').style.fill = units[i].coatColor;
wizardTemplateCopy.querySelector('.wizard-eyes').style.fill = units[i].eyesColor;
document.querySelector('.setup-similar-list').appendChild(wizardTemplateCopy);
};

document.querySelector('.setup-similar').classList.remove('hidden');

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
	document.removeEventListener('keydown', function(evt) {
		onPopupEsc(evt);
	});
};

openButton.addEventListener('click', function() {
	openPopup();
});

openButton.addEventListener('keydown', function(evt) {
	if (evt.keyCode === KEY_ENTER) {
		openPopup();
	};
});

closeButton.addEventListener('click', function() {
	closePopup();
});

closeButton.addEventListener('keydown', function(evt) {
	if (evt.keyCode === KEY_ENTER) {
		closePopup();
	};
});

wizardCoat.addEventListener('click', function() {
	wizardCoat.style.fill = randomElement(coatColors);
});

wizardEyes.addEventListener('click', function() {
	wizardEyes.style.fill = randomElement(eyesColors);
});

wizardFireBall.addEventListener('click', function() {
	wizardFireBall.style.background = randomElement(ballColors);
});