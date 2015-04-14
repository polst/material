// btn waves
	Waves.displayEffect({
		duration: 900
	});
// fixed left/right hand side column affix
	var footerHeight = 0,
	    htmlHeight = 0;

	$(window).on('scroll', function() {
		$('.content-fix').each(function(index) {
			if ($(this).outerHeight() < $(this).closest('.row-fix').outerHeight()) {
				contentFix($(this));
			}
		});
	});

	function contentFix(content) {
		var scrolled = window.innerHeight + window.pageYOffset;

		if (window.pageYOffset >= (content.offset().top - headerHeight)) {
			if ((content.is('[class*="col-xx"]')) || (content.is('[class*="col-xs"]') && $(window).width() >= 480) || (content.is('[class*="col-sm"]') && $(window).width() >= 768) || (content.is('[class*="col-md"]') && $(window).width() >= 992) || (content.is('[class*="col-lg"]') && $(window).width() >= 1440)) {
				if (!content.hasClass('fixed')) {
					content.addClass('fixed');
					$('.content-fix-wrap', content).scrollTop(0);
				};
				if (htmlHeight <= scrolled) {
					$('.content-fix-inner', content).css('padding-bottom', scrolled - htmlHeight);
				};
			};
		} else {
			content.removeClass('fixed');
			$('.content-fix-inner', content).css('padding-bottom', '');
		}
	}

// fixed left/right hand side column padding bottom and width
	function contentFixPushCal() {
		htmlHeight = $('body').height();

		$('.content-fix-scroll').each(function(index) {
			$(this).css('width', $(this).closest('.content-fix').outerWidth());
			$('.content-fix-inner', $(this)).css('width', $(this).closest('.content-fix').width());
		});

		if ($('.footer').length) {
			footerHeight = $('.footer').outerHeight();
		}
	}
$('.datepicker-adv-default').each(function(index) {
	var datepickerAdv = $(this).pickadate(),
			datepickerApi = datepickerAdv.pickadate('picker');

	datepickerApi.on({
		close: function() {
			$(document.activeElement).blur();
		},
		open: function() {
			datepickerApi.set('select', datepickerApi.get(), {format: 'd/m/yyyy'});
		}
	});
});
// dropdown menu hide
	$(document).on('hide.bs.dropdown', '.dropdown', function() {
		// header affix
			if ($(this).parents('.header').length) {
				$('header').removeClass('open');
			};
	});
		
// dropdown menu show
	$(document).on('show.bs.dropdown', '.dropdown', function() {
		var $dropdownMenu = $('.dropdown-menu', $(this)),
		    $dropdownToggle = $('[class*="dropdown-toggle"]', $(this)),
		    dropdownPadding = $('a', $dropdownMenu).css('padding-left').replace('px', ''),
		    dropdownWidth;

		if ($dropdownMenu.length && $dropdownToggle.length) {
			// dropdown menu max width
				if ($dropdownMenu.hasClass('dropdown-menu-right') || $dropdownMenu.parents('.nav.pull-right').length) {
					dropdownWidth = $dropdownToggle.offset().left + $dropdownToggle.outerWidth() - dropdownPadding;
				} else {
					dropdownWidth = window.innerWidth - $dropdownToggle.offset().left - dropdownPadding;
				}

				$dropdownMenu.css('max-width', dropdownWidth);

			// header affix
				if ($dropdownMenu.parents('.header').length) {
					$('header').addClass('open');
				};
		};
	});

// close menu and/or tile if esc key is pressed
	$(document).keyup(function(e) {
		if (e.which == '27') {
			if ($('body').hasClass('menu-open')) {
				mReset();
			} else if (!$('body').hasClass('modal-open')) {
				tReset();
			}
		};
	});
// footer push
	function footerPush() {
		$('body').css('margin-bottom', $('.footer').outerHeight());
	}
// checkbox & radio
	$('.checkbox-adv').each(function() {
		$('label', $(this)).append('<span class="circle"></span><span class="circle-check"></span><span class="circle-icon icon icon-done"></span>');
	});

	$('.radio-adv').each(function() {
		$('label', $(this)).append('<span class="circle"></span><span class="circle-check"></span>');
	});

// floating label
	if($('.form-group-label').length) {
		$('.form-group-label .form-control').each(function() {
			floatingLabel($(this));
		});
	};

	$(document).on('change', '.form-group-label .form-control', function() {
		floatingLabel($(this));
	});

	$(document).on('focusin', '.form-group-label .form-control', function() {
		$(this).closest('.form-group-label').addClass('control-focus');
	});

	$(document).on('focusout', '.form-group-label .form-control', function() {
		$(this).closest('.form-group-label').removeClass('control-focus');
	});

	function floatingLabel(input) {
		var parent = input.closest('.form-group-label');

		if(input.val()) {
			parent.addClass('control-highlight');
		} else {
			parent.removeClass('control-highlight');
		}
	}

// icon label
	$(document).on('focusin', '.form-group-icon .form-control', function() {
		$(this).closest('.form-group-icon').addClass('control-focus');
	});

	$(document).on('focusout', '.form-group-icon .form-control', function() {
		$(this).closest('.form-group-icon').removeClass('control-focus');
	});

// switch
	$(document).on('click', '.switch-toggle', function() {
		var $this = $(this);

		if (!$this.hasClass('switch-toggle-on')) {
			$this.addClass('switch-toggle-on');
			setTimeout(function() {
				$this.removeClass('switch-toggle-on');
			}, 300);
		};
	});

// textarea autosize
	$('.textarea-autosize').textareaAutoSize();
// get target from trigger
	function getTargetFromTrigger(trigger) {
		var href;
		var target = trigger.attr('data-target')
		    || (href = trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');

		return target;
	}
// header
	var $header = $('.header'),
	    headerHeight;

// header affix
	$(window).on('scroll', function() {
		if (window.pageYOffset > headerHeight) {
			$header.addClass('fixed');
		} else {
			$header.removeClass('fixed');
		}
	});

// header height
	function headerHeightCal() {
		headerHeight = $header.height();
	}
// menu close
	$(document).on('click', function(e) {
		var $target = $(e.target);

		if ($('body').hasClass('menu-open') && !$target.is('.fbtn-container *, .menu *')) {
			mReset();
		}
	});
	
	function mReset() {
		$('body').removeClass('menu-open');
		$('.menu-toggle').closest('li.active').removeClass('active');
		$('.menu.open').removeClass('open');
	}

// menu open
	$(document).on('click', '.menu-toggle', function(e) {
		e.preventDefault();
		e.stopPropagation();

		var $this = $(this),
		    $thisLi = $this.closest('li'),
		    $thisMenu = $($this.attr('href'));

		if ($thisLi.hasClass('active')) {
			$('body').removeClass('menu-open');
			$thisLi.removeClass('active');
			$thisMenu.removeClass('open');
		} else {
			$('body').addClass('menu-open');
			$('.menu-toggle').closest('li.active').removeClass('active');
			$('.menu.open').removeClass('open');
			$thisLi.addClass('active');
			$thisMenu.addClass('open');
			if ($thisMenu.hasClass('menu-search')) {
				$('.menu-search-focus').focus();
			};
		}
	});

// menu toggle collapse
	if ($('.menu-collapse').length) {
		$('.menu-collapse').each(function(index) {
			var $this = $(this),
			    $thisLi = $this.closest('li');
			if ($this.hasClass('in')) {
				$thisLi.attr('data-height', $thisLi.height());
			};
		});
	};

	$(document).on('show.bs.collapse', '.menu-collapse', function() {
		var $this = $(this),
		    $thisLi = $this.closest('li'),
		    height,
		    offset = $thisLi.offset().top - window.pageYOffset,
		    winHeight = window.innerHeight;

		if ($thisLi.attr('data-height') == null) {
			$thisLi.attr('data-height', $this.height() + $('> a', $thisLi).outerHeight());
		};

		height = parseInt($thisLi.attr('data-height'));

		if (height + offset > winHeight) {
			var $thisMenu = $this.closest('.menu-wrap');
			$thisMenu.animate({
				scrollTop: height + offset - winHeight + $thisMenu.scrollTop()
			}, 300);
		};
	});
// modal iframe
	$(document).on('click', '.modal-close-iframe', function(e) {
		e.preventDefault();

		window.parent.closeModal(getTargetFromTrigger($(this)));
	});

	window.closeModal = function(iframe) {
		$(iframe).modal('hide');
	};
// sortable
$('.sortable-list').sortable({
	draggable: '.sortable-item',
	ghostClass: 'sortable-ghost',
	handle: '.sortable-handle'
});
// tab indicator
	$('.tab-nav').each(function() {
		$(this).append('<div class="tab-nav-indicator"></div>');
		tabSwitch($('.nav > li.active', $(this)), null);
	});

// tab switch
	$(document).on('show.bs.tab', '.tab-nav a[data-toggle="tab"]', function(e) {
	 	tabSwitch($(e.target), $(e.relatedTarget));
	});

	function tabSwitch(newTab, oldTab) {
		var $nav = newTab.closest('.tab-nav'),
		    $navIndicator = $('.tab-nav-indicator', $nav),
		    navOffset = $nav.offset().left,
	 	    navWidth = $nav.width(),
	 	    newTabOffset = newTab.offset().left,
	 	    newTabWidth = newTab.outerWidth();

		if (oldTab != null && oldTab.offset().left > newTabOffset) {
			$navIndicator.addClass('reverse');
			setTimeout(function() {
				$navIndicator.removeClass('reverse');
			}, 450);
		};

	 	$navIndicator.css({
	 		left: (newTabOffset - navOffset),
	 		right: navOffset + navWidth - newTabOffset - newTabWidth
	 	});
	}
// tile
	$(document).on('click', function(e) {
		var $target = $(e.target);

		if ($target.is('[data-toggle="tile"], [data-toggle="tile"] *') && !$target.is('[data-ignore="tile"], [data-ignore="tile"] *')) {
			var $trigger = $target.closest('[data-toggle="tile"]');
			if ($trigger.attr('data-parent') != null) {
				$($trigger.attr('data-parent')).find('.tile-active-show').collapse('hide');
			};
			$(getTargetFromTrigger($trigger)).collapse('toggle');
		} else if ($target.is('[data-dismiss="tile"]')) {
			$target.closest('.tile-collapse').find('.tile-active-show').collapse('hide');
		} else if (!$target.is('.tile-collapse, .tile-collapse *')) {
			tReset();
		};
	});

	function tReset() {
		$('.tile-collapse.active').each(function(index) {
			var $collapse = $('.tile-active-show', $(this));
			if (!$collapse.hasClass('tile-active-show-still')) {
				$collapse.collapse('hide');
			};
		});
	}

// tile hide
	$(document).on('hide.bs.collapse', '.tile-active-show', function() {
		$(this).closest('.tile-collapse').removeClass('active');
	});

// tile show
	$(document).on('show.bs.collapse', '.tile-active-show', function() {
		$(this).closest('.tile-collapse').addClass('active');
	});
// toast
	var toastTimeout,
	    toastTimeoutInner;

	$('[data-toggle="toast"]').tooltip({
		animation: false,
		container: '.toast',
		html: true,
		placement: 'bottom',
		template: '<div class="tooltip"><div class="toast-inner tooltip-inner"></div></div>',
		trigger: 'manual'
	});

	// toast dismiss
		$(document).on('click', '[data-dismiss="toast"]', function(e) {
			e.preventDefault();
			toastHide(0);
		});

		function toastHide(timerOne) {
			clearTimeout(toastTimeoutInner);
			clearTimeout(toastTimeout);

			var timerTwo = timerOne + 300;

			toastTimeout = setTimeout(function() {
				$('.toast').removeClass('toast-show');
				$('.fbtn-container').css('margin-bottom', '');
			}, timerOne);

			toastTimeoutInner = setTimeout(function() {
				$('.toast-toggled').tooltip('hide').removeClass('toast-toggled');
			}, timerTwo);
		}

	// toast hover
		$(document).on('mouseenter', '.toast', function() {
			clearTimeout(toastTimeoutInner);
			clearTimeout(toastTimeout);
		});

		$(document).on('mouseleave', '.toast', function() {
			toastHide(5000);
		});

	// toast show
		$(document).on('click', '[data-toggle="toast"]', function() {
			var $this = $(this);

			if (!$('.toast').length) {
				$('body').append('<div class="toast"></div>');
			};

			if (!$this.hasClass('toast-toggled')) {
				$('.toast-toggled').tooltip('hide').removeClass('toast-toggled');
				$this.tooltip('show').addClass('toast-toggled');
			};
		});

		$(document).on('shown.bs.tooltip', '[data-toggle="toast"]', function() {
			var $this = $(this);

			$('.toast').addClass('toast-show');

			if ($(window).width() < 768 && $('.fbtn-container').length) {
				$('.fbtn-container').css('margin-bottom', $('.toast').outerHeight());
			};

			toastHide(5000);
		});
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