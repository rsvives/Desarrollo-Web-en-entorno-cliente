let  array = ['¡Feliz cumpleaños!', 
 'Feliz navidades a todos', 
 'Te deseo una feliz navidad', 
 'En Navidades nos vamos de fiesta', 
 'Pasa un buen fin de semana']; 
 let newArray = []
for(let i = 0; i < array.length; i++) {
    
    if(array[i].toLowerCase().includes('navidad') && array[i].toLowerCase.indexOf('fiesta')>0 ){
        newArray.push(array[i])
    }
    
 }
console.log(newArray) 

 
 
 
