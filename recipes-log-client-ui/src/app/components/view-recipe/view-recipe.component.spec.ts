

import { ViewRecipeComponent } from './view-recipe.component';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

describe('ViewRecipeComponent', () => {
  let component: ViewRecipeComponent;
  let fixture: ComponentFixture<ViewRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
