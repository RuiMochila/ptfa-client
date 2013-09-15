
function initPageslider() {
	var $main = $( '#pages-main' ), //Wrap de todas páginas
		$first = $('div.page-init'), //Meter a página inicial
		$pages = $main.children( 'div.page' ); //Conjunto páginas
	//Guardar as default classes de cada página para depois as repormos.
 	$pages.each( function() {
		var $page = $( this );
		//Guardar atributos da class
		$page.data( 'originalClassList', $page.attr( 'class' ) );
	} );
 	// Meter class current na primeira página para começar visivel.
 	$first.addClass( 'page-current' );
}

var Modernizr = window.Modernizr, $body = $( 'body' );

var	isAnimating = false,
	endCurrPage = false,
	endNextPage = false,
	animEndEventNames = {
		'WebkitAnimation' : 'webkitAnimationEnd',
		'OAnimation' : 'oAnimationEnd',
		'msAnimation' : 'MSAnimationEnd',
		'animation' : 'animationend'
	},
	// animation end event name
	animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
	// support css animations
	support = Modernizr.cssanimations;

//animações disponívels: "left" e "right"
function changePage($next, animation) {
	$current = $('.page-current');

	if( isAnimating ) {
		return false;
	}

	isAnimating = true;

	$next.addClass( 'page-current' ), outClass = '', inClass = '';

	switch( animation ) {
		case "right":
			outClass = 'page-moveToLeft';
			inClass = 'page-moveFromRight';
			break;
		
		case "left":
			outClass = 'page-moveToRight';
			inClass = 'page-moveFromLeft';
			break;
	}

	$current.addClass( outClass ).on( animEndEventName, function() {
		$current.off( animEndEventName );
		endCurrPage = true;
		if( endNextPage ) {
			onEndAnimation( $current, $next );
		}
	} );

	$next.addClass( inClass ).on( animEndEventName, function() {
		$next.off( animEndEventName );
		endNextPage = true;
		if( endCurrPage ) {
			onEndAnimation( $current, $next );
		}
	} );

	if( !support ) {
		onEndAnimation( $current, $next );
	}

}

function onEndAnimation( $outpage, $inpage ) {
	endCurrPage = false;
	endNextPage = false;
	resetPage( $outpage, $inpage );
	isAnimating = false;
}

function resetPage( $outpage, $inpage ) {
	$outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
	$inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' page-current' );
}
