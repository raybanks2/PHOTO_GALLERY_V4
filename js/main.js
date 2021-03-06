
//gallery jquery
$('.parent-container').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{enabled: true},
  preload: [0,2],
  navigateByImgClick: true,	
  title: true,
  //inputs caption into image	
  image: {
    markup: '<div class="mfp-figure">'+
            '<div class="mfp-close"></div>'+
            '<div class="mfp-img"></div>'+
            '<div class="mfp-bottom-bar">'+
              '<div class="mfp-title"></div>'+
              '<div class="mfp-counter"></div>'+
            '</div>'+
          '</div>',
          //locates source of figcaption and moves it to mfp-title to display
    titleSrc: function(item) {
    return item.el.parents('div').find('figcaption').html();
    },
    verticalFit: true,
  }
  
});

//search function
function myFunction(){
  //declare variables
  var input, filter,galI,img,fig;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  galI = document.getElementsByClassName("gallery-item") 
  img = document.getElementsByClassName("gal-img");
  fig = document.getElementsByTagName("figcaption");
  for(i=0; i<galI.length; i++ ){
    //changes all values to upper case
    textValue=fig[i].textContent.toUpperCase();
    if(textValue.indexOf(filter)>-1){
      galI[i].style.display="block";
      //display figcaption when searced
      fig[i].style.display ="block";
    }else{
      galI[i].style.display="none";
    }
  }
}
