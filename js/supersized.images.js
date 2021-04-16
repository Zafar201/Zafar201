
		
		jQuery(function($){
				
				$.supersized({
				
					// Functionality
					slideshow               :   1,			// Slideshow on/off
					autoplay				:	1,			// Slideshow starts playing automatically
					start_slide             :   1,			// Start slide (0 is random)
					stop_loop				:	0,			// Pauses slideshow on last slide
					random					: 	0,			// Randomize slide order (Ignores start slide)
					slide_interval          :   2000,		// Length between transitions
					transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	1000,		// Speed of transition
					new_window				:	1,			// Image links open in new window/tab
					pause_hover             :   0,			// Pause slideshow on hover
					keyboard_nav            :   1,			// Keyboard navigation on/off
					performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
					image_protect			:	1,			// Disables image dragging and right click with Javascript
															   
					// Size & Position						   
					min_width		        :   0,			// Min width allowed (in pixels)
					min_height		        :   0,			// Min height allowed (in pixels)
					vertical_center         :   1,			// Vertically center background
					horizontal_center       :   1,			// Horizontally center background
					fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
					fit_portrait         	:   1,			// Portrait images will not exceed browser height
					fit_landscape			:   0,			// Landscape images will not exceed browser width
															   
					// Components							
					slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
					thumb_links				:	0,			// Individual thumb links for each slide
					thumbnail_navigation    :   0,			// Thumbnail navigation
					slides 					:  	[			// Slideshow Images
						{image : './images/slider/banner2.jpeg', title : 'Maleha Desert <div class="slidedescription">I took this photo in Maleha Desert Located in UAE -  Sharjah with MY Sony Alpha 7 Mark III . I was amazed by quality of the image especially that I captured with the kit lens FE 28-70 f/3.5 - 5.6 </div>', thumb : '', url : 'http://themes.tvda.eu/'},
						{image : './images/slider/banner3.jpeg', title : '"Fujeriah Mountains"<div class="slidedescription">This how it looks like the sunrise view from the top of fujeriah mountains.I spent the night  camping there then I took my tripod and my Sony to the top just to capture this moment. </div>', thumb : '', url : 'http://themes.tvda.eu/'},
						{image : './images/slider/banner7.jpeg', title : 'The Sheikh Zayed Grand Mosque <div class="slidedescription">A majestic sunset for a majestic mosque Located in Abu Dhabi, UAE</div>', thumb : '', url : 'http://themes.tvda.eu/'},
						{image : './images/slider/banner9.jpeg', title : 'Hatta Dam <div class="slidedescription">Photo of Hatta Dam in Dubai, I "ve captured this one with Sony alpha 7 mark III and tamron 17-28 f-2.8 lens </div>', thumb : '', url : 'http://themes.tvda.eu/'},
												],
												
					// Theme Options			   
					progress_bar			:	0,			// Timer for each slide							
					mouse_scrub				:	0
					
				});
		    });
