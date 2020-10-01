import {interval, Subject} from 'rxjs';
import {take, map} from 'rxjs/operators';

(() => {
    // == NO TOCAR este bloque ====================
    const reloj$ = interval(1000).pipe(
        take(5),
        map(val => Math.round(Math.random() * 100))
    );

    // No tocar la creación del observable
    // ============================================
    // Estos dos observables deben de emitir exactamente los mismos valores

    const htmlContentDiv = document.getElementById("content");

    const createH1Element = (data: any, number:number) => {
        let htmlH1Element = document.createElement('h1');
        let h1TextContet = document.createTextNode(`Suscripcion ${number}: ${data}`);
        htmlH1Element.appendChild(h1TextContet)
        htmlContentDiv.appendChild(htmlH1Element);
    }

    const subject = new Subject();
    subject.subscribe(data=>createH1Element(data,1));
    subject.subscribe(data=>createH1Element(data,2));

    reloj$.subscribe(subject);

})();
