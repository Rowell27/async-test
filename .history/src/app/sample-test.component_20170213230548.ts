import { Component } from '@angular/core';
import { UserService } from './users.service';

@Component({
    selector: 'sample-page',
    template: '<p>Welcome, {{user}}!</p>'
})

export class SampleTestComponent {
    user: string;

    constructor( private userService: UserService ) {
        this.getUserData();
    }

    getUserData() {
        this.userService.getUsers().then((users) => {
            this.user = users;
            console.log("User: " + this.user)
        });
    }

}