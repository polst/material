// window smart resize
function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};

// window resize
	on_resize(function() {
		// fixed left/right hand side column padding bottom and width
			if ($('.content-fix').length) {
				contentFixPushCal();
			};

		// footer push
			footerPush();

		// header height
			headerHeightCal();

		// tab switch
			$('.tab-nav').each(function() {
				tabSwitch($('.nav > li.active', $(this)), null);
			});
	})();