/**
 * Función que añade un ingrediente a la receta
 */
function addIngredients() {
    let ingredient = prompt('Dime un ingrediente a agregar a la receta')
    ul = document.createElement('ul');
    document.body.innerHTML += ul; // Agregar el 'ul' a la página

    // Crear un elemento 'li' y agregarlo al 'ul'
    let recipeList = document.createElement('li');
    recipeList.textContent = ingredient; // Añadir el nombre del ingrediente como texto
    ul.appendChild(recipeList); // Agregar el 'li' a la lista
}

// Llamar a la función
addIngredients();
