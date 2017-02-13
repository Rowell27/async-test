import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    public users: 'Steve';

    getUsers(){
        return new Promise<string>((resolve, reject) => {
            resolve( this.users );
        });
    }
}