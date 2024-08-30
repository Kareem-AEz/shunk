'use strict';

/*          ----------- declarations -----------          */

const infoButton = getElement('.btn-info');

const closeX = getElement('.how-to-play__close');
const closeButton = getElement('.btn__rules');

const howToPlayModal = getElement('.how-to-play');

const modalOverlay = getElement('.modal__overlay');

/*          ----------- util functions -----------          */

let showHowToPlayModal = () => {
  howToPlayModal.classList.remove('hidden');
  modalOverlay.classList.remove('hidden');
};

let hideHowToPlayModal = () => {
  howToPlayModal.classList.add('hidden');
  modalOverlay.classList.add('hidden');
};

/*          ----------- declarations -----------          */

infoButton.addEventListener('click', showHowToPlayModal);

modalOverlay.addEventListener('click', hideHowToPlayModal);
closeX.addEventListener('click', hideHowToPlayModal);
closeButton.addEventListener('click', hideHowToPlayModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !howToPlayModal.classList.contains('hidden')) {
    hideHowToPlayModal();
  }
});
