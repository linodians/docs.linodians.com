$(document).ready(function(){

	// Toggle main nav
	$( "body > header a.toggle" ).click(function(){
		$( "body > header nav ul" ).toggle();
	});

	// Sidebar nav
	$("ul.tl > li").click(function(){
		$( this ).toggleClass( "shown" );
		$( this ).find( "a i" ).toggleClass( "fa-rotate-90" );
	});
});

