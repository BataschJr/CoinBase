document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('more_info_pop_up');
  const popupContainer = document.getElementById('more_info_pop_up_card');
  const cancelMark = document.getElementById('cancel-mark');

  toggleButton.addEventListener('click', () => {
    popupContainer.classList.toggle('show');
  });

  cancelMark.addEventListener('click', (event) => {
    event.stopPropagation();
    popupContainer.classList.remove('show');
  });

  document.addEventListener('click', (event) => {
    if (!popupContainer.contains(event.target) && event.target !== toggleButton) {
      popupContainer.classList.remove('show');
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

  var cancelFooterBtn1 = document.getElementById('cancel-show-info-card-1');
  var cancelCard = document.getElementById('ordercancelCard');
  var cancelAdditionalCardId = document.getElementById('cancelAdditionalCardId');
  var successGoBack = document.getElementById('successgoBack-responsive');

  cancelFooterBtn1.addEventListener('click', () => {
    console.log('clicked');
    cancelCard.style.display = 'none';

    if ((cancelCard.style.display = 'none')) {
      cancelAdditionalCardId.style.display = 'block';
    }

    if ((cancelAdditionalCardId.style.display = 'block')) {
      cancelCard.style.display = 'none';
    }

    function hideElementOnLargeScreens() {
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      if (windowWidth > 1200) {
        cancelAdditionalCardId.style.display = 'none';
        cancelCard.style.display = 'block';
      }
    }

    // Call the function on page load and whenever the window is resized
    window.onload = hideElementOnLargeScreens;
    window.addEventListener('resize', hideElementOnLargeScreens);
  });

  successGoBack.addEventListener('click', () => {
    cancelAdditionalCardId.style.display = 'none';

    if ((cancelAdditionalCardId.style.display = 'none')) {
      cancelCard.style.display = 'block';
    }
  });

  cancelFooterBtn1.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
  });
});
