import { fromEvent, interval } from "rxjs";
import { map, exhaustMap, take, tap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
/* keydown to know which key was pressed */

const button = document.querySelector('#btn')
const observable = fromEvent(
    button, 'click'
).pipe(
    exhaustMap(()=>{
        return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
           
            take(5),
            tap({
                complete(){
                    console.log('inner observable completed');
                }
            })
        )
        /* ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1') */
    }),
    
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
