const character_value = document.querySelector('#textarea');
let total_count = document.querySelector('#total-counter');
let remaining_count = document.querySelector('#remaining-counter');
const copytextbutton = document.querySelector('#copytext');
const resetbutton = document.querySelector('#resetbutton');
const dark_mode_toggle = document.querySelector('#dark-mode-toggle');

let charValueLength = 0;

character_value.addEventListener('keyup', function () {
  charValueLength = character_value.value.length;

  total_count.textContent = charValueLength;

  remaining_count.textContent = 150 - charValueLength;

  if (charValueLength === 150) {
    swal('You have reached character limit of 150');
  }
});

copytextbutton.addEventListener('click', function () {
  character_value.select();
  character_value.setSelectionRange(0, 9999); // for mobile

  navigator.clipboard.writeText(character_value.value);

  Toastify({
    text: 'Text copied Successfully',
    duration: 3000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: 'top',
    position: 'center',
    stopOnFocus: true,
    style: {
      background: '#00C897',
    },
    onClick: function () {},
  }).showToast();
});

resetbutton.addEventListener('click', function () {
  character_value.value = '';
  
  total_count.textContent = 0;
  remaining_count.textContent = 150;
});

dark_mode_toggle.addEventListener('click', function () {
  const wholeBody = document.body;

  wholeBody.classList.toggle('dark_mode_toggle');
});
