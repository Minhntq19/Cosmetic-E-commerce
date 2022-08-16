const header = document.querySelector('.header__submenu');
const makeupSub = document.querySelector('.forMakeup');
const skincareSub = document.querySelector('.forSkincare');
const offerSub = document.querySelector('.forOffer');
const aboutUsSub = document.querySelector('.forAboutUs');

header.onmouseover = (e) => {
	const makeup = e.target.closest('.makeup');
	const skincare = e.target.closest('.skincare');
	const offer = e.target.closest('.exclusive__offer');
	const aboutUs = e.target.closest('.about__us');
	if (makeup) {
		makeupSub.classList.add('active');
	} else if (skincare) {
		document.querySelector('.active').classList.remove('active');
		skincareSub.classList.add('active');
	} else if (offer) {
		document.querySelector('.active').classList.remove('active');
		offerSub.classList.add('active');
	} else if (aboutUs) {
		document.querySelector('.active').classList.remove('active');
		aboutUsSub.classList.add('active');
	} else {
		document.querySelector('.active').classList.remove('active');
	}
};
header.onmouseleave = () => {
	const activeSub = document.querySelector('.active');
	if (activeSub) {
		activeSub.onmouseleave = () => {
			activeSub.classList.remove('active');
		};
	}
};
