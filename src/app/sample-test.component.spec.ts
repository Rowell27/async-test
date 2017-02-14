import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SampleTestComponent } from './sample-test.component';
import { UserService } from './users.service';

describe('Aync Unit Test', () => {

    let comp: SampleTestComponent;
    let fixture: ComponentFixture<SampleTestComponent>;
    let spy: jasmine.Spy;
    let el: HTMLElement;
    let de: DebugElement;
    let userService: UserService;

    const testUser = 'User';

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ SampleTestComponent ],
            providers: [ UserService ]
        });

        fixture = TestBed.createComponent( SampleTestComponent );
        comp = fixture.componentInstance;
        userService = fixture.debugElement.injector.get( UserService );
        spy = spyOn( userService, 'getUsers' )
                    .and.returnValue(Promise.resolve(testUser));
        
        de = fixture.debugElement.query(By.css('.user'));
        el = de.nativeElement;
    });

    it('should not show user before OnInit', () => {
        expect(el.textContent).toBe('', 'no user to be displayed')
        expect(spy.calls.any()).toBe(false, 'getUser method not called yet');
    });

    it('should show the user name after promise (async)', async(() => {
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(el.textContent).toBe(testUser);
        });
    }));

});
