
const 
	body = document.querySelector('body'),
	html = document.querySelector('html'),
	menu = document.querySelectorAll('.header__burger, .header__nav, body'),
	burger = document.querySelector('.header__burger'),
	header = document.querySelector('.header');


// =-=-=-=-=-=-=-=-=-=- <image-aspect-ratio> -=-=-=-=-=-=-=-=-=-=-

const imageBody = document.querySelectorAll('.image-body, figure');
imageBody.forEach(imageBody => {
	const img = imageBody.querySelector('img'), style = getComputedStyle(imageBody);
	if(img) {
		if(img.getAttribute('width') && img.getAttribute('height') && style.position == "relative")
		imageBody.style.paddingTop = Number(img.getAttribute('height')) / Number(img.getAttribute('width')) * 100 + '%';
	}
	
})

// =-=-=-=-=-=-=-=-=-=- </image-aspect-ratio> -=-=-=-=-=-=-=-=-=-=-



// =-=-=-=-=-=-=-=-=-=- <click events> -=-=-=-=-=-=-=-=-=-=-

body.addEventListener('click', function (event) {

	function $(elem) {
		return event.target.closest(elem)
	}

	// =-=-=-=-=-=-=-=-=-=- <open menu in header> -=-=-=-=-=-=-=-=-=-=-

	if ($('.header__burger')) {
		menu.forEach(element => {
			element.classList.toggle('_mob-menu-active')
		})
	}

	// =-=-=-=-=-=-=-=-=-=- </open menu in header> -=-=-=-=-=-=-=-=-=-=-



	// =-=-=-=-=-=-=-=-=-=-=-=- <scroll on click to section> -=-=-=-=-=-=-=-=-=-=-=-=
	
	let btnToScroll = $('.scroll-link');
	if(btnToScroll && (window.location.pathname === '/' || window.location.pathname[1] === '#') ) {
		event.preventDefault();
		let section;
	
		section = document.querySelector(btnToScroll.getAttribute('href').slice(1))
	
		menu.forEach(elem => {
			elem.classList.remove('_mob-menu-active')
		})
	
		if(section) {
			section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
		} else {
			body.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
		}
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </scroll on click to section> -=-=-=-=-=-=-=-=-=-=-=-=

	
	

})

// =-=-=-=-=-=-=-=-=-=- </click events> -=-=-=-=-=-=-=-=-=-=-



// =-=-=-=-=-=-=-=-=-=-=-=- <resize> -=-=-=-=-=-=-=-=-=-=-=-=

let windowSize = 0;

function resize() {

	html.style.setProperty("--height-header", header.offsetHeight + "px");
	if(windowSize != window.innerWidth) {
		html.style.setProperty("--svh", window.innerHeight * 0.01 + "px");
	}
	html.style.setProperty("--vh", window.innerHeight * 0.01 + "px");

	windowSize = window.innerWidth;

}

resize();

window.addEventListener('resize', resize)

// =-=-=-=-=-=-=-=-=-=-=-=- </resize> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=

if(document.querySelector('.partners__slider')) {
	const partnersSlider = new Splide('.partners__slider', {
		type: "loop",
		autoWidth: true,
		gap: 20,
		pagination: false,
		breakpoints: {
			992: {
				gap: 10,
			}
		}
	})

	partnersSlider.mount();
}

// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=-=-=- <scroll> -=-=-=-=-=-=-=-=-=-=-=-=

let coordsY;
function scroll() {
	coordsY = Math.abs(body.getBoundingClientRect().y);
	if(coordsY > 0 && !header.classList.contains('_scroll')) {
		header.classList.add('_scroll');
	} else if(coordsY <= 0 && header.classList.contains('_scroll')) {
		header.classList.remove('_scroll');
	}
}

scroll()

document.addEventListener('scroll', scroll);

// =-=-=-=-=-=-=-=-=-=-=-=- </scroll> -=-=-=-=-=-=-=-=-=-=-=-=



const doctorCardVideoWrapper = document.querySelectorAll('.doctor-card__video--wrapper');
doctorCardVideoWrapper.forEach(doctorCardVideoWrapper => {
	const iframe = doctorCardVideoWrapper.querySelector('iframe');
	if(iframe) {
		if(iframe.getAttribute('width') && iframe.getAttribute('height')) {
			doctorCardVideoWrapper.style.setProperty('--aspect-ratio', Number(iframe.getAttribute('height')) / Number(iframe.getAttribute('width')) * 100 + '%');
		}
	}
})


