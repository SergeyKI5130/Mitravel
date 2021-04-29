const swiper1 = document.querySelector('.slider-container'),
	swiper2 = document.querySelector('.swiper-container'),
	burger = document.querySelector('.burger'),
	closeBurger = document.querySelector('.menu__close'),
	menu = document.querySelector('.menu'),
	playButtonsFirst = document.querySelectorAll('.main-slider__play');

let swiperBig = new Swiper(swiper1, {
	centeredSlides: true,
	slidesPerView: "auto",
	loop: true,
	spaceBetween: 105,
});

let swiperMain = new Swiper(swiper2, {
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 10,
	speed: 800,
	navigation: {
		nextEl: '.btn-right',
		prevEl: '.btn-left',
	},
});

swiperMain.on('transitionEnd', function () {
	let videos = document.querySelectorAll('.first__slider video');
	videos.forEach((el) => {
		el.pause();
		el.currentTime = 0;
	});
	playButtonsFirst.forEach((el) => {
		el.style.display = 'block';
	});
});

burger.addEventListener("click", () => {
	menu.classList.add('menu--visible');
});

closeBurger.addEventListener("click", () => {
	menu.classList.remove('menu--visible');
});

playButtonsFirst.forEach((el) => {
	el.addEventListener('click', (e) => {
		let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
		video.play();
		e.currentTarget.style.display = 'none';
		setTimeout(() => {
			video.volume = 0.5;
		}, 1000);
	})
})
