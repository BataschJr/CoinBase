//script for toggling more info btn
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

//script for selecting the class the elements and adding class
// Select the pay-option-1 elements and the crypto-list items
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

//Search Bar
const searchInput = document.getElementById('currency-search');
const cryptoList = document.querySelectorAll('.crypo-list .pay-option-1-list');
const noResultsMessage = document.getElementById('no-results');

searchInput.addEventListener('input', filterCryptos);

function filterCryptos() {
  const searchTerm = searchInput.value.toLowerCase();
  let foundResults = false;

  cryptoList.forEach((crypto) => {
    const cryptoContent = crypto.textContent.toLowerCase();
    if (cryptoContent.includes(searchTerm)) {
      crypto.classList.remove('hidden');
      foundResults = true;
    } else {
      crypto.classList.add('hidden');
    }
  });

  // Show/hide the "No results found" message
  if (foundResults) {
    noResultsMessage.style.display = 'none';
  } else {
    noResultsMessage.style.display = 'block';
  }
}

//show search list when pay with crypto is active
// Get references to the Pay with Crypto and Pay with Binance Pay elements
const payWithCryptoOption = document.getElementById('paying-option-1');
const payWithBinanceOption = document.getElementById('paying-option-2');

// Get a reference to the coingate-cryptos division
const coingateCryptos = document.getElementById('coingate-cryptos');

// Add click event listeners to the pay options
payWithCryptoOption.addEventListener('click', () => {
  // Show the coingate-cryptos when Pay with Crypto is clicked
  coingateCryptos.style.display = 'block';
});

payWithBinanceOption.addEventListener('click', () => {
  // Hide the coingate-cryptos when Pay with Binance Pay is clicked
  coingateCryptos.style.display = 'none';
});

//Blue btn script
// Select the blue button and the crypto-list items
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

// Add click event listeners to the pay options
payWithCryptoOption.addEventListener('click', () => {
  // Disable the continue button when Pay with Crypto is clicked
  continueButton.disabled = true;
});

payWithBinanceOption.addEventListener('click', () => {
  // Enable the continue button when Pay with Binance Pay is clicked
  continueButton.disabled = false;
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

document.addEventListener('click', (event) => {
  if (!popupInfoCard.contains(event.target) && event.target !== toggleInfoBtn) {
    popupInfoCard.classList.remove('show-additional-card');
  }
});

// Get the additional card element by its ID
var footerBtn1 = document.getElementById('show-info-card-1');
var mainCard = document.getElementById('mainCard');
var additionalCard = document.getElementById('additionalCardId');
var goBack = document.getElementById('goBack');

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
