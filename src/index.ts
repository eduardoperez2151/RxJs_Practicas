import {ajax} from "rxjs/ajax";
import {concatMap, map} from "rxjs/operators";
import {zip} from "rxjs";

(() => {

    // No tocar ========================================================
    const SW_API = 'https://swapi.dev/api';
    const getRequest = (url: string) => ajax.getJSON<any>(url);
    // ==================================================================


    const htmlContentPre = document.getElementById("content");


    const characterData$ = getRequest(`${SW_API}/people/2/`);
    const specie$ = characterData$
        .pipe(concatMap(({species}) =>
            getRequest(species[0])));

    const createCharacterInfo = ([characterData, specie]) =>
        ({
            personaje: characterData,
            especie: specie
        });

    zip(characterData$, specie$)
        .pipe(
            map(createCharacterInfo))
        .subscribe(data => htmlContentPre.textContent = JSON.stringify(data, undefined, 4));


})();
