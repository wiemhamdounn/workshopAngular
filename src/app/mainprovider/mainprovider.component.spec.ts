import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainproviderComponent } from './mainprovider.component';

describe('MainproviderComponent', () => {
  let component: MainproviderComponent;
  let fixture: ComponentFixture<MainproviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainproviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
