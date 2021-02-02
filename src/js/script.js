const feedbackOpen = document.querySelector('.feedback-send');
const feedbackClose = document.querySelector('.popup-close');
const popupWrap = document.querySelector('.popup-wrap');
const nameField = document.querySelector('input[name=name]');
const form = document.querySelector('.popup-form');

feedbackOpen.addEventListener('click', (evt) => {
	evt.preventDefault();
	popupWrap.classList.add('popup-wrap-show');
	nameField.focus();
});

form.addEventListener('submit', (evt) => {
	for (const field of form.querySelectorAll('[name]')) {
		if (field.value) {
			field.classList.remove('field-invalid');
		} else {
			evt.preventDefault();
			field.classList.add('field-invalid');
		}
	}
});

popupWrap.addEventListener('click', (evt) => {
	if (evt.target === popupWrap || evt.target === feedbackClose) {
		evt.preventDefault();
		popupWrap.classList.remove('popup-wrap-show');
		feedbackOpen.focus();
	}
});
