'use strict';

(function() {
	var loadUserPic = document.querySelector('.setup-user-pic + input');
	var dragged = false;

	var dragAndDrop = function(evt, dragObject) {
		var dragObject = dragObject;
		var coord = {
			x: evt.clientX,
			y: evt.clientY
		};

		var onMouseMove = function(moveEvt) {
			dragged = true;
			var shift = {
				x: moveEvt.clientX - coord.x,
				y: moveEvt.clientY - coord.y
			};
			dragObject.style.top = (dragObject.offsetTop + shift.y) + 'px';
			dragObject.style.left = (dragObject.offsetLeft + shift.x) + 'px';
			coord = {
				x: moveEvt.clientX,
				y: moveEvt.clientY
			};

		};
		
		var onMouseUp = function() {
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseup', onMouseUp);

			if(dragged) {
				var DisabledInput = function(evt) {
					evt.preventDefault();
					loadUserPic.removeEventListener('click', DisabledInput);
					dragged = false;
				};

				loadUserPic.addEventListener('click', DisabledInput);
			};
		};

		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	};

	window.dialog = {
		dragAndDrop: dragAndDrop
	};

})();