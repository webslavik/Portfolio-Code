/*
 ---------------------------------------------------------------
    Библиотеки/плагины используемые в проекте:

    - plugin

 ---------------------------------------------------------------
*/

var myModule = (function() {

	// кешируем элементы
	var $hamburger = $('.js-hamburger'),
			$content = $('.js-content');


	// Инициализируем запуск всех необходимых фукций
	var init = function() {


		svg4everybody({}); 
		//-----------------------
		_showMenu();
	};
	//-------------------------------------------------------------------

	// Show|Hide Menu
  //-------------------------------------------------------------------
	function _showMenu() {
		$hamburger.on('click', function() {
			$(this).toggleClass('is-active');
			$content.toggleClass('is-move');
		});

		$content.on('click', function() {
			$(this).removeClass('is-move');
		});
	}
  //-------------------------------------------------------------------

	



	return {
		init: init
	};

})();

myModule.init();