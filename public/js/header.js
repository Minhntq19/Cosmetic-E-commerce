const navHeader = document.querySelector('.header__submenu');
const makeupSub = document.querySelector('.forMakeup');
const skincareSub = document.querySelector('.forSkincare');
const offerSub = document.querySelector('.forOffer');
const aboutUsSub = document.querySelector('.forAboutUs');
const overlay = document.querySelector('.header__overlay');
const headerAsset = document.querySelector('.header__asset');

headerAsset.onmouseover = (e) => {
	const headerBag = e.target.closest('.header__bag');
	const headerUser = e.target.closest('.header__user');
	const shopBag = document.querySelector('.shopping__bag');
	console.log(e.target);
	if (headerBag) {
		shopBag.classList.add('showbag');
	} else if (headerUser) {
		const showing = document.querySelector('.showbag');
		if (showing) {
			showing.classList.remove('showbag');
		}
	} else {
		const showing = document.querySelector('.showbag');
		if (showing) {
			showing.classList.remove('showbag');
		}
	}
};
headerAsset.onmouseleave = () => {
	const shopBag = document.querySelector('.showbag');
	shopBag.onmouseleave = (e) => {
		if (shopBag) {
			shopBag.classList.remove('showbag');
		}
	};
};
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
		const showing = document.querySelector('.shows');
		if (showing) {
			showing.classList.remove('shows');
			overlay.classList.remove('done');
		}
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
// popup view
const productContainer = document.querySelector('.container');
const productPopup = document.querySelector('.modal');
const dataAPI = 'https://cosmestic.herokuapp.com/data';
const getData = async () => {
	const response = await fetch(dataAPI);
	const data = await response.json();
	productContainer.onclick = (e) => {
		const viewBtn = e.target.closest('.btn-view');
		if (viewBtn) {
			const ProductId = viewBtn.id - 1;
			const Pid = viewBtn.id;
			productPopup.innerHTML = `
				<div class="modal-dialog modal-dialog-centered modal-xl">
				<div class="modal-content">
					<div class="modal-body">
						<div class="container-fluid">
							<div class="row">
								<div class="col-6">
									<div
										id="carouselExampleDark"
										class="carousel carousel-dark slide"
										data-bs-ride="carousel"
									>
										<div class="carousel-indicators">
											<button
												type="button"
												data-bs-target="#carouselExampleDark"
												data-bs-slide-to="0"
												class="active"
												aria-current="true"
												aria-label="Slide 1"
											></button>
											<button
												type="button"
												data-bs-target="#carouselExampleDark"
												data-bs-slide-to="1"
												aria-label="Slide 2"
											></button>
											<button
												type="button"
												data-bs-target="#carouselExampleDark"
												data-bs-slide-to="2"
												aria-label="Slide 3"
											></button>
										</div>
										<div class="carousel-inner">
											<div class="carousel-item active" data-bs-interval="5000">
												<img
													src="${data[ProductId].ProductIMG}"
													class="card-img-top"
													alt="face-1"
												/>
											</div>
											<div class="carousel-item" data-bs-interval="5000">
												<img
													src="${data[ProductId].ProductIMG1}"
													class="card-img-top"
													alt="face-1"
												/>
											</div>
											<div class="carousel-item">
												<img
													src="${data[ProductId].ProductIMG2}"
													class="card-img-top"
													alt="face-1"
												/>
											</div>
										</div>
										<button
											class="carousel-control-prev"
											type="button"
											data-bs-target="#carouselExampleDark"
											data-bs-slide="prev"
										>
											<span
												class="carousel-control-prev-icon"
												aria-hidden="true"
											></span>
											<span class="visually-hidden">Previous</span>
										</button>
										<button
											class="carousel-control-next"
											type="button"
											data-bs-target="#carouselExampleDark"
											data-bs-slide="next"
										>
											<span
												class="carousel-control-next-icon"
												aria-hidden="true"
											></span>
											<span class="visually-hidden">Next</span>
										</button>
									</div>
								</div>
								<div class="col-6">
									<button
										type="button"
										class="btn-close"
										data-bs-dismiss="modal"
										aria-label="Close"
									></button>
									<h1>Double Serum</h1>
									<p>Our most powerful age control concentrate</p>
									<h3 class="price dib mb__5">
										<ins>$45.00</ins>
									</h3>
									<div CLASS="my-4">
										<h5 class="mb-3">SIZE:</h5>
										<div
											class="btn-toolbar"
											role="toolbar"
											aria-label="Toolbar with button groups"
										>
											<div
												class="btn-group me-2"
												role="group"
												aria-label="First group"
											>
												<button
													type="button"
													class="btn btn-outline-dark"
													style="border-radius: 100%"
												>
													S
												</button>
											</div>
											<div
												class="btn-group me-2"
												role="group"
												aria-label="Second group"
											>
												<button
													type="button"
													class="btn btn-outline-dark"
													style="border-radius: 100%"
												>
													M
												</button>
											</div>
											<div class="btn-group" role="group" aria-label="Third group">
												<button
													type="button"
													class="btn btn-outline-dark"
													style="border-radius: 100%"
												>
													L
												</button>
											</div>
										</div>
									</div>
									<div
										class="btn-toolbar"
										role="toolbar"
										aria-label="Toolbar with button groups"
									>
										<div class="btn-group me-2" role="group" aria-label="Second group">
											<button type="button" class="btn btn-danger" id="${Pid}">ADD TO BAG</button>
										</div>
										<div class="btn-group" role="group" aria-label="Third group">
											<button
												type="button"
												class="btn btn-outline-warning"
												style="border-radius: 100%"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													class="bi bi-heart"
													viewBox="0 0 16 16"
												>
													<path
														d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
													/>
												</svg>
											</button>
										</div>
									</div>

									<hr />
									<p>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-truck"
											viewBox="0 0 16 16"
										>
											<path
												d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
											/>
										</svg>
										Free Shipping
									</p>
									<p>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-cash-stack"
											viewBox="0 0 16 16"
										>
											<path
												d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
											/>
											<path
												d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"
											/>
										</svg>
										Get a 2-pc gift set with $350 spend.
									</p>
									<p>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-coin"
											viewBox="0 0 16 16"
										>
											<path
												d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"
											/>
											<path
												d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
											/>
											<path
												d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
											/>
										</svg>
										You can earn 225 points by purchasing this item.
									</p>
									<a class="text-center" href="/product/detail/${Pid}">
										<b>SEE PRODUCT DETAILS</b>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-arrow-right"
											viewBox="0 0 16 16"
										>
											<path
												fill-rule="evenodd"
												d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
				`;
		}
	};
	const addBtn = document.querySelector('.btn-danger');
	console.log(addBtn.id);
	addBtn.onclick = (e) => {
		console.log(1);
	};
};
getData();
