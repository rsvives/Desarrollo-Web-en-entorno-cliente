const img = document.getElementById('change-img');
const btn = document.getElementById('btn-change');
/**
 * Función que cambia la imagen dependiendo de la imagen
 */
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
