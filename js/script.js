/*====================Preloader==========================*/
function loadData() {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 2000);
	})
}
loadData().then(() => {
	let preloaderEl = document.getElementById('loader');
	preloaderEl.classList.add('hidden');
	$('body').removeClass('loading');
	preloaderEl.classList.remove('visible');
});
/*=========================Animation====================================*/
loadData().then(() => {
	animOnScroll();
	window.addEventListener('scroll', animOnScroll);
});
/*====================Active portfolio nav==========================*/
$(function () {
	$(".portfolio__work-button").on('click', function () {
		$('.portfolio__work-button').removeClass('active')

		if ($(this).attr('aria-expanded') !== false) {
			$(this).addClass('active')
		}
	})
});
/*=======================Fixed Header=============================*/
window.addEventListener('scroll', function () {
	let header = document.querySelector('header');
	header.classList.toggle('fixed', window.scrollY > 0);
});
/*====================Slider toggle==========================*/
$(".fa-times").click(function () {
	$(".carousel-inner").toggle("d-none");
	if ($(this).hasClass('fa-times')) {
		$(this).removeClass('fa-times');
		$(this).addClass('fa-check');
	} else {
		$('fas fa-times').removeClass('fa-times');
		$(this).addClass('fa-times');
	}
});

/*====================Header click menu burger - body lock==========================*/
$(document).ready(function () {
	$('.navbar-toggler').click(function (event) {
		$('.header__burger').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

/*====================Add style for contact input==========================*/
$('.form-control').focus(function () {
	$(this).parent().find('.input-group-text').css({'border-color': '#f39c12', 'color': '#f39c12'});
	$(this).css('border-color', '#f39c12');
	$(this).parent().find('.far').css('color', '#f39c12');
});
$('.form-control').focusout(function () {
	$(this).parent().find('.input-group-text').css({ 'border-color': '#ced4da', 'color': '#808080'});
	$(this).css('border-color', '#ced4da');
	$(this).parent().find('.far').css('color', '#808080');
});

/*====================Animation==========================*/
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
}

