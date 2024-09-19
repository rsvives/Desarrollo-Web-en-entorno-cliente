let img = document.getElementById('change-img');
let btn = document.getElementById('btn-change');
function changeIMG() {
	if (img.src.match('img1')) {
		img.src = './img/img2.jpg';
	} else if (img.src.match('img2')) {
		img.src = './img/img3.jpg';
	} else if (img.src.match('img3')) {
		img.src = './img/img4.jpg';
	} else if (img.src.match('img4')) {
		img.src = './img/img1.jpg';
	}
}
btn.onclick = changeIMG;
