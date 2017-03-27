(function($){
  $(function(){
     //clone topnav
  	var nav_lis = $('nav ul.left').html();
    $('#nav-mobile').append(nav_lis);
    $('.button-collapse').sideNav();
    $('.modal').modal({ starting_top: '100%', // Starting top style attribute
      ending_top: '0', // Ending top style attribute
      opacity:1,
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        $('.close-container').show();
      },
      complete: function() { $('.close-container').hide(); } // Callback for Modal close
  });
  $('.modal-close').click(function(){
  $('#modal1').modal('close');
  	
  });

  $('.side-nav li a.menu_close').click(function(){
    $('.drag-target').trigger('click');
  });  

  }); // end of document ready
})(jQuery); // end of jQuery name space
