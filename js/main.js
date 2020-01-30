
//gallery jquery
$('.parent-container').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{enabled: true},
  preload: [0,2],
  navigateByImgClick: true,
});

//search function
function myFunction(){
  var input, filter,galI,img,fig;
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
