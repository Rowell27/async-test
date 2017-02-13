import { TestBed } from '@angular/core/testing';
import { SampleTestComponent } from './sample-test.component';
import { UserService } from './users.service';

describe('Aync Unit Test', () => {
    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ SampleTestComponent ],
            providers: [ UserService ]
        });
        
    });

    let fixture = TestBed.createComponent( SampleTestComponent );
    let comp = fixture.componentInstance;
    let userService = fixture.debugElement.injector.get( UserService );
    let spy = spyOn( userService, 'getUsers' )
                .and.returnValue(Promise.resolve('user'));

    it('should get the user name', () => {
        fixture.detectChanges();
        expect(spy.calls.any()).toBe('Steve', 'expected name');
    })

});
