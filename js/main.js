/* EMAIL FORM HANDLING */

$('#email-form').submit(function(e){
  // do not submit form
  e.preventDefault();
  // save value if the form field is not blank or the default
  if( $('#email').val() !== '' && $('#email').val() !== 'Email' ){
    // store value added to field in a variable
    let val = $('#email').val();
    // add email address to message
    $('.form-confirmation-message span').text(val);
    // show message (initially hidden with "hide" class)
    $('.form-confirmation-message').removeClass('hide');
    // hide input
    $('.form-input').addClass('hide');
  }
})

// RESPONSIVE OVERLAY MENU

// use vanilla js to add buttons to the page
const btns = '<button class="btn-menu"><i class="fa-solid fa-bars"></i></button><button class="btn-close">Close</button>';
const header = document.querySelector('header');
header.insertAdjacentHTML('beforeend',btns);

function initMenu(){
  $('body').addClass('js');
  $('nav').addClass('hide');
  $('.btn-close').addClass('hide');
}

$('.btn-menu').click(function(){
  $('nav').removeClass('hide');
  $('.btn-close').removeClass('hide');
})

$('.btn-close').click(function(){
  $('nav').addClass('hide');
  $('.btn-close').addClass('hide');
})

$('nav a').click(function(){
  $('nav').addClass('hide');
  $('.btn-close').addClass('hide');
})

initMenu();

// ACCORDION

if(document.querySelector('.faq-accordion')){
  
  const dt = document.querySelectorAll('dt');
  const dd = document.querySelectorAll('dd');

  // close all faqs initially
  dd.forEach(function(d){
    d.classList.add('toggle-faq')
  })
  
  dt.forEach(function(d,i){
    // add plus icons
    d.dataset.before = '+';
    // handle click
    d.addEventListener('click',function(){
      // open faq
      dd.item(i).classList.toggle('toggle-faq');
      // change icon and highlight item
      markSelected(d);
    })
  })

  function markSelected(d){
    if(d.dataset.before === '+'){
      d.dataset.before = '–';
      d.classList.add('selected-faq');
    } else {
      d.dataset.before = '+';
      d.classList.remove('selected-faq');
    }
  }
  
};

// SCROLLED HEADER


// In production, this function would need debouncing (see: https://stackoverflow.com/questions/75988682/debounce-in-javascript)
$(window).on('scroll',function() {
	resizeHeader();
});

// (40) can be changed to match the height you need; this is the number of pixels that are scrolled before the "scrolled" class gets added
function resizeHeader() {
	if ( $(document).scrollTop() > 40 ) {
		$('header').addClass('scrolled');
	} else {
		$('header').removeClass('scrolled');
	}
}