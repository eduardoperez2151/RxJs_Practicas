# Practicas RxJs 📚
## Training 

#### Ejercicio - 1 🏋
Dado el siguiente código de debe realizar la misma impresión,
pero usando observables.

**Nota** 🧐: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar

#### Código 👨‍💻

```js
/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
(() =>{
  const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];
  const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  
  for( let nombre of nombres ) {
    console.log( capitalizar(nombre) )
  }

})();
```
