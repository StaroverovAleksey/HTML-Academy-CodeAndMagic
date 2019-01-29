
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GISTOGRAM_WIDTH = 40;
var GISTOGRAM_HEIGHT = 150;

var fontMono = '16px PT Mono';
var randomAlfa = 0;
var heightProportion = 0;

var createCloud = function (ctx, x, y, width, height, color) {
	ctx.fillStyle = color;
	ctx.fillRect (x, y, width, height);
};
var createText = function (ctx, text, x, y, font) {
	ctx.fillStyle = 'black';
	ctx.font = font;
	ctx.fillText (text, x, y);
};

var sortResults = function (names, times) {
	var swapTime = 0;
	var swapName
	for (var i = 0; i < times.length; i++) {
		for (var j = i + 1; j < times.length; j++) {
			if (times[j] > times[i]) {
				swapTime = times[i];
				times[i] = times[j];
				times[j] = swapTime;
				swapName = names[i];
				names[i] = names[j];
				names[j] = swapName;
			};
		};
	};
};

var createGistogram = function (ctx, width, height, names, times) {
	sortResults (names, times);
	for (var i = 0; i < names.length; i++) {
		randomAlfa = Math.floor ((Math.random() * 0.9 + 0.1) * 10) / 10;
		heightProportion = height * (times[i] / times[0]);
		if (names[i] === 'Вы') {
			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
		} else {
			ctx.fillStyle = 'rgba(0, 0, 255,' + randomAlfa + ')';
		}
		ctx.fillRect (160 + 90 * i, 110 + (height - heightProportion), width, heightProportion);
		createText (ctx, names[i], 160 + 90 * i, 80, fontMono);
		createText (ctx, Math.floor (times[i]), 160 + 90 * i, 100, fontMono);
	};
};

window.renderStatistics = function (ctx, names, times) {
	createCloud (ctx, 110, 20, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
	createCloud (ctx, 100, 10, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgb(255, 255, 255)');
	createText (ctx, 'Ура, Вы победили!', 230, 25, fontMono);
	createText (ctx, 'Список результатов:', 222, 42, fontMono);
	createGistogram (ctx, GISTOGRAM_WIDTH, GISTOGRAM_HEIGHT, names, times);
};