'use strict';

(function() {

	var KEY_ENTER = 13;
	var openButton = document.querySelector('.setup-open');
	var closeButton = document.querySelector('.setup-close');
	var dragButton = document.querySelector('.upload');
	var overlay = document.querySelector('.overlay');
	var artifactCell = document.querySelector('.setup-artifacts-cell');
	var inventory = document.querySelector('.setup-artifacts');
	var dragElement;
	var dragTarget;

	openButton.addEventListener('click', function() {
		window.popup.openPopup();
	});

	openButton.addEventListener('keydown', function(evt) {
		if (evt.keyCode === KEY_ENTER) {
			window.popup.openPopup();
		};
	});

	closeButton.addEventListener('click', function() {
		window.popup.closePopup();
	});

	closeButton.addEventListener('keydown', function(evt) {
		if (evt.keyCode === KEY_ENTER) {
			window.popup.closePopup();
		};
	});

	dragButton.addEventListener('mousedown', function(evt) {
		window.dialog.dragAndDrop(evt, overlay);
	});

	var toPaintInventoryCell = function(dragEvent) {
		dragElement = dragEvent.target;
		dragTarget = window.utils.getRandomElement(inventory.children);
		dragTarget.classList.add('outline-red');

		overlay.addEventListener('dragover', toPaintArtifactCell);
		overlay.addEventListener('dragleave', toWashArtifactCell);
		overlay.addEventListener('drop', todrop);
		overlay.addEventListener('dragend', toEndDrag);
	};

	var toWashArtifactCell = function(dragEvent) {
		if(dragEvent.toElement.classList[0] === 'setup-artifacts-cell') {
			dragEvent.toElement.style.background = 'rgba(0, 0, 0, 0.1)';
		};
	};

	var toPaintArtifactCell = function(dragEvent) {	
		if(dragEvent.toElement.classList[0] === 'setup-artifacts-cell') {
			dragEvent.toElement.style.background = 'yellow';
			dragEvent.preventDefault();
		};
	};

	var todrop = function(dragEvent) {
		dragTarget.classList.remove('outline-red');
		dragEvent.toElement.appendChild(dragElement);
		dragEvent.toElement.style.background = 'rgba(0, 0, 0, 0.1)';
		overlay.removeEventListener('dragover', toPaintArtifactCell);
		overlay.removeEventListener('dragleave', toWashArtifactCell);
		overlay.removeEventListener('drop', toEndDrag);
		overlay.removeEventListener('dragend', toEndDrag);
	};

	var toEndDrag = function(dragEvent) {
		dragTarget.classList.remove('outline-red');
		overlay.removeEventListener('dragover', toPaintArtifactCell);
		overlay.removeEventListener('dragleave', toWashArtifactCell);
		overlay.removeEventListener('drop', toEndDrag);
		overlay.removeEventListener('dragend', toEndDrag);
	}

	overlay.addEventListener('dragstart', toPaintInventoryCell);

})();