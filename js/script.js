$(document).ready(function() {
  // for baners
  const banner = document.querySelector('div');
  const bottomBanner = document.querySelectorAll('.cbalink');

  if(!banner.classList.contains('container')) {
    banner.style.display = 'none';
  }

  bottomBanner.forEach(elem => {
    elem.style.display = 'none';
  });



  let tabsItem = $('.tabs-item');

  tabsItem.on('click', function(event) {
    event.preventDefault();
    let activeContent = $(this).attr('href');
    $('.visible').toggleClass('visible');
    $(activeContent).toggleClass('visible');
    $('.tabs-item-active').toggleClass('tabs-item-active');
    $(this).toggleClass('tabs-item-active');
  });
});