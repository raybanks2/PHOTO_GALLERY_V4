
function search() {
  const $searchInput = $(this)
    .val()
    .toLowerCase();
    console.log(this);
  $("figure").each(function() {
    const $capt = $(this).attr("figcaption");
    if ($capt.indexOf($searchInput) > -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}
search();


$('.parent-container').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{enabled: true}, // set to true to enable gallery

  preload: [0,2], // read about this option in next Lazy-loading section

  navigateByImgClick: true,

  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

  tPrev: 'Previous (Left arrow key)', // title for left button
  tNext: 'Next (Right arrow key)', // title for right button
  tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
  
});