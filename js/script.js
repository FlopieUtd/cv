
/* LOADING SCREEN */

document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('viewport').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('viewport').style.visibility="visible";
      },1000);
  }
}

/* MENU */

var openover = function (){
document.getElementById("home").style.display = "none";
document.getElementById("over").style.display = "block";
document.getElementById("motivatie").style.display = "none";
document.getElementById("curriculum").style.display = "none";
document.getElementById("contact").style.display = "none";
}

var openmotivatie = function (){
document.getElementById("home").style.display = "none";
document.getElementById("over").style.display = "none";
document.getElementById("motivatie").style.display = "block";
document.getElementById("curriculum").style.display = "none";
document.getElementById("contact").style.display = "none";
}

var opencurriculum = function (){
document.getElementById("home").style.display = "none";
document.getElementById("over").style.display = "none";
document.getElementById("motivatie").style.display = "none";
document.getElementById("curriculum").style.display = "block";
document.getElementById("contact").style.display = "none";
}

var opencontact = function (){
document.getElementById("home").style.display = "none";
document.getElementById("over").style.display = "none";
document.getElementById("motivatie").style.display = "none";
document.getElementById("curriculum").style.display = "none";
document.getElementById("contact").style.display = "block";
}

/* FANCYBOX */

$(document).ready(function() {
	/*
	 *  Simple image gallery. Uses default settings
	 */

	$('.fancybox').fancybox();

	/*
	 *  Different effects
	 */

	// Change title type, overlay closing speed
	$(".fancybox-effects-a").fancybox({
		helpers: {
			title : {
				type : 'outside'
			},
			overlay : {
				speedOut : 0
			}
		}
	});

	// Disable opening and closing animations, change title type
	$(".fancybox-effects-b").fancybox({
		openEffect  : 'none',
		closeEffect	: 'none',

		helpers : {
			title : {
				type : 'over'
			}
		}
	});

	// Set custom style, close if clicked, change title type and overlay color
	$(".fancybox-effects-c").fancybox({
		wrapCSS    : 'fancybox-custom',
		closeClick : true,

		openEffect : 'none',

		helpers : {
			title : {
				type : 'inside'
			},
			overlay : {
				css : {
					'background' : 'rgba(238,238,238,0.85)'
				}
			}
		}
	});

	// Remove padding, set opening and closing animations, close if clicked and disable overlay
	$(".fancybox-effects-d").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 150,

		closeEffect : 'elastic',
		closeSpeed  : 150,

		closeClick : true,

		helpers : {
			overlay : null
		}
	});

	/*
	 *  Button helper. Disable animations, hide close button, change title type and content
	 */

	$('.fancybox-buttons').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',

		prevEffect : 'none',
		nextEffect : 'none',

		closeBtn  : false,

		helpers : {
			title : {
				type : 'inside'
			},
			buttons	: {}
		},

		afterLoad : function() {
			this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
		}
	});


	/*
	 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
	 */

	$('.fancybox-thumbs').fancybox({
		prevEffect : 'none',
		nextEffect : 'none',

		closeBtn  : false,
		arrows    : false,
		nextClick : true,

		helpers : {
			thumbs : {
				width  : 50,
				height : 50
			}
		}
	});

	/*
	 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
	*/
	$('.fancybox-media')
		.attr('rel', 'media-gallery')
		.fancybox({
			openEffect : 'none',
			closeEffect : 'none',
			prevEffect : 'none',
			nextEffect : 'none',

			arrows : false,
			helpers : {
				media : {},
				buttons : {}
			}
		});

	/*
	 *  Open manually
	 */

	$("#fancybox-manual-a").click(function() {
		$.fancybox.open('1_b.jpg');
	});

	$("#fancybox-manual-b").click(function() {
		$.fancybox.open({
			href : 'iframe.html',
			type : 'iframe',
			padding : 5
		});
	});

	$("#fancybox-manual-c").click(function() {
		$.fancybox.open([
			{
				href : '1_b.jpg',
				title : 'My title'
			}, {
				href : '2_b.jpg',
				title : '2nd title'
			}, {
				href : '3_b.jpg'
			}
		], {
			helpers : {
				thumbs : {
					width: 75,
					height: 50
				}
			}
		});
	});
});

/* TIME OF DAY */	

function returnTimeOfDay (){

	var myDate = new Date(); 
	    
	if ( myDate.getHours() < 12 )  
	{ 
	    return("Goedemorgen!"); 
	} 
	else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
	if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 ) 
	{ 
	    return("Goedemiddag!"); 
	} 
	else  /* the hour is after 5pm, so it is between 6pm and midnight */
	if ( myDate.getHours() > 17 && myDate.getHours() <= 24 ) 
	{ 
	    return("Goedenavond!"); 
	} 
	else  /* the hour is not between 0 and 24, so something is wrong */
	{ 
	    return("Hallo!"); 
	} 
};

var groet = returnTimeOfDay();

	$(document).ready(function() {
		document.getElementById("groet").innerHTML= groet ;
});










