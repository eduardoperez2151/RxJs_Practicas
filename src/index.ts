import {from} from "rxjs";
import {filter, reduce} from "rxjs/operators";

(() => {
    const htmlContentDiv = document.getElementById("content");

    const createH1Element = (total: number) => {
        let htmlH1Element = document.createElement('h1');
        let h1TextContet = document.createTextNode(`Total: ${total}`);
        htmlH1Element.appendChild(h1TextContet)
        htmlContentDiv.appendChild(htmlH1Element);
    }

    const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];
    from(datos)
        .pipe(
            filter(item => !isNaN(item)),
            reduce((acc, val) => acc + val))
        .subscribe(createH1Element)
})();
