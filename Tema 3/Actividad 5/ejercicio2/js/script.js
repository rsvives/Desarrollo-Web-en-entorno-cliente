let howManyRepeat = prompt('Introduce el número de veces que deseas repetir el numero de 0 a 100')
let numbersArray = []
for (let numbers = 0; numbers < howManyRepeat; numbers++) {
     numbersArray.push(Math.floor(Math.random() * 101))
}
for (let numbersRepeated = 0; numbersRepeated < numbersArray.length; numbersRepeated++) {
if(numbersRepeated == numbersArray){
     console.log(numbersRepeated);
}
	// Enviamos la solicitud al mismo archivo
     function name() {
     var xhr = new XMLHttpRequest(); xhr.open('POST', 'index.php', true); // Enviamos la solicitud al mismo archivo
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
       xhr.onload = function() { if (this.status === 200) { document.getElementById('productContainer').innerHTML = this.responseText; } }; xhr.send('gender=' + gender);
     }
}
