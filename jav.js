
/*Code for Carousel Set timer for three automatic images*/
var images = ['html/b1.jpg', 'html/b2.jpg', 'html/b3.jpg',];

    var x = 0;

    var imgs = document.getElementById('img');

    setInterval(carousel, 2000);
    function carousel() {

      if (x < images.length) {
        x = x + 1;
      } else {
        x = 1;
      }
   imgs.innerHTML = "<img src=" + images[x - 1] + ">";
      }


/*Code for Unit Converter - Created two values*/
function tbspConvert(){
document.convert.mili.value = document.convert.tbsp.value * 14.7868;
}

function miliConvert(){
document.convert.tbsp.value = document.convert.mili.value / 14.7868;
}