$(document).ready(function(){


$('#finalevidtop, #jp_interface_12').hover(function(){
		 $('#jp_interface_12').stop().animate({opacity: '1'},300);
		 },
	 		function(){
				$('#jp_interface_12').stop().animate({opacity: '0'},300);
				}
				);
$('#finalevidtop').toggle(function(){
	  $('#12_finale_video').jPlayer("play");},
	  function() {
	  $('#12_finale_video').jPlayer("pause");
	  });				


$(document).keyup(function(e) {
	
	
  if (e.keyCode == 27) { $('#12_finale_video').jPlayer("restoreScreen");
		$('.finalevid').css("position","relative");
		$('.finalevid').css("z-index","1");
		$('.finalevid').css("width","800px");
		$('#progress_12').css("width","83%");
		$('#progress_12').css("margin-left","8%");
		$('#jp_interface_12').css("top","-20px");
		$('.finalevid').css("top","100px");
		$('#finalevidtop').css("margin-top","0px");
		$('#finalevidtop').css("margin-left","0px");
		$('.finalevid').css("left","245px"); 
		$('body').css("overflow-y", "visible");}  
});

 $('#fullscr').toggle(function(){
		 
		$('#12_finale_video').jPlayer("fullScreen");
		$('.finalevid').css("position","fixed");
		$('.jp-video-360p').css("width","100%");
		$('.finalevid').css("width","100%");
		$('#progress_12').css("width","89%");
		$('#progress_12').css("margin-left","5%");
		$('#finalevidtop').css("margin-top","100px");
		$('#finalevidtop').css("margin-left","200px");
	    $('#jp_interface_12').css("top","-25px");
		$('.finalevid').css("z-index","100");
		$('.finalevid').css("top","0px");
		$('.finalevid').css("left","0px");
		$('body').css("overflow-y", "hidden");
		
		}, 
		
		function(){$('#12_finale_video').jPlayer("restoreScreen");
		$('.finalevid').css("position","relative");
		$('.finalevid').css("z-index","1");
		$('.finalevid').css("width","800px");
		$('#progress_12').css("width","83%");
		$('#progress_12').css("margin-left","8%");
		$('#jp_interface_12').css("top","-20px");
		$('.finalevid').css("top","100px");
		$('#finalevidtop').css("margin-top","0px");
		$('#finalevidtop').css("margin-left","0px");
		$('.finalevid').css("left","245px"); 
		$('body').css("overflow-y", "visible");
		});
		
		  
				

var pagewidth = $('.page').width();

	
	$("#1_cloud_audio").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "audio/01_eleven_tigers_-_sounds_of_cloud.mp3",
	
				oga: "audio/01_eleven_tigers_-_sounds_of_cloud.ogg"
			});
			
			$(this).jPlayer("volume", 1);
			
			
		},
		
		
		ended: function(event) {
			
			if (autoflag==1){
				$('#2_ocean_audio').jPlayer("play");
				$('.pageslider').stop().animate({marginLeft: pagewidth * 2 * -1}, 1500); 
		 		$('#wanderwall').stop().animate({backgroundPosition: '( -2656px -5px)'}, 1502);
				}
			},
	
		
		swfPath: "jPlayer/js",
		supplied: "mp3, oga",
		cssSelectorAncestor: "#jp_interface_1"
	})
	
	.bind($.jPlayer.event.play, function() {$(this).jPlayer("pauseOthers");})
			
	.bind($.jPlayer.event.timeupdate, function(event) { 
            var timeNow = event.jPlayer.status.currentTime; 
			    timeNow = timeNow*-300;
				$("#seek_1").stop().animate({backgroundPosition: '( '+timeNow+'px -246px)'}, 1000);});		
			
	


	$("#2_ocean_audio").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "audio/02_eleven_tigers_-_sounds_of_ocean.mp3",
				
				oga: "audio/02_eleven_tigers_-_sounds_of_ocean.ogg"
			});
			
			$(this).jPlayer("volume", 1);
		},
		
		ended: function(event) {
			
			if (autoflag==1){
				$('#3_night_audio').jPlayer("play");
				$('.pageslider').stop().animate({marginLeft: pagewidth * 3 * -1}, 1500); 
		 		$('#wanderwall').stop().animate({backgroundPosition: '( -3984px -5px)'}, 1502);
				}
			},
			
		swfPath: "jPlayer/js",
		supplied: "mp3, oga",
		cssSelectorAncestor: "#jp_interface_2"
	})

	.bind($.jPlayer.event.play, function() { // Using a jPlayer event to avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");})
	
	.bind($.jPlayer.event.timeupdate, function(event) { 
            var timeNow = event.jPlayer.status.currentTime; 
			    timeNow = timeNow*-300;
				$("#seek_2").stop().animate({backgroundPosition: '( '+timeNow+'px -246px)'}, 1000);});
				
				
	$("#3_night_audio").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "audio/03_eleven_tigers_-_sounds_of_night.mp3",
			
				oga: "audio/03_eleven_tigers_-_sounds_of_night.ogg"
			});
			
			$(this).jPlayer("volume", 1);
		},
		play: function (event) {

			$('#3_night_video').jPlayer("play");
			$("#1_cloud_audio").jPlayer("pause");
			$("#2_ocean_audio").jPlayer("pause");
			$("#4_wind_audio").jPlayer("pause");
			$("#5_light_audio").jPlayer("pause");
			$("#6_meta_audio").jPlayer("pause");
			$("#7_war_audio").jPlayer("pause");
			$("#8_time_audio").jPlayer("pause");
			$("#9_play_audio").jPlayer("pause");
			$("#10_love_audio").jPlayer("pause");
			$("#11_real_audio").jPlayer("pause");
			$("#12_finale_video").jPlayer("pause");

		},
		pause: function (event) {

			$('#3_night_video').jPlayer("pause");

		},
		ended: function (event) {

			$('#3_night_video').jPlayer("stop");
			if (autoflag==1){
				$('#4_wind_audio').jPlayer("play");
				$('.pageslider').stop().animate({marginLeft: pagewidth * 4 * -1}, 1500); 
		 		$('#wanderwall').stop().animate({backgroundPosition: '( -5312px -5px)'}, 1502);
				}

		},
		swfPath: "jPlayer/js",
		supplied: "mp3, oga",
		cssSelectorAncestor: "#jp_interface_3"
	})
     
	 
	
	
	.bind($.jPlayer.event.timeupdate, function(event) { 
            var timeNow = event.jPlayer.status.currentTime; 
			    timeNow = timeNow*-300;
				$("#seek_3").stop().animate({backgroundPosition: '( '+timeNow+'px -246px)'}, 1000);});	
						
	

    $("#3_night_video").jPlayer({

		ready: function () {

			$(this).jPlayer("setMedia", {

				m4v: "tigers/3_Night/[Liudas_Andrikis]_-_Me0_480_360.mp4",
				ogv: "tigers/3_Night/[Liudas_Andrikis]_-_Me0_960_720.ogg",

				poster: "tigers/3_Night/[Liudas_Andrikis]_-_Me0_480_360.jpg"

			});

		},
		play: function (event) {

			$('#3_night_audio').jPlayer("play");

		},
		ended: function (event) {

			$(this).jPlayer("play");

		},

		swfPath: "jPlayer/js",

		supplied: "m4v, ogv",
		cssSelectorAncestor: "#jp_interface_3_1",
		size : {
	width: "480px",
    height: "360px",
    cssClass: "jp-video-270p"
			}
		

	})
	
	.bind($.jPlayer.event.timeupdate, function(event) { 
            var timeNow = event.jPlayer.status.currentTime; 
			    timeNow = timeNow*-300;
				$("#seek_3_1").stop().animate({backgroundPosition: '( '+timeNow+'px -246px)'}, 1000);});
	
	
	
	$("#4_wind_audio").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "audio/04_eleven_tigers_-_sounds_of_wind.mp3",
			
				oga: "audio/04_eleven_tigers_-_sounds_of_wind.ogg"
			});
			
			$(this).jPlayer("volume", 1);
		},
		
		
		ended: function(event) {
			
			if (autoflag==1){
				$('#5_light_audio').jPlayer("play");
				$('.pageslider').stop().animate({marginLeft: pagewidth * 5 * -1}, 1500); 
		 		$('#wanderwall').stop().animate({backgroundPosition: '( -6640px -5px)'}, 1502);
				}
			},
		
		swfPath: "jPlayer/js",
		supplied: "mp3, oga",
		cssSelectorAncestor: "#jp_interface_4"
	})
	
	.bind($.jPlayer.event.play, function() { // Using a jPlayer event to avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");})

	.bind($.jPlayer.event.timeupdate, function(event) { 
            var timeNow = event.jPlayer.status.currentTime; 
			    timeNow = timeNow*-300;
				$("#seek_4").stop().animate({backgroundPosition: '( '+timeNow+'px -246px)'}, 1000);});
				
	
	$("#5_light_audio").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "audio/05_eleven_tigers_-_sounds_of_light.mp3",
		
				oga: "audio/05_eleven_tigers_-_sounds_of_light.ogg"
				
			});
			
			$(this).jPlayer("volume", 1);
		},
		
		ended: function(event) {
			
			if (autoflag==1){
				$('#6_meta_audio').jPlayer("play");
				$('.pageslider').stop().animate({marginLeft: pagewidth * 6 * -1}, 1500); 
		 		$('#wanderwall').stop().animate({backgroundPosition: '( -7968px -5px)'}, 1502);
				}
			},
		
		swfPath: "jPlayer/js",
		supplied: "mp3, oga",
		cssSelectorAncestor: "#jp_interface_5"
	})
	
	.bind($.jPlayer.event.play, function() { // Using a jPlayer event to avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");})

	.bind($.jPlayer.event.timeupdate, function(event) { 
            var timeNow = event.jPlayer.status.currentTime; 
			    timeNow = timeNow*-300;
				$("#seek_5").stop().animate({backgroundPosition: '( '+timeNow+'px -246px)'}, 1000);});			


 $("#5_light_video").jPlayer({

		ready: function () {

			$(this).jPlayer("setMedia", {

				m4v: "tigers/5_Light/[Phill_Mayne]_-_El_Raymond_Le_Mont_-_Tryl_m_update.mp4",
				ogv: "tigers/5_Light/[Phill_Mayne]_-_El_Raymond_Le_Mont_-_Tryl_m_update.ogg",

				poster: "tigers/5_Light/[Phill_Mayne]_-_El_Raymond_Le_Mont_-_Tryl_m_update.png"

			});
			
			$(this).jPlayer("volume", 1);

		},

		swfPath: "jPlayer/js",

		supplied: "m4v, ogv",
		cssSelectorAncestor: "#jp_interface_5_1",
		size: {
    width: "400px",
    height: "225px",
    cssClass: "jp-video-270p"
}
		

	})
	
	.bind($.jPlayer.event.play, function() { // Using a jPlayer event to avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");})
	
	.bind($.jPlayer.event.timeupdate, function(event) { 
            var timeNow = event.jPlayer.status.currentTime; 
			    timeNow = timeNow*-300;
				$("#seek_5_1").stop().animate({backgroundPosition: '( '+timeNow+'px -246px)'}, 1000);});
				
	
	
	$("#6_meta_audio").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "audio/06_eleven_tigers_-_sounds_of_meta.mp3",
		
				oga: "audio/06_eleven_tigers_-_sounds_of_meta.ogg"
			});
			
			$(this).jPlayer("volume", 1);
		},
		
		ended: function(event) {
			
			if (autoflag==1){
				$('#7_war_audio').jPlayer("play");
				$('.pageslider').stop().animate({marginLeft: pagewidth * 7 * -1}, 1500); 
		 		$('#wanderwall').stop().animate({backgroundPosition: '( -9296px -5px)'}, 1502);
				}
			},
		
		swfPath: "jPlayer/js",
		supplied: "mp3, oga",
		cssSelectorAncestor: "#jp_interface_6"
	})
	
	.bind($.jPlayer.event.play, function() { // Using a jPlayer event to avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");})

	.bind($.jPlayer.event.timeupdate, function(event) { 
            var timeNow = event.jPlayer.status.currentTime; 
			    timeNow = timeNow*-300;
				$("#seek_6").stop().animate({backgroundPosition: '( '+timeNow+'px -246px)'}, 1000);});
				
	
	
	$("#7_war_audio").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "audio/07_eleven_tigers_-_sounds_of_war.mp3",
		
				oga: "audio/07_eleven_tigers_-_sounds_of_war.ogg"
			});
			
			$(this).jPlayer("volume", 1);
		},
		
		ended: function(event) {
			
			if (autoflag==1){
				$('#8_time_audio').jPlayer("play");
				$('.pageslider').stop().animate({marginLeft: pagewidth * 8 * -1}, 1500); 
		 		$('#wanderwall').stop().animate({backgroundPosition: '( -10624px -5px)'}, 1502);
				}
			},
		
		swfPath: "jPlayer/js",
		supplied: "mp3, oga",
		cssSelectorAncestor: "#jp_interface_7"
	})
	
	.bind($.jPlayer.event.play, function() { // Using a jPlayer event to avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");})

	.bind($.jPlayer.event.timeupdate, function(event) { 
            var timeNow = event.jPlayer.status.currentTime; 
			    timeNow = timeNow*-300;
				$("#seek_7").stop().animate({backgroundPosition: '( '+timeNow+'px -246px)'}, 1000);});	
				
	
	
	$("#8_time_audio").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "audio/08_eleven_tigers_-_sounds_of_time.mp3",
		
				oga: "audio/08_eleven_tigers_-_sounds_of_time.ogg"
			});
			
			$(this).jPlayer("volume", 1);
		},
		
		ended: function(event) {
			
			if (autoflag==1){
				$('#9_play_audio').jPlayer("play");
				$('.pageslider').stop().animate({marginLeft: pagewidth * 9 * -1}, 1500); 
		 		$('#wanderwall').stop().animate({backgroundPosition: '( -11952px -5px)'}, 1502);
				}
			},
		
		swfPath: "jPlayer/js",
		supplied: "mp3, oga",
		cssSelectorAncestor: "#jp_interface_8"
	})
	
	.bind($.jPlayer.event.play, function() { // Using a jPlayer event to avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");})

	.bind($.jPlayer.event.timeupdate, function(event) { 
            var timeNow = event.jPlayer.status.currentTime; 
			    timeNow = timeNow*-300;
				$("#seek_8").stop().animate({backgroundPosition: '( '+timeNow+'px -246px)'}, 1000);});
				
				
	
	$("#9_play_audio").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "audio/09_eleven_tigers_-_sounds_of_play.mp3",
	
				oga: "audio/09_eleven_tigers_-_sounds_of_play.ogg"
			});
			
			$(this).jPlayer("volume", 1);
		},
		
		ended: function(event) {
			
			if (autoflag==1){
				$('#10_love_audio').jPlayer("play");
				$('.pageslider').stop().animate({marginLeft: pagewidth * 10 * -1}, 1500); 
		 		$('#wanderwall').stop().animate({backgroundPosition: '( -13280px -5px)'}, 1502);
				}
			},
		
		swfPath: "jPlayer/js",
		supplied: "mp3, oga",
		cssSelectorAncestor: "#jp_interface_9"
	})
	
	.bind($.jPlayer.event.play, function() { // Using a jPlayer event to avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");})

	.bind($.jPlayer.event.timeupdate, function(event) { 
            var timeNow = event.jPlayer.status.currentTime; 
			    timeNow = timeNow*-300;
				$("#seek_9").stop().animate({backgroundPosition: '( '+timeNow+'px -246px)'}, 1000);});
				
				
	$("#10_love_audio").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "audio/10_eleven_tigers_-_sounds_of_love.mp3",
	
				oga: "audio/10_eleven_tigers_-_sounds_of_love.ogg"
			});
			
			$(this).jPlayer("volume", 1);
		},
		
		ended: function(event) {
			
			if (autoflag==1){
				$('#11_real_audio').jPlayer("play");
				$('.pageslider').stop().animate({marginLeft: pagewidth * 11 * -1}, 1500); 
		 		$('#wanderwall').stop().animate({backgroundPosition: '( -14608px -5px)'}, 1502);
				}
			},
		
		swfPath: "jPlayer/js",
		supplied: "mp3, oga",
		cssSelectorAncestor: "#jp_interface_10"
	})
	
	.bind($.jPlayer.event.play, function() { // Using a jPlayer event to avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");})

	.bind($.jPlayer.event.timeupdate, function(event) { 
            var timeNow = event.jPlayer.status.currentTime; 
			    timeNow = timeNow*-300;
				$("#seek_10").stop().animate({backgroundPosition: '( '+timeNow+'px -246px)'}, 1000);});
				
				
				
	$("#11_real_audio").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "audio/11_eleven_tigers_-_sounds_of_real.mp3",
		
				oga: "audio/11_eleven_tigers_-_sounds_of_real.ogg"
			});
			
			$(this).jPlayer("volume", 1);
		},
		
		ended: function(event) {
			
			if (autoflag==1){
				<!--$('#11_real_audio').jPlayer("play");-->
				$('.pageslider').stop().animate({marginLeft: pagewidth * 12 * -1}, 1500); 
		 		$('#wanderwall').stop().animate({backgroundPosition: '( -15936px -5px)'}, 1502);
				}
			},
		
		swfPath: "jPlayer/js",
		supplied: "mp3, oga",
		cssSelectorAncestor: "#jp_interface_11"
	})
	
	.bind($.jPlayer.event.play, function() { // Using a jPlayer event to avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");});						

$("#12_finale_video").jPlayer({

		solution:"html, flash",

		ready: function () {

			$(this).jPlayer("setMedia", {

				m4v: "video/eleven_tigers_-_111.mp4",

				poster: "video/video_curtain_1.jpg"

			});
			
			$(this).jPlayer("volume", 1);

		},

		swfPath: "",
		wmode: "transparent",

		supplied: "m4v",
		cssSelectorAncestor: "#jp_interface_12",
		
		size: {
    width: "796px",
    height: "450px",
    cssClass: "div.jp-video-360p"
}, 
sizeFull: {
    width: "100%",
    height: "100%",
    cssClass: "div.jp-video-full"
},

cssSelector: {
  restoreScreen: ".jp-restore-screen",
  fullScreen: ".jp-full-screen"
}
		

	})
	
	.bind($.jPlayer.event.play, function() { // Using a jPlayer event to avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");})
	
	.bind($.jPlayer.event.timeupdate, function(event) { 
            var timeNow = event.jPlayer.status.currentTime; 
			var timer = event.jPlayer.status.currentTime; 
			    timeNow = timeNow*-50;
				$("#seek_12").stop().animate({backgroundPosition: '( '+timeNow+'px -244px)'}, 1000);
				
				if (timer>0){$("#cue1").css("color", "#000");}
				if (timer<=0){$("#cue1").css("color", "#999");}
				if (timer>=504){$("#cue1").css("color", "#999");}
				$("#cue1").click(function(){$("#12_finale_video").jPlayer("play",0)});
				
				if (timer>=504){$("#cue2").css("color", "#000");}
				if (timer<504){$("#cue2").css("color", "#999");}
				if (timer>=877){$("#cue2").css("color", "#999");} 
				$("#cue2").click(function(){$("#12_finale_video").jPlayer("play",504)})
				
				if (timer>=877){$("#cue3").css("color", "#000");}
				if (timer<877){$("#cue3").css("color", "#999");}
				if (timer>=1442){$("#cue3").css("color", "#999");}
				$("#cue3").click(function(){$("#12_finale_video").jPlayer("play",877)})
				
				if (timer>=1442){$("#cue4").css("color", "#000");}
				if (timer<1442){$("#cue4").css("color", "#999");}
				if (timer>=1919){$("#cue4").css("color", "#999");}
				$("#cue4").click(function(){$("#12_finale_video").jPlayer("play",1442)})
				
				if (timer>=1919){$("#cue5").css("color", "#000");}
				if (timer<1919){$("#cue5").css("color", "#999");}
				if (timer>=2171){$("#cue5").css("color", "#999");}
				$("#cue5").click(function(){$("#12_finale_video").jPlayer("play",1919)})
				
				if (timer>=2171){$("#cue6").css("color", "#000");}
				if (timer<2171){$("#cue6").css("color", "#999");}
				if (timer>=2474){$("#cue6").css("color", "#999");}
				$("#cue6").click(function(){$("#12_finale_video").jPlayer("play",2171)})
				
				if (timer>=2474){$("#cue7").css("color", "#000");}
				if (timer<2474){$("#cue7").css("color", "#999");}
				if (timer>=2651){$("#cue7").css("color", "#999");}
				$("#cue7").click(function(){$("#12_finale_video").jPlayer("play",2474)})
				
				if (timer>=2651){$("#cue8").css("color", "#000");}
				if (timer<2651){$("#cue8").css("color", "#999");}
				if (timer>=2971){$("#cue8").css("color", "#999");}
				$("#cue8").click(function(){$("#12_finale_video").jPlayer("play",2651)})
				
				if (timer>=2971){$("#cue9").css("color", "#000");}
				if (timer<2971){$("#cue9").css("color", "#999");}
				if (timer>=3305){$("#cue9").css("color", "#999");}
				$("#cue9").click(function(){$("#12_finale_video").jPlayer("play",2971)})
				
				if (timer>=3305){$("#cue10").css("color", "#000");}
				if (timer<3305){$("#cue10").css("color", "#999");}
				if (timer>=3770){$("#cue10").css("color", "#999");}
				$("#cue10").click(function(){$("#12_finale_video").jPlayer("play",3305)})
				
				if (timer>=3770){$("#cue11").css("color", "#000");}
				if (timer<3770){$("#cue11").css("color", "#999");}
				if (timer>=3825){$("#cue11").css("color", "#999");}
				$("#cue11").click(function(){$("#12_finale_video").jPlayer("play",3770)})
				
				
				});			
				


});