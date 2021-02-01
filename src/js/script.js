const feedbackOpener = document.querySelector('.feedback-send');
const popup = document.querySelector('.popup');
const nameField = document.querySelector('input[name=name]');
const closeBtn = document.querySelector('.popup-close');
const form = document.querySelector('.popup-form');

feedbackOpener.addEventListener('click', (evt) => {
	evt.preventDefault();
	popup.classList.add('popup-show');
	nameField.focus();
});

closeBtn.addEventListener('click', (evt) => {
	evt.preventDefault();
	popup.classList.remove('popup-show');
	feedbackOpener.focus();
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
