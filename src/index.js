import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
/*     subscriber.next('Hello world')
    subscriber.error('Errror')
    subscriber.next('test')

    subscriber.complete()
    subscriber.next('test') */
    
})

observable.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () =>{
        console.log('complete called');
    },
    error: (err) =>{
        console.error(err)
    }
})