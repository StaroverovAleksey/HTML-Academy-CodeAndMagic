'use strict';

(function() {

var load = function(onLoad, onError) {
		var url = 'https://js.dump.academy/code-and-magick/data';
		var xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.addEventListener('load', function() {
			var error;
			switch(xhr.status) {
				case 200:
				onLoad(xhr.response);
				break;

				default:
				error = 'Статус ответа: ' + xhr.status + ' ' + xhr.statusText;
			};
			if(error) {
				onError(error);
			};
		});

		xhr.addEventListener('error', function() {
			onError('Внутренняя ошибка сервера.');
		});

		xhr.addEventListener('timeout', function() {
			onError('Запрос не успел выполниться за ' + xhr.timeout + 'мсек.')
		});
		xhr.open('GET', url);
		xhr.send();
	};

var save = function(data, onLoad, onError) {
		var url = 'https://js.dump.academy/code-and-magick';
		var xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.addEventListener('load', function() {
			var error;
			switch(xhr.status) {
				case 200:
				onLoad();
				break;

				default:
				error = 'Статус ответа: ' + xhr.status + ' ' + xhr.statusText;
			};
			if(error) {
				onError(error);
			};
		});

		xhr.addEventListener('error', function() {
			onError('Внутренняя ошибка сервера.');
		});

		xhr.addEventListener('timeout', function() {
			onError('Запрос не успел выполниться за ' + xhr.timeout + 'мсек.')
		});
		xhr.open('POST', url);
		xhr.send(data);
	};

window.backend = {
	load: load,
	save: save
};

})();