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

import {interval} from "rxjs";
import {mapTo, scan, takeWhile} from "rxjs/operators";

(() => {

    const h1 = document.getElementById("content")

    const inicio = 7;
    const countdown$ = interval(700)
        .pipe(
            mapTo(-1),
            scan((accumulator, currentValue) => accumulator + currentValue, inicio + 1),
            takeWhile(number => number >= 0)
        );


    // No tocar esta línea ==================
    countdown$.subscribe(data => h1.innerHTML = data);
    // ======================================


})();
