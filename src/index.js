import { of, from, fromEvent } from "rxjs";
import { map, pluck, filter } from "rxjs/operators";
/* keydown to know which key was pressed */
const observable = fromEvent(
    document, 'keydown'
).pipe(
    //map(event => event.code)
   /*  pluck('code'),
    filter(code => code ==='Space') */
    map((event)=>{
        return event.code ==='Space' ? event.code : null
    })
)

const subscrition = observable.subscribe({
    next(value){
        console.log(value);
    },
    complete(){
        console.log('complete');
    }
}
)
