const header = document.querySelector('.header__submenu');
const makeupSub = document.querySelector('.forMakeup');
const skincareSub = document.querySelector('.forSkincare');
const offerSub = document.querySelector('.forOffer');
const aboutUsSub = document.querySelector('.forAboutUs');
const overlay = document.querySelector('.header__overlay');

header.onmouseover = (e) => {
	const makeup = e.target.closest('.makeup');
	const skincare = e.target.closest('.skincare');
	const offer = e.target.closest('.exclusive__offer');
	const aboutUs = e.target.closest('.about__us');
	if (makeup) {
		makeupSub.classList.add('show');
		overlay.classList.add('done');
	} else if (skincare) {
		document.querySelector('.show').classList.remove('show');
		skincareSub.classList.add('show');
		overlay.classList.add('done');
	} else if (offer) {
		document.querySelector('.show').classList.remove('show');
		offerSub.classList.add('show');
		overlay.classList.add('done');
	} else if (aboutUs) {
		document.querySelector('.show').classList.remove('show');
		aboutUsSub.classList.add('show');
		overlay.classList.add('done');
	} else {
		document.querySelector('.show').classList.remove('show');
		overlay.classList.remove('done');
	}
};
header.onmouseleave = () => {
	const showSub = document.querySelector('.show');
	if (showSub) {
		showSub.onmouseleave = () => {
			showSub.classList.remove('show');
			overlay.classList.remove('done');
		};
	}
};
