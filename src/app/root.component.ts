import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-root',
    template: '<h1>MY FIRST OWN COMPONENT</h1>'
})
export class RootComponent implements OnInit {
    ngOnInit(): void {

    }

    constructor() {
        console.log('Hello from Root Component');
    }
}
