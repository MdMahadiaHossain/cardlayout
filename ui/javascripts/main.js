$(document).ready(function () {


    $( ".kpv-humburger" ).click(function() {
        $(".kpv-sidemenubar").toggle( "fast", function() {
         
        });
      });

    $( ".kpv-dropdown" ).click(function() {
        var nodes = this.childNodes
        $( nodes[4] ).toggle( "fast", function() {
         
        });
      });
   


});