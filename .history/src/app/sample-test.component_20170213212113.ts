import { Component } from '@angular/core';
import { UserService } from './users.service';

@Component({
    selector: 'sample-page',
    template: '<p>Welcome, <b [(ngModel)]="user" >...</b>!</p>'
})

export class SampleTestComponent {
    user: string;

    constructor( private userService: UserService ) {
        this.getUserData();
    }

    getUserData() {
        this.userService.getUsers().then((users) => {
            this.user = users[0];
            console.log("User: " + this.user)
        });
    }

}