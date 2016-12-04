/*
 ---------------------------------------------------------------
    Библиотеки/плагины используемые в проекте:

    - plugin

 ---------------------------------------------------------------
*/

var myModule = (function() {

	// кешируем элементы
	var $window = $(window),
			$content = $('.js-content'),
			$navigation = $('.js-navigation'),
			$hamburger = $('.js-hamburger');


	// Инициализируем запуск всех необходимых фукций
	var init = function() {


		svg4everybody({}); 
		//-----------------------
		_showMenu();
		// _actionHamburger();
	};
	//-------------------------------------------------------------------

	// Show|Hide Menu
  //-------------------------------------------------------------------
	function _showMenu() {
		$hamburger.on('click', function() {
			$(this).toggleClass('is-active');
			$content.toggleClass('is-move');
			$navigation.toggleClass('is-move');
		});

		$content.on('click', function() {
			$(this).removeClass('is-move');
			$navigation.removeClass('is-move');
		});
	}
  //-------------------------------------------------------------------

  // Show|Hide Hamburger when scroll page
  //-------------------------------------------------------------------
	function _actionHamburger() {

		$(window).scroll(function() {
			// var wScroll = $(window).scrollTop();
			// console.log(wScroll);
			if($(window).scrollTop() + $(window).height() == $(document).height()) {
      	alert("bottom!");
       // getData();
	   }
		});
		
	}
  //-------------------------------------------------------------------

	



	return {
		init: init
	};

})();

myModule.init();