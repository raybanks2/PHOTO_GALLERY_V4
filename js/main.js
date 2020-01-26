
function searchFunction() {
  // Declare variables
  var $input, $filter, $ul, $li, $a, i, $txtValue;
  $input = $('searchBar');
  $filter = $input.value.toLowerCase();
  $ul = $('figure');
  $li = $('figcaption');
  console.log($li);

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    $a = $li[i].$("figure")[0];
    $txtValue = $a.innerHTML || $a.textContent || $a.innerText;
    console.log($textValue);
    if ($txtValue.toLowerCase().indexOf($filter) > -1) {
      $li[i].style.display = "";
    } else {
      $li[i].style.display = "none";
    }
  }
}


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