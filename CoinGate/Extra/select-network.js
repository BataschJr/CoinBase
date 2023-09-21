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

const payOptionElements = document.querySelectorAll('.pay-option-1');
const cryptoListItems = document.querySelectorAll('.pay-option-1-list');

// Function to toggle the 'active' class for a pay-option-1 element
function toggleActivePayOption(element) {
  payOptionElements.forEach((el) => {
    el.classList.remove('active'); // Remove 'active' from all pay-option-1 elements
  });
  element.classList.add('active'); // Add 'active' to the clicked pay-option-1 element
}

// Function to toggle the 'active' class for a crypto-list item
function toggleActiveCryptoListItem(element) {
  cryptoListItems.forEach((cryptoItem) => {
    cryptoItem.classList.remove('active'); // Remove 'active' from all crypto-list items
  });
  element.classList.add('active'); // Add 'active' to the clicked crypto-list item
}

// Event listeners to toggle the 'active' class on click for pay-option-1 elements
payOptionElements.forEach((element) => {
  element.addEventListener('click', () => {
    toggleActivePayOption(element);
  });
});

// Event listeners to toggle the 'active' class on click for crypto-list items
cryptoListItems.forEach((element) => {
  element.addEventListener('click', () => {
    toggleActiveCryptoListItem(element);
  });
});

const continueButton = document.querySelector('.footer-btn-primary');

// Function to enable the blue button
function enablecontinueButton() {
  continueButton.removeAttribute('disabled');
}

// Function to disable the blue button
function disablecontinueButton() {
  continueButton.setAttribute('disabled', 'true');
}

// Function to handle the click event on crypto list items
function handleCryptoListItemClick() {
  if (continueButton.hasAttribute('disabled')) {
    enablecontinueButton();
  }
}

// Add click event listeners to crypto list items
cryptoListItems.forEach((element) => {
  element.addEventListener('click', () => {
    handleCryptoListItemClick();
  });
});

// Initially, disable the blue button (assuming it's disabled by default)
disablecontinueButton();

// Script for info icon at footer
document.addEventListener('DOMContentLoaded', () => {
  const toggleInfoBtn = document.getElementById('show-info-card');
  const popupInfoCard = document.getElementById('additional-card-id');
  const infoIcon = document.getElementById('info-icon');

  toggleInfoBtn.addEventListener('click', () => {
    popupInfoCard.classList.toggle('show-additional-card');

    const isCardShown = popupInfoCard.classList.contains('show-additional-card');

    if (isCardShown) {
      // If the card is shown, set the max-height to its natural height
      popupInfoCard.style.maxHeight = popupInfoCard.scrollHeight + 'px';

      // Add a transition effect to smoothly show the card
      popupInfoCard.style.transition = 'max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    } else {
      // If the card is hidden, set the max-height to 0
      popupInfoCard.style.maxHeight = '0';

      // Remove the transition effect
      popupInfoCard.style.transition = 'max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
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
var goBack = document.getElementById('selectNetworkGoBackAdditionalInfo');

footerBtn1.addEventListener('click', () => {
  mainCard.style.display = 'none';

  if ((mainCard.style.display = 'none')) {
    additionalCard.style.display = 'block';
  }
});

goBack.addEventListener('click', () => {
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

btnCancel.addEventListener('click', (event) => {
  event.stopPropagation();
  if (cancelCard.style.display === 'none' || cancelCard.style.display === '') {
    cancelCard.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    cancelCard.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'visible';
  }
});

canCardBtn.addEventListener('click', () => {
  cancelCard.style.display = 'none';
  overlay.style.display = 'none';
  document.body.style.overflow = 'visible';
});

document.addEventListener('click', (event) => {
  if (!cancelCard.contains(event.target) && event.target !== btnCancel) {
    cancelCard.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'visible';
  }
});
