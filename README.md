# Practicas RxJs 📚
## Training 

#### Ejercicio - 2 🏋
Dado el siguiente código de debe realizar la suma del array

**Notas** 🧐: 
- `isNan()` es una función de JavaScript para determinar si es número.
- Usar `filter<any>(...)` para no tener problemas de tipado.
#### Código 👨‍💻

```js
/**
 * Salida esperada:
 * 32
 */
(() =>{
  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];
  from(datos).pipe(
    //...
  ).subscribe( console.log )
})();
```
