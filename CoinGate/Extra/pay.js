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

//text truncate

document.addEventListener('DOMContentLoaded', () => {
  const copyAddressBtn = document.getElementById('copyAddressBtn');
  let originalText = ''; // Variable to store the original text

  // Function to store the original text and hide overflow
  // function storeOriginalTextAndHideOverflow() {
  //   const copyAddressText = document.getElementById('copyAddressText');
  //   originalText = copyAddressText.textContent.trim();
  //   copyAddressText.style.overflow = 'hidden';
  //   copyAddressText.style.whiteSpace = 'nowrap';
  //   copyAddressText.style.textOverflow = 'ellipsis';
  // }

  // // Function to restore the original text and show full text
  // function restoreOriginalTextAndShowFull() {
  //   const copyAddressText = document.getElementById('copyAddressText');
  //   copyAddressText.textContent = originalText; // Restore the original text
  //   copyAddressText.style.overflow = 'hidden'; // Show full text
  //   copyAddressText.style.whiteSpace = 'normal';
  //   copyAddressText.style.textOverflow = 'clip';
  // }

  // Call the function to initially store the original text and hide overflow
  storeOriginalTextAndHideOverflow();

  // Add a click event listener to the copyAddressBtn element
  copyAddressBtn.addEventListener('click', () => {
    // Restore the original text before copying
    restoreOriginalTextAndShowFull();

    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = originalText;

    // Append the input element to the document
    document.body.appendChild(tempInput);

    // Select the input content
    tempInput.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Notify the user that the text has been copied (you can customize this)

    // Re-hide the overflowing text
    storeOriginalTextAndHideOverflow();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const copyBar = document.getElementById('copyBar');
  const copyValue = document.getElementById('copyValue');
  const copyButton = document.getElementById('copyButton');

  // Add a click event listener to the copy bar
  copyBar.addEventListener('click', () => {
    // Create a temporary input element
    const tempInput = document.createElement('input');

    // Set the input value to the text content of the copyValue span
    tempInput.value = copyValue.textContent;

    // Append the input element to the document
    document.body.appendChild(tempInput);

    // Select the input content
    tempInput.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Notify the user that the text has been copied (you can customize this)
    alert('Copied to clipboard: ' + copyValue.textContent);
  });

  // Add a click event listener to the copy button (optional)
  copyButton.addEventListener('click', () => {
    // You can reuse the same code as above if you want to allow copying when clicking the button as well.
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const copyAddressText = document.getElementById('copyAddressText');
  const copyAddressBtn = document.getElementById('copyAddressBtn');
  let originalText = copyAddressText.textContent;

  // Function to check if the screen size is small
  function isSmallScreen() {
    return window.innerWidth <= 768; // Adjust the width as needed
  }

  // Add a click event listener to the copyAddressBtn element
  copyAddressBtn.addEventListener('click', () => {
    // Check if it's a small screen and use originalText accordingly
    const textToCopy = isSmallScreen() ? originalText : copyAddressText.textContent;

    // Create a temporary input element
    const tempInput = document.createElement('input');

    // Set the input value to the text to be copied
    tempInput.value = textToCopy;

    // Append the input element to the document
    document.body.appendChild(tempInput);

    // Select the input content
    tempInput.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Notify the user that the text has been copied (you can customize this)
    alert('Copied to clipboard: ' + textToCopy);
  });
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
startCountdown(20);

document.addEventListener('DOMContentLoaded', () => {
  const toggleInfoBtn = document.getElementById('show-info-card');
  const popupInfoCard = document.getElementById('additional-card-id-1');
  const infoIcon = document.getElementById('info-icon');

  toggleInfoBtn.addEventListener('click', () => {
    popupInfoCard.classList.toggle('show-additional-card');

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

//qr code pop up
const popQrCode = document.getElementById('popQrCode');
const qrCopyBtn = document.getElementById('qr-btn-container');
const qrBtn = document.getElementById('qrBtn');
const addressBtn = document.getElementById('addressBtn');

qrCopyBtn.addEventListener('click', () => {
  console.log('clicked');
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
