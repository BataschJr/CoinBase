document.addEventListener('DOMContentLoaded', function () {
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

  const successInfoBtn = document.getElementById('success-show-info-card');
  const successpopupInfoCard = document.getElementById('success-additional-card-id');
  const successinfoIcon = document.getElementById('success-info-icon');

  successInfoBtn.addEventListener('click', () => {
    console.log('click');
    successpopupInfoCard.classList.toggle('show-additional-card');
  });

  successinfoIcon.addEventListener('click', (event) => {
    successpopupInfoCard.classList.toggle('show-additional-card');
    event.stopPropagation();
  });

  var successFooterBtn1 = document.getElementById('success-show-info-card-1');
  var successCard = document.getElementById('successCard');
  var successAdditionalCardId = document.getElementById('successAdditionalCardId');
  var successGoBack = document.getElementById('successgoBack-responsive');

  successFooterBtn1.addEventListener('click', () => {
    console.log('clicked');
    successCard.style.display = 'none';

    if ((successCard.style.display = 'none')) {
      successAdditionalCardId.style.display = 'block';
    }

    if ((successAdditionalCardId.style.display = 'block')) {
      successCard.style.display = 'none';
    }

    function hideElementOnLargeScreens() {
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      if (windowWidth > 1200) {
        successAdditionalCardId.style.display = 'none';
        successCard.style.display = 'block';
      }
    }

    // Call the function on page load and whenever the window is resized
    window.onload = hideElementOnLargeScreens;
    window.addEventListener('resize', hideElementOnLargeScreens);
  });

  successGoBack.addEventListener('click', () => {
    successAdditionalCardId.style.display = 'none';

    if ((successAdditionalCardId.style.display = 'none')) {
      successCard.style.display = 'block';
    }
  });

  successFooterBtn1.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
  });
});
