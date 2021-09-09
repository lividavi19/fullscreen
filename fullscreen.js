/**
 * TODO:
 * > browser compatibility & support chek
 * > implementation of API other methods
*/

const goFullscreen = (fullscreenElement, successCallback) => {
	fullscreenElement.requestFullscreen().then(() => {
		// fullscreenElement is in fullscreen mode
		successCallback();
	})
};

const exitFullscreen = (successCallback) => {
	document.exitFullscreen().then(() => {
		// document exits fullscreen mode
		successCallback();
	})
};
