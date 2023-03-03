var pos;
var autoflag = 1;

window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = {
    "polyfills": true,
    // Options affecting files only
    "autoplay": "auto",
    "warnOnUnsupportedContent": false,
    "contextMenu": false,
    "showSwfDownload": false,
    "menu": false,
    "quality": "high",
    "splashScreen": false,
};

$(document).ready(function(){

    /*App Variables*/
    var currentpage = 0;
	var pagewidth = $('.page').width();
	var position = 0;
	var marginnew = 0;
	var rot1; 
	var posx1;
	var posy1;
	var rot2; 
	var posx2;
	var posy2;
	var posrange = 200;
	var ondrag = 0;
	var randex;
	var randex2;
	
	
	
		
	
	$( ".note1, .noteimg, .notevid2" ).draggable({
    start: function() { ondrag=1}
    });

	$( ".note1, .noteimg, .notevid2" ).draggable({
   	stop: function() { ondrag=0 }
	});
	
	
	var height = parseInt($('.noteimg').css("max-height"));
	var width = parseInt($('.noteimg').css("max-width"));
		
	
	/*little randomization of note placement*/
	rot1 = (Math.floor(Math.random()*20)-10);
	posx1 = (Math.floor(Math.random()*posrange)-posrange/2);
	posy1 = (Math.floor(Math.random()*posrange)-posrange/2);
	rot2 = (Math.floor(Math.random()*20)-10);
	posx2 = (Math.floor(Math.random()*posrange)-posrange/2);
	posy2 = (Math.floor(Math.random()*posrange)-posrange/2);
	randex = (Math.floor(Math.random()*30)-15);
	randex2 = (Math.floor(Math.random()*25));
	randex3 = (Math.floor(Math.random()*10)-5);
	
	$('.noteimg').each(function(i){
	 $(this).css({'rotate' :rot2+i*randex*(i-randex3), 'left':posx2+i*randex*3, 'top':posy2+i*randex, 'max-width':width+randex2*i*1.5, 'max-height':height+randex2*i*1.5, })
	 });
	 $('.note1').each(function(i){
	 $(this).css({'rotate' :rot1+i*randex, 'left':posx1+i*randex*2, 'top':posy1+i*randex })
	 });
	 $('.notevid2').each(function(i){
	 $(this).css({'rotate' :rot2+i*randex*(i-randex3), 'left':posx1+i*randex*2, 'top':posy1+i*randex })
	 });
	
	
	/*Default Background Position*/
	$('#wanderwall').css({backgroundPosition: '0px -5px'});


	$("div.frame a").hover(function()
	{
	            /*Strip the link identifier to form just the ID*/
	            var id = this.id.replace("link", "");
				var currentLink = $(this);
				/*ID based hiding of the other frames*/
				hideTheRest(id);
				position = -1328*id;
			
				/*Define the offset at which the page for this frame is present*/
				marginnew =  pagewidth * id * -1;
				
			
				
				
				/*Animate the Page Slider to the new offset*/
				$('.pageslider').stop().animate({marginLeft: marginnew}, 800);
			
				/*Animate the header background*/
				$('#wanderwall').stop().animate({backgroundPosition: '( '+position +'px -5px)'}, 802, function()
				{
				  var distance = 0;
				  var topdis   = -190;
				  var text     = currentLink.attr('alt');
				  var infoframe  = $('#infoframe');
				  pos = position;

				  /*Define the offset for the header-wallpaper text to appear next to the frame*/
				  switch(id)
				  {
				    case "1":
					     distance = 500;
						 break;
				    case "2":
					     distance = 730;
						 break;
				    case "3":
					     distance = 200;
						 break;
					case "4":
					     distance = 400;
						 topdis = -198;
						 break;
				  }
				  
				  infoframe.html(text);
				  infoframe.css('margin-left', distance + 'px');
				  infoframe.css('margin-top', topdis + 'px');
				  infoframe.fadeIn();
				});
							
	}, function()
	{
	   
	   $('#infoframe').hide();
				var id = this.id.replace("link", "");
				
				showTheRest();
	
	});
	


	function hideTheRest(id){
	
		 for (var i=1; i<14; i++){
			if (i!=id)
			{
				$('#frame' + i + ' a').css('display', 'block'); 
				$('#frame' + i).css('filter', 'alpha(opacity=90)');
				$('#frame' + i).stop().fadeTo("1500",0);
				
				
				}
			}
			$('#infoframe').css('visibility','visible');				
		}
		
	/*Back to Home*/
	$('#homelink').hover(function()
	{
	 marginnew =  0;
	 pagewidth = $('.page').width();
	 $('.pageslider').stop().animate({marginLeft: marginnew}, 800);
	 $('#wanderwall').stop().animate({backgroundPosition: '(-0px -5px)'}, 500 );	
	  
	}, function()
	{
	
	});
	
	
	 
	
		
	function showTheRest(){
	    
		for (var i=1; i<14; i++){
				$('#frame' + i).stop().fadeTo("1000",1.0);
				$('#frame' + i).css('filter', 'alpha(opacity=90)');
			        
			}
			
			
			$('#infoframe').css('visibility','hidden');
						
		}
		

if (ondrag==0)
  {
	$('.note1').toggle(function(){
		var mheight = parseInt($(this).css("max-height"));
		var mwidth = parseInt($(this).css("max-width"));	
		var fsize = parseInt($(this).css("font-size"));	
		var inwidth = $(this).innerWidth();
		var width = $(this).width();
		var index = parseInt($(this).css("z-index"));	
		$(this).animate({
    		'font-size': fsize*2,
			'max-height': mheight*2,
			'max-width' :mwidth*2,
			'z-index':index+1,
			'rotate' :-0,
			'padding':(inwidth-width)*1.3}, 100),
			$(this).css("box-shadow" ,"0px 0px 50px rgba(68,68,68,0.1)"),
			$(this).css("-webkit-box-shadow" ,"0px 0px 50px rgba(68,68,68,0.1)"),
			$(this).css("-moz-box-shadow" ,"0px 0px 50px rgba(68,68,68,0.1)")
			}, 
	 function(){ 
	        var mheight = parseInt($(this).css("max-height"));
			var mwidth = parseInt($(this).css("max-width"));	
			var fsize = parseInt($(this).css("font-size"));	
			var inwidth = $(this).innerWidth();
			var width = $(this).width();
			var index = parseInt($(this).css("z-index"));
	 		rot1 = (Math.floor(Math.random()*20)-10);
	 	$(this).animate({
    		'font-size': fsize/2,
			'max-height': mheight/2,
			'max-width' :mwidth/2,
			'z-index':index-1,
			'rotate' :rot1,
			'padding':(inwidth-width)/5}, 100),
			$(this).css("box-shadow" ,"1px 1px 5px rgba(68,68,68,0.3)"),
			$(this).css("-webkit-box-shadow" ,"1px 1px 5px rgba(68,68,68,0.3)"),
			$(this).css("-moz-box-shadow" ,"1px 1px 5px rgba(68,68,68,0.3)")
			});
  }	
  
  if (ondrag==0)
  {
	$('.noteimg').toggle(function(){
		var height = parseInt($(this).css("max-height"));
		var width = parseInt($(this).css("max-width"));	
		var index = parseInt($(this).css("z-index"));	
		var pad = parseInt($(this).css("padding-top"));
		$(this).animate({
			'max-height': height*2,
			'max-width' :width*2,
			'z-index':index+1,
			'rotate' :-0,
			'padding': pad*2,}, 100),
			$(this).css("box-shadow" ,"0px 0px 50px rgba(68,68,68,0.1)"),
			$(this).css("-webkit-box-shadow" ,"0px 0px 50px rgba(68,68,68,0.1)"),
			$(this).css("-moz-box-shadow" ,"0px 0px 50px rgba(68,68,68,0.1)")
			}, 
	 function(){ 
	        var height = parseInt($(this).css("max-height"));
			var width = parseInt($(this).css("max-width"));	
			var index = parseInt($(this).css("z-index"));
			var pad = parseInt($(this).css("padding-top"));
	 		rot1 = (Math.floor(Math.random()*20)-10);
	 	$(this).animate({
			'max-height': height/2,
			'max-width' :width/2,
			'z-index':index-1,
			'rotate' :rot1,
			'padding': pad/2,}, 100),
			$(this).css("box-shadow" ,"1px 1px 5px rgba(68,68,68,0.3)"),
			$(this).css("-webkit-box-shadow" ,"1px 1px 5px rgba(68,68,68,0.3)"),
			$(this).css("-moz-box-shadow" ,"1px 1px 5px rgba(68,68,68,0.3)")
			});
  }	
  
  if (ondrag==0)
  {
	$('.notevid2').toggle(function(){
		var index = parseInt($(this).css("z-index"));	
		$(this).animate({
			'z-index':index+1,
			'rotate' :-0,}, 100)}, 
	 function(){ 
	        var height = parseInt($(this).css("max-height"));
			var width = parseInt($(this).css("max-width"));	
			var index = parseInt($(this).css("z-index"));
			var pad = parseInt($(this).css("padding-top"));
	 		rot1 = (Math.floor(Math.random()*20)-10);
	 	$(this).animate({
			'z-index':index-1,
			'rotate' :rot1,}, 100)
			});
  }	
  
  $('.auto').toggle(function(){
	  $('.autostatus').html('- no');
	  autoflag = 0;},
	  function() {
	  $('.autostatus').html('- yes');
	  autoflag = 1;
	  });
  
  $('#meet').click(function(){
		  
		 $('.pageslider').stop().animate({marginLeft: pagewidth * 1 * -1}, 1500); 
		 $('#wanderwall').stop().animate({backgroundPosition: '( -1328px -5px)'}, 1502);
		 $("#1_cloud_audio").jPlayer("playHead", 0);
		 function beginplay(){$('#1_cloud_audio').jPlayer("play")};
		 var timeoutID = window.setTimeout(beginplay, 1500);
		 
		});
	
	$('#finale').click(function(){
		  
		 $('.pageslider').stop().animate({marginLeft: pagewidth * 12 * -1}, 8500); 
		 $('#wanderwall').stop().animate({backgroundPosition: '(-15936px -5px)'}, 8502);
		 
		 function beginplay(){$("#12_finale_video").jPlayer("playHead", 0);$('#12_finale_video').jPlayer("play")};
		 var timeoutID = window.setTimeout(beginplay, 8507); 
			});	
			
	$('#story').click(function(){
		  
		 $('.pageslider').stop().animate({marginLeft: pagewidth * 13 * -1}, 9500); 
		 $('#wanderwall').stop().animate({backgroundPosition: '(-17264px -5px)'}, 9502);
		  
			});		
			
	 $('#intromenu li').hover(function(){
		 $(this).css("font-weight","bold");
		 },
	 		function(){
				$(this).css("font-weight","normal");
				}
				);
				
	$('.auto').hover(function(){
		 $(this).css("opacity","1");
		 },
	 		function(){
				$(this).css("opacity","0.6");
				}
				);
				
	$('#meet').hover(function(){
		 $('#infotext1').stop().animate({opacity: '1'},300);
		 },
	 		function(){
				$('#infotext1').stop().animate({opacity: '0'},300);
				}
				);
	$('#finale').hover(function(){
		 $('#infotext2').stop().animate({opacity: '1'},300);
		 },
	 		function(){
				$('#infotext2').stop().animate({opacity: '0'},300);
				}
				);	
	$('#story').hover(function(){
		 $('#infotext3').stop().animate({opacity: '1'},300);
		 },
	 		function(){
				$('#infotext3').stop().animate({opacity: '0'},300);
				}
				);													
	 							
 

});

