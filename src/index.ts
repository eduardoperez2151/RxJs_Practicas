import {from} from "rxjs";
import {map} from "rxjs/operators";


(() => {
    const htmlContentDiv = document.getElementById("content");

    const createH1Element = (nombre: string) => {
        let htmlH1Element = document.createElement('h1');
        let h1TextContet = document.createTextNode(nombre);
        htmlH1Element.appendChild(h1TextContet)
        htmlContentDiv.appendChild(htmlH1Element);
    }

    const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];
    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

    from(nombres)
        .pipe(
            map(capitalizar))
        .subscribe(createH1Element)
})();
