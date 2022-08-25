const bigImg = document.querySelector('#bigImg');
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img4 = document.querySelector('#img4');
const img5 = document.querySelector('#img5');

console.log(img1.attributes.src.value);
img1.onclick = () => {
	bigImg.setAttribute('src', img1.attributes.src.value) = img1.attributes.src.value;
};
img2.onclick = () => {
	bigImg.setAttribute('src', img2.attributes.src.value)
};
img3.onclick = () => {
	bigImg.setAttribute('src', img3.attributes.src.value)
};
img4.onclick = () => {
	bigImg.setAttribute('src', img4.attributes.src.value)
};
img5.onclick = () => {
	bigImg.setAttribute('src', img5.attributes.src.value)
};
