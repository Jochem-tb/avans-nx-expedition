import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpeditionEditComponent } from './expedition-edit.component';

describe('UserEditComponent', () => {
    let component: ExpeditionEditComponent;
    let fixture: ComponentFixture<ExpeditionEditComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExpeditionEditComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ExpeditionEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
