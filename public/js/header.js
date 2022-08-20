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
		makeupSub.classList.add('shows');
		overlay.classList.add('done');
	} else if (skincare) {
		document.querySelector('.shows').classList.remove('shows');
		skincareSub.classList.add('shows');
		overlay.classList.add('done');
	} else if (offer) {
		document.querySelector('.shows').classList.remove('shows');
		offerSub.classList.add('shows');
		overlay.classList.add('done');
	} else if (aboutUs) {
		document.querySelector('.shows').classList.remove('shows');
		aboutUsSub.classList.add('shows');
		overlay.classList.add('done');
	} else {
		document.querySelector('.shows').classList.remove('shows');
		overlay.classList.remove('done');
	}
};
header.onmouseleave = () => {
	const showsSub = document.querySelector('.shows');
	if (showsSub) {
		showsSub.onmouseleave = () => {
			showsSub.classList.remove('shows');
			overlay.classList.remove('done');
		};
	}
};
