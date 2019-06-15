import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecipeMoreComponent } from './view-recipe-more.component';

describe('ViewRecipeMoreComponent', () => {
  let component: ViewRecipeMoreComponent;
  let fixture: ComponentFixture<ViewRecipeMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecipeMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecipeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
