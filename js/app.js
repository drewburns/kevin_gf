$(document).foundation()

$.fn.extend({
   qcss: function(css) {
      return $(this).queue(function(next) {
         $(this).css(css);
         next();
      });
   }
});


$( "#enter" ).click(function() {
  var input = $('#input').val().toLowerCase();
  if (input == "love") {
  	$("form").hide();
  	$("#content").removeClass('content1').addClass('content2');
  	
  } else {
  	$("#input").qcss({ color: 'red' }).delay(200).qcss({color: 'lime'})  }
});