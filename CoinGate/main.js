// Scripts for index page

const toggleButton = document.getElementById('more_info_pop_up');
const popupContainer = document.getElementById('more_info_pop_up_card');
const cancelMark = document.getElementById('cancel-mark');

toggleButton.addEventListener('click', () => {
  popupContainer.classList.toggle('show');
  if (popupContainer.classList.contains('show')) {
    popupContainer.style.transform = 'scale(1)'; // Scale up to 1
    popupContainer.style.opacity = '1'; // Fade in
  } else {
    popupContainer.style.transform = 'scale(0)'; // Scale down to 0
    popupContainer.style.opacity = '0'; // Fade out
  }
});

cancelMark.addEventListener('click', (event) => {
  event.stopPropagation();
  popupContainer.classList.remove('show');
  popupContainer.style.transform = 'scale(0)'; // Scale down to 0
  popupContainer.style.opacity = '0'; // Fade out
});

document.addEventListener('click', (event) => {
  if (!popupContainer.contains(event.target) && event.target !== toggleButton) {
    popupContainer.classList.remove('show');
    popupContainer.style.transform = 'scale(0)'; // Scale down to 0
    popupContainer.style.opacity = '0'; // Fade out
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
  enablecontinueButton();
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
  });

  infoIcon.addEventListener('click', (event) => {
    popupInfoCard.classList.toggle('show-additional-card');
    event.stopPropagation();
  });
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

  function hideElementOnLargeScreens() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth > 1200) {
      additionalCard.style.display = 'none';
      mainCard.style.display = 'block';
    }
  }

  // Call the function on page load and whenever the window is resized
  window.onload = hideElementOnLargeScreens;
  window.addEventListener('resize', hideElementOnLargeScreens);
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

// Scripts for email template
var emailFooterBtn1 = document.getElementById('email-show-info-card-1');
var emailMainCard = document.getElementById('emailMainCard');
var emailAdditionalCardId = document.getElementById('emailAdditionalCardId');
var emailGoBack = document.getElementById('goBack-responsive');

emailFooterBtn1.addEventListener('click', () => {
  emailMainCard.style.display = 'none';

  if ((emailMainCard.style.display = 'none')) {
    emailAdditionalCardId.style.display = 'block';
  }

  if ((emailAdditionalCardId.style.display = 'block')) {
    emailMainCard.style.display = 'none';
  }

  function hideElementOnLargeScreens() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth > 1200) {
      emailAdditionalCardId.style.display = 'none';
      emailMainCard.style.display = 'block';
    }
  }

  // Call the function on page load and whenever the window is resized
  window.onload = hideElementOnLargeScreens;
  window.addEventListener('resize', hideElementOnLargeScreens);
});

emailGoBack.addEventListener('click', () => {
  emailAdditionalCardId.style.display = 'none';

  if ((emailAdditionalCardId.style.display = 'none')) {
    emailMainCard.style.display = 'block';
  }
});

emailFooterBtn1.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click event from propagating to the document
});

//Additional Card for network
var networkFooterBtn1 = document.getElementById('network-show-info-card-1');
var networkMainCard = document.getElementById('networkMainCard');
var networkAdditionalCardId = document.getElementById('networkAdditionalCardId');
var networkGoBack = document.getElementById('networkgoBack-responsive');

networkFooterBtn1.addEventListener('click', () => {
  networkMainCard.style.display = 'none';

  if ((networkMainCard.style.display = 'none')) {
    networkAdditionalCardId.style.display = 'block';
  }

  if ((networkAdditionalCardId.style.display = 'block')) {
    networkMainCard.style.display = 'none';
  }

  function hideElementOnLargeScreens() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth > 1200) {
      networkAdditionalCardId.style.display = 'none';
      networkMainCard.style.display = 'block';
    }
  }

  // Call the function on page load and whenever the window is resized
  window.onload = hideElementOnLargeScreens;
  window.addEventListener('resize', hideElementOnLargeScreens);
});

networkGoBack.addEventListener('click', () => {
  networkAdditionalCardId.style.display = 'none';

  if ((networkAdditionalCardId.style.display = 'none')) {
    networkMainCard.style.display = 'block';
  }
});

networkFooterBtn1.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click event from propagating to the document
});

var payFooterBtn1 = document.getElementById('pay-show-info-card-1');
var payMainCard = document.getElementById('payMainCard');
var payAdditionalCardId = document.getElementById('payAdditionalCardId');
var payGoBack = document.getElementById('paygoBack-responsive');

payFooterBtn1.addEventListener('click', () => {
  payMainCard.style.display = 'none';

  if ((payMainCard.style.display = 'none')) {
    payAdditionalCardId.style.display = 'block';
  }

  if ((payAdditionalCardId.style.display = 'block')) {
    payMainCard.style.display = 'none';
  }

  function hideElementOnLargeScreens() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth > 1200) {
      payAdditionalCardId.style.display = 'none';
      payMainCard.style.display = 'block';
    }
  }

  // Call the function on page load and whenever the window is resized
  window.onload = hideElementOnLargeScreens;
  window.addEventListener('resize', hideElementOnLargeScreens);
});

payGoBack.addEventListener('click', () => {
  payAdditionalCardId.style.display = 'none';

  if ((payAdditionalCardId.style.display = 'none')) {
    payMainCard.style.display = 'block';
  }
});

payFooterBtn1.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click event from propagating to the document
});

function startCountdown(minutes) {
  const countdownElement = document.getElementById('countdownTimer');

  let seconds = minutes * 60;

  function updateCountdown() {
    const minutesLeft = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    const formattedTime = `${String(minutesLeft).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
    countdownElement.textContent = formattedTime;

    if (seconds === 0) {
      clearInterval(countdownInterval);
    } else {
      seconds--;
    }
  }

  const countdownInterval = setInterval(updateCountdown, 1000);

  // Initial update
  updateCountdown();
}

// Start the countdown with 20 minutes
// startCountdown(20);

const popQrCode = document.getElementById('popQrCode');
const qrCopyBtn = document.getElementById('qr-btn-container');
const qrBtn = document.getElementById('qrBtn');
const addressBtn = document.getElementById('addressBtn');

qrCopyBtn.addEventListener('click', () => {
  event.stopPropagation();
  if (popQrCode.style.display === 'none') {
    popQrCode.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    popQrCode.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

document.addEventListener('click', (event) => {
  if (!popQrCode.contains(event.target) && event.target !== qrCopyBtn) {
    popQrCode.style.display = 'none';
    overlay.style.display = 'none';
  } else {
    popQrCode.style.display = 'block';
    overlay.style.display = 'block';
  }
});

// popQrCode.addEventListener('click', (event) => {
//   if (popQrCode.contains(event.target)) {
//     popQrCode.style.display = 'block';
//     overlay.style.display = 'block';
//   }
// });

qrBtn.addEventListener('click', () => {
  event.stopPropagation();
  if (popQrCode.style.display === 'none') {
    popQrCode.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    popQrCode.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

document.addEventListener('click', (event) => {
  if (!popQrCode.contains(event.target) && event.target !== qrCopyBtn) {
    popQrCode.style.display = 'none';
    overlay.style.display = 'none';
  }
});

addressBtn.addEventListener('click', () => {
  event.stopPropagation();
  if (popQrCode.style.display === 'none') {
    popQrCode.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    popQrCode.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

document.addEventListener('click', (event) => {
  if (!popQrCode.contains(event.target) && event.target !== qrCopyBtn) {
    popQrCode.style.display = 'none';
    overlay.style.display = 'none';
  }
});

// Script to change forms using js
// Get all blocks, the common "Continue" button, and initialize the current block index
// Get all blocks and both buttons
const blocks = document.querySelectorAll('.card-gradient');
const nextBtn = document.querySelector('.footer-btn-primary');
const timer = document.getElementById('coutdownContainer');
const payWalletContainer = document.getElementById('pay-wallet-container');
const paySummaryCard = document.getElementById('pay-summary-card');
const sectionDivider = document.getElementById('sectionDivider');
const formContinueBtn = document.getElementById('form-continue-btn');
const formContinueBtnWo = document.getElementById('form-continue-btn-wo');
const goBackPrevEmail = document.getElementById('goBackEmail');
const selectNetworkGoBackPrev = document.getElementById('selectNetworkGoBack');

let currentBlockIndex = 0;

// Initially hide all blocks except the first one
blocks.forEach((block, index) => {
  if (index !== 0) {
    block.style.display = 'none';
  }
});

// Function to toggle the visibility of buttons
function toggleButtonVisibility() {
  if (currentBlockIndex === blocks.length - 1) {
    // If Block 4 is active, hide the "Continue" button and show the "Another Button"
    startCountdown(20);
    paySummaryCard.style.display = 'block';
    nextBtn.style.display = 'none';
    timer.style.display = 'inline-flex';
    sectionDivider.style.display = 'block';
    // returnMerchant.style.display = 'none';
  } else {
    // Otherwise, show the "Continue" button and hide the "Another Button"
    nextBtn.style.display = 'inline-flex';
    timer.style.display = 'none';
    paySummaryCard.style.display = 'none';
    sectionDivider.style.display = 'none';
  }
}

// Initial check to toggle button visibility if Block 4 is active
toggleButtonVisibility();

// Add a click event listener to the common "Continue" button
nextBtn.addEventListener('click', () => {
  // Check if the button is active (not disabled)
  if (!nextBtn.hasAttribute('disabled')) {
    // If we are not at the last block, hide the current block and show the next block
    if (currentBlockIndex < blocks.length - 1) {
      blocks[currentBlockIndex].style.display = 'none';
      currentBlockIndex++;
      blocks[currentBlockIndex].style.display = 'flex';
    }

    // Toggle the visibility of buttons
    toggleButtonVisibility();
  }

  const selectNetworkContainer = document.getElementById('select-network-container');

  if (selectNetworkContainer.style.display === 'flex') {
    // If it's displayed, disable the "Continue" button and set the flag
    disablecontinueButton();
  }
  cryptoListItems.forEach((cryptoItem) => {
    cryptoItem.classList.remove('active'); // Remove 'active' from all crypto-list items
  });
  element.classList.add('active'); // Add 'active' to the clicked crypto-list item
});

goBackPrevEmail.addEventListener('click', () => {
  // If we are not at the first block, hide the current block and show the previous block
  if (currentBlockIndex > 0) {
    blocks[currentBlockIndex].style.display = 'none';
    currentBlockIndex--;
    blocks[currentBlockIndex].style.display = 'flex';
  }

  // Toggle the visibility of buttons
  toggleButtonVisibility();
  enablecontinueButton();
});

selectNetworkGoBackPrev.addEventListener('click', () => {
  // If we are not at the first block, hide the current block and show the previous block
  if (currentBlockIndex > 0) {
    blocks[currentBlockIndex].style.display = 'none';
    currentBlockIndex--;
    blocks[currentBlockIndex].style.display = 'flex';
  }

  // Toggle the visibility of buttons
  toggleButtonVisibility();
  enablecontinueButton();
});

formContinueBtn.addEventListener('click', () => {
  event.preventDefault();
  disablecontinueButton();
  // If we are not at the last block, hide the current block and show the next block
  if (currentBlockIndex < blocks.length - 1) {
    blocks[currentBlockIndex].style.display = 'none';
    currentBlockIndex++;
    blocks[currentBlockIndex].style.display = 'flex';
  }

  // Toggle the visibility of buttons
  toggleButtonVisibility();

  cryptoListItems.forEach((cryptoItem) => {
    cryptoItem.classList.remove('active'); // Remove 'active' from all crypto-list items
  });
  element.classList.add('active');
});

formContinueBtnWo.addEventListener('click', () => {
  event.preventDefault();
  disablecontinueButton();

  // If we are not at the last block, hide the current block and show the next block
  if (currentBlockIndex < blocks.length - 1) {
    blocks[currentBlockIndex].style.display = 'none';
    currentBlockIndex++;
    blocks[currentBlockIndex].style.display = 'flex';
  }

  // Toggle the visibility of buttons
  toggleButtonVisibility();

  cryptoListItems.forEach((cryptoItem) => {
    cryptoItem.classList.remove('active'); // Remove 'active' from all crypto-list items
  });
  element.classList.add('active');
});

const confirmCancelBtn = document.getElementById('confirm-cancel');
const cancelCardContainer = document.getElementById('cancelCard-container');
const otherContainers = document.querySelectorAll('.card-gradient');
const cancelCardSection = document.getElementById('cancelCard');
const footerContainer = document.getElementById('footer-container');
const cancelAdditionalCardId = document.getElementById('cancelAdditionalCardId');
const returnMerchant = document.getElementById('returnMerchant');
const indexContinueBtnCan = document.getElementById('index-continue-btn');
const btnCancelFinal = document.getElementById('btnCancel');
const orderSuccessfulContainerForCancel = document.getElementById('orderSuccessful-container');
const coutdownContainerFinal = document.getElementById('coutdownContainer');
const summaryCancelFinal = document.getElementById('summaryCancelFinal');
const sectionDividerResponsiveFinal = document.getElementById('sectionDividerResponsiveFinal');
confirmCancelBtn.addEventListener('click', () => {
  // Hide all other containers
  otherContainers.forEach((container) => {
    container.style.display = 'none';
  });

  cancelCardSection.style.display = 'none';
  cancelAdditionalCardId.style.display = 'none';
  indexContinueBtnCan.style.display = 'none';
  btnCancelFinal.style.display = 'none';
  orderSuccessfulContainerForCancel.style.display = 'none';
  coutdownContainerFinal.style.display = 'none';

  // Show the cancelCard-container
  cancelCardContainer.style.display = 'flex';
  returnMerchant.style.display = 'inline-flex';

  function hideElementOnLargeScreens() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth < 1200) {
      footerContainer.style.display = 'none';
    } else {
      footerContainer.style.display = 'block';
    }
  }

  // Call the function on page load and whenever the window is resized
  window.onload = hideElementOnLargeScreens;
  window.addEventListener('resize', hideElementOnLargeScreens);

  if (currentBlockIndex === blocks.length - 1) {
    summaryCancelFinal.style.display = 'flex';
    sectionDividerResponsiveFinal.style.display = 'block';
  } else {
    sectionDividerResponsiveFinal.style.display = 'none';
  }
});

//script to display successful card

const orderSuccessBtn = document.getElementById('payWalletBtn');
const orderSuccessfulContainer = document.getElementById('orderSuccessful-container');
const coutdownContainerSuccess = document.getElementById('coutdownContainer');
orderSuccessBtn.addEventListener('click', () => {
  // Hide all other containers
  otherContainers.forEach((container) => {
    container.style.display = 'none';
  });

  cancelCardSection.style.display = 'none';
  // footerContainer.style.display = 'none';
  cancelAdditionalCardId.style.display = 'none';
  indexContinueBtnCan.style.display = 'none';
  btnCancelFinal.style.display = 'none';
  coutdownContainerSuccess.style.display = 'none';

  // Show the cancelCard-container
  orderSuccessfulContainer.style.display = 'flex';
  returnMerchant.style.display = 'inline-flex';

  function hideElementOnLargeScreens() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth < 1200) {
      footerContainer.style.display = 'none';
    } else {
      footerContainer.style.display = 'block';
    }
  }

  // Call the function on page load and whenever the window is resized
  window.onload = hideElementOnLargeScreens;
  window.addEventListener('resize', hideElementOnLargeScreens);
});

var cancelFooterBtn1Final = document.getElementById('cancel-show-info-card-1');
var cancelMainCardFinal = document.getElementById('ordercancelCard');
var cancelAdditionalCardIdFinal = document.getElementById('cancelAdditionalCardId');
var cancelGoBackFinal = document.getElementById('cancelgoBack-responsive');

cancelFooterBtn1Final.addEventListener('click', () => {
  cancelMainCardFinal.style.display = 'none';

  if ((cancelMainCardFinal.style.display = 'none')) {
    cancelAdditionalCardIdFinal.style.display = 'block';
  }

  if ((cancelAdditionalCardIdFinal.style.display = 'block')) {
    cancelMainCardFinal.style.display = 'none';
  }

  function hideElementOnLargeScreens() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth > 1200) {
      cancelAdditionalCardIdFinal.style.display = 'none';
      cancelMainCardFinal.style.display = 'block';
    }
  }

  // Call the function on page load and whenever the window is resized
  window.onload = hideElementOnLargeScreens;
  window.addEventListener('resize', hideElementOnLargeScreens);
});

cancelGoBackFinal.addEventListener('click', () => {
  cancelAdditionalCardIdFinal.style.display = 'none';

  if ((cancelAdditionalCardIdFinal.style.display = 'none')) {
    cancelMainCardFinal.style.display = 'block';
  }
});

cancelFooterBtn1Final.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click event from propagating to the document
});

var successFooterBtn1Final = document.getElementById('success-show-info-card-1');
var successMainCardFinal = document.getElementById('successCard');
var successAdditionalCardIdFinal = document.getElementById('successAdditionalCardId');
var successGoBackFinal = document.getElementById('successgoBack-responsive');

successFooterBtn1Final.addEventListener('click', () => {
  successMainCardFinal.style.display = 'none';

  if ((successMainCardFinal.style.display = 'none')) {
    successAdditionalCardIdFinal.style.display = 'block';
  }

  if ((successAdditionalCardIdFinal.style.display = 'block')) {
    successMainCardFinal.style.display = 'none';
  }

  function hideElementOnLargeScreens() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth > 1200) {
      successAdditionalCardIdFinal.style.display = 'none';
      successMainCardFinal.style.display = 'block';
    }
  }

  // Call the function on page load and whenever the window is resized
  window.onload = hideElementOnLargeScreens;
  window.addEventListener('resize', hideElementOnLargeScreens);
});

successGoBackFinal.addEventListener('click', () => {
  successAdditionalCardIdFinal.style.display = 'none';

  if ((successAdditionalCardIdFinal.style.display = 'none')) {
    successMainCardFinal.style.display = 'block';
  }
});

successFooterBtn1Final.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click event from propagating to the document
});

const copyAddressText = document.getElementById('copyAddressText');
const copyAddressBtn = document.getElementById('copyAddressBtn');

// Add a click event listener to the icon container
copyAddressBtn.addEventListener('click', function () {
  // Get the text content and trim any leading/trailing whitespace
  const textToCopy = copyAddressText.textContent.trim();

  // Create a new textarea element
  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;

  // Set the textarea to be invisible
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';

  // Append the textarea to the body
  document.body.appendChild(textarea);

  // Select the trimmed text in the textarea and copy it to the clipboard
  textarea.select();
  document.execCommand('copy');

  // Remove the textarea
  document.body.removeChild(textarea);
});

const copyValue = document.getElementById('copyValue');
const copyButton = document.getElementById('copyButton');

// Add a click event listener to the icon container
copyButton.addEventListener('click', function () {
  // Get the text content and trim any leading/trailing whitespace
  const textToCopy = copyValue.textContent.trim();

  // Create a new textarea element
  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;

  // Set the textarea to be invisible
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';

  // Append the textarea to the body
  document.body.appendChild(textarea);

  // Select the trimmed text in the textarea and copy it to the clipboard
  textarea.select();
  document.execCommand('copy');

  // Remove the textarea
  document.body.removeChild(textarea);
});

const copyAddress = document.getElementById('copyAddress');
const alertElement = document.getElementById('alertElement');

copyAddress.addEventListener('click', () => {
  // Remove the 'hidden' class to show the alert element
  alertElement.style.display = 'flex';

  // Apply fade-in animation by gradually increasing opacity
  alertElement.style.opacity = '0';
  const fadeInInterval = setInterval(() => {
    const currentOpacity = parseFloat(alertElement.style.opacity);
    if (currentOpacity < 1) {
      alertElement.style.opacity = (currentOpacity + 0.05).toString();
    } else {
      clearInterval(fadeInInterval);

      // Set a timeout to start fading out after 2 seconds
      setTimeout(() => {
        // Apply fade-out animation by gradually decreasing opacity
        const fadeOutInterval = setInterval(() => {
          const currentOpacity = parseFloat(alertElement.style.opacity);
          if (currentOpacity > 0) {
            alertElement.style.opacity = (currentOpacity - 0.05).toString();
          } else {
            clearInterval(fadeOutInterval);
            alertElement.style.display = 'none'; // Hide the element
          }
        }, 50); // Adjust the interval for smoother fading
      }, 1000); // Wait for 2 seconds before starting the fade-out
    }
  }, 50); // Adjust the interval for smoother fading
});

const copyBar = document.getElementById('copyBar');
const alertElementVal = document.getElementById('alertElementVal');

copyBar.addEventListener('click', () => {
  // Remove the 'hidden' class to show the alert element
  alertElementVal.style.display = 'flex';

  // Apply fade-in animation by gradually increasing opacity
  alertElementVal.style.opacity = '0';
  const fadeInInterval = setInterval(() => {
    const currentOpacity = parseFloat(alertElementVal.style.opacity);
    if (currentOpacity < 1) {
      alertElementVal.style.opacity = (currentOpacity + 0.05).toString();
    } else {
      clearInterval(fadeInInterval);

      // Set a timeout to start fading out after 2 seconds
      setTimeout(() => {
        // Apply fade-out animation by gradually decreasing opacity
        const fadeOutInterval = setInterval(() => {
          const currentOpacity = parseFloat(alertElementVal.style.opacity);
          if (currentOpacity > 0) {
            alertElementVal.style.opacity = (currentOpacity - 0.05).toString();
          } else {
            clearInterval(fadeOutInterval);
            alertElementVal.style.display = 'none'; // Hide the element
          }
        }, 50); // Adjust the interval for smoother fading
      }, 1000); // Wait for 2 seconds before starting the fade-out
    }
  }, 50); // Adjust the interval for smoother fading
});
