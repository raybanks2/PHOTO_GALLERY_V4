
//gallery jquery
$('.parent-container').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{enabled: true},
  preload: [0,2],
  navigateByImgClick: true,	
  title: true,	
  image: {
    markup: '<div class="mfp-figure">'+
            '<div class="mfp-close"></div>'+
            '<div class="mfp-img"></div>'+
            '<div class="mfp-bottom-bar">'+
              '<div class="mfp-title"></div>'+
              '<div class="mfp-counter"></div>'+
            '</div>'+
          '</div>',
    titleSrc: function(item) {
    return item.el.parents('div').find('figcaption').html();
    },
    verticalFit: true,
  }
  
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
