import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routePaths } from '../route-paths';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {

  constructor(
    router: Router,
    activeRoute: ActivatedRoute
  ) {

    router.navigate([routePaths.viewRecipes])
  }

}
