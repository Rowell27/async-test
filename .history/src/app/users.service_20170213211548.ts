import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    users = ['Joe', 'Manuel', 'Steve']

    getUsers(){
        return new Promise((resolve, reject) => {
            resolve( this.users );
        });
    }
}