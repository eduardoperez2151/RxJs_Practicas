# Practicas RxJs 📚
## Training 

#### Ejercicio - 4 🏋
Dado el siguiente código de debe realizar una cuenta regresiva comenzando desde 7

#### Código 👨‍💻

```js
/**
* Salida esperada 
* 7
* 6
* 5
* 4
* 3
* 2
* 1
* 0 
*/

(() =>{

    const inicio = 7;
    const countdown$ = interval(700).pipe(
        // Usar los operadores necesarios
        // para realizar la cuenta regresiva
    );
    

    // No tocar esta línea ==================
    countdown$.subscribe( console.log ); // =
    // ======================================


})();
```
