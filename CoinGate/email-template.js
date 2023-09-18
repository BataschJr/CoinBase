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

//script for I btn next to continue to toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleInfoBtn = document.getElementById('show-info-card');
  const popupInfoCard = document.getElementById('additional-card-id');
  const infoIcon = document.getElementById('info-icon');

  toggleInfoBtn.addEventListener('click', () => {
    popupInfoCard.classList.toggle('show-additional-card');
    console.log('click');

    const isCardShown = popupInfoCard.classList.contains('show-additional-card');
    popupInfoCard.style.maxHeight = isCardShown ? popupInfoCard.scrollHeight + 'px' : '0';
  });

  infoIcon.addEventListener('click', (event) => {
    console.log('click');
    popupInfoCard.classList.toggle('show-additional-card');
    event.stopPropagation();
  });
});

var footerBtn1 = document.getElementById('show-info-card-1');
var mainCard = document.getElementById('mainCard');
var additionalCard = document.getElementById('additionalCardId');
var goBack = document.getElementById('goBack-responsive');

footerBtn1.addEventListener('click', () => {
  mainCard.style.display = 'none';

  if ((mainCard.style.display = 'none')) {
    additionalCard.style.display = 'block';
  }
});

goBack.addEventListener('click', () => {
  console.log('clicked');
  additionalCard.style.display = 'none';

  if ((additionalCard.style.display = 'none')) {
    mainCard.style.display = 'block';
  }
});

footerBtn1.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click event from propagating to the document
});

//cancel Card
const cancelCard = document.getElementById('cancelCard');
const btnCancel = document.getElementById('btnCancel');
//the x marker inside the card
const canCardBtn = document.getElementById('canCardBtn');

const overlay = document.getElementById('overlay');

btnCancel.addEventListener('click', () => {
  event.stopPropagation();
  if (cancelCard.style.display === 'none') {
    cancelCard.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    cancelCard.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

canCardBtn.addEventListener('click', () => {
  cancelCard.style.display = 'none';
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
});

document.addEventListener('click', (event) => {
  if (!cancelCard.contains(event.target) && event.target !== btnCancel) {
    cancelCard.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
