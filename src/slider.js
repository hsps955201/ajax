jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
      setInterval(function () {
              moveRight();
                  }, 3000);
                    });                                                                                                                                                  
 
   var slideCount = $('#slider ul li').length;
   var slideWidth = $('#slider ul li').width();
   var slideHeight = $('#slider ul li').height();
   var sliderUlWidth = slideCount * slideWidth;
                                
   $('#slider').css({ width: slideWidth, height: slideHeight });
                                    
   $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
                                        
   $('#slider ul li:last-child').prependTo('#slider ul');

   function moveLeft() {
   $('#slider ul').animate(
   {
   left: + slideWidth
   }, 200, function () {
   $('#slider ul li:last-child').prependTo('#slider ul');
   $('#slider ul').css('left', '');
                       });
                       };

  function moveRight() {
  $('#slider ul').animate({
  left: - slideWidth
  }, 200, function () {
  $('#slider ul li:first-child').appendTo('#slider ul');
  $('#slider ul').css('left', '');
                      });
                      };

  $('a.control_prev').click(function () {
  moveLeft();
  });

  $('a.control_next').click(function () {
  moveRight();
  });

      });

function showHint(str) {
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "gethint.php?q=" + str, true);
        xmlhttp.send();
    }
}
$.ajax({
        method:"GET",
        url: "gethint.php",        
        success: function (response) {
          alert(response)
        }
      	})

