

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

function myFunction(){
  var input, filter,galI,a,img,fig;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  galI = document.getElementsByClassName("gallery-item") 
  img = document.getElementsByClassName("gal-img");
  fig = document.getElementsByTagName("figcaption");
  for(i=0; i<galI.length; i++ ){
    textValue=fig[i].textContent.toUpperCase();
    if(textValue.indexOf(filter)>-1){
      galI[i].style.display="block";
      fig[i].style.display ="block";
    }else{
      galI[i].style.display="none";
    }
  }
}
