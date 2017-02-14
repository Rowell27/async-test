import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';

@Component({
    selector: 'sample-page',
    template: '<p>Welcome, <b class="user">{{user}}</b>! </p>'
})

export class SampleTestComponent implements OnInit {
    user: string;

    constructor( private userService: UserService ) { }

    ngOnInit(){
        this.userService.getUsers().then( users => this.user = users[0] );
    }
}