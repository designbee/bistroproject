$(document).ready(function(){

	// $('.content').hide();	//hides all pages
	// $('#home').show();	//shows only home page content on page load
	// $('#home_menu').addClass('active');

	// $('.mnu_item').click(function(e){		// on click of header menu
	// 	e.preventDefault();
	// 	$('#header_menu li a').removeClass('active');
	// 	$(this).addClass('active');

	// 	$('.content').hide();
	// 	var contentID = $(this).attr("href");
	// 	$(contentID).show();
	// });

	// $('#lnk_gift, #lnk_event').click(function(e){		// linking gift card and event page
	// 	e.preventDefault();
	// 	$('.content').hide();
	// 	var contentID = $(this).attr("href");
	// 	$(contentID).show();
	// });

	// $('.footer_mnu_item').click(function(e){  			// footer navigation
	// 	e.preventDefault();
	// 	$('.content').hide();
	// 	var contentID = $(this).attr("href");
	// 	$(contentID).show();

	// 	$('a.mnu_item').removeClass("active");
	// 	$('header').find("[href='" + contentID + "']").addClass('active');

	// 	$("html, body").animate({ scrollTop: 0 }, "5000");
	// });


	// food menu javascript 

	$('.menu_brunch').hide();
	$('#brunch_menu').addClass('active');
	$('#brunch').show();

	$('.food_item').click(function(e){
		e.preventDefault();
		$('#menu_left li a').removeClass('active');
		$(this).addClass('active');

		$('.menu_brunch').css('display','none');
		var foodID = $(this).attr("href");
		$(foodID).show();
	});

	// special menu javascript

	// $('.special_content').hide();
	// $('#game_content').show();
	// $('#lnk_game').addClass('active');

	// $('.special_item').click(function(e){
	// 	e.preventDefault();
	// 	$('#special_menu li a').removeClass('active');
	// 	$(this).addClass('active');

	// 	$('.special_content').hide();
	// 	var specialID = $(this).attr("href");
	// 	$(specialID).show();
	// });

	// game javascript
	addSlotItems();		// add Macroons for the slotMachine	

	

});

// for the slot machine game 

//global array
var slot_img = ['<img src="images/contest/blue.png" title="blue" />',
				'<img src="images/contest/darkblue.png" title="darkblue" />',
				'<img src="images/contest/green.png" title="green" />',
				'<img src="images/contest/orange.png" title="orange" />',
				'<img src="images/contest/rose.png" title="rose" />',
				'<img src="images/contest/yellow.png" title="yellow" />'
			];


function addSlotItems()
{
	$('.wrapper').empty();
	for(i=1;i<=3;i++)
	{
		for (var j = 0; j < 10; j++) {
			var count = Math.floor(Math.random()*slot_img.length);
			$('#slot'+i+' .wrapper').append("<div class='img_wrapper'>"+slot_img[count]+"</div>")
		}
	}
}

function go()
{
	$('#lbl_msg').hide();
	$('#btn_play input').css({'opacity':'0.5', 'cursor':'wait'});
	addSlotItems();


	var firstSrc = $('#slot1 .img_wrapper img').first().attr('src');
	var secSrc = $('#slot2 .img_wrapper img').first().attr('src');
	var thirdSrc = $('#slot3 .img_wrapper img').first().attr('src');

	if(firstSrc === secSrc && secSrc === thirdSrc)
	{
		go();
	}


	var time ;

	for(i=1;i<=3;i++)
	{
		time = 5000;		
		time += Math.round(Math.random()*1000);
		// var count = Math.floor(Math.random()*slot_img.length);
		var marginTop = parseInt($('#slot'+i+' .wrapper').css("margin-top"), 10)
		marginTop -= (6*114); // 100 is height of each img
		$('#slot'+i+' .wrapper').animate(
			{"margin-top" : marginTop+"px"},
			{"duration" : time, "easing" : "easeOutElastic"}
		);
		$('#slot'+i+' .wrapper').animate(
			{"margin-top" : "10px"},
			{"duration" : time, "easing" : "easeInOutElastic"}
		);
	}	

	setTimeout(function() {   //calls getResult after the spinning is over
		$('#btn_play input').css({'opacity':'1', 'cursor':'pointer'});		
		$('#lbl_msg').fadeIn(2000);
	}, (time*2)+5);
	
}