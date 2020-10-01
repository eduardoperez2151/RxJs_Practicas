# Practicas RxJs 📚
## Training 

#### Ejercicio - 3 🏋
Realizar que los dos observables finales, emitan exactamente el mismo valor

**Tips** 🧐: Hot Observable? subjects?

#### Código 👨‍💻

```js
import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

(() =>{
  // == NO TOCAR este bloque ====================
  const reloj$ = interval(1000).pipe(
    take(5),
    map( val => Math.round(Math.random() * 100) )
  );
  // No tocar la creación del observable
  // ============================================  
  // Estos dos observables deben de emitir exactamente los mismos valores
  reloj$.subscribe( val => console.log('obs1', val) );
  reloj$.subscribe( val => console.log('obs2', val) );

})();		
```
