import { async, ComponentFixture, TestBed } from './node_modules/@angular/core/testing';

import { ViewRecipesComponent } from './view-recipes.component';

describe('ViewRecipesComponent', () => {
  let component: ViewRecipesComponent;
  let fixture: ComponentFixture<ViewRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
