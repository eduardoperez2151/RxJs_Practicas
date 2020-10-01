import {of, pipe} from "rxjs";
import {map, takeUntil, tap} from "rxjs/operators";


(() => {
    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

    const nombres$ = of('batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa');
    nombres$.pipe(
        map(capitalizar))
        .subscribe(console.log)
})();
