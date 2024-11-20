import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibFideicoComponent } from './lib-fideico.component';

describe('LibFideicoComponent', () => {
  let component: LibFideicoComponent;
  let fixture: ComponentFixture<LibFideicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibFideicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibFideicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
