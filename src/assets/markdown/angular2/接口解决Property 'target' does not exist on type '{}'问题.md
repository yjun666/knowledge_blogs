#### 接口解决Property 'target' does not exist on type '{}'问题

```
{
            // 接口解决 'Property 'result' does not exist on type 'EventTarget
            interface FileReaderEventTarget extends EventTarget {
                target: string;
                value: any;
            }
            // 接口解决 Property 'result' does not exist on type 'EventTarget
            interface FileReaderEvent extends Event {
                target: FileReaderEventTarget;
                getMessage(): string;
            }

            // typing "hello world"
            let input = Rx.Observable.fromEvent(document.querySelector('input'), 'keypress');

            // Filter out target values less than 3 characters long
            input.filter((event: FileReaderEvent) => event.target.value.length > 2)
                .subscribe(value => console.log(value)); // "hel"

            // Delay the events
            input.delay(200)
                .subscribe(value => console.log(value)); // "h" -200ms-> "e" -200ms-> "l" ...

            // Only let through an event every 200 ms
            input.throttleTime(200)
                .subscribe(value => console.log(value)); // "h" -200ms-> "w"

            // Let through latest event after 200 ms
            input.debounceTime(200)
                .subscribe(value => console.log(value)); // "o" -200ms-> "d"

            // Stop the stream of events after 3 events
            input.take(3)
                .subscribe(value => console.log(value)); // "hel"

            // Passes through events until other observable triggers an event
            let stopStream = Rx.Observable.fromEvent(document.querySelector('button'), 'click');
            input.takeUntil(stopStream)
                .subscribe(value => console.log(value)); // "hello" (click)
        }
```