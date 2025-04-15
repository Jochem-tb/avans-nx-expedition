import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpeditionDetailsComponent } from './expedition-details.component';

describe('ExpeditionDetailsComponent', () => {
    let component: ExpeditionDetailsComponent;
    let fixture: ComponentFixture<ExpeditionDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExpeditionDetailsComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ExpeditionDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
