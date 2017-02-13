import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    public users: 'Steve';

    getUsers(){
        return new Promise((resolve, reject) => {
            resolve( this.users );
        });
    }
}