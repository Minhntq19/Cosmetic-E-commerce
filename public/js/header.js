const navHeader = document.querySelector('.header__submenu');
const makeupSub = document.querySelector('.forMakeup');
const skincareSub = document.querySelector('.forSkincare');
const offerSub = document.querySelector('.forOffer');
const aboutUsSub = document.querySelector('.forAboutUs');
const overlay = document.querySelector('.header__overlay');

navHeader.onmouseover = (e) => {
	const makeup = e.target.closest('.makeup');
	const skincare = e.target.closest('.skincare');
	const offer = e.target.closest('.exclusive__offer');
	const aboutUs = e.target.closest('.about__us');
	const showing = document.querySelector('.shows');
	if (makeup) {
		makeupSub.classList.add('shows');
		overlay.classList.add('done');
	} else if (skincare) {
		if (showing) {
			showing.classList.remove('shows');
			skincareSub.classList.add('shows');
			overlay.classList.add('done');
		} else {
			skincareSub.classList.add('shows');
			overlay.classList.add('done');
		}
	} else if (offer) {
		if (showing) {
			showing.classList.remove('shows');
			offerSub.classList.add('shows');
			overlay.classList.add('done');
		} else {
			offerSub.classList.add('shows');
			overlay.classList.add('done');
		}
	} else if (aboutUs) {
		if (showing) {
			showing.classList.remove('shows');
			aboutUsSub.classList.add('shows');
			overlay.classList.add('done');
		} else {
			aboutUsSub.classList.add('shows');
			overlay.classList.add('done');
		}
	} else {
		document.querySelector('.shows').classList.remove('shows');
		overlay.classList.remove('done');
	}
};
navHeader.onmouseleave = () => {
	const showsSub = document.querySelector('.shows');
	if (showsSub) {
		showsSub.onmouseleave = () => {
			showsSub.classList.remove('shows');
			overlay.classList.remove('done');
		};
	}
};
