# Practicas RxJs 📚
## Training 

#### Ejercicio - 6 🏋
  Realizar 2 peticiones HTTP (ajax) una después de otra.
  - La primera debe de obtener el personaje de Star Wars:
    Luke Skywalker, llamando el endpoint:  **/people/1/**
 
 - La segunda petición, debe de ser utilizando el objeto
    de la petición anterior, y tomar la especie (species),
    que es un arreglo de URLs (array), dentro de ese arreglo, 
    tomar la primera posición y realizar la llamada a ese URL, 
    el cual debería de traer información sobre su especie (Human)
    
    
**Nota** : investigar sobre la función [zip](https://rxjs-dev.firebaseapp.com/api/index/function/zip): Que permite combinar observables en un arreglo de valores

    
#### Código 👨‍💻

```js
/**
* Respuesta esperada:
* Información sobre los humanos en el universo de Star Wars
* Ejemplo de la data esperada
* { name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
*/

/**
* Respuesta esperada con Mayor dificultad
* Retornar el siguiente objeto con la información de ambas peticiones
* Recordando que se disparan una después de la otra, 
* con el URL que viene dentro del arreglo de 'species'
* Ejemplo de la data esperada:
* especie: {name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
* personaje: {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}
*/

(() =>{

    // No tocar ========================================================
    const SW_API = 'https://swapi.dev/api';                     
    const getRequest = ( url: string ) => ajax.getJSON<any>(url);
    // ==================================================================

    // Realizar el llamado al URL para obtener a Luke Skywalker
    getRequest(`Aquí va un URL`).pipe(
        // Realizar los operadores respectivos aquí
        


        

    // NO TOCAR el subscribe ni modificarlo ==
    ).subscribe( console.log )           // ==
    // =======================================



})();
```
