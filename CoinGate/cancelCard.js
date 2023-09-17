const toggleButton = document.getElementById('more_info_pop_up');
const popupContainer = document.getElementById('more_info_pop_up_card');
const cancelMark = document.getElementById('cancel-mark');

toggleButton.addEventListener('click', () => {
  popupContainer.classList.toggle('show');
});

cancelMark.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click event from propagating to the document
  popupContainer.classList.toggle('show');
});

document.addEventListener('click', (event) => {
  if (!popupContainer.contains(event.target) && event.target !== toggleButton) {
    popupContainer.classList.remove('show');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleInfoBtn = document.getElementById('show-info-card');
  const popupInfoCard = document.getElementById('additionalCardIdCancel');
  const infoIcon = document.getElementById('info-icon');

  toggleInfoBtn.addEventListener('click', () => {
    popupInfoCard.classList.toggle('show-additional-card-cancel');

    const isCardShown = popupInfoCard.classList.contains('show-additional-card-cancel');
    popupInfoCard.style.maxHeight = isCardShown ? popupInfoCard.scrollHeight + 'px' : '0';
  });

  infoIcon.addEventListener('click', (event) => {
    console.log('click');
    popupInfoCard.classList.toggle('show-additional-card-cancel');
    event.stopPropagation();
  });
});

var footerBtn1 = document.getElementById('show-info-card-1');
var ErrorCard = document.getElementById('ErrorCardCancel');
var additionalCard = document.getElementById('additionalCardId');
var goBack = document.getElementById('goBack-responsive');
const cardGradient = document.getElementById('cardGradient');

footerBtn1.addEventListener('click', () => {
  ErrorCard.style.display = 'none';

  if ((ErrorCard.style.display = 'none')) {
    additionalCard.style.display = 'block';
  }
});

goBack.addEventListener('click', () => {
  console.log('clicked');
  additionalCard.style.display = 'none';

  if ((additionalCard.style.display = 'none')) {
    ErrorCard.style.display = 'block';
  }
});

footerBtn1.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click event from propagating to the document
});
